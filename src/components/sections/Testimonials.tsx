"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { cn } from "@/lib/utils";

/* =============================================
   TESTIMONIALS DATA
   Add reviews here — every 3 reviews become a new
   carousel "page" (grid), navigable with the arrows.
   `rating` is 1–5 stars.
   ============================================= */

interface Testimonial {
  name: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Stephanie Arroyo",
    rating: 5,
    quote: `It has been a wonderful experience and mentorship! Our little 3 year old daughter has been able to experience being featured in a magazine, being a cover girl, walking in a multicultural festival and opportunity to walk in LA Fashion show! She received a sash and crown as Little Miss California 2024 America Nation, and this has helped open doors for her! It's a great community to work with and I 100% recommend to all.`,
  },
  {
    name: "DayRich Essence Legacy",
    rating: 5,
    quote: `This magazine has brought so much joy to our home, I encourage everyone not to miss the opportunity to be part of this wonderful project.`,
  },
  {
    name: "Enok Niziel",
    rating: 5,
    quote: `What is there to say? Have you bought a copy of their latest issue yet? I hope this article doesn't come across as a sales pitch, as it was not intended that way. Each time I write, I'm very conscious of expressing my personal opinion. You can't buy people like me; you can try to influence me, but it won't work. My reason for writing about this magazine is that I enjoy the content. What I love about this platform is that it goes beyond surface-level differences and recognizes the richness that comes from various backgrounds and experiences. It creates an environment where everyone feels valued and included, regardless of their visible or unseen differences. If you buy a copy today, not only will you enjoy the contents showcasing younger generations' unique skills and talents, but you will also help people in need. Yes, you read that right. This platform was founded by Queen Amb. Dr. Krystal Okeke'Chanchangi, and she goes above and beyond to help her/our community through her charitable activities and works. KidsMulticulturalWorld takes your talented child to the next level through unity, fashion shows, magazine features, modeling, acting classes, and mentorship sections for kids ages 0 to 17 years old. They produce a bimonthly magazine, online modeling and acting classes, and host annual Kids Multicultural Fashion Shows and Festivals Worldwide. Not to mention, they also educate kids to take pride in their cultural heritage, bringing more awareness to multiculturalism to end discrimination, bullying, and segregation, understanding the importance of self-growth, building skills, and capitalizing on their individual talents. It's reasonably priced, and they are great people.`,
  },
  {
    name: "Enjoli Clark",
    rating: 5,
    quote: `Such an amazing organization. I love their mission and the limitless opportunities they provide for youth. Nothing but great experiences thus far.`,
  },
  {
    name: "Irina Littman",
    rating: 5,
    quote: `Ok, parents, magazine readers, or simply fans of America Kids Multicultural World, let me share my honest opinion.
This magazine promotes our children, who are our future, our investment and our world and air. Our children are given a platform to express themselves, be heard, share stories, give advice and encourage others to keep pursuing their dreams. Being heard and seen gives our children confidence and affirmation of their place and value in the society. So wouldn't you support such an altruistic purpose of the magazine? I know that I would and I will. There are numerous magazines and other types of publications that we spend money on, making rich establishments even richer. Well, I refuse to invest in those and commit to invest in what our children can benefit from. I will support and invest into America Kids Multicultural World Magazine in any way shape and form that seems feasible to me. How YOU want to contribute into our children's future - your decision.
Thank you, America Kids Multicultural World for your hard work and equal opportunity you give to each child to express himself/herself.`,
  },
];

/** How many review cards fill one collage page (matches the design's 3-card grid). */
const CARDS_PER_PAGE = 3;

type ThemeKey = "blue" | "peach" | "mint";

const themes: Record<ThemeKey, { card: string; pill: string; link: string }> = {
  blue: {
    card: "bg-[#B9CBEC]",
    pill: "bg-[#93ABDD] text-[#26365A]",
    link: "text-[#3A5488]",
  },
  peach: {
    card: "bg-[#F2D2C2]",
    pill: "bg-[#E88E66] text-[#7A3417]",
    link: "text-[#B5461E]",
  },
  mint: {
    card: "bg-[#A3E7C0]",
    pill: "bg-[#59CE8B] text-[#0E5A32]",
    link: "text-[#0B6B33]",
  },
};

