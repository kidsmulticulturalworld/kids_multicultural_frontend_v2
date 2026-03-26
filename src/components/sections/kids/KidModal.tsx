"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { Kid } from "./kidsData";

const SCALLOP_PATH =
  "M22.6208 3.27441C25.7555 0.241889 30.7302 0.24189 33.8649 3.27441C35.2141 4.57954 37.0903 5.18868 38.9489 4.92578C43.2674 4.31497 47.292 7.23929 48.0456 11.5352C48.3699 13.3841 49.5299 14.9795 51.1882 15.8594C55.0408 17.9036 56.578 22.6354 54.6628 26.5537C53.8384 28.2402 53.8384 30.2129 54.6628 31.8994C56.578 35.8177 55.0408 40.5496 51.1882 42.5938C49.5299 43.4736 48.3699 45.069 48.0456 46.918C47.292 51.2138 43.2674 54.1382 38.9489 53.5273C37.0903 53.2644 35.2141 53.8736 33.8649 55.1787C30.7302 58.2112 25.7555 58.2112 22.6208 55.1787C21.2716 53.8736 19.3955 53.2645 17.5368 53.5273C13.2183 54.1382 9.19371 51.2138 8.44012 46.918C8.11579 45.069 6.9558 43.4736 5.29755 42.5938C1.44491 40.5496 -0.0923247 35.8177 1.82294 31.8994C2.64734 30.2129 2.64734 28.2402 1.82294 26.5537C-0.0923258 22.6354 1.44491 17.9036 5.29755 15.8594C6.9558 14.9795 8.11579 13.3841 8.44012 11.5352C9.19371 7.23929 13.2183 4.31497 17.5368 4.92578C19.3955 5.18868 21.2716 4.57954 22.6208 3.27441Z";

interface KidModalProps {
  kid: Kid;
  onClose: () => void;
}

const detailRows = (kid: Kid) => [
  { label: "Gender", value: kid.gender },
  { label: "Height", value: kid.height },
  { label: "Weight", value: kid.weight },
  { label: "Eye color", value: kid.eyeColor },
  { label: "Hair", value: kid.hair },
  { label: "Dress size", value: kid.dressSize },
];

export default function KidModal({ kid, onClose }: KidModalProps) {
  const gradientId = `modal-gradient-${kid.id}`;
  const clipId = `modal-clip-${kid.id}`;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Modal card — white border wrapper */}
      <div
        className="relative w-full max-w-[700px] max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-[28px] border-4 sm:border-8 border-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-linear-to-b from-[#E8F4FD] to-white px-5 pt-6 pb-6 sm:px-14 sm:pt-8 sm:pb-10 overflow-hidden">
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-gray-500 hover:text-gray-800 transition-colors shadow-sm"
            aria-label="Close modal"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Decorative gold star — top left */}
          <svg
            className="absolute top-6 left-5 w-6 h-6 sm:top-8 sm:left-8 sm:w-10 sm:h-10"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 2L14.09 8.26L20.18 8.64L15.54 12.74L17.09 19.02L12 15.77L6.91 19.02L8.46 12.74L3.82 8.64L9.91 8.26L12 2Z"
              fill="#FFD700"
            />
          </svg>

          {/* Decorative blue star — top right */}
          <svg
            className="absolute top-5 right-14 w-7 h-7 sm:top-6 sm:right-20 sm:w-11 sm:h-11"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 2L14.09 8.26L20.18 8.64L15.54 12.74L17.09 19.02L12 15.77L6.91 19.02L8.46 12.74L3.82 8.64L9.91 8.26L12 2Z"
              fill="#7CB9E8"
              opacity="0.5"
            />
          </svg>

          {/* Small blue dot — left side near name */}
          <div className="absolute left-5 top-[52%] w-2.5 h-2.5 rounded-full bg-[#7CB9E8] opacity-60" aria-hidden="true" />

          {/* Small pink dot — left side near table */}
          <div className="absolute left-6 top-[60%] w-3 h-3 rounded-full bg-[#FF69B4] opacity-50" aria-hidden="true" />

          {/* Green half-bubble — bottom left */}
          <Image
            src="/large-green-half-bubble.svg"
            alt=""
            width={146}
            height={116}
            className="absolute -bottom-4 -left-4 sm:-left-6 w-[90px] h-[72px] sm:w-[146px] sm:h-[116px] pointer-events-none"
            aria-hidden="true"
          />

          {/* Blue half-bubble — bottom right */}
          <Image
            src="/half-blue-bubble.svg"
            alt=""
            width={209}
            height={129}
            className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-8 w-[130px] h-[80px] sm:w-[209px] sm:h-[129px] pointer-events-none"
            aria-hidden="true"
          />

          {/* Scalloped photo — centered, large */}
          <div className="relative w-[180px] h-[186px] sm:w-[260px] sm:h-[269px] mx-auto mt-1">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="-2 -2 60 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id={gradientId}
                  x1="28.2429"
                  y1="-0.773438"
                  x2="28.2429"
                  y2="59.2266"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0EC1B8" />
                  <stop offset="0.485577" stopColor="#BF12BF" />
                  <stop offset="1" stopColor="#15BC3C" />
                </linearGradient>
                <clipPath id={clipId}>
                  <path d={SCALLOP_PATH} />
                </clipPath>
              </defs>
              <image
                href={kid.image}
                x="0"
                y="0"
                width="56"
                height="58"
                preserveAspectRatio="xMidYMid slice"
                clipPath={`url(#${clipId})`}
              />
              <path
                d={SCALLOP_PATH}
                stroke={`url(#${gradientId})`}
                strokeWidth="2"
                fill="none"
              />
            </svg>

            {/* Age badge */}
            <div className="absolute bottom-4 right-2 sm:right-4 bg-[#3491E8] text-white text-xs sm:text-sm font-bold px-5 py-1.5 rounded-full border-2 border-white shadow-sm">
              AGE: {kid.age}
            </div>
          </div>

          {/* Name and ethnicity */}
          <h3 className="mt-3 text-xl sm:text-2xl font-bold text-gray-900 text-center">
            {kid.name}
          </h3>
          <p className="mt-1.5 text-sm sm:text-base text-gray-500 text-center">
            {kid.ethnicity}
          </p>

          {/* Details table */}
          <div className="relative z-10 mt-5">
            {/* Small blue bubbles around the table */}
            <div className="absolute -left-3 top-8 w-3.5 h-3.5 rounded-full bg-[#B9EEFF] opacity-70" aria-hidden="true" />
            <div className="absolute -left-1 top-24 w-2 h-2 rounded-full bg-[#B9EEFF] opacity-50" aria-hidden="true" />
            <div className="absolute -right-2 top-16 w-2.5 h-2.5 rounded-full bg-[#B9EEFF] opacity-60" aria-hidden="true" />
            <div className="absolute -right-3 bottom-12 w-3 h-3 rounded-full bg-[#B9EEFF] opacity-50" aria-hidden="true" />
            <div className="absolute -left-2 bottom-20 w-2 h-2 rounded-full bg-[#B9EEFF] opacity-60" aria-hidden="true" />

            <div className="border border-gray-200 rounded-xl overflow-hidden bg-white/80">
            {detailRows(kid).map((row, idx) => (
              <div
                key={row.label}
                className={`flex items-center justify-between px-4 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base ${
                  idx !== 0 ? "border-t border-gray-200" : ""
                }`}
              >
                <span className="text-gray-500">{row.label}</span>
                <span className="font-semibold text-gray-900">{row.value}</span>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
