"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function VoteSuccessCard() {
  const router = useRouter();

  return (
    <div className="w-full max-w-[520px] bg-white rounded-2xl shadow-md p-5 sm:p-6 md:p-10 text-center">
      {/* ── Success icon with gradient border ── */}
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
                id="vote-success-gradient"
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
              stroke="url(#vote-success-gradient)"
              strokeWidth="3.5"
              fill="white"
            />
          </svg>
          {/* Green checkmark badge */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 sm:w-11 sm:h-11"
            >
              <path
                d="M22 2l3.09 5.26L30.5 5.5l1.76 5.41L37.67 12l-.59 5.67 4.42 3.55-3.18 4.65 2.18 5.23-4.87 2.85-.18 5.69-5.63.64-2.72 5.01L22 42l-5.1 2.64-2.72-5.01-5.63-.64-.18-5.69-4.87-2.85 2.18-5.23-3.18-4.65 4.42-3.55L6.33 12l5.41-1.09L13.5 5.5l5.41 1.76L22 2z"
                fill="#15BC3C"
              />
              <path
                d="M15 22l5 5 9-9"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* ── Heading ── */}
      <h1 className="font-display text-center text-xl sm:text-2xl md:text-[28px] text-gray-900 mb-2">
        Vote Sent Successfully
      </h1>
      <p className="text-center text-sm sm:text-base text-gray-500 mb-7 sm:mb-8 max-w-[380px] mx-auto">
        You have successfully sent 5 votes to your candidate -{" "}
        <span className="font-bold text-gray-900">Mivaan Rana</span>
      </p>

      {/* ── Continue Voting button ── */}
      <button
        onClick={() => router.push("/events?tab=ongoing")}
        className="w-full inline-flex items-center justify-center gap-2 bg-[#3491E8] hover:bg-[#2b7ed0] text-white text-sm sm:text-base font-semibold py-3.5 rounded-xl transition-colors cursor-pointer mb-4"
      >
        Continue Voting
        <Image
          src="/dashboard/icons/arrow.svg"
          alt=""
          width={20}
          height={20}
          className="w-5 h-5"
          aria-hidden="true"
        />
      </button>

      {/* ── Go Back Home button ── */}
      <button
        onClick={() => router.push("/")}
        className="w-full inline-flex items-center justify-center gap-2 border border-[#3491E8] text-[#3491E8] hover:bg-[#3491E8]/5 text-sm sm:text-base font-semibold py-3.5 rounded-xl transition-colors cursor-pointer"
      >
        Go Back Home
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="w-5 h-5"
        >
          <path
            d="M4.167 10h11.666M10 4.167L15.833 10 10 15.833"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