const EXCERPT_THRESHOLD = 150;

/* ---- Photo pool used to fill each collage page ----
   Card slots are filled by the page's reviews; photo slots come from here.
   Enjoli's captioned photo is pinned to the first page as the tall tile. */
type PhotoTile = { src: string; alt: string; caption?: { name: string; sub: string } };

const ENJOLI_PHOTO: PhotoTile = {
  src: "/ENJOLI-CLARK.jpg",
  alt: "Enjoli Clark holding her Kids Multicultural World magazine feature",
  caption: { name: "Enjoli Clark", sub: "Featured in KMW Magazine" },
};

const widePhotos: PhotoTile[] = [
  { src: "/testimonials/kids-peace.jpg", alt: "Children smiling together and making peace signs" },
  { src: "/testimonials/field-run.jpg", alt: "A child running joyfully through a field" },
];

const tallPhotos: PhotoTile[] = [
  { src: "/testimonials/curly-girl.jpg", alt: "A smiling girl with curly hair" },
  { src: "/testimonials/bubbles.jpg", alt: "A child playing with giant soap bubbles" },
];

const singlePhotos: PhotoTile[] = [
  { src: "/testimonials/boy-running.jpg", alt: "A young boy running joyfully down a path" },
  { src: "/testimonials/girl-jumping.jpg", alt: "A child leaping with joy outdoors" },
  { src: "/testimonials/paint-face.jpg", alt: "A child covered in colorful paint, laughing" },
  { src: "/testimonials/curly-girl.jpg", alt: "A smiling girl with curly hair" },
  { src: "/testimonials/bubbles.jpg", alt: "A child playing with giant soap bubbles" },
];

const photoPool = [ENJOLI_PHOTO, ...widePhotos, ...tallPhotos, ...singlePhotos].filter(
  (photo, index, photos) =>
    photos.findIndex((candidate) => candidate.src === photo.src) === index,
);

/** A tile is either a photo or a review card, with an optional grid span. */
type Tile =
  | { kind: "photo"; photo: PhotoTile; span?: "wide" | "tall" }
  | { kind: "card"; reviewIndex: number; theme: ThemeKey };

const CARD_THEMES: ThemeKey[] = ["blue", "peach", "mint"];

