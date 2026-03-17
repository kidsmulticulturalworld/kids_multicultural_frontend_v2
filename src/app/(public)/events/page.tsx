import EventsHero from "@/components/sections/events/EventsHero";
import EventsFeatured from "@/components/sections/events/EventsFeatured";
import UpcomingEvents from "@/components/sections/events/UpcomingEvents";

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <EventsFeatured />
      <UpcomingEvents />
    </>
  );
}
