"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useCartStore } from "@/stores/useCartStore";
import { orderService } from "@/lib/api/services";
import {
  cartToCheckoutItems,
  expectedShopCheckoutTotalCents,
} from "@/lib/shop-pricing";

const inputClass =
  "w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3491E8] focus:border-transparent";

const stripePk = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? "";

function PayWithStripe({
  clientSecret,
  onPaid,
}: {
  clientSecret: string;
  onPaid: () => void;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);
    setErr(null);
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });
    if (error) {
      setErr(error.message ?? "Payment could not be completed.");
      setLoading(false);
      return;
    }
    if (paymentIntent?.status === "succeeded") {
      try {
        await orderService.trackCheckout(clientSecret);
        onPaid();
      } catch {
        setErr(
          "Payment succeeded but we could not finalize your order. Please contact support with your receipt."
        );
      }
    } else {
      setErr("Payment was not completed. Try again or use another card.");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handlePay} className="space-y-4 mt-4">
      <PaymentElement />
      {err && (
        <p className="text-sm text-red-600" role="alert">
          {err}
        </p>
      )}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full inline-flex items-center justify-center gap-2 bg-[#3491E8] hover:bg-[#2b7ed0] disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold py-3.5 rounded-xl transition-colors cursor-pointer"
      >
        {loading ? "Processing…" : "Pay securely"}
      </button>
    </form>
  );
}