/** Build the 12-cell collage grid for one page. */
function buildPageTiles(pageIndex: number): Tile[] {
  const start = pageIndex * CARDS_PER_PAGE;
  const reviewsOnPage = testimonials.slice(start, start + CARDS_PER_PAGE);

  const wide = widePhotos[pageIndex % widePhotos.length];
  const tall = pageIndex === 0 ? ENJOLI_PHOTO : tallPhotos[pageIndex % tallPhotos.length];
  const availableSingles = photoPool.filter(
    (photo) => photo.src !== wide.src && photo.src !== tall.src,
  );
  const singles = availableSingles.map(
    (_, i) => availableSingles[(i + pageIndex) % availableSingles.length],
  );

  // Card tiles for this page's reviews (padded slots fall back to photos)
  const card = (slot: number): Tile =>
    reviewsOnPage[slot]
      ? { kind: "card", reviewIndex: start + slot, theme: CARD_THEMES[slot] }
      : { kind: "photo", photo: singles[(slot + 3) % singles.length] };

  return [
    { kind: "photo", photo: wide, span: "wide" }, // r1 c1-2
    { kind: "photo", photo: singles[0] }, // r1 c3
    card(0), // r1 c4 (blue, top-right)
    { kind: "photo", photo: tall, span: "tall" }, // r2-3 c1
    card(1), // r2 c2 (peach)
    card(2), // r2 c3 (mint)
    { kind: "photo", photo: singles[1] }, // r2 c4
    { kind: "photo", photo: singles[2] }, // r3 c2
    { kind: "photo", photo: singles[3] }, // r3 c3
    { kind: "photo", photo: singles[4] }, // r3 c4
  ];
}

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex justify-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar
          key={i}
          className={cn(
            "w-4 h-4 lg:w-[18px] lg:h-[18px]",
            i < rating ? "text-[#F5B301]" : "text-black/15",
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const pageCount = Math.max(1, Math.ceil(testimonials.length / CARDS_PER_PAGE));
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState<"right" | "left">("right");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeTheme, setActiveTheme] = useState<ThemeKey>("peach");

  const active = activeIndex === null ? null : testimonials[activeIndex];
  const tiles = buildPageTiles(page);

  const goTo = (next: number) => {
    if (next < 0 || next > pageCount - 1) return;
    setDirection(next > page ? "right" : "left");
    setPage(next);
  };

  const openReview = (index: number, theme: ThemeKey) => {
    setActiveTheme(theme);
    setActiveIndex(index);
  };

  // Close modal on Escape + lock body scroll while open
  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [activeIndex]);

  return (
    <section className="relative bg-white">
      {/* Inverted cloud at top — flipped vertically to transition from #E5F1FC Impact bg to white */}
      <div className="absolute top-0 left-0 right-0 w-full leading-none z-10">
        <Image
          src="/explore/cloud.svg"
          alt=""
          width={1448}
          height={207}
          className="w-full h-auto scale-y-[-1]"
          aria-hidden="true"
          loading="lazy"
        />
      </div>

      <div className="pt-60 lg:pt-96 pb-10 lg:pb-16">
        {/* Heading area with decorative icons */}
        <div className="max-w-[1200px] mx-auto px-6 relative mb-10 lg:mb-16">
          {/* Camera decoration */}
          <Image
            src="/testimonials/camera.svg"
            alt=""
            width={121}
            height={118}
            className="absolute left-2 lg:left-[25%] -top-1 lg:-top-16 w-[35px] lg:w-[100px]"
            aria-hidden="true"
            loading="lazy"
          />

          {/* Red hat decoration */}
          <Image
            src="/testimonials/red-hat.svg"
            alt=""
            width={163}
            height={163}
            className="absolute right-2 lg:right-[12%] top-20 lg:top-0 w-[45px] lg:w-[130px]"
            aria-hidden="true"
            loading="lazy"
          />

          {/* Heading */}
          <h2 className="font-display text-center text-[28px] lg:text-[48px] leading-tight mb-3 lg:mb-4">
            <span className="text-text-heading">What </span>
            <span className="text-primary">Parents</span>
            <span className="text-text-heading"> Are Saying</span>
          </h2>

          {/* Subtitle */}
          <p className="text-center text-text-muted text-sm lg:text-base leading-relaxed max-w-[600px] mx-auto">
            Real voices. Real impact. Hear from parents whose children have
            grown in confidence, creativity, and cultural awareness through Kids
            Multicultural World.
          </p>
        </div>

        {/* Collage carousel — grid of photos + cards with white gutters */}
        <div className="w-full overflow-hidden">
          <div
            key={page}
            className={cn(
              "grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 auto-rows-[13rem] sm:auto-rows-[15rem] lg:auto-rows-[19rem]",
              direction === "right" ? "slide-in-right" : "slide-in-left",
            )}
          >
            {tiles.map((tile, i) => {
              const spanClass =
                tile.kind === "photo" && tile.span === "wide"
                  ? "col-span-2"
                  : tile.kind === "photo" && tile.span === "tall"
                    ? "row-span-2"
                    : "";

              if (tile.kind === "photo") {
                return (
                  <div
                    key={`photo-${i}`}
                    className={cn("relative overflow-hidden", spanClass)}
                  >
                    <Image
                      src={tile.photo.src}
                      alt={tile.photo.alt}
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes={
                        tile.span === "wide"
                          ? "(min-width: 1024px) 50vw, 100vw"
                          : "(min-width: 1024px) 25vw, 50vw"
                      }
                    />
                    {tile.photo.caption && (
                      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 via-black/25 to-transparent px-4 pt-10 pb-3.5">
                        <p className="text-white font-semibold text-sm">
                          {tile.photo.caption.name}
                        </p>
                        <p className="text-white/80 text-xs">
                          {tile.photo.caption.sub}
                        </p>
                      </div>
                    )}
                  </div>
                );
              }

              const t = testimonials[tile.reviewIndex];
              const theme = themes[tile.theme];
              const isLong = t.quote.length > EXCERPT_THRESHOLD;

              return (
                <div
                  key={`card-${tile.reviewIndex}`}
                  className={cn(
                    "flex flex-col items-center justify-center text-center overflow-hidden px-4 sm:px-5 lg:px-7 py-5",
                    theme.card,
                  )}
                >
                  <StarRow rating={t.rating} />

                  <p
                    className={cn(
                      "mt-3 lg:mt-4 text-[13px] sm:text-sm lg:text-base leading-snug lg:leading-relaxed text-[#2C3E5A]",
                      isLong && "line-clamp-3 lg:line-clamp-4",
                    )}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {isLong && (
                    <button
                      type="button"
                      onClick={() => openReview(tile.reviewIndex, tile.theme)}
                      className={cn(
                        "mt-1.5 text-xs lg:text-sm font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity cursor-pointer",
                        theme.link,
                      )}
                    >
                      Read more
                    </button>
                  )}

                  <span
                    className={cn(
                      "mt-3 lg:mt-4 inline-block rounded-full px-4 lg:px-5 py-1.5 lg:py-2 text-xs lg:text-sm font-semibold",
                      theme.pill,
                    )}
                  >
                    {t.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel controls — petals decoration + prev/next arrows */}
        <div className="relative max-w-[1200px] mx-auto px-6 mt-6 lg:mt-8">
          <Image
            src="/testimonials/petals.svg"
            alt=""
            width={128}
            height={127}
            className="hidden sm:block absolute left-6 -top-1 w-12 lg:w-16 pointer-events-none"
            aria-hidden="true"
            loading="lazy"
          />

          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => goTo(page - 1)}
              disabled={page === 0}
              aria-label="Previous testimonials"
              className={cn(
                "w-11 h-11 flex items-center justify-center rounded-full border transition-colors",
                page === 0
                  ? "border-gray-300 text-gray-300 cursor-not-allowed"
                  : "border-primary text-primary hover:bg-primary hover:text-white cursor-pointer",
              )}
            >
              <FiArrowLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => goTo(page + 1)}
              disabled={page === pageCount - 1}
              aria-label="Next testimonials"
              className={cn(
                "w-11 h-11 flex items-center justify-center rounded-full transition-colors",
                page === pageCount - 1
                  ? "border border-gray-300 text-gray-300 cursor-not-allowed"
                  : "bg-primary text-white hover:bg-primary-hover cursor-pointer",
              )}
            >
              <FiArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Read-more modal ── */}
      {active && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Full review from ${active.name}`}
        >
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setActiveIndex(null)}
          />

          <div className="relative z-10 w-full max-w-[560px] max-h-[85vh] overflow-y-auto rounded-3xl bg-white p-6 lg:p-9 shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close review"
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer"
            >
              <span className="text-xl leading-none" aria-hidden="true">
                &times;
              </span>
            </button>

            <div className="mt-2">
              <StarRow rating={active.rating} />
            </div>

            <p className="text-center text-[15px] lg:text-base leading-relaxed text-[#2C3E5A] whitespace-pre-line mt-5 mb-7">
              &ldquo;{active.quote}&rdquo;
            </p>

            <div className="flex justify-center">
              <span
                className={cn(
                  "inline-block rounded-full px-5 py-2 text-sm font-semibold",
                  themes[activeTheme].pill,
                )}
              >
                {active.name}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
