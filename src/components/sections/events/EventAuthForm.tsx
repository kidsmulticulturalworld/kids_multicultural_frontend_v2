"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const inputClass =
  "w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3491E8] focus:border-transparent";

type Tab = "login" | "signup";

export default function EventAuthForm() {
  const [activeTab, setActiveTab] = useState<Tab>("login");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (activeTab === "login") {
        console.log("Event login:", formData);
      } else {
        console.log("Event signup:", formData);
      }
      // TODO: integrate with authService
      router.push("/events/event-payment");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGuestCheckout = () => {
    router.push("/events/guest-checkout");
  };

  const isSubmitDisabled =
    isLoading ||
    !formData.email ||
    !formData.password ||
    (activeTab === "signup" && !agreedToTerms);

  return (
    <div
      className="w-full max-w-[520px] bg-white rounded-2xl p-5 sm:p-6 md:p-10"
      style={{ border: "1px solid #77777733" }}
    >
      {/* ── Logo with gradient border ── */}
      <div className="flex justify-center mb-5">
        <div className="relative w-[76px] h-[76px] sm:w-[88px] sm:h-[88px]">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 88 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="event-logo-gradient"
                x1="44"
                y1="0"
                x2="44"
                y2="88"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0EC1B8" />
                <stop offset="0.485577" stopColor="#BF12BF" />
                <stop offset="1" stopColor="#15BC3C" />
              </linearGradient>
            </defs>
            <circle
              cx="44"
              cy="44"
              r="41"
              stroke="url(#event-logo-gradient)"
              strokeWidth="3.5"
              fill="white"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/Logo.svg"
              alt="Kids Multicultural World"
              width={52}
              height={52}
              className="w-11 h-11 sm:w-13 sm:h-13 object-contain"
            />
          </div>
        </div>
      </div>

      {/* ── Heading ── */}
      <h1 className="font-display text-center text-2xl sm:text-[28px] text-gray-900 mb-2">
        Welcome
      </h1>
      <p className="text-center text-sm text-gray-500 mb-6 sm:mb-7">
        kindly Login or create an account to complete your purchase.
      </p>

      {/* ── Tab Switcher ── */}
      <div className="flex bg-gray-100 rounded-full p-1 mb-6 sm:mb-7">
        <button
          onClick={() => setActiveTab("login")}
          className={`flex-1 py-2.5 text-sm font-medium rounded-full transition-all cursor-pointer ${
            activeTab === "login"
              ? "bg-white text-gray-900 shadow-sm font-semibold"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setActiveTab("signup")}
          className={`flex-1 py-2.5 text-sm font-medium rounded-full transition-all cursor-pointer ${
            activeTab === "signup"
              ? "bg-white text-gray-900 shadow-sm font-semibold"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Sign up
        </button>
      </div>

      {/* ── Form ── */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className={inputClass}
        />

        {/* Password */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className={`${inputClass} pr-12`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors cursor-pointer"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Forgot password link */}
        <Link
          href="/forgot-password"
          className="text-[#3491E8] text-sm hover:underline block"
        >
          Forgot password?
        </Link>

        {/* Terms checkbox — Sign up tab only */}
        {activeTab === "signup" && (
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded accent-[#3491E8] cursor-pointer"
            />
            <span className="text-xs text-gray-500 leading-relaxed">
              By clicking this button, you agree to our{" "}
              <Link href="/terms" className="text-[#3491E8] hover:underline">
                Terms
              </Link>{" "}
              and confirm to have read and acknowledged our{" "}
              <Link href="/terms" className="text-[#3491E8] hover:underline">
                Global Privacy Statement
              </Link>
            </span>
          </label>
        )}

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitDisabled}
          className="w-full inline-flex items-center justify-center gap-2 bg-[#3491E8] hover:bg-[#2b7ed0] disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold py-3.5 rounded-xl transition-colors cursor-pointer"
        >
          <span className="font-medium text-sm leading-[22px] md:font-semibold md:text-base md:leading-6">
            {isLoading
              ? activeTab === "login"
                ? "Signing in..."
                : "Creating account..."
              : activeTab === "login"
                ? "Log in"
                : "Create Account"}
          </span>
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
      </form>

      {/* ── Continue as guest ── */}
      <button
        onClick={handleGuestCheckout}
        className="w-full mt-4 inline-flex items-center justify-center text-[#3491E8] font-medium text-sm leading-[22px] md:font-semibold md:text-base md:leading-6 py-3.5 rounded-xl transition-colors cursor-pointer"
        style={{ border: "1px solid #77777733" }}
      >
        Continue as guest
      </button>
    </div>
  );
}
