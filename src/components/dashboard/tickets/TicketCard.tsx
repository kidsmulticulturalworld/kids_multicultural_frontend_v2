"use client";

import { useState } from "react";
import Image from "next/image";
import { EventTicket } from "@/types/api";

interface TicketCardProps {
  ticket: EventTicket;
}

export default function TicketCard({ ticket }: TicketCardProps) {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <>
      <div className="border border-gray-200 rounded-2xl p-4 lg:p-5 bg-white shadow-card">
        {/* ── Desktop: horizontal layout ── */}
        <div className="hidden lg:flex gap-5">
          {/* Thumbnail */}
          <div className="w-[140px] h-[150px] rounded-xl overflow-hidden bg-gray-100 shrink-0">
            <Image
              src={ticket.imageUrl}
              alt={ticket.eventName}
              width={140}
              height={150}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details + Actions */}
          <div className="flex-1 min-w-0 flex justify-between">
            {/* Left: details */}
            <div>
              {/* Group 1: Name + Location */}
              <h3 className="text-base font-bold text-text-heading">
                {ticket.eventName}
              </h3>
              <div className="flex items-center gap-1.5 mt-1">
                <Image src="/dashboard/icons/map-marker.svg" alt="" width={14} height={14} className="shrink-0" />
                <span className="text-sm text-text-muted">{ticket.location}</span>
              </div>

              {/* Group 2: Date + Time */}
              <div className="flex items-center gap-1.5 mt-3">
                <Image src="/dashboard/icons/calendar-icon.svg" alt="" width={14} height={14} className="shrink-0" />
                <span className="text-sm text-text-muted">{ticket.date}</span>
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <Image src="/dashboard/icons/clock-icon.svg" alt="" width={14} height={14} className="shrink-0" />
                <span className="text-sm text-text-muted">{ticket.time}</span>
              </div>

              {/* Group 3: Purchase date + Price */}
              <p className="text-xs text-text-muted mt-3">
                Purchased on {ticket.purchaseDate}
              </p>
              <p className="text-sm font-bold text-text-heading mt-0.5">
                Price: ${ticket.price.toFixed(2)}
              </p>
            </div>

            {/* Right: actions — vertically centered */}
            <div className="flex items-center shrink-0">
              <div className="flex items-center gap-2">
                {/* Get Direction — upcoming only */}
                {ticket.status === "upcoming" && (
                  <button className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm py-2.5 px-5 rounded-full hover:bg-primary/90 transition-colors">
                    Get Direction
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 1.33301C5.42 1.33301 3.33333 3.41967 3.33333 5.99967C3.33333 9.49967 8 14.6663 8 14.6663C8 14.6663 12.6667 9.49967 12.6667 5.99967C12.6667 3.41967 10.58 1.33301 8 1.33301ZM8 7.66634C7.07333 7.66634 6.33333 6.92634 6.33333 5.99967C6.33333 5.07301 7.07333 4.33301 8 4.33301C8.92667 4.33301 9.66667 5.07301 9.66667 5.99967C9.66667 6.92634 8.92667 7.66634 8 7.66634Z" fill="white"/>
                    </svg>
                  </button>
                )}

                {/* View receipt — always */}
                <div className="relative group">
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-text-muted hover:bg-gray-50 transition-colors" aria-label="View receipt">
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3333 2H2.66667C1.93333 2 1.33333 2.6 1.33333 3.33333V12.6667C1.33333 13.4 1.93333 14 2.66667 14H13.3333C14.0667 14 14.6667 13.4 14.6667 12.6667V3.33333C14.6667 2.6 14.0667 2 13.3333 2ZM13.3333 12.6667H2.66667V3.33333H13.3333V12.6667ZM4 5.33333H12V6.66667H4V5.33333ZM4 8H12V9.33333H4V8ZM4 10.6667H9.33333V12H4V10.6667Z" fill="currentColor"/>
                    </svg>
                  </button>
                  <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 text-xs font-medium text-text-heading bg-white border border-gray-200 rounded-md shadow-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    View receipt
                  </span>
                </div>

                {/* Download ticket — always */}
                <div className="relative group">
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-text-muted hover:bg-gray-50 transition-colors" aria-label="Download ticket">
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.6667 6H10V2H6V6H3.33333L8 10.6667L12.6667 6ZM3.33333 12V13.3333H12.6667V12H3.33333Z" fill="currentColor"/>
                    </svg>
                  </button>
                  <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 text-xs font-medium text-text-heading bg-white border border-gray-200 rounded-md shadow-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    Download ticket
                  </span>
                </div>

                {/* Cancel ticket — upcoming only */}
                {ticket.status === "upcoming" && (
                  <div className="relative group">
                    <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-text-muted hover:bg-gray-50 transition-colors" aria-label="Cancel ticket">
                      <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 1.33301C4.32 1.33301 1.33333 4.31967 1.33333 7.99967C1.33333 11.6797 4.32 14.6663 8 14.6663C11.68 14.6663 14.6667 11.6797 14.6667 7.99967C14.6667 4.31967 11.68 1.33301 8 1.33301ZM10.4733 10.473L9.52667 11.4197L8 9.89301L6.47333 11.4197L5.52667 10.473L7.05333 8.94634L5.52667 7.41967L6.47333 6.47301L8 7.99967L9.52667 6.47301L10.4733 7.41967L8.94667 8.94634L10.4733 10.473Z" fill="currentColor"/>
                      </svg>
                    </button>
                    <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 text-xs font-medium text-text-heading bg-white border border-gray-200 rounded-md shadow-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      Cancel ticket
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile: vertical card layout ── */}
        <div className="lg:hidden">
          {/* Image wrapper — relative for positioning dropdown outside overflow-hidden */}
          <div className="relative mb-4">
            {/* Image with overflow hidden */}
            <div className="rounded-xl overflow-hidden">
              <Image
                src={ticket.imageUrl}
                alt={ticket.eventName}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
            </div>

            {/* Three-dot button — sits on top of image */}
            <button
              onClick={() => setSheetOpen(!sheetOpen)}
              className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-gray-800/40 backdrop-blur-md z-10"
              aria-label="Ticket actions"
            >
              <svg width="4" height="16" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2" cy="2" r="1.5" fill="white"/>
                <circle cx="2" cy="8" r="1.5" fill="white"/>
                <circle cx="2" cy="14" r="1.5" fill="white"/>
              </svg>
            </button>

            {/* Dropdown — positioned outside overflow-hidden, anchored to top-right */}
            {sheetOpen && (
              <>
                {/* Invisible backdrop to close on tap outside */}
                <div className="fixed inset-0 z-20" onClick={() => setSheetOpen(false)} />

                <div className="absolute top-12 right-3 z-30 bg-gray-50 border border-gray-200 rounded-xl shadow-lg w-48">
                  {/* View receipt — always */}
                  <button
                    onClick={() => setSheetOpen(false)}
                    className="w-full flex items-center gap-3 px-4 py-3 text-text-muted active:bg-gray-100 transition-colors rounded-t-xl"
                  >
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.3333 2H2.66667C1.93333 2 1.33333 2.6 1.33333 3.33333V12.6667C1.33333 13.4 1.93333 14 2.66667 14H13.3333C14.0667 14 14.6667 13.4 14.6667 12.6667V3.33333C14.6667 2.6 14.0667 2 13.3333 2ZM13.3333 12.6667H2.66667V3.33333H13.3333V12.6667ZM4 5.33333H12V6.66667H4V5.33333ZM4 8H12V9.33333H4V8ZM4 10.6667H9.33333V12H4V10.6667Z" fill="currentColor"/>
                    </svg>
                    <span className="text-sm font-medium">View receipt</span>
                  </button>

                  <div className="h-px bg-gray-200 mx-3" />

                  {/* Download ticket — always */}
                  <button
                    onClick={() => setSheetOpen(false)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-text-muted active:bg-gray-100 transition-colors ${ticket.status === "past" ? "rounded-b-xl" : ""}`}
                  >
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.6667 6H10V2H6V6H3.33333L8 10.6667L12.6667 6ZM3.33333 12V13.3333H12.6667V12H3.33333Z" fill="currentColor"/>
                    </svg>
                    <span className="text-sm font-medium">Download ticket</span>
                  </button>

                  {/* Cancel ticket — upcoming only */}
                  {ticket.status === "upcoming" && (
                    <>
                      <div className="h-px bg-gray-200 mx-3" />
                      <button
                        onClick={() => setSheetOpen(false)}
                        className="w-full flex items-center gap-3 px-4 py-3 text-red-500 active:bg-red-50 transition-colors rounded-b-xl"
                      >
                        <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 1.33301C4.32 1.33301 1.33333 4.31967 1.33333 7.99967C1.33333 11.6797 4.32 14.6663 8 14.6663C11.68 14.6663 14.6667 11.6797 14.6667 7.99967C14.6667 4.31967 11.68 1.33301 8 1.33301ZM10.4733 10.473L9.52667 11.4197L8 9.89301L6.47333 11.4197L5.52667 10.473L7.05333 8.94634L5.52667 7.41967L6.47333 6.47301L8 7.99967L9.52667 6.47301L10.4733 7.41967L8.94667 8.94634L10.4733 10.473Z" fill="currentColor"/>
                        </svg>
                        <span className="text-sm font-medium">Cancel ticket</span>
                      </button>
                    </>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Details */}
          {/* Group 1: Name + Location */}
          <h3 className="text-base font-bold text-text-heading">
            {ticket.eventName}
          </h3>
          <div className="flex items-center gap-1.5 mt-1">
            <Image src="/dashboard/icons/map-marker.svg" alt="" width={14} height={14} className="shrink-0" />
            <span className="text-sm text-text-muted">{ticket.location}</span>
          </div>

          {/* Group 2: Date + Time */}
          <div className="flex items-center gap-1.5 mt-3">
            <Image src="/dashboard/icons/calendar-icon.svg" alt="" width={14} height={14} className="shrink-0" />
            <span className="text-sm text-text-muted">{ticket.date}</span>
          </div>
          <div className="flex items-center gap-1.5 mt-1">
            <Image src="/dashboard/icons/clock-icon.svg" alt="" width={14} height={14} className="shrink-0" />
            <span className="text-sm text-text-muted">{ticket.time}</span>
          </div>

          {/* Group 3: Purchase date + Price */}
          <p className="text-xs text-text-muted mt-3">
            Purchased on {ticket.purchaseDate}
          </p>
          <p className="text-base font-bold text-primary mt-0.5 mb-4">
            Price: ${ticket.price.toFixed(2)}
          </p>

          {/* Get Direction - full width — upcoming only */}
          {ticket.status === "upcoming" && (
            <button className="w-full flex items-center justify-center gap-2 bg-primary text-white font-semibold text-sm py-3.5 rounded-xl hover:bg-primary/90 transition-colors">
              Get Direction
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1.33301C5.42 1.33301 3.33333 3.41967 3.33333 5.99967C3.33333 9.49967 8 14.6663 8 14.6663C8 14.6663 12.6667 9.49967 12.6667 5.99967C12.6667 3.41967 10.58 1.33301 8 1.33301ZM8 7.66634C7.07333 7.66634 6.33333 6.92634 6.33333 5.99967C6.33333 5.07301 7.07333 4.33301 8 4.33301C8.92667 4.33301 9.66667 5.07301 9.66667 5.99967C9.66667 6.92634 8.92667 7.66634 8 7.66634Z" fill="white"/>
              </svg>
            </button>
          )}
        </div>
      </div>
    </>
  );
}
