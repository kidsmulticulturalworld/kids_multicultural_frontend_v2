"use client";

import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { eventService, contestService } from "@/lib/api/services";
import {
  mapEventViewRow,
  mapContestListRow,
  normalizeArrayResponse,
} from "@/lib/api/data-mappers";

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

interface EventCardItem {
  id: string;
  title: string;
  image: string;
  date: string;
  location: string;
  price: string;
}

export default function EventsFeatured() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<Tab>("Upcoming Events");

  const { data: eventsRaw, isLoading: eventsLoading } = useQuery({
    queryKey: ["event-view"],
    queryFn: () => eventService.getEvents(),
  });

  const { data: contestsRaw, isLoading: contestsLoading } = useQuery({
    queryKey: ["all-contest"],
    queryFn: () => contestService.getAllContests(),
  });

  const upcomingEvents = useMemo(() => {
    const rows = normalizeArrayResponse(eventsRaw, [
      "events",
      "event",
      "results",
      "data",
    ]);
    return rows.map((r) => mapEventViewRow(r as Record<string, unknown>));
  }, [eventsRaw]);

  const ongoingContests = useMemo(() => {
    const rows = normalizeArrayResponse(contestsRaw, [
      "contests",
      "results",
      "data",
    ]);
    if (rows.length === 0 && Array.isArray(contestsRaw)) {
      return (contestsRaw as unknown[]).map((r) =>
        mapContestListRow(r as Record<string, unknown>)
      );
    }
    return rows.map((r) => mapContestListRow(r as Record<string, unknown>));
  }, [contestsRaw]);

  const featuredEvent: FeaturedEvent | null =
    upcomingEvents.length > 0
      ? {
          id: upcomingEvents[0].id,
          title: upcomingEvents[0].title,
          image: upcomingEvents[0].image,
          date: upcomingEvents[0].date,
          location: upcomingEvents[0].location,
          price: upcomingEvents[0].price,
          badge: upcomingEvents[0].badge,
        }
      : null;

  const gridUpcoming = upcomingEvents.slice(1);

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && tabParamMap[tab]) {
      setActiveTab(tabParamMap[tab]);
    }
  }, [searchParams]);

  return (
    <section className="bg-white py-10 md:py-14 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-10">
        <div className="flex gap-6 mb-12 md:mb-16 lg:mb-20">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
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

        {activeTab === "Upcoming Events" ? (
          <UpcomingContent
            featuredEvent={featuredEvent}
            gridEvents={gridUpcoming}
            loading={eventsLoading}
            empty={!eventsLoading && upcomingEvents.length === 0}
          />
        ) : (
          <OngoingContestsContent
            contests={ongoingContests}
            loading={contestsLoading}
          />
        )}
      </div>
    </section>
  );
}

function UpcomingContent({
  featuredEvent,
  gridEvents,
  loading,
  empty,
}: {
  featuredEvent: FeaturedEvent | null;
  gridEvents: EventCardItem[];
  loading: boolean;
  empty: boolean;
}) {
  if (loading) {
    return (
      <p className="text-sm text-gray-500 py-8">Loading events\u2026</p>
    );
  }

  if (empty) {
    return (
      <p className="text-sm text-gray-500 py-8">
        No upcoming events listed yet.{" "}
        <Link href="/events" className="text-blue-500 font-medium underline">
          Check back soon
        </Link>
      </p>
    );
  }

  if (!featuredEvent) {
    return null;
  }

  return (
    <>
      <div className="relative">
        <div className="mb-6 md:mb-8">
          <h2 className="font-display text-2xl md:text-3xl lg:text-[40px]">
            Featured Event
          </h2>
        </div>

        <Image
          src="/teddy-bear-events.svg"
          alt=""
          width={160}
          height={160}
          className="absolute -top-4 right-2 md:right-4 lg:right-6 w-28 md:w-36 lg:w-[160px] h-auto z-0"
          aria-hidden="true"
        />

        <Link
          href={`/events/${featuredEvent.id}`}
          className="block relative z-10 rounded-2xl overflow-hidden aspect-[5/4] sm:aspect-[4/3] md:aspect-[16/9] lg:aspect-[16/8] transition-shadow hover:shadow-lg"
        >
          <Image
            src={featuredEvent.image}
            alt={featuredEvent.title}
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

          <div className="absolute top-3 right-3 md:top-6 md:right-6 z-10 flex items-center gap-1.5 bg-[#BD123D]/60 text-white md:bg-[#BD123D]/20 md:text-[#BD123D] text-[10px] md:text-sm font-medium px-2.5 py-1.5 md:px-4 md:py-2.5 rounded-full">
            <Image
              src="/dashboard/icons/danger-clock.svg"
              alt=""
              width={14}
              height={14}
              className="w-3.5 h-3.5"
              aria-hidden="true"
            />
            {featuredEvent.badge}
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-10 p-5 md:p-6 lg:p-8 flex flex-col md:flex-row md:items-end md:justify-between gap-3 md:gap-4">
            <div>
              <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2 md:mb-3">
                {featuredEvent.title}
              </h3>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {featuredEvent.date}
                </div>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                  </svg>
                  {featuredEvent.location}
                </div>
              </div>
            </div>
            <span className="text-blue-500 text-3xl md:text-4xl lg:text-[42px] font-bold shrink-0">
              {featuredEvent.price}
            </span>
          </div>
        </Link>
      </div>

      <div className="relative mt-14 md:mt-20">
        <div className="mb-8 md:mb-10">
          <h2 className="font-display text-2xl md:text-3xl lg:text-[40px]">
            Upcoming Events
          </h2>
        </div>

        <Image
          src="/slingshot.svg"
          alt=""
          width={246}
          height={192}
          className="absolute -top-2 -right-6 md:-right-8 lg:-right-10 w-28 md:w-40 lg:w-[180px] h-auto z-0"
          aria-hidden="true"
        />

        {gridEvents.length > 0 ? (
          <EventCardGrid events={gridEvents} basePath="/events" />
        ) : (
          <p className="relative z-10 text-sm text-gray-500">
            More events will appear here as they are announced.
          </p>
        )}
      </div>
    </>
  );
}

function OngoingContestsContent({
  contests,
  loading,
}: {
  contests: ReturnType<typeof mapContestListRow>[];
  loading: boolean;
}) {
  return (
    <div className="relative">
      <div className="mb-8 md:mb-10">
        <h2 className="font-display text-2xl md:text-3xl lg:text-[40px]">
          Ongoing Contests
        </h2>
      </div>

      <Image
        src="/ongoing-contest-image.svg"
        alt=""
        width={300}
        height={280}
        className="absolute -top-12 -right-14 md:-top-18 md:-right-20 lg:-top-22 lg:-right-24 w-44 md:w-60 lg:w-[310px] h-auto z-0"
        aria-hidden="true"
      />

      {loading ? (
        <p className="relative z-10 text-sm text-gray-500 py-6">Loading\u2026</p>
      ) : contests.length === 0 ? (
        <p className="relative z-10 text-sm text-gray-500 py-6">
          No contests at the moment.
        </p>
      ) : (
        <EventCardGrid events={contests} basePath="/events/contest" />
      )}
    </div>
  );
}

function EventCardGrid({
  events,
  basePath,
}: {
  events: EventCardItem[];
  basePath: string;
}) {
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
                  {event.date || "—"}
                </div>
                <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                  </svg>
                  {event.location || "—"}
                </div>
              </div>

              <span className="text-blue-500 text-2xl font-bold shrink-0">
                {event.price || "—"}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
