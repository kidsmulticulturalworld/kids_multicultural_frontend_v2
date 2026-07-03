"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { castingService, orderService } from "@/lib/api/services";
import { dataURLtoFile } from "@/lib/dataURLtoFile";
import { useVoteCheckoutStore } from "@/stores/useVoteCheckoutStore";
import SignaturePad, { type SignaturePadHandle } from "@/components/ui/SignaturePad";

const inputClass =
  "w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3491E8] focus:border-transparent";

const labelClass = "block text-sm text-gray-600 mb-1.5";

import {
  logPaymentError,
  paymentFailedMessage,
  paymentsUnavailableMessage,
  stripePublishableKey,
} from "@/lib/stripe-client";

type VoterForm = {
  full_name: string;
  email: string;
  address: string;
  apartment: string;
  city: string;
  state: string;
  zip: string;
  termsAgreed: boolean;
};

function VoteStripeForm({
  clientSecret,
  checkout,
  voter,
  signatureRef,
  onPaid,
}: {
  clientSecret: string;
  checkout: NonNullable<ReturnType<typeof useVoteCheckoutStore.getState>["checkout"]>;
  voter: VoterForm;
  signatureRef: React.RefObject<SignaturePadHandle | null>;
  onPaid: () => void;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const savedReceipt = useVoteCheckoutStore((s) => s.receipt);
  const setReceipt = useVoteCheckoutStore((s) => s.setReceipt);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [paymentReady, setPaymentReady] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements || !paymentReady) return;

    if (!voter.termsAgreed) {
      setErr("Please accept the terms of service.");
      return;
    }
    if (!signatureRef.current || signatureRef.current.isEmpty()) {
      setErr("Please provide your consent signature.");
      return;
    }

    setLoading(true);
    setErr(null);

    // Step 1 — save consent (skip if already saved to avoid duplicate rows on retry)
    let receipt = savedReceipt;
    if (!receipt) {
      try {
        const signatureFile = dataURLtoFile(
          signatureRef.current.toDataURL(),
          "consent-signature.png"
        );
        const form = new FormData();
        form.append("full_name", voter.full_name);
        form.append("termsAgreed", String(voter.termsAgreed));
        form.append("address", voter.address);
        form.append("apartment", voter.apartment);
        form.append("city", voter.city);
        form.append("state", voter.state);
        form.append("zip", voter.zip);
        form.append("email", voter.email);
        form.append("signature", signatureFile);
        form.append("candidate", checkout.contestant_name);
        form.append("price", String(checkout.total_price));

        receipt = (await castingService.saveConsentData(form)) as Record<
          string,
          unknown
        >;
        setReceipt(receipt);
      } catch (consentErr) {
        logPaymentError("saveConsentData failed", consentErr);
        setErr("Could not save your consent form. Please try again.");
        setLoading(false);
        return;
      }
    }

    // Step 2 — confirm the Stripe payment
    let paymentIntent;
    try {
      const result = await stripe.confirmPayment({
        elements,
        redirect: "if_required",
      });
      if (result.error) {
        logPaymentError("confirmPayment returned error", result.error);
        // Stripe marks card/validation errors as safe to show the user.
        const showable =
          result.error.type === "card_error" ||
          result.error.type === "validation_error";
        setErr(
          showable && result.error.message
            ? result.error.message
            : paymentFailedMessage
        );
        setLoading(false);
        return;
      }
      paymentIntent = result.paymentIntent;
    } catch (payErr) {
      logPaymentError("confirmPayment threw", payErr);
      setErr(paymentFailedMessage);
      setLoading(false);
      return;
    }

    if (paymentIntent?.status !== "succeeded") {
      setErr("Payment was not completed. Try again or use another card.");
      setLoading(false);
      return;
    }

    // Step 3 — record the vote on the backend
    try {
      await orderService.trackCheckout(clientSecret, {
        receipt: receipt ?? undefined,
        transaction_id: paymentIntent.id,
        created: paymentIntent.created,
      });
      onPaid();
    } catch (trackErr) {
      logPaymentError("trackCheckout failed", trackErr);
      setErr(
        "Payment succeeded but we could not record your vote. Please contact support with your receipt."
      );
    }

    setLoading(false);
  };

  if (loadFailed) {
    return (
      <p className="text-sm text-red-600 mt-4" role="alert">
        {paymentsUnavailableMessage}
      </p>
    );
  }

  return (
    <form onSubmit={handlePay} className="space-y-4 mt-4">
      <PaymentElement
        onReady={() => setPaymentReady(true)}
        onLoadError={(event) => {
          logPaymentError("PaymentElement load error", event?.error ?? event);
          setLoadFailed(true);
        }}
      />
      {err && (
        <p className="text-sm text-red-600" role="alert">
          {err}
        </p>
      )}
      <button
        type="submit"
        disabled={!stripe || loading || !paymentReady}
        className="w-full inline-flex items-center justify-center gap-2 bg-[#3491E8] hover:bg-[#2b7ed0] disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold py-3.5 rounded-xl transition-colors cursor-pointer"
      >
        {loading ? "Processing…" : "Pay now"}
      </button>
    </form>
  );
}

