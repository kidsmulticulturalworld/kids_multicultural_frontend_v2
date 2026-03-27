import Image from "next/image";
import Link from "next/link";
import { upcomingEvents } from "./eventsData";

export default function UpcomingEvents() {
  return (
    <section className="bg-white py-10 md:py-14 lg:py-20">
      <div className="relative max-w-[1280px] mx-auto px-5 md:px-6 lg:px-10">
        {/* ── Heading ── */}
        <div className="mb-8 md:mb-10">
          <h2 className="font-display text-2xl md:text-3xl lg:text-[40px]">
            Upcoming Events
          </h2>
        </div>

        {/* Slingshot kid mascot — overlaps top-right card */}
        <Image
          src="/slingshot.svg"
          alt=""
          width={246}
          height={192}
          className="absolute -top-2 -right-6 md:-right-8 lg:-right-10 w-28 md:w-40 lg:w-[180px] h-auto z-0"
          aria-hidden="true"
        />

        {/* ── Event cards grid ── */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {upcomingEvents.map((event) => (
            <Link
              key={event.id}
              href={`/events/${event.id}`}
              className="bg-[#F5F5F5] rounded-xl overflow-hidden transition-shadow hover:shadow-md"
            >
              {/* Event cover image */}
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

              {/* Card details */}
              <div className="p-4 pt-3">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  {event.title}
                </h3>

                <div className="flex items-end justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    {/* Date */}
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                      <svg
                        className="w-3.5 h-3.5 shrink-0"
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
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                      <svg
                        className="w-3.5 h-3.5 shrink-0"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                      </svg>
                      {event.location}
                    </div>
                  </div>

                  {/* Price */}
                  <span className="text-blue-500 text-2xl font-bold shrink-0">
                    {event.price}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
