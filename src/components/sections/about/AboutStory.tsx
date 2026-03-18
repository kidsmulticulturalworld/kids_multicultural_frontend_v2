import Image from "next/image";

export default function AboutStory() {
  return (
    <section className="relative bg-white py-10 lg:py-20 overflow-hidden">
      <div className="relative z-10 max-w-[1060px] mx-auto px-6 lg:px-10">
        {/* ── Photo ── */}
        <div className="rounded-xl lg:rounded-2xl overflow-hidden border border-gray-200 shadow-sm mb-8 lg:mb-14">
          <Image
            src="/about-us.svg"
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
            The Kids Multicultural World is a cultural activism, Fashion,
            Modeling and Acting Academy focused on Uniting a diverse Nation of
            Kids ages 0 month - 17 years.
          </p>

          <span className="relative z-20 inline-block mt-6 mb-8 bg-coral/10 text-coral font-semibold text-sm px-4 py-2 rounded-lg">
            Mission: Uniting a Diverse Nation
          </span>

          <div className="space-y-6">
            <p className="text-base text-text-body leading-relaxed">
              We produce a bimonthly magazine, online Modeling &amp; acting
              classes and host annual Kids Multicultural Fashion Shows &amp;
              Festivals Worldwide.
            </p>

            <p className="text-base text-text-body leading-relaxed">
              We educate Kids to take pride in cultural heritage, bring more
              awareness to multiculturalism to end discrimination, bullying and
              segregation- understanding the importance of self-growth, building
              skills, and capitalizing on their individual talents.
            </p>

            <p className="text-base text-text-body leading-relaxed">
              This organization was founded on May 1st, 2017 by CEO Queen Amb.
              Dr. Krystal Okeke&apos;Chanchangi. A global cultural activist and
              voice for the next generation. The CEO is focused on eliminating
              discrimination, bullying, and segregation.
            </p>
          </div>
        </div>

        {/* ── Desktop layout: two columns ── */}
        <div className="hidden lg:flex lg:flex-row lg:gap-20">
          {/* Left column — bold statement + mission badge */}
          <div className="lg:w-[34%] shrink-0">
            <p className="text-xl font-bold text-text-heading leading-relaxed">
              The Kids Multicultural World is a cultural activism, Fashion,
              Modeling and Acting Academy focused on Uniting a diverse Nation of
              Kids ages 0 month - 17 years.
            </p>

            <span className="relative z-20 inline-block mt-24 bg-coral/10 text-coral font-semibold text-sm px-4 py-2 rounded-lg">
              Mission: Uniting a Diverse Nation
            </span>
          </div>

          {/* Right column — body paragraphs */}
          <div className="flex-1 space-y-6">
            <p className="text-base text-text-body leading-relaxed">
              We produce a bimonthly magazine, online Modeling &amp; acting
              classes and host annual Kids Multicultural Fashion Shows &amp;
              Festivals Worldwide.
            </p>

            <p className="text-base text-text-body leading-relaxed">
              We educate Kids to take pride in cultural heritage, bring more
              awareness to multiculturalism to end discrimination, bullying and
              segregation- understanding the importance of self-growth, building
              skills, and capitalizing on their individual talents.
            </p>

            <p className="text-base text-text-body leading-relaxed">
              This organization was founded on May 1st, 2017 by CEO Queen Amb.
              Dr. Krystal Okeke&apos;Chanchangi. A global cultural activist and
              voice for the next generation. The CEO is focused on eliminating
              discrimination, bullying, and segregation.
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
