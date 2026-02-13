import Image from "next/image";

export default function Testimonials() {
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

      {/* Content area */}
      <div className="pt-60 lg:pt-96 pb-32 lg:pb-44">
        {/* Heading area with decorative icons */}
        <div className="max-w-[1200px] mx-auto px-6 relative mb-10 lg:mb-14">
          {/* Camera decoration — left of heading on mobile, above-left on desktop */}
          <Image
            src="/testimonials/camera.svg"
            alt=""
            width={121}
            height={118}
            className="absolute left-2 lg:left-[25%] -top-1 lg:-top-16 w-[35px] lg:w-[100px]"
            aria-hidden="true"
            loading="lazy"
          />

          {/* Red hat decoration — right side near subtitle on mobile, near heading on desktop */}
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

        {/* Full-bleed testimonials gallery */}
        <div className="w-full">
          {/* Desktop gallery */}
          <Image
            src="/testimonials/testimonials-gallery.svg"
            alt="Parent testimonials about Kids Multicultural World"
            width={1448}
            height={598}
            className="hidden lg:block w-full h-auto"
            loading="lazy"
            sizes="(min-width: 1024px) 100vw"
          />
          {/* Mobile gallery */}
          <Image
            src="/testimonials/testimonials-gallery-mobile.svg"
            alt="Parent testimonials about Kids Multicultural World"
            width={393}
            height={304}
            className="block lg:hidden w-full h-auto"
            loading="lazy"
            sizes="(max-width: 1023px) 100vw"
          />
        </div>

        {/* Arrows + petals decoration */}
        <div className="max-w-[1200px] mx-auto px-6 relative mt-6 lg:mt-10">
          {/* Petals decoration — bottom-left */}
          <Image
            src="/testimonials/petals.svg"
            alt=""
            width={128}
            height={127}
            className="absolute left-2 lg:left-6 -top-6 lg:-top-6 w-[45px] lg:w-[100px]"
            aria-hidden="true"
            loading="lazy"
          />

          {/* Navigation arrows — centered */}
          <div className="flex items-center justify-center gap-3">
            <button aria-label="Previous testimonials">
              <Image
                src="/testimonials/arrow-left.svg"
                alt=""
                width={42}
                height={42}
                className="w-10 lg:w-10 h-10 lg:h-10"
                loading="lazy"
              />
            </button>
            <button aria-label="Next testimonials">
              <Image
                src="/testimonials/arrow-right.svg"
                alt=""
                width={42}
                height={42}
                className="w-10 lg:w-10 h-10 lg:h-10"
                loading="lazy"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
