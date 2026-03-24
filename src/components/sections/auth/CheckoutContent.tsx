"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/stores/useCartStore";

const inputClass =
  "w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3491E8] focus:border-transparent";

const labelClass = "block text-sm text-gray-600 mb-1.5";

export default function CheckoutContent() {
  const cartItems = useCartStore((s) => s.items);
  const totalPrice = useCartStore((s) => s.totalPrice);
  const router = useRouter();

  const [paymentMethod, setPaymentMethod] = useState<"card" | "bank">("card");
  const [promoCode, setPromoCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
  });

  const [payment, setPayment] = useState({
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    nameOnCard: "",
    country: "",
  });

  const handleCustomerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomer((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShipping((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const subtotal = totalPrice();
  const shippingCost = 1;
  const taxes = 2;
  const total = subtotal + shippingCost + taxes;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // TODO: integrate with payment API
      console.log("Placing order:", { customer, shipping, payment, paymentMethod, cartItems });
      router.push("/create-account?from=shop");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[1100px] flex flex-col lg:flex-row gap-4 md:gap-5 lg:gap-6 items-start"
    >
      {/* ══════ Left column — Form cards ══════ */}
      <div className="w-full space-y-4 md:space-y-5">
        {/* ── Card 1: Customer Information ── */}
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

        {/* ── Card 2: Shipping Address ── */}
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
              placeholder="Address Line 2*"
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
              placeholder="State/Province*"
              required
              className={inputClass}
            />
          </div>
        </div>

        {/* ── Card 3: Payment Method ── */}
        <div className="bg-white rounded-2xl shadow-md p-5 sm:p-6 md:p-8">
          <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
            Payment Method
          </h2>
          <p className="text-sm text-gray-500 mb-5">
            Select your preferred payment method
          </p>

          {/* Radio options */}
          <div className="space-y-3 mb-5">
            <label
              className={`flex items-center gap-3 border rounded-xl px-4 py-3.5 cursor-pointer transition-colors ${
                paymentMethod === "card"
                  ? "border-[#3491E8]"
                  : "border-gray-200"
              }`}
            >
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
                className="w-5 h-5 text-[#3491E8] accent-[#3491E8] cursor-pointer"
              />
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                />
              </svg>
              <span className="text-sm font-medium text-gray-900">
                Credit/Debit card
              </span>
            </label>

            <label
              className={`flex items-center gap-3 border rounded-xl px-4 py-3.5 cursor-pointer transition-colors ${
                paymentMethod === "bank"
                  ? "border-[#3491E8]"
                  : "border-gray-200"
              }`}
            >
              <input
                type="radio"
                name="paymentMethod"
                value="bank"
                checked={paymentMethod === "bank"}
                onChange={() => setPaymentMethod("bank")}
                className="w-5 h-5 text-[#3491E8] accent-[#3491E8] cursor-pointer"
              />
              <span className="text-sm font-medium text-gray-900">
                Bank Transfer
              </span>
            </label>
          </div>

          {/* Card fields */}
          {paymentMethod === "card" && (
            <div className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <input
                  type="text"
                  name="cardNumber"
                  value={payment.cardNumber}
                  onChange={handlePaymentChange}
                  placeholder="Card number"
                  required
                  className={inputClass}
                />
                <input
                  type="text"
                  name="expiryDate"
                  value={payment.expiryDate}
                  onChange={handlePaymentChange}
                  placeholder="Expiry date"
                  required
                  className={inputClass}
                />
                <input
                  type="text"
                  name="cvc"
                  value={payment.cvc}
                  onChange={handlePaymentChange}
                  placeholder="CVC"
                  required
                  maxLength={4}
                  className={inputClass}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <input
                  type="text"
                  name="nameOnCard"
                  value={payment.nameOnCard}
                  onChange={handlePaymentChange}
                  placeholder="Name on card*"
                  required
                  className={inputClass}
                />
                <input
                  type="text"
                  name="country"
                  value={payment.country}
                  onChange={handlePaymentChange}
                  placeholder="Country*"
                  required
                  className={inputClass}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ══════ Right column — Order Summary ══════ */}
      <div
        className="w-full lg:w-[380px] bg-white rounded-2xl p-5 sm:p-6 shrink-0"
        style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 60px 40px -7px" }}
      >
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-5">
          Order Summary
        </h2>

        {/* Cart Items */}
        <h3 className="text-sm font-bold text-gray-900 mb-3">Cart Items</h3>
        <div className="space-y-2 mb-5">
          {cartItems.map((item, index) => (
            <div
              key={item.id ?? `summary-${index}`}
              className="flex items-center justify-between text-sm"
            >
              <span className="text-gray-700">
                {item.name} x{item.quantity}
              </span>
              <span className="font-medium text-gray-900">
                ${item.price * item.quantity}
              </span>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="space-y-2 mb-3">
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-gray-900">Subtotal</span>
            <span className="font-medium text-gray-900">${subtotal}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Shipping</span>
            <span className="font-medium text-gray-900">${shippingCost}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Taxes</span>
            <span className="font-medium text-gray-900">${taxes}</span>
          </div>
        </div>

        <div className="border-t border-gray-200 my-4" />

        {/* Total */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-base font-bold text-gray-900">Total:</span>
          <span className="text-2xl font-bold text-[#3491E8]">${total}</span>
        </div>

        {/* Promo code */}
        <div className="mb-5">
          <p className="text-sm text-gray-500 mb-2">Promo code</p>
          <div className="relative">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Enter promo code"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 pr-16 focus:outline-none focus:ring-2 focus:ring-[#3491E8] focus:border-transparent"
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-[#3491E8] text-sm font-medium hover:underline cursor-pointer"
            >
              Apply
            </button>
          </div>
        </div>

        {/* Shipping Address display */}
        {(shipping.addressLine1 || shipping.city) && (
          <div className="mb-4">
            <h3 className="text-sm font-bold text-gray-900 mb-1.5">
              Shipping Address
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {[shipping.addressLine1, shipping.addressLine2]
                .filter(Boolean)
                .join(", ")}
              {shipping.city && (
                <>
                  <br />
                  {shipping.city}
                  {shipping.stateProvince && `, ${shipping.stateProvince}`}
                </>
              )}
              {payment.country && (
                <>
                  <br />
                  {payment.country}
                </>
              )}
            </p>
          </div>
        )}

        {/* Contact Information display */}
        {(customer.firstName || customer.email) && (
          <div className="mb-4">
            <h3 className="text-sm font-bold text-gray-900 mb-1.5">
              Contact Information
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {[customer.firstName, customer.lastName]
                .filter(Boolean)
                .join(" ")}
              {customer.email && (
                <>
                  <br />
                  {customer.email}
                </>
              )}
            </p>
          </div>
        )}

        {/* Estimated Time of Arrival */}
        <div className="mb-5">
          <h3 className="text-sm font-bold text-gray-900 mb-1">
            Estimated Time of Arrival
          </h3>
          <p className="text-sm text-gray-600">1 - 2 days</p>
        </div>

        {/* Place Order button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full inline-flex items-center justify-center gap-2 bg-[#3491E8] hover:bg-[#2b7ed0] disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold py-3.5 rounded-xl transition-colors cursor-pointer mb-3"
        >
          {isLoading ? "Processing..." : "Place Order"}
          {!isLoading && (
            <Image
              src="/dashboard/icons/arrow.svg"
              alt=""
              width={20}
              height={20}
              className="w-5 h-5"
              aria-hidden="true"
            />
          )}
        </button>

        {/* Back to cart */}
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

        {/* Terms */}
        <p className="text-xs text-gray-400 leading-relaxed">
          By placing your order, you agree to our Terms of Service and Privacy
          Policy
        </p>
      </div>
    </form>
  );
}
