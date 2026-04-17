"use client";

import { useMemo } from "react";
import { notFound, useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { eventService } from "@/lib/api/services";
import { mapEventDetailFromApi } from "@/lib/api/data-mappers";
import EventDetailContent from "@/components/sections/events/EventDetailContent";

export default function EventDetailPage() {
  const params = useParams();
  const eventId = typeof params?.eventId === "string" ? params.eventId : "";

  const { data, isLoading, isError } = useQuery({
    queryKey: ["event-detail", eventId],
    queryFn: () => eventService.getEventDetail(eventId),
    enabled: Boolean(eventId),
  });

  const event = useMemo(() => {
    if (!data || typeof data !== "object") return null;
    return mapEventDetailFromApi(data as Record<string, unknown>);
  }, [data]);

  if (!eventId) {
    notFound();
  }

  if (isLoading) {
    return (
      <section className="bg-white py-16 px-6">
        <p className="text-center text-gray-500 text-sm">Loading event\u2026</p>
      </section>
    );
  }

  if (isError || !event) {
    notFound();
  }

  return <EventDetailContent event={event} />;
}
