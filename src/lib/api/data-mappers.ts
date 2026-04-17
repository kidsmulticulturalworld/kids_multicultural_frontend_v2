import { mediaUrl } from "@/lib/media";
import type { EventTicket } from "@/types/api";
import type { Product } from "@/components/sections/shop/shopData";
import type { Kid } from "@/components/sections/kids/kidsData";
import type {
  ActivityHighlight,
  ContestDetail,
  Contestant,
  EventDetail,
  TicketType,
} from "@/components/sections/events/eventsData";

/** Fallback when API returns no image path */
const PLACEHOLDER_EVENT = "/dashboard/upcoming-events.svg";
const PLACEHOLDER_SHOP = "/dashboard/shopping-image.svg";
const PLACEHOLDER_MAG = "/dashboard/front-magazine.svg";
const PLACEHOLDER_TICKET = "/dashboard/ticket-image.svg";

function fmtDate(d: unknown): string {
  if (!d) return "";
  try {
    const dt = new Date(String(d));
    if (Number.isNaN(dt.getTime())) return String(d);
    return dt.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return String(d);
  }
}

export type DashboardMagazine = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export function mapDashboardMagazine(m: Record<string, unknown>): DashboardMagazine {
  return {
    id: Number(m.id),
    title: String(m.name ?? "Magazine"),
    description: "Stories, tips, and spotlights from our community.",
    image: mediaUrl(m.cover_image as string) || PLACEHOLDER_MAG,
  };
}

export type DashboardEvent = {
  id: number;
  title: string;
  date: string;
  location: string;
  price: number;
  image: string;
};

export function mapDashboardEvent(e: Record<string, unknown>): DashboardEvent {
  const loc = [e.brief_location1, e.brief_location2].filter(Boolean).join(", ");
  return {
    id: Number(e.id),
    title: String(e.name ?? "Event"),
    date: String(e.date_in_words ?? fmtDate(e.event_date)),
    location: loc || String(e.location ?? ""),
    price: Number(e.price ?? 0),
    image: mediaUrl(e.cover_image as string) || PLACEHOLDER_EVENT,
  };
}

export type DashboardSubscription = {
  id: number;
  title: string;
  price: number;
  date: string;
  location: string;
  image: string;
  enrolled?: boolean;
};

export function mapDashboardSubscription(
  s: Record<string, unknown>
): DashboardSubscription {
  const loc =
    [s.brief_location1, s.brief_location2].filter(Boolean).join(", ") ||
    String(s.location ?? "—");
  return {
    id: Number(s.id),
    title: String(s.name ?? s.title ?? "Subscription"),
    price: Number(s.price ?? 0),
    date: fmtDate(s.date ?? s.start_date),
    location: loc,
    image: mediaUrl(s.cover_image as string) || "/dashboard/modelling-class-image.png",
    enrolled: Boolean(s.enrolled ?? s.active ?? s.is_enrolled),
  };
}

/** Pull the first array found under common Django / DRF keys. */
export function normalizeArrayResponse(
  raw: unknown,
  keys: string[]
): unknown[] {
  if (Array.isArray(raw)) return raw;
  if (raw && typeof raw === "object") {
    const o = raw as Record<string, unknown>;
    for (const k of keys) {
      const v = o[k];
      if (Array.isArray(v)) return v;
    }
  }
  return [];
}

export function parseDashboardPayload(raw: unknown): {
  magazines: DashboardMagazine[];
  events: DashboardEvent[];
  subscriptions: DashboardSubscription[];
} {
  if (!raw || typeof raw !== "object") {
    return { magazines: [], events: [], subscriptions: [] };
  }
  const o = raw as Record<string, unknown>;
  const magazines = normalizeArrayResponse(o, [
    "magazine",
    "magazines",
    "mag",
  ]).map((x) => mapDashboardMagazine(x as Record<string, unknown>));
  const events = normalizeArrayResponse(o, [
    "events",
    "event",
    "upcoming_events",
  ]).map((x) => mapDashboardEvent(x as Record<string, unknown>));
  const subscriptions = normalizeArrayResponse(o, [
    "subscriptions",
    "subscription",
    "classes",
    "class",
  ]).map((x) => mapDashboardSubscription(x as Record<string, unknown>));
  return { magazines, events, subscriptions };
}

