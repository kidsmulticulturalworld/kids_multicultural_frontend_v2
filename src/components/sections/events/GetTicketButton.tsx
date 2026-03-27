"use client";

import { useState } from "react";
import Image from "next/image";
import TicketModal from "./TicketModal";
import type { TicketType } from "./eventsData";

interface GetTicketButtonProps {
  eventTitle: string;
  tickets: TicketType[];
}

export default function GetTicketButton({
  eventTitle,
  tickets,
}: GetTicketButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:opacity-90 transition-opacity shrink-0 cursor-pointer"
        style={{
          background: "#3491E8",
          borderRadius: "13.33px",
          padding: "12px 16px",
        }}
      >
        Get Ticket
        <Image src="/dashboard/icons/arrow.svg" alt="" width={20} height={20} />
      </button>

      <TicketModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        eventTitle={eventTitle}
        tickets={tickets}
      />
    </>
  );
}