export default function CheckoutContent() {
  const cartItems = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clearCart);
  const router = useRouter();

  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [shipping, setShipping] = useState({
    addressLine1: "",
    addressLine2: "",
    city: "",
    stateProvince: "",
    zip: "",
  });

  const [country, setCountry] = useState("US");

  const [isLoading, setIsLoading] = useState(false);
  const [prepareError, setPrepareError] = useState<string | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const stripePromise = useMemo(
    () => (stripePk ? loadStripe(stripePk) : null),
    []
  );

  const shopItems = cartItems.filter((i) => i.type === "shop");
  const subtotal = shopItems.reduce(
    (s, i) => s + i.price * i.quantity,
    0
  );
  const shippingCost = 6;
  const total = expectedShopCheckoutTotalCents(shopItems);

  const handleCustomerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomer((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShipping((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const prepareIntent = async (e: React.FormEvent) => {
    e.preventDefault();
    setPrepareError(null);
    if (shopItems.length === 0) {
      setPrepareError("Your cart has no shop items to ship.");
      return;
    }
    if (!stripePk || !stripePromise) {
      setPrepareError(
        "Payments are not configured. Add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY to your environment."
      );
      return;
    }
    setIsLoading(true);
    try {
      const price = Math.round(total);
      const payload = {
        type: "shop",
        price,
        items: cartToCheckoutItems(shopItems),
        email: customer.email,
        phone: customer.phone,
        address: shipping.addressLine1,
        apartment: shipping.addressLine2,
        city: shipping.city,
        state: shipping.stateProvince,
        zipcode: shipping.zip,
        country,
        name: `${customer.firstName} ${customer.lastName}`.trim(),
      };
      const data = await orderService.checkout(payload);
      const secret = data?.clientSecret as string | undefined;
      if (!secret) {
        setPrepareError(
          typeof data === "string"
            ? data
            : "Could not start checkout. Try again later."
        );
        return;
      }
      setClientSecret(secret);
    } catch (err: unknown) {
      const msg =
        err && typeof err === "object" && "message" in err
          ? String((err as Error).message)
          : "Could not reach the server. Try again.";
      setPrepareError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  const afterPaid = () => {
    clearCart();
    router.push("/order-confirmation");
  };

  return (
    <div className="w-full max-w-[1100px] flex flex-col lg:flex-row gap-4 md:gap-5 lg:gap-6 items-start">
      <div className="w-full space-y-4 md:space-y-5">
        <div className="bg-white rounded-2xl shadow-md p-5 sm:p-6 md:p-8">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-5">
            Customer Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <input
              type="text"
              name="firstName"
              value={customer.firstName}
              onChange={handleCustomerChange}
              placeholder="First Name*"
              required
              className={inputClass}
            />
            <input
              type="text"
              name="lastName"
              value={customer.lastName}
              onChange={handleCustomerChange}
              placeholder="Last Name*"
              required
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              value={customer.email}
              onChange={handleCustomerChange}
              placeholder="Email*"
              required
              className={inputClass}
            />
            <input
              type="tel"
              name="phone"
              value={customer.phone}
              onChange={handleCustomerChange}
              placeholder="Phone Number*"
              required
              className={inputClass}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-5 sm:p-6 md:p-8">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-5">
            Shipping Address
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <input
              type="text"
              name="addressLine1"
              value={shipping.addressLine1}
              onChange={handleShippingChange}
              placeholder="Address Line 1*"
              required
              className={inputClass}
            />
            <input
              type="text"
              name="addressLine2"
              value={shipping.addressLine2}
              onChange={handleShippingChange}
              placeholder="Address Line 2"
              className={inputClass}
            />
            <input
              type="text"
              name="city"
              value={shipping.city}
              onChange={handleShippingChange}
              placeholder="City*"
              required
              className={inputClass}
            />
            <input
              type="text"
              name="stateProvince"
              value={shipping.stateProvince}
              onChange={handleShippingChange}
              placeholder="State*"
              required
              className={inputClass}
            />
            <input
              type="text"
              name="zip"
              value={shipping.zip}
              onChange={handleShippingChange}
              placeholder="ZIP code*"
              required
              autoComplete="postal-code"
              className={inputClass}
            />
            <input
              type="text"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Country*"
              required
              className={inputClass}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-5 sm:p-6 md:p-8">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
            Payment
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Card payments are processed securely by Stripe. We do not store
            full card numbers on our servers.
          </p>
          {prepareError && (
            <p className="text-sm text-red-600 mb-3" role="alert">
              {prepareError}
            </p>
          )}
          {!clientSecret ? (
            <form onSubmit={prepareIntent}>
              <button
                type="submit"
                disabled={isLoading || shopItems.length === 0}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#3491E8] hover:bg-[#2b7ed0] disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold py-3.5 rounded-xl transition-colors cursor-pointer"
              >
                {isLoading ? "Preparing…" : "Continue to secure payment"}
              </button>
            </form>
          ) : stripePromise ? (
            <Elements
              stripe={stripePromise}
              options={{
                clientSecret,
                appearance: { theme: "stripe" },
              }}
            >
              <PayWithStripe
                clientSecret={clientSecret}
                onPaid={afterPaid}
              />
            </Elements>
          ) : null}
        </div>
      </div>

      <div
        className="w-full lg:w-[380px] bg-white rounded-2xl p-5 sm:p-6 shrink-0"
        style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 60px 40px -7px" }}
      >
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-5">
          Order Summary
        </h2>
        <h3 className="text-sm font-bold text-gray-900 mb-3">Cart Items</h3>
        <div className="space-y-2 mb-5">
          {shopItems.length === 0 ? (
            <p className="text-sm text-gray-500">
              No shop items in cart.{" "}
              <Link href="/shop" className="text-[#3491E8] hover:underline">
                Browse the shop
              </Link>
            </p>
          ) : (
            shopItems.map((item, index) => (
              <div
                key={item.id ?? `summary-${index}`}
                className="flex items-center justify-between text-sm"
              >
                <span className="text-gray-700">
                  {item.name} ×{item.quantity}
                </span>
                <span className="font-medium text-gray-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))
          )}
        </div>
        <div className="space-y-2 mb-3">
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-gray-900">Subtotal</span>
            <span className="font-medium text-gray-900">
              ${subtotal.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Shipping (flat)</span>
            <span className="font-medium text-gray-900">
              ${shippingCost.toFixed(2)}
            </span>
          </div>
        </div>
        <div className="border-t border-gray-200 my-4" />
        <div className="flex items-center justify-between mb-5">
          <span className="text-base font-bold text-gray-900">Total:</span>
          <span className="text-2xl font-bold text-[#3491E8]">
            ${total.toFixed(2)}
          </span>
        </div>
        <Link
          href="/cart"
          className="w-full inline-flex items-center justify-center gap-2 border border-gray-300 bg-white hover:bg-gray-50 text-gray-900 text-sm font-medium py-3 rounded-xl transition-colors mb-4"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to cart
        </Link>
        <p className="text-xs text-gray-400 leading-relaxed">
          By placing your order, you agree to our Terms of Service and Privacy
          Policy.
        </p>
      </div>
    </div>
  );
}