export function parseKidsViewResponse(raw: unknown): {
  kids: Kid[];
  page: number;
  pages: number;
} {
  if (!raw || typeof raw !== "object") {
    return { kids: [], page: 1, pages: 1 };
  }
  const o = raw as Record<string, unknown>;
  const kidsRaw = normalizeArrayResponse(o, ["kids", "results", "data"]);
  const page = Number(o.page ?? o.current_page ?? 1);
  const pages = Number(
    o.pages ?? o.total_pages ?? o.num_pages ?? (kidsRaw.length ? 1 : 1)
  );
  return {
    kids: kidsRaw.map((k) => mapProfileKid(k as Record<string, unknown>)),
    page: Number.isFinite(page) && page > 0 ? page : 1,
    pages: Number.isFinite(pages) && pages > 0 ? pages : 1,
  };
}

export function parseMagazineListResponse(raw: unknown): MagazineGridItem[] {
  const rows = normalizeArrayResponse(raw, [
    "magazine",
    "magazines",
    "results",
    "data",
  ]);
  return rows.map((r) => mapMagazineRow(r as Record<string, unknown>));
}

export function parseShopListResponse(raw: unknown): Product[] {
  const rows = normalizeArrayResponse(raw, [
    "shop",
    "products",
    "results",
    "data",
  ]);
  return rows.map((r) => mapShopRowToProduct(r as Record<string, unknown>));
}

export function mapShopRowToProduct(row: Record<string, unknown>): Product {
  const id = Number(row.id);
  const sizeStr = String(row.size ?? "");
  const sizes = sizeStr
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean);
  let category: Product["category"] = "hoodies";
  if (row.is_shirt) category = "t-shirts";
  if (row.is_bonnet) category = "bonnets";
  if (row.is_hoodie) category = "hoodies";

  return {
    id: `product-${id}`,
    name: String(row.name ?? "Product"),
    price: Number(row.price ?? 0),
    image: mediaUrl(row.cover_image as string) || PLACEHOLDER_SHOP,
    category,
    size: sizes.length ? sizes : ["One size"],
  };
}

export type MagazineGridItem = {
  id: number;
  title: string;
  description: string;
  coverImage: string;
};

export function mapMagazineRow(row: Record<string, unknown>): MagazineGridItem {
  return {
    id: Number(row.id),
    title: String(row.name ?? "Magazine"),
    description: `From $${Number(row.price ?? 0)} — explore stories and tips inside.`,
    coverImage: mediaUrl(row.cover_image as string) || PLACEHOLDER_MAG,
  };
}

export function mapProfileKid(row: Record<string, unknown>): Kid {
  return {
    id: String(row.id),
    name: String(row.name ?? "Member"),
    age: typeof row.age === "number" ? row.age : 0,
    image: mediaUrl(row.profile_photo as string) || "/to-vote-for.jpg",
    ethnicity: String(row.ethnicity ?? "—"),
    gender: String(row.gender ?? "—"),
    height: String(row.height ?? "—"),
    weight: String(row.weight ?? "—"),
    eyeColor: String(row.eye_color ?? "—"),
    hair: String(row.hair_color ?? "—"),
    dressSize: String(row.dress_size ?? "—"),
  };
}

export function mapKidsDetailToKid(
  row: Record<string, unknown>,
  fallbackId: string
): Kid {
  const u = row.user as Record<string, unknown> | undefined;
  const name =
    row.name ??
    (u
      ? `${u.first_name ?? ""} ${u.last_name ?? ""}`.trim()
      : "Member");
  return {
    id: String(row.id ?? fallbackId),
    name: String(name),
    age: typeof row.age === "number" ? row.age : Number(row.age ?? 0) || 0,
    image: mediaUrl(row.profile_photo as string) || "/to-vote-for.jpg",
    ethnicity: String(row.ethnicity ?? "—"),
    gender: String(row.gender ?? "—"),
    height: String(row.height ?? "—"),
    weight: String(row.weight ?? "—"),
    eyeColor: String(row.eye_color ?? "—"),
    hair: String(row.hair_color ?? "—"),
    dressSize: String(row.dress_size ?? "—"),
  };
}

