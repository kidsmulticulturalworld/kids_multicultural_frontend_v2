"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = ["Upcoming Events", "Ongoing Contests"] as const;

interface FeaturedEvent {
  title: string;
  image: string;
  date: string;
  location: string;
  price: string;
  badge: string;
}

const tabContent: Record<string, FeaturedEvent> = {
  "Upcoming Events": {
    title: "Walk the runway! Experience cultural dances.",
    image: "/events-ongoing-image.jpg",
    date: "Fri, May 23rd, 9AM",
    location: "Victoria Boulevard, Ireland",
    price: "$200",
    badge: "Only 10 days left",
  },
  "Ongoing Contests": {
    title: "Kids Multicultural Fashion Show 2026",
    image: "/events-ongoing-image.jpg",
    date: "Sat, June 14th, 10AM",
    location: "Grand Convention Center, New York",
    price: "$150",
    badge: "Entries closing soon",
  },
};

export default function EventsFeatured() {
  const [activeTab, setActiveTab] = useState<string>("Upcoming Events");

  const event = tabContent[activeTab];

  return (
    <section className="bg-white py-10 md:py-14 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-10">
        {/* ── Tabs ── */}
        <div className="flex gap-6 mb-12 md:mb-16 lg:mb-20">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm md:text-base font-medium transition-colors cursor-pointer ${
                activeTab === tab
                  ? "text-blue-500 border-b-[3px] border-blue-500"
                  : "text-gray-800 hover:text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ── Featured Event heading + bear mascot + card wrapper ── */}
        <div className="relative">
          <div className="mb-6 md:mb-8">
            <h2 className="font-display text-2xl md:text-3xl lg:text-[40px]">
              Featured Event
            </h2>
          </div>

          {/* Bear mascot — peeking behind card top-right */}
          <Image
            src="/teddy-bear-events.svg"
            alt=""
            width={160}
            height={160}
            className="absolute -top-4 right-2 md:right-4 lg:right-6 w-28 md:w-36 lg:w-[160px] h-auto z-0"
            aria-hidden="true"
          />

        {/* ── Featured Event Card ── */}
        <div className="relative z-10 rounded-2xl overflow-hidden aspect-[5/4] sm:aspect-[4/3] md:aspect-[16/9] lg:aspect-[16/8]">
          {/* Full-bleed image */}
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1280px"
            priority
          />

          {/* Gradient overlay — light at top, dark at bottom */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(0,0,0,0.4) 65%, rgba(0,0,0,0.85) 80%, rgba(0,0,0,0.98) 100%)",
            }}
          />

          {/* Badge */}
          <div className="absolute top-3 right-3 md:top-6 md:right-6 z-10 flex items-center gap-1.5 bg-[#BD123D]/60 text-white md:bg-[#BD123D]/20 md:text-[#BD123D] text-[10px] md:text-sm font-medium px-2.5 py-1.5 md:px-4 md:py-2.5 rounded-full">
            <Image
              src="/dashboard/icons/danger-clock.svg"
              alt=""
              width={14}
              height={14}
              className="w-3.5 h-3.5"
              aria-hidden="true"
            />
            {event.badge}
          </div>

          {/* Event details — positioned at bottom over the dark gradient */}
          <div className="absolute bottom-0 left-0 right-0 z-10 p-5 md:p-6 lg:p-8 flex flex-col md:flex-row md:items-end md:justify-between gap-3 md:gap-4">
            <div>
              <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2 md:mb-3">
                {event.title}
              </h3>

              <div className="flex flex-col gap-1.5">
                {/* Date */}
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <svg
                    className="w-4 h-4 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {event.date}
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <svg
                    className="w-4 h-4 shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                  </svg>
                  {event.location}
                </div>
              </div>
            </div>

            {/* Price */}
            <span className="text-blue-500 text-3xl md:text-4xl lg:text-[42px] font-bold shrink-0">
              {event.price}
            </span>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
