import { notFound } from "next/navigation";
import Image from "next/image";
import { eventDetails } from "@/components/sections/events/eventsData";
import GetTicketButton from "@/components/sections/events/GetTicketButton";

interface EventDetailPageProps {
  params: Promise<{ eventId: string }>;
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { eventId } = await params;
  const event = eventDetails[eventId];

  if (!event) {
    notFound();
  }

  const highlightColors = {
    peach: "bg-[#FCCFBD]",
    mint: "bg-[#91FFCB]",
    blue: "bg-[#ACD6FF]",
  };

  const highlightTitleColors = {
    peach: "text-[#9B2C00]",
    mint: "text-[#008245]",
    blue: "text-[#0670D3]",
  };

  return (
    <section className="bg-white py-6 md:py-12 lg:py-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10">
        {/* ── Hero Image ── */}
        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[16/8] rounded-xl md:rounded-2xl overflow-hidden mb-0 md:mb-10">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1280px"
            priority
          />
        </div>

        {/* ── Event Info Card ── */}
        <div
          className="rounded-none md:rounded-2xl mb-6 md:mb-10"
          style={{ border: "1px solid #77777733" }}
        >
          <div className="flex flex-col lg:flex-row">
            {/* Left — Event details */}
            <div
              className="flex-1 flex flex-col gap-4 md:gap-5 p-5 md:p-10 lg:px-14 lg:py-16 lg:border-r"
              style={{ borderColor: "#77777733" }}
            >
              <h1 className="text-xl md:text-3xl lg:text-[32px] lg:leading-10 font-semibold text-black">
                {event.title}
              </h1>

              <hr style={{ borderColor: "#77777733" }} />

              {/* Date */}
              <div className="flex items-center gap-2 text-[#2C4F7A] text-sm md:text-base">
                <Image src="/dashboard/icons/calendar-icon.svg" alt="" width={14} height={14} className="shrink-0" />
                {event.fullDate} · {event.time}
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-[#1E1E1E]/70 text-sm md:text-base">
                <Image src="/dashboard/icons/map-marker.svg" alt="" width={16} height={16} className="shrink-0" />
                {event.location}
              </div>

              <hr style={{ borderColor: "#77777733" }} />

              {/* Description */}
              <p className="text-[#1E1E1E] text-sm md:text-base leading-relaxed">
                {event.description}
              </p>

              {/* Ticket box — inside card on mobile/tablet, separate column on desktop */}
              <div
                className="flex flex-col gap-4 lg:hidden mt-2"
                style={{
                  background: "#C1DEF833",
                  borderRadius: "12px",
                  padding: "20px",
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#2C4F7A] text-xs mb-1">Total</p>
                    <span className="text-[#3491E8] text-2xl font-bold">
                      {event.price}
                    </span>
                  </div>
                  <GetTicketButton eventTitle={event.title} tickets={event.tickets} />
                </div>
                <p className="text-[#2C4F7A] text-sm">
                  {event.fullDate} · {event.time}
                </p>
              </div>
            </div>

            {/* Right — Ticket box (desktop only) */}
            <div className="hidden lg:flex p-8 md:p-10 lg:px-14 lg:py-16 items-start">
              <div
                className="flex flex-col gap-4 lg:w-[523px]"
                style={{
                  background: "#C1DEF833",
                  borderRadius: "12px",
                  padding: "20px",
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#2C4F7A] text-xs mb-1">Total</p>
                    <span className="text-[#3491E8] text-2xl md:text-3xl font-bold">
                      {event.price}
                    </span>
                  </div>
                  <GetTicketButton eventTitle={event.title} tickets={event.tickets} />
                </div>
                <p className="text-[#2C4F7A] text-sm">
                  {event.fullDate} · {event.time}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Activity Highlights ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {event.highlights.map((highlight) => (
            <div
              key={highlight.title}
              className={`${highlightColors[highlight.color]} rounded-xl p-6 md:p-8 text-center`}
            >
              <h3
                className={`${highlightTitleColors[highlight.color]} font-semibold text-xl leading-6 mb-2`}
              >
                {highlight.title}
              </h3>
              <p className="text-[#1E1E1E] text-base leading-6 font-normal">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