export function mapEventViewRow(row: Record<string, unknown>) {
  const id = String(row.id ?? "");
  return {
    id,
    title: String(row.name ?? "Event"),
    image: mediaUrl(row.cover_image as string) || PLACEHOLDER_EVENT,
    date: String(row.date_in_words ?? fmtDate(row.event_date)),
    location:
      [row.brief_location1, row.brief_location2].filter(Boolean).join(", ") ||
      String(row.location ?? ""),
    price: `$${row.price ?? 0}`,
    badge: "Join us",
  };
}

export function mapContestListRow(row: Record<string, unknown>) {
  return {
    id: String(row.id ?? ""),
    title: String(row.name_of_event ?? "Contest"),
    image: mediaUrl(row.cover_image as string) || "/ongoing-contest-image.svg",
    date: fmtDate(row.start_date),
    location: String(row.location ?? ""),
    price: "",
  };
}

function mapTicketTypeRow(t: Record<string, unknown>, idx: number): TicketType {
  const inc = t.inclusions ?? t.includes;
  return {
    id: String(t.id ?? `ticket-${idx}`),
    name: String(t.name ?? "Ticket"),
    subtitle: String(t.subtitle ?? ""),
    price: Number(t.price ?? 0),
    inclusions: Array.isArray(inc)
      ? inc.map(String)
      : typeof inc === "string"
        ? [inc]
        : ["Admission"],
  };
}

function defaultHighlights(description: string): ActivityHighlight[] {
  const d = description.trim();
  return [
    {
      title: "About this event",
      description:
        d.slice(0, 220) || "Join us for music, culture, and community fun.",
      color: "peach",
    },
    {
      title: "What to expect",
      description:
        "Performances, activities, and memories for kids and families.",
      color: "mint",
    },
    {
      title: "For families",
      description:
        "A welcoming space to celebrate diversity and creativity together.",
      color: "blue",
    },
  ];
}

/** Maps `event_detail` API payload to the event page UI model. */
export function mapEventDetailFromApi(raw: Record<string, unknown>): EventDetail {
  const id = String(raw.id ?? "");
  const priceNum = Number(raw.price ?? 0);
  const loc =
    [raw.brief_location1, raw.brief_location2].filter(Boolean).join(", ") ||
    String(raw.location ?? "");
  const desc = String(
    raw.description ?? raw.about ?? raw.details ?? ""
  );
  const ticketRows = normalizeArrayResponse(raw, [
    "ticket_set",
    "tickets",
    "ticket_types",
    "ticket_options",
  ]);
  const tickets: TicketType[] =
    ticketRows.length > 0
      ? ticketRows.map((row, i) =>
          mapTicketTypeRow(row as Record<string, unknown>, i)
        )
      : [
          {
            id: "general",
            name: "General admission",
            subtitle: "Includes event access",
            price: priceNum || 0,
            inclusions: ["Event access"],
          },
        ];

  const fullDate = String(
    raw.date_in_words ?? fmtDate(raw.event_date ?? raw.date)
  );
  const timeStr = String(raw.startTime ?? raw.time ?? "");

  return {
    id,
    title: String(raw.name ?? "Event"),
    image: mediaUrl(raw.cover_image as string) || PLACEHOLDER_EVENT,
    date: fullDate,
    fullDate,
    time: timeStr,
    location: loc || "—",
    price: priceNum ? `$${priceNum}` : "—",
    description: desc || "Details coming soon.",
    highlights: defaultHighlights(desc),
    tickets,
  };
}

