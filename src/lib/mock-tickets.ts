import { EventTicket } from "@/types/api";

/**
 * Legacy mock tickets — not used; My Tickets loads `POST /api/event_tickets` via
 * `eventService.getEventTickets` and `flattenEventTicketsResponse`.
 *
 * Original mock data (do not delete):
 * ─────────────────────────────────────────────────────────────────────────────
 * [
 *   {
 *     id: 1,
 *     eventName: "Kids Fashion Parade Showdown",
 *     ...
 *   },
 * ]
 */
export const mockTickets: EventTicket[] = [];
