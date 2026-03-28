"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { upcomingEvents, ongoingContests } from "./eventsData";

const tabs = ["Upcoming Events", "Ongoing Contests"] as const;
type Tab = (typeof tabs)[number];

const tabParamMap: Record<string, Tab> = {
  upcoming: "Upcoming Events",
  ongoing: "Ongoing Contests",
};

interface FeaturedEvent {
  id: string;
  title: string;
  image: string;
  date: string;
  location: string;
  price: string;
  badge: string;
}

const featuredEvent: FeaturedEvent = {
  id: "featured-upcoming",
  title: "Walk the runway! Experience cultural dances.",
  image: "/events-ongoing-image.jpg",
  date: "Fri, May 23rd, 9AM",
  location: "Victoria Boulevard, Ireland",
  price: "$200",
  badge: "Only 10 days left",
};

export default function EventsFeatured() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<Tab>("Upcoming Events");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && tabParamMap[tab]) {
      setActiveTab(tabParamMap[tab]);
    }
  }, [searchParams]);

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

        {/* ── Tab content ── */}
        {activeTab === "Upcoming Events" ? (
          <UpcomingContent event={featuredEvent} />
        ) : (
          <OngoingContestsContent />
        )}
      </div>
    </section>
  );
}

/* ── Upcoming Events: Featured card + event grid ── */

function UpcomingContent({ event }: { event: FeaturedEvent }) {
  return (
    <>
      {/* Featured Event */}
      <div className="relative">
        <div className="mb-6 md:mb-8">
          <h2 className="font-display text-2xl md:text-3xl lg:text-[40px]">
            Featured Event
          </h2>
        </div>

        {/* Bear mascot */}
        <Image
          src="/teddy-bear-events.svg"
          alt=""
          width={160}
          height={160}
          className="absolute -top-4 right-2 md:right-4 lg:right-6 w-28 md:w-36 lg:w-[160px] h-auto z-0"
          aria-hidden="true"
        />

        {/* Featured Event Card */}
        <Link
          href={`/events/${event.id}`}
          className="block relative z-10 rounded-2xl overflow-hidden aspect-[5/4] sm:aspect-[4/3] md:aspect-[16/9] lg:aspect-[16/8] transition-shadow hover:shadow-lg"
        >
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1280px"
            priority
          />

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

          {/* Event details */}
          <div className="absolute bottom-0 left-0 right-0 z-10 p-5 md:p-6 lg:p-8 flex flex-col md:flex-row md:items-end md:justify-between gap-3 md:gap-4">
            <div>
              <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2 md:mb-3">
                {event.title}
              </h3>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {event.date}
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                  </svg>
                  {event.location}
                </div>
              </div>
            </div>
            <span className="text-blue-500 text-3xl md:text-4xl lg:text-[42px] font-bold shrink-0">
              {event.price}
            </span>
          </div>
        </Link>
      </div>

      {/* Upcoming Events Grid */}
      <div className="relative mt-14 md:mt-20">
        <div className="mb-8 md:mb-10">
          <h2 className="font-display text-2xl md:text-3xl lg:text-[40px]">
            Upcoming Events
          </h2>
        </div>

        {/* Slingshot kid mascot */}
        <Image
          src="/slingshot.svg"
          alt=""
          width={246}
          height={192}
          className="absolute -top-2 -right-6 md:-right-8 lg:-right-10 w-28 md:w-40 lg:w-[180px] h-auto z-0"
          aria-hidden="true"
        />

        <EventCardGrid events={upcomingEvents} basePath="/events" />
      </div>
    </>
  );
}

/* ── Ongoing Contests: heading + contest grid ── */

function OngoingContestsContent() {
  return (
    <div className="relative">
      <div className="mb-8 md:mb-10">
        <h2 className="font-display text-2xl md:text-3xl lg:text-[40px]">
          Ongoing Contests
        </h2>
      </div>

      {/* Kid with megaphone mascot */}
      <Image
        src="/ongoing-contest-image.svg"
        alt=""
        width={300}
        height={280}
        className="absolute -top-12 -right-14 md:-top-18 md:-right-20 lg:-top-22 lg:-right-24 w-44 md:w-60 lg:w-[310px] h-auto z-0"
        aria-hidden="true"
      />

      <EventCardGrid events={ongoingContests} basePath="/events/contest" />
    </div>
  );
}

/* ── Shared card grid used by both tabs ── */

function EventCardGrid({ events, basePath }: { events: typeof upcomingEvents; basePath: string }) {
  return (
    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {events.map((event) => (
        <Link
          key={event.id}
          href={`${basePath}/${event.id}`}
          className="bg-[#F5F5F5] rounded-xl overflow-hidden transition-shadow hover:shadow-md"
        >
          <div className="p-3 pb-0">
            <Image
              src={event.image}
              alt={event.title}
              width={400}
              height={500}
              className="w-full h-auto object-cover rounded-lg"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 380px"
            />
          </div>

          <div className="p-4 pt-3">
            <h3 className="text-base font-bold text-gray-900 mb-3">
              {event.title}
            </h3>

            <div className="flex items-end justify-between gap-3">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {event.date}
                </div>
                <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                  </svg>
                  {event.location}
                </div>
              </div>

              <span className="text-blue-500 text-2xl font-bold shrink-0">
                {event.price}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
