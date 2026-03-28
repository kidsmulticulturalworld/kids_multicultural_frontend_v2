import { Suspense } from "react";
import EventsHero from "@/components/sections/events/EventsHero";
import EventsFeatured from "@/components/sections/events/EventsFeatured";

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <Suspense>
        <EventsFeatured />
      </Suspense>
    </>
  );
}
