"use client";

import { useState } from "react";
import TicketTabs, {
  TicketTabValue,
} from "@/components/dashboard/tickets/TicketTabs";
import TicketEmptyState from "@/components/dashboard/tickets/TicketEmptyState";
import TicketCard from "@/components/dashboard/tickets/TicketCard";
import { mockTickets } from "@/lib/mock-tickets";

export default function TicketsPage() {
  const [activeTab, setActiveTab] = useState<TicketTabValue>("all");

  const filteredTickets = mockTickets.filter((ticket) => {
    if (activeTab === "all") return true;
    if (activeTab === "upcoming") return ticket.status === "upcoming";
    if (activeTab === "past") return ticket.status === "past";
    return true;
  });

  return (
    <div>
      {/* Header */}
      <div className="bg-white px-4 pt-6 pb-4 lg:bg-transparent lg:px-8 lg:pt-8 lg:pb-0">
        <h1 className="text-xl lg:text-2xl font-bold text-text-heading">
          My Tickets
        </h1>
        <p className="text-sm text-text-muted mt-1">
          See all your upcoming and past event tickets.
        </p>
      </div>

      {/* Content */}
      <div className="px-4 pb-6 lg:px-8 lg:pb-8">
        {/* Tabs */}
        <div className="mt-4 lg:mt-6 mb-6">
          <TicketTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        {/* Ticket list or empty state */}
        {filteredTickets.length === 0 ? (
          <TicketEmptyState />
        ) : (
          <div className="flex flex-col gap-4 lg:max-w-5xl">
            {filteredTickets.map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
