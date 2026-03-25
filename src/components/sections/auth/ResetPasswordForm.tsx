"use client";

import { useState } from "react";
import Image from "next/image";

const inputClass =
  "w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3491E8] focus:border-transparent";

export default function ResetPasswordForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      // TODO: integrate with authService.resetRequest()
      console.log("Reset password for:", email);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[520px] bg-white rounded-2xl shadow-md p-5 sm:p-6 md:p-10">
      {/* ── Logo with gradient border ── */}
      <div className="flex justify-center mb-6">
        <div className="relative w-[76px] h-[76px] sm:w-[88px] sm:h-[88px]">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 88 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="reset-logo-gradient"
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
              stroke="url(#reset-logo-gradient)"
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
        Reset Password
      </h1>
      <p className="text-center text-sm text-gray-500 mb-7 sm:mb-8">
        Please enter your email to reset your password
      </p>

      {/* ── Form ── */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className={inputClass}
        />

        {/* Submit button */}
        <button
          type="submit"
          disabled={isLoading || !email}
          className="w-full inline-flex items-center justify-center gap-2 bg-[#3491E8] hover:bg-[#2b7ed0] disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold py-3.5 rounded-xl transition-colors cursor-pointer"
        >
          {isLoading ? "Submitting..." : "Submit"}
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
    </div>
  );
}
