"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const inputClass =
  "w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3491E8] focus:border-transparent";

const labelClass = "block text-sm text-gray-600 mb-1.5";

export default function VotePaymentContent() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState<"card" | "bank">("card");
  const [isLoading, setIsLoading] = useState(false);

  const [payment, setPayment] = useState({
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    nameOnCard: "",
    country: "",
  });

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // TODO: integrate with payment API
      console.log("Processing vote payment:", { paymentMethod, ...payment });
      router.push("/events/vote-success");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[1100px] flex flex-col lg:flex-row gap-4 md:gap-5 lg:gap-6 items-start">
      {/* ── Left card — Order Summary ── */}
      <div
        className="w-full lg:w-[320px] bg-white rounded-2xl p-5 sm:p-6 shrink-0"
        style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 60px 40px -7px" }}
      >
        <h2 className="text-lg font-bold text-gray-900 mb-5">Order Summary</h2>

        <div className="space-y-3 text-sm mb-5">
          <div className="flex justify-between gap-4">
            <span className="text-gray-500">Vote:</span>
            <span className="text-gray-700 text-right font-medium">
              Global Kids Festival: Around the World in a Day
            </span>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-gray-500">Total cost:</span>
            <span className="text-gray-700 font-medium">$5</span>
          </div>
        </div>

        <hr className="border-gray-200 mb-4" />

        <div className="flex justify-between items-center">
          <span className="text-base font-bold text-gray-900">Total:</span>
          <span className="text-xl font-bold text-[#3491E8]">$120</span>
        </div>
      </div>

      {/* ── Right card — Payment Method ── */}
      <div className="w-full bg-white rounded-2xl shadow-md p-5 sm:p-6 md:p-8">
        <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
          Payment Method
        </h2>
        <p className="text-sm text-gray-500 mb-5 sm:mb-6">
          Select your preferred payment method
        </p>

        <form onSubmit={handleSubmit}>
          {/* Radio options */}
          <div className="space-y-3 mb-6">
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
                <div>
                  <label className={labelClass}>Card number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={payment.cardNumber}
                    onChange={handlePaymentChange}
                    placeholder="23455555555"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Expiry date</label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={payment.expiryDate}
                    onChange={handlePaymentChange}
                    placeholder="23/25"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>CVC</label>
                  <input
                    type="text"
                    name="cvc"
                    value={payment.cvc}
                    onChange={handlePaymentChange}
                    placeholder="235"
                    required
                    maxLength={4}
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className={labelClass}>Name on card</label>
                  <input
                    type="text"
                    name="nameOnCard"
                    value={payment.nameOnCard}
                    onChange={handlePaymentChange}
                    placeholder="Enter full name on card here"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Country</label>
                  <input
                    type="text"
                    name="country"
                    value={payment.country}
                    onChange={handlePaymentChange}
                    placeholder="Enter full name on card here"
                    required
                    className={inputClass}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Complete Payment button */}
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#3491E8] hover:bg-[#2b7ed0] disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold px-8 py-3.5 rounded-xl transition-colors cursor-pointer"
            >
              {isLoading ? "Processing..." : "Complete Payment"}
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
          </div>
        </form>
      </div>
    </div>
  );
}