export function unwrapContestResponse(raw: unknown): {
  detail: Record<string, unknown>;
  contestants: Record<string, unknown>[];
} {
  if (!raw || typeof raw !== "object") {
    return { detail: {}, contestants: [] };
  }
  const o = raw as Record<string, unknown>;
  const nested = o.contest;
  if (nested && typeof nested === "object") {
    const detail = nested as Record<string, unknown>;
    const contestants = normalizeArrayResponse(o, [
      "contestants",
      "contestant",
      "results",
    ]) as Record<string, unknown>[];
    return { detail, contestants };
  }
  const contestants = normalizeArrayResponse(o, [
    "contestants",
    "contestant",
    "results",
  ]) as Record<string, unknown>[];
  return { detail: o, contestants };
}

export function mapContestDetailFromApi(
  raw: Record<string, unknown>
): ContestDetail {
  const id = String(raw.id ?? "");
  const start = fmtDate(raw.start_date);
  const end = fmtDate(raw.end_date);
  const dateRange =
    start && end ? `${start} – ${end}` : start || end || "—";
  const prizeRows = normalizeArrayResponse(raw, ["prizes", "prize", "rewards"]);
  const prizes =
    prizeRows.length > 0
      ? prizeRows.map((p) => {
          if (typeof p === "string") return p;
          const o = p as Record<string, unknown>;
          return String(o.text ?? o.title ?? o.name ?? p);
        })
      : ["Prize details announced on the contest page."];

  return {
    id,
    title: String(raw.name_of_event ?? raw.name ?? "Contest"),
    image: mediaUrl(raw.cover_image as string) || "/ongoing-contest-image.svg",
    dateRange,
    location: String(raw.location ?? "—"),
    contestantCount: Number(
      raw.contestant_count ?? raw.contestants_count ?? 0
    ),
    prizes,
    disclaimer: String(
      raw.disclaimer ??
        raw.policy ??
        "Vote purchases are subject to the contest terms."
    ),
    votesOrg: String(
      raw.votes_org ?? raw.organization ?? "Kids Multicultural World"
    ),
    deadline: raw.end_date
      ? new Date(String(raw.end_date)).toISOString()
      : new Date().toISOString(),
  };
}

export function mapContestantRows(
  rows: Record<string, unknown>[]
): Contestant[] {
  return rows.map((row, i) => ({
    id: String(row.id ?? i),
    name:
      String(row.name || "").trim() ||
      String(row.display_name || "").trim() ||
      [row.first_name, row.last_name].filter(Boolean).join(" ").trim() ||
      "Contestant",
    image:
      mediaUrl(row.profile_photo as string) ||
      mediaUrl(row.image as string) ||
      "/to-vote-for.jpg",
    totalVotes: Number(row.total_votes ?? row.votes ?? 0),
  }));
}

export function flattenEventTicketsResponse(raw: Record<string, unknown>): EventTicket[] {
  const list = raw.tickets as Record<string, unknown>[] | undefined;
  if (!Array.isArray(list)) return [];

  const out: EventTicket[] = [];
  for (const rec of list) {
    const purchaseDate = fmtDate(rec.date);
    const subs = rec.tickets as Record<string, unknown>[] | undefined;
    if (!Array.isArray(subs)) continue;
    for (const t of subs) {
      const ev = t.event as Record<string, unknown> | undefined;
      const eventDate = ev?.event_date ? new Date(String(ev.event_date)) : null;
      const status: EventTicket["status"] =
        eventDate && !Number.isNaN(eventDate.getTime()) && eventDate > new Date()
          ? "upcoming"
          : "past";
      const loc =
        ev &&
        [ev.brief_location1, ev.brief_location2].filter(Boolean).join(", ");
      out.push({
        id: Number(t.id),
        eventName: String(ev?.name ?? rec.name ?? "Event"),
        location: loc || String(ev?.location ?? ""),
        date: String(ev?.date_in_words ?? fmtDate(ev?.event_date)),
        time: String(ev?.startTime ?? ""),
        price: Number(t.price ?? rec.price ?? 0),
        purchaseDate,
        imageUrl: mediaUrl(ev?.cover_image as string) || PLACEHOLDER_TICKET,
        status,
      });
    }
  }
  return out;
}
