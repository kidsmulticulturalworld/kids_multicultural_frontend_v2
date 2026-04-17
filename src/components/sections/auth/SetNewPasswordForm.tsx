"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { authService } from "@/lib/api/services";

const inputClass =
  "w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3491E8] focus:border-transparent";

export default function SetNewPasswordForm() {
  const params = useParams();
  const router = useRouter();
  const token = typeof params?.token === "string" ? params.token : "";
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    if (!token) {
      setError("Invalid reset link.");
      return;
    }
    setIsLoading(true);
    try {
      await authService.resetToken({ token, password });
      router.push("/login");
    } catch (err) {
      const msg = axios.isAxiosError(err)
        ? (err.response?.data?.detail as string) ||
          "This link may be invalid or expired. Request a new reset email."
        : "Something went wrong. Try again.";
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[520px] bg-white rounded-2xl shadow-md p-5 sm:p-6 md:p-10">
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
                id="setpw-logo-gradient"
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
              stroke="url(#setpw-logo-gradient)"
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

      <h1 className="font-display text-center text-2xl sm:text-[28px] text-gray-900 mb-2">
        Set a new password
      </h1>
      <p className="text-center text-sm text-gray-500 mb-7 sm:mb-8">
        Choose a strong password you have not used elsewhere.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <p
            className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3"
            role="alert"
          >
            {error}
          </p>
        )}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="New password"
          required
          minLength={8}
          autoComplete="new-password"
          className={inputClass}
        />
        <input
          type="password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          placeholder="Confirm new password"
          required
          minLength={8}
          autoComplete="new-password"
          className={inputClass}
        />
        <button
          type="submit"
          disabled={isLoading || !token}
          className="w-full inline-flex items-center justify-center gap-2 bg-[#3491E8] hover:bg-[#2b7ed0] disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold py-3.5 rounded-xl transition-colors cursor-pointer"
        >
          {isLoading ? "Saving..." : "Update password"}
        </button>
      </form>

      <p className="text-center text-sm text-gray-500 mt-6">
        <Link href="/login" className="text-[#3491E8] font-medium hover:underline">
          Back to sign in
        </Link>
      </p>
    </div>
  );
}
