import { Suspense } from "react";
import EventsHero from "@/components/sections/events/EventsHero";
import EventsFeatured from "@/components/sections/events/EventsFeatured";
import UpcomingEvents from "@/components/sections/events/UpcomingEvents";

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <Suspense>
        <EventsFeatured />
      </Suspense>
      <UpcomingEvents />
    </>
  );
}
