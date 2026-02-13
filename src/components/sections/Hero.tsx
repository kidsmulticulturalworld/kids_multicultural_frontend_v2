"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* ── Background: solid color matching header ── */}
      <div className="absolute inset-0 z-0 bg-header" />

      {/* ── Pink tint — top area (extends down through heading text) ── */}
      <div
        className="absolute inset-x-0 top-0 z-1 h-[65%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 0%, rgba(255, 105, 180, 0.14) 0%, transparent 60%)",
        }}
      />

      {/* ── Pink tint — bottom area (under children, spreads well above their heads) ── */}
      <div
        className="absolute inset-x-0 bottom-0 z-1 h-[75%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 100%, rgba(255, 105, 180, 0.22) 0%, transparent 65%)",
        }}
      />

      {/* ── Grid pattern overlay (28px grid) ── */}
      <div
        className="absolute inset-0 z-2 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.06) 0px,
              rgba(255, 255, 255, 0.06) 1px,
              transparent 1px,
              transparent 28px
            ),
            repeating-linear-gradient(
              0deg,
              rgba(255, 255, 255, 0.06) 0px,
              rgba(255, 255, 255, 0.06) 1px,
              transparent 1px,
              transparent 28px
            )
          `,
          maskImage:
            "radial-gradient(ellipse 70% 65% at 50% 45%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 65% at 50% 45%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center px-6 pt-14 pb-0 lg:px-[92px] lg:pt-20">
        {/* Hero heading image + brush stroke BEHIND "Culture." */}
        <div className="relative w-[90%] max-w-[700px] lg:w-[600px] mb-5 lg:mb-6">
          {/* Blue diagonal brush strokes — z-0 (behind the text image) */}
          <svg
            className="absolute bottom-[-3%] right-[5%] w-[46%] h-[22%] z-0 pointer-events-none"
            viewBox="0 0 240 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 44 Q60 38 110 28 Q140 32 170 20 Q200 12 236 6"
              stroke="#5B9FD5"
              strokeWidth="10"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M2 50 Q55 46 105 36 Q138 40 168 28 Q200 20 232 14"
              stroke="#5B9FD5"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          {/* Hero text image — z-10 (on top, transparent bg lets stroke peek through) */}
          <Image
            src="/home/hero-word.svg"
            alt="Kids Multicultural World — Raising Global Stars. Rooted in Culture."
            width={800}
            height={320}
            className="relative z-10 w-full h-auto"
            priority
          />
        </div>

        {/* Subtitle — center on mobile, left-aligned on desktop */}
        <p className="text-white/70 text-center lg:text-left text-sm lg:text-base leading-relaxed max-w-[560px] mb-7 lg:mb-9">
          KMW is an international youth academy celebrating diversity through
          fashion, media, and the arts — helping kids grow in confidence,
          culture, and creativity.
        </p>

        {/* CTA Button — pill on mobile, rounded-rectangle on desktop */}
        <Link
          href="/register"
          className="inline-flex items-center gap-2.5 bg-enroll hover:bg-enroll/90 text-white font-semibold transition-colors mb-10 lg:mb-14 text-sm px-5 py-2 rounded-full lg:text-[15px] lg:gap-3 lg:pl-7 lg:pr-2.5 lg:py-2.5 lg:rounded-xl"
        >
          Register your kid
          <span className="w-7 h-7 lg:w-9 lg:h-9 flex items-center justify-center bg-white/20 rounded-full">
            <Image
              src="/home/arrow-icon.svg"
              alt=""
              width={20}
              height={20}
              className="w-4 h-4"
              priority
            />
          </span>
        </Link>
      </div>

      {/* ── Kids image + decorative elements ── */}
      <div className="relative z-10 w-full">
        {/* Teddy bear (happy) — near button on mobile, near kids head on desktop */}
        <Image
          src="/home/teddy-happy.svg"
          alt=""
          width={96}
          height={96}
          className="absolute -top-20 left-[12%] lg:-top-4 lg:left-[26%] w-10 lg:w-[80px] z-20 select-none hero-float"
          aria-hidden="true"
          loading="lazy"
        />

        {/* Camera — close to left child, lower area */}
        <Image
          src="/home/camera.svg"
          alt=""
          width={120}
          height={120}
          className="absolute bottom-[25%] left-[4%] lg:left-[10%] w-16 lg:w-24 z-30 select-none hero-float-slow"
          aria-hidden="true"
          loading="lazy"
        />

        {/* Teddy with balloons — close to right child, upper area */}
        <Image
          src="/home/teddy-ballon.svg"
          alt=""
          width={96}
          height={96}
          className="absolute top-[8%] right-[4%] lg:right-[14%] w-14 lg:w-[80px] z-20 select-none hero-float-delay"
          aria-hidden="true"
          loading="lazy"
        />

        {/* Kids image — large, centered */}
        <div className="flex justify-center">
          <Image
            src="/home/front-view-kids.svg"
            alt="Children from diverse cultural backgrounds"
            width={700}
            height={500}
            className="w-[80%] lg:w-[48%] h-auto object-contain"
            loading="lazy"
            sizes="(min-width: 1024px) 48vw, 80vw"
          />
        </div>
      </div>

      {/* ── Cloud wave transition — overlaps bottom of kids ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 w-full leading-none">
        <Image
          src="/white-cloud.svg"
          alt=""
          width={1448}
          height={170}
          className="w-full h-auto"
          aria-hidden="true"
          loading="lazy"
        />
      </div>
    </section>
  );
}