export default function VotePaymentContent() {
  const router = useRouter();
  const checkout = useVoteCheckoutStore((s) => s.checkout);
  const signatureRef = useRef<SignaturePadHandle>(null);

  const [voter, setVoter] = useState<VoterForm>({
    full_name: "",
    email: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    termsAgreed: false,
  });

  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [prepareError, setPrepareError] = useState<string | null>(null);
  const [loadingIntent, setLoadingIntent] = useState(false);
  const intentRequested = useRef(false);

  const stripePromise = useMemo(
    () => (stripePublishableKey ? loadStripe(stripePublishableKey) : null),
    []
  );

  useEffect(() => {
    if (!checkout) {
      router.replace("/events?tab=ongoing");
    }
  }, [checkout, router]);

  useEffect(() => {
    if (!checkout || intentRequested.current) return;
    if (!stripePublishableKey) {
      setPrepareError(paymentsUnavailableMessage);
      return;
    }

    intentRequested.current = true;
    (async () => {
      setLoadingIntent(true);
      setPrepareError(null);
      try {
        const data = await orderService.checkout({
          type: "vote",
          value: checkout.value,
          id_: checkout.id_,
          contestant_name: checkout.contestant_name,
        });
        const secret = data?.clientSecret as string | undefined;
        if (!secret) {
          setPrepareError(
            typeof data === "string"
              ? data
              : "Could not start vote checkout. Try again later."
          );
          intentRequested.current = false;
          return;
        }
        setClientSecret(secret);
      } catch {
        setPrepareError("Could not reach the server. Try again.");
        intentRequested.current = false;
      } finally {
        setLoadingIntent(false);
      }
    })();
  }, [checkout]);

  if (!checkout) {
    return (
      <p className="text-sm text-gray-500 text-center py-10">
        Redirecting…
      </p>
    );
  }

  const handleVoterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setVoter((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const afterPaid = () => {
    router.push("/events/vote-success");
  };

  const voterFormComplete =
    voter.full_name.trim() &&
    voter.email.trim() &&
    voter.address.trim() &&
    voter.apartment.trim() &&
    voter.city.trim() &&
    voter.state.trim() &&
    voter.zip.trim() &&
    voter.termsAgreed;

  return (
    <div className="w-full max-w-[1100px] flex flex-col lg:flex-row gap-4 md:gap-5 lg:gap-6 items-start">
      {/* Order summary */}
      <div
        className="w-full lg:w-[320px] bg-white rounded-2xl p-5 sm:p-6 shrink-0"
        style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 60px 40px -7px" }}
      >
        <h2 className="text-lg font-bold text-gray-900 mb-5">Order Summary</h2>
        <div className="space-y-3 text-sm mb-5">
          <div className="flex justify-between gap-4">
            <span className="text-gray-500">Contestant:</span>
            <span className="text-gray-700 text-right font-medium">
              {checkout.contestant_name}
            </span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-gray-500">Votes:</span>
            <span className="text-gray-700 font-medium">{checkout.value}</span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-gray-500">Price per vote:</span>
            <span className="text-gray-700 font-medium">
              ${checkout.price_per_vote}
            </span>
          </div>
        </div>
        <hr className="border-gray-200 mb-4" />
        <div className="flex justify-between items-center">
          <span className="text-base font-bold text-gray-900">Total:</span>
          <span className="text-xl font-bold text-[#3491E8]">
            ${checkout.total_price}
          </span>
        </div>
      </div>

      {/* Payment + voter details */}
      <div className="w-full bg-white rounded-2xl shadow-md p-5 sm:p-6 md:p-8">
        <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
          Voter details &amp; payment
        </h2>
        <p className="text-sm text-gray-500 mb-5 sm:mb-6">
          Complete your details, sign the consent form, then pay securely with
          Stripe.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-5">
          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor="full_name">
              Full name
            </label>
            <input
              id="full_name"
              name="full_name"
              value={voter.full_name}
              onChange={handleVoterChange}
              required
              className={inputClass}
              placeholder="Enter your full name"
            />
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={voter.email}
              onChange={handleVoterChange}
              required
              className={inputClass}
              placeholder="you@example.com"
            />
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass} htmlFor="address">
              Address
            </label>
            <input
              id="address"
              name="address"
              value={voter.address}
              onChange={handleVoterChange}
              required
              className={inputClass}
              placeholder="Street address"
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="apartment">
              Apt/Unit
            </label>
            <input
              id="apartment"
              name="apartment"
              value={voter.apartment}
              onChange={handleVoterChange}
              required
              className={inputClass}
              placeholder="Apartment"
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="city">
              City
            </label>
            <input
              id="city"
              name="city"
              value={voter.city}
              onChange={handleVoterChange}
              required
              className={inputClass}
              placeholder="City"
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="state">
              State
            </label>
            <input
              id="state"
              name="state"
              value={voter.state}
              onChange={handleVoterChange}
              required
              className={inputClass}
              placeholder="State"
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="zip">
              ZIP
            </label>
            <input
              id="zip"
              name="zip"
              value={voter.zip}
              onChange={handleVoterChange}
              required
              className={inputClass}
              placeholder="ZIP code"
            />
          </div>
        </div>

        <label className="flex items-start gap-2 text-sm text-gray-700 mb-4 cursor-pointer">
          <input
            type="checkbox"
            name="termsAgreed"
            checked={voter.termsAgreed}
            onChange={handleVoterChange}
            className="mt-0.5"
            required
          />
          <span>
            By ticking this box you accept our{" "}
            <Link href="/terms-of-service" className="text-[#3491E8] underline">
              terms of service
            </Link>
          </span>
        </label>

        {voter.termsAgreed && (
          <div className="mb-5">
            <label className={labelClass}>Consent signature</label>
            <SignaturePad ref={signatureRef} />
          </div>
        )}

        {prepareError && (
          <p className="text-sm text-red-600 mb-3" role="alert">
            {prepareError}
          </p>
        )}

        {loadingIntent && (
          <p className="text-sm text-gray-500 mb-3">Preparing secure payment…</p>
        )}

        {clientSecret && stripePromise && voterFormComplete ? (
          <Elements
            stripe={stripePromise}
            options={{
              clientSecret,
              appearance: { theme: "stripe" },
            }}
          >
            <VoteStripeForm
              clientSecret={clientSecret}
              checkout={checkout}
              voter={voter}
              signatureRef={signatureRef}
              onPaid={afterPaid}
            />
          </Elements>
        ) : (
          <p className="text-sm text-gray-500">
            Fill in all voter details and accept the terms to continue to
            payment.
          </p>
        )}
      </div>
    </div>
  );
}
