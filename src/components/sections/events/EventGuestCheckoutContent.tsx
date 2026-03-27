"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const inputClass =
  "w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3491E8] focus:border-transparent";

const labelClass = "block text-sm text-gray-600 mb-1.5";

export default function EventGuestCheckoutContent() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState<"card" | "bank">("card");
  const [isLoading, setIsLoading] = useState(false);
  const [showRefundPolicy, setShowRefundPolicy] = useState(true);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const [customer, setCustomer] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const [child, setChild] = useState({
    fullName: "",
    age: "",
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

  const handleChildChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChild((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // TODO: integrate with payment API
      console.log("Placing guest order:", { customer, child, payment, paymentMethod });
      router.push("/events/payment-success");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[1100px] flex flex-col lg:flex-row gap-4 md:gap-5 lg:gap-6 items-start"
    >
      {/* ══════ Left column — Checkout form (single card) ══════ */}
      <div
        className="w-full bg-white rounded-2xl p-5 sm:p-6 md:p-8 order-2 lg:order-1"
        style={{ border: "1px solid #77777733" }}
      >
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
          Checkout
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Complete your order for the Global Kids Festival
        </p>

        {/* ── Contact Information ── */}
        <div className="space-y-3 sm:space-y-4 mb-6">
          <div>
            <label className={labelClass}>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={customer.fullName}
              onChange={handleCustomerChange}
              placeholder="Enter your full name"
              required
              className={inputClass}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className={labelClass}>Email</label>
              <input
                type="email"
                name="email"
                value={customer.email}
                onChange={handleCustomerChange}
                placeholder="Enter your email here"
                required
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Phone number</label>
              <input
                type="tel"
                name="phone"
                value={customer.phone}
                onChange={handleCustomerChange}
                placeholder="+221"
                required
                className={inputClass}
              />
            </div>
          </div>
        </div>

        {/* ── Child Information (Optional) ── */}
        <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-3">
          Child Information (Optional)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
          <div>
            <label className={labelClass}>Child&apos;s Full Name</label>
            <input
              type="text"
              name="fullName"
              value={child.fullName}
              onChange={handleChildChange}
              placeholder="Enter your full name"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Child&apos;s Age</label>
            <input
              type="text"
              name="age"
              value={child.age}
              onChange={handleChildChange}
              placeholder="Enter your full name"
              className={inputClass}
            />
          </div>
        </div>

        {/* ── Payment Method ── */}
        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
          Payment Method
        </h3>
        <p className="text-sm text-gray-500 mb-5">
          Select your preferred payment method
        </p>

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
          <div className="space-y-3 sm:space-y-4 mb-6">
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
                  placeholder="Jonathan Nate"
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
                  placeholder="United Kingdom"
                  required
                  className={inputClass}
                />
              </div>
            </div>
          </div>
        )}

        {/* ── Refund Policy ── */}
        <div className="mb-6">
          <button
            type="button"
            onClick={() => setShowRefundPolicy(!showRefundPolicy)}
            className="flex items-center justify-between w-full text-[#3491E8] text-sm font-medium cursor-pointer mb-2"
          >
            Refund Policy?
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className={`transition-transform ${showRefundPolicy ? "rotate-180" : ""}`}
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {showRefundPolicy && (
            <div
              className="rounded-lg p-4 text-sm text-gray-700 leading-relaxed"
              style={{ background: "#3491E81A" }}
            >
              Tickets are refundable up to 7 days before the event. Within 7 days of the event, tickets are non-refundable but can be transferred to another person. In case of event cancellation by the organizer, full refunds will be issued automatically.
            </div>
          )}
        </div>

        {/* ── Terms checkbox ── */}
        <label className="flex items-start gap-2.5 cursor-pointer mb-6">
          <input
            type="checkbox"
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
            className="mt-0.5 w-4 h-4 rounded accent-[#3491E8] cursor-pointer"
          />
          <span className="text-sm text-gray-600">
            I agree to the terms and conditions and the privacy policy
          </span>
        </label>

        {/* ── Place Order button ── */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isLoading || !agreedToTerms}
            className="inline-flex items-center justify-center gap-2 bg-[#3491E8] hover:bg-[#2b7ed0] disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold px-10 py-3.5 rounded-xl transition-colors cursor-pointer"
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
        </div>
      </div>

      {/* ══════ Right column — Order Summary ══════ */}
      <div
        className="w-full lg:w-[380px] bg-white rounded-2xl p-5 sm:p-6 shrink-0 order-1 lg:order-2"
        style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 60px 40px -7px" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            Order Summary
          </h2>
          <Link
            href="/events/event-1"
            className="text-[#3491E8] text-sm font-medium hover:underline"
          >
            Edit tickets
          </Link>
        </div>

        {/* Event details */}
        <h3 className="text-sm font-bold text-gray-900 mb-1">
          Global Kids Festival: Around the World in a Day
        </h3>
        <p className="text-sm text-gray-500 mb-1">Saturday, June 15, 2025</p>
        <p className="text-sm text-gray-500 mb-4">
          Cultural Heritage Center, 123 Main Street
        </p>

        <div className="border-t border-gray-200 my-4" />

        {/* Tickets */}
        <h3 className="text-sm font-bold text-gray-900 mb-3">Tickets</h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-700">Family Pack x1</span>
            <span className="font-medium text-gray-900">$120</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-700">Adults Ticket x1</span>
            <span className="font-medium text-gray-900">$56</span>
          </div>
        </div>

        {/* Subtotal */}
        <div className="space-y-2 mb-3">
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-gray-900">Subtotal</span>
            <span className="font-medium text-gray-900">$176</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Adults Ticket x1</span>
            <span className="font-medium text-gray-900">$6</span>
          </div>
        </div>

        <div className="border-t border-gray-200 my-4" />

        {/* Total */}
        <div className="flex items-center justify-between">
          <span className="text-base font-bold text-gray-900">Total:</span>
          <span className="text-xl font-bold text-[#3491E8]">$182</span>
        </div>
      </div>
    </form>
  );
}
