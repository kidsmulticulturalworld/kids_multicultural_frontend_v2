"use client";

import { useState } from "react";
import Link from "next/link";
import type { TicketType } from "./eventsData";

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventTitle: string;
  tickets: TicketType[];
}

export default function TicketModal({
  isOpen,
  onClose,
  eventTitle,
  tickets,
}: TicketModalProps) {
  const [quantities, setQuantities] = useState<Record<string, number>>(
    Object.fromEntries(tickets.map((t) => [t.id, 0]))
  );
  const [expandedId, setExpandedId] = useState<string | null>(tickets[0]?.id ?? null);

  if (!isOpen) return null;

  const total = tickets.reduce(
    (sum, t) => sum + t.price * (quantities[t.id] || 0),
    0
  );

  const updateQuantity = (id: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta),
    }));
  };

  const toggleExpanded = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4">
        <div
          className="bg-white w-full md:max-w-[620px] max-h-[90vh] overflow-y-auto rounded-t-2xl md:rounded-2xl p-6 md:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-2">
            <h2 className="text-xl md:text-2xl font-bold text-black">
              Select Tickets
            </h2>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer shrink-0"
              aria-label="Close modal"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12 4L4 12" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M4 4L12 12" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <p className="text-[#1E1E1E]/60 text-sm md:text-base mb-6">
            Choose the tickets you want for {eventTitle}
          </p>

          {/* Ticket cards */}
          <div className="flex flex-col gap-4 mb-6">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="rounded-xl p-4 md:p-5"
                style={{ border: "1px solid #77777733" }}
              >
                {/* Top row: name + price + counter */}
                <div className="flex items-center justify-between gap-3 mb-1">
                  <h3 className="text-base md:text-lg font-bold text-black">
                    {ticket.name}
                  </h3>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-base md:text-lg font-bold text-black">
                      ${ticket.price.toFixed(2)}
                    </span>
                    {/* Quantity counter */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(ticket.id, -1)}
                        className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-gray-400 transition-colors cursor-pointer"
                        aria-label={`Decrease ${ticket.name} quantity`}
                      >
                        <svg width="12" height="2" viewBox="0 0 12 2" fill="none">
                          <path d="M1 1H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </button>
                      <span className="text-base font-medium text-black w-4 text-center">
                        {quantities[ticket.id]}
                      </span>
                      <button
                        onClick={() => updateQuantity(ticket.id, 1)}
                        className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-gray-400 transition-colors cursor-pointer"
                        aria-label={`Increase ${ticket.name} quantity`}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M6 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Subtitle */}
                <p className="text-[#1E1E1E]/60 text-sm mb-3">
                  {ticket.subtitle}
                </p>

                {/* Whats included toggle */}
                <button
                  onClick={() => toggleExpanded(ticket.id)}
                  className="flex items-center justify-between w-full text-[#3491E8] text-sm font-medium cursor-pointer"
                >
                  Whats included?
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={`transition-transform ${expandedId === ticket.id ? "rotate-180" : ""}`}
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Inclusions list */}
                {expandedId === ticket.id && (
                  <div
                    className="mt-3 rounded-lg p-4"
                    style={{ background: "#C1DEF820" }}
                  >
                    <ul className="flex flex-col gap-2">
                      {ticket.inclusions.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-[#1E1E1E] text-sm"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1E1E1E] shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-base md:text-lg font-bold text-black">
              Total
            </span>
            <span className="text-xl md:text-2xl font-bold text-[#3491E8]">
              ${total.toFixed(2)}
            </span>
          </div>

          {/* Continue to Checkout */}
          <Link
            href="/events/checkout-auth"
            className="block w-full text-center text-white font-semibold text-base md:text-lg py-4 rounded-xl hover:opacity-90 transition-opacity"
            style={{ background: "#3491E8" }}
          >
            Continue to Checkout
          </Link>
        </div>
      </div>
    </>
  );
}
