import Image from "next/image";

export default function AboutStory() {
  return (
    <section className="relative bg-white py-10 lg:py-20 overflow-hidden">
      <div className="relative z-10 max-w-[1060px] mx-auto px-6 lg:px-10">
        {/* ── Photo ── */}
        <div className="rounded-xl lg:rounded-2xl overflow-hidden border border-gray-200 shadow-sm mb-8 lg:mb-14">
          <Image
            src="/about-us-two.jpeg"
            alt="Kids Multicultural World group photo with CEO"
            width={1060}
            height={580}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* ── Mobile layout: single column ── */}
        <div className="lg:hidden">
          <p className="text-xl font-bold text-text-heading leading-relaxed">
            Kids Multicultural World Academy develops children ages 0–17 into
            confident leaders and responsible global citizens through structured
            talent development, cultural education, international fashion
            festivals, media platforms, and mentorship. Join now.
          </p>

          <span className="relative z-20 inline-block mt-6 mb-8 bg-coral/10 text-coral font-semibold text-sm px-4 py-2 rounded-lg">
            Mission: Uniting a Diverse Nation
          </span>

          <div className="space-y-6">
            <p className="text-base text-text-body leading-relaxed">
              Kids Multicultural World Academy is a global youth leadership and
              talent-development academy coaching children to become confident
              leaders and global citizens. We unite kids from diverse cultures
              through education, creativity, and cultural activism, empowering
              the next generation to lead with purpose, pride, and compassion.
            </p>

            <p className="text-base text-text-body leading-relaxed">
              Serving children ages 0–17, we offer leadership training, fashion,
              modeling, acting, media education, mentorship, bi-weekly
              magazines, and international fashion shows and festivals.
            </p>

            <p className="text-base text-text-body leading-relaxed">
              Founded in 2017 by Queen Ambassador Dr. Krystal Chanchangi, Global
              Cultural Activist and youth advocate, Kids Multicultural World has
              empowered 38,000+ children worldwide, shaping future leaders,
              creatives, and changemakers.
            </p>
          </div>
        </div>

        {/* ── Desktop layout: two columns ── */}
        <div className="hidden lg:flex lg:flex-row lg:gap-20">
          {/* Left column — bold statement + mission badge */}
          <div className="lg:w-[34%] shrink-0">
            <p className="text-xl font-bold text-text-heading leading-relaxed">
              Kids Multicultural World Academy develops children ages 0–17 into
              confident leaders and responsible global citizens through
              structured talent development, cultural education, international
              fashion festivals, media platforms, and mentorship. Join now.
            </p>

            <span className="relative z-20 inline-block mt-24 bg-coral/10 text-coral font-semibold text-sm px-4 py-2 rounded-lg">
              Mission: Uniting a Diverse Nation
            </span>
          </div>

          {/* Right column — body paragraphs */}
          <div className="flex-1 space-y-6">
            <p className="text-base text-text-body leading-relaxed">
              Kids Multicultural World Academy is a global youth leadership and
              talent-development academy coaching children to become confident
              leaders and global citizens. We unite kids from diverse cultures
              through education, creativity, and cultural activism, empowering
              the next generation to lead with purpose, pride, and compassion.
            </p>

            <p className="text-base text-text-body leading-relaxed">
              Serving children ages 0–17, we offer leadership training, fashion,
              modeling, acting, media education, mentorship, bi-weekly
              magazines, and international fashion shows and festivals.
            </p>

            <p className="text-base text-text-body leading-relaxed">
              Founded in 2017 by Queen Ambassador Dr. Krystal Chanchangi, Global
              Cultural Activist and youth advocate, Kids Multicultural World has
              empowered 38,000+ children worldwide, shaping future leaders,
              creatives, and changemakers.
            </p>
          </div>
        </div>
      </div>

      {/* ── Decorative striped quarter-circle — bottom left ── */}
      <div className="absolute -bottom-6 -left-4 lg:-bottom-8 lg:-left-4 w-40 lg:w-[260px] pointer-events-none z-0">
        <Image
          src="/about-us-striped-circle.svg"
          alt=""
          width={168}
          height={251}
          className="w-full h-auto"
          aria-hidden="true"
          loading="lazy"
        />
      </div>
    </section>
  );
}
