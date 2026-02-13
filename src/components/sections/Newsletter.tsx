"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <section className="relative bg-[#1F3F66] py-20 lg:py-32 overflow-hidden">
      {/* Grid pattern — only at top-left and bottom-right corners */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.05) 0px,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px,
              transparent 28px
            ),
            repeating-linear-gradient(
              0deg,
              rgba(255, 255, 255, 0.05) 0px,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px,
              transparent 28px
            )
          `,
          maskImage:
            "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, transparent 40%), linear-gradient(315deg, rgba(0,0,0,0.9) 0%, transparent 40%)",
          WebkitMaskImage:
            "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, transparent 40%), linear-gradient(315deg, rgba(0,0,0,0.9) 0%, transparent 40%)",
          maskComposite: "add" as unknown as string,
          WebkitMaskComposite: "source-over",
        }}
      />

      {/* Glass card */}
      <div className="relative z-10 mx-6 lg:mx-16">
        <div
          className="backdrop-blur-md border border-[#3a5070]/30 rounded-3xl px-6 lg:px-16 py-14 lg:py-20 text-center"
          style={{ backgroundColor: "rgba(30, 50, 78, 0.55)" }}
        >
          {/* Heading */}
          <h2 className="font-display text-primary text-[28px] lg:text-[48px] leading-tight mb-3 lg:mb-4">
            Join Our Newsletter
          </h2>

          {/* Subtitle */}
          <p className="text-white/80 text-sm lg:text-base leading-relaxed max-w-[560px] mx-auto mb-8 lg:mb-10">
            Be the first to hear about the latest news and events happening
            here.
          </p>

          {/* Email input row — single pill, inline on all sizes */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center max-w-[540px] mx-auto border border-[#3a5070]/40 rounded-2xl pl-3 lg:pl-5 pr-1.5 py-1.5"
            style={{ backgroundColor: "rgba(22, 38, 60, 0.7)" }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 16"
              fill="none"
              className="w-4 h-4 lg:w-5 lg:h-5 shrink-0 text-white/40"
            >
              <path
                d="M18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z"
                fill="currentColor"
              />
            </svg>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 min-w-0 bg-transparent text-white text-xs lg:text-[15px] placeholder-white/35 px-2 lg:px-3 py-2 focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 bg-white/10 hover:bg-white/15 text-white font-medium text-xs lg:text-[15px] px-3 lg:px-6 py-2 lg:py-2.5 rounded-xl lg:rounded-2xl border border-white/5 transition-colors"
            >
              Subscribe now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
