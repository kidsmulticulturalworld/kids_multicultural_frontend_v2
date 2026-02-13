import Image from "next/image";
import Link from "next/link";

export default function GetInvolved() {
  return (
    <section className="relative pt-20 lg:pt-28 pb-20 lg:pb-28 overflow-hidden">
      {/* Mesh gradient background — Figma export, optimized by Next.js */}
      <Image
        src="/involved/gradient.png"
        alt=""
        fill
        className="object-cover"
        aria-hidden="true"
        loading="lazy"
        sizes="100vw"
        quality={75}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <h2 className="font-display text-center text-[28px] lg:text-[48px] leading-tight mb-3 lg:mb-4 text-secondary">
          Get Involved
        </h2>

        {/* Subtitle */}
        <p className="text-center text-text-muted text-sm lg:text-base leading-relaxed max-w-[640px] mx-auto mb-10 lg:mb-14">
          Join hands with us as we empower children to embrace their roots,
          celebrate diversity, and shine on a global stage. There are many ways
          to be part of this journey.
        </p>

        {/* Cards grid — 1 col mobile, 2 col desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          {/* Register Your Child card */}
          {/* Outer: frosted glass frame — semi-transparent so gradient bleeds through */}
          <div className="rounded-[28px] lg:rounded-4xl bg-white/20 backdrop-blur-xl border border-white/40 shadow-lg p-2.5 lg:p-3">
            {/* Inner: image top + white bottom */}
            <div className="rounded-[18px] lg:rounded-[22px] overflow-hidden">
              {/* Image — edge-to-edge, fixed aspect ratio */}
              <div className="relative aspect-4/3">
                <Image
                  src="/involved/involved-first.jpg"
                  alt="Child walking in a Kids Multicultural World pageant"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(min-width: 1024px) 550px, 90vw"
                />
              </div>

              {/* White content area */}
              <div className="bg-white px-5 lg:px-7 pt-5 lg:pt-7 pb-6 lg:pb-8">
                <h3 className="font-bold text-secondary text-[22px] lg:text-[28px] mb-1.5 lg:mb-2">
                  Register Your Child
                </h3>
                <p className="text-text-muted text-sm lg:text-base mb-6 lg:mb-8">
                  Now Enrolling for spring programs
                </p>
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2.5 bg-primary text-white font-semibold text-sm lg:text-[15px] pl-6 pr-2.5 py-2.5 rounded-2xl hover:bg-primary/90 transition-colors"
                >
                  Register now
                  <Image
                    src="/home/arrow-icon.svg"
                    alt=""
                    width={28}
                    height={28}
                    className="w-7 h-7"
                    loading="lazy"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Support Our Work card */}
          <div className="rounded-[28px] lg:rounded-4xl bg-white/20 backdrop-blur-xl border border-white/40 shadow-lg p-2.5 lg:p-3">
            {/* Inner: image top + white bottom */}
            <div className="rounded-[18px] lg:rounded-[22px] overflow-hidden">
              {/* Image — edge-to-edge, fixed aspect ratio */}
              <div className="relative aspect-4/3">
                <Image
                  src="/involved/involved-second.jpg"
                  alt="Kid in KMW shirt celebrating with flag"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(min-width: 1024px) 550px, 90vw"
                />
              </div>

              {/* White content area */}
              <div className="bg-white px-5 lg:px-7 pt-5 lg:pt-7 pb-6 lg:pb-8">
                <h3 className="font-bold text-secondary text-[22px] lg:text-[28px] mb-1.5 lg:mb-2">
                  Support our work
                </h3>
                <p className="text-text-muted text-sm lg:text-base mb-6 lg:mb-8">
                  Buy merch. Spread the word.
                </p>
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2.5 bg-white text-primary font-semibold text-sm lg:text-[15px] pl-6 pr-2.5 py-2.5 rounded-2xl border border-primary/40 hover:bg-gray-50 transition-colors"
                >
                  View shop
                  <Image
                    src="/explore/explore-arrow-icon.svg"
                    alt=""
                    width={28}
                    height={28}
                    className="w-7 h-7"
                    loading="lazy"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
