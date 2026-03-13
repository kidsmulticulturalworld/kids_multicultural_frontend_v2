import Image from "next/image";

export default function ClassesHero() {
  return (
    <section className="relative overflow-hidden">
      {/* ── Background: solid color matching header ── */}
      <div className="absolute inset-0 z-0 bg-header" />

      {/* ── Pink/reddish tint — radiates from center outward ── */}
      <div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 70% at 50% 80%, rgba(255, 105, 180, 0.25) 0%, transparent 75%)",
        }}
      />

      {/* ── Grid pattern overlay (28px grid) ── */}
      <div
        className="absolute inset-0 z-2 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.06) 0px,
              rgba(255, 255, 255, 0.06) 1px,
              transparent 1px,
              transparent 28px
            ),
            repeating-linear-gradient(
              0deg,
              rgba(255, 255, 255, 0.06) 0px,
              rgba(255, 255, 255, 0.06) 1px,
              transparent 1px,
              transparent 28px
            )
          `,
          maskImage:
            "radial-gradient(ellipse 90% 90% at 50% 45%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 90% at 50% 45%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 60%, transparent 100%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center px-5 pt-8 pb-24 md:px-6 md:pt-10 md:pb-32 lg:pt-20 lg:pb-52">
        {/* Heading */}
        <h1 className="font-display text-white text-[36px] md:text-[48px] lg:text-[80px] text-center mb-3 lg:mb-5">
          Classes
        </h1>

        {/* Subtitle */}
        <p className="text-white/70 text-center text-xs md:text-sm lg:text-lg max-w-[320px] md:max-w-[500px] lg:max-w-[700px] leading-relaxed mb-8 md:mb-10 lg:mb-14">
          Unlock your child&apos;s talent in modeling, acting, and life skills
          with our fun, supportive programs. Watch their confidence soar!
        </p>

        {/* Video frame with decorative strings */}
        <div className="relative w-full max-w-[500px] md:max-w-[740px] lg:max-w-[908px]">
          {/* ── Decorative corner strings (percentage-based so they scale with frame) ── */}
          <Image
            src="/strings-left-top.svg"
            alt=""
            width={49}
            height={49}
            className="absolute w-[5%] pointer-events-none z-10"
            style={{ top: "-3.5%", left: "-3%" }}
            aria-hidden="true"
          />
          <Image
            src="/strings-right-top.svg"
            alt=""
            width={49}
            height={49}
            className="absolute w-[5%] pointer-events-none z-10"
            style={{ top: "-3.5%", right: "-3%" }}
            aria-hidden="true"
          />
          <Image
            src="/strings-left-bottom.svg"
            alt=""
            width={49}
            height={49}
            className="absolute w-[5%] pointer-events-none z-10"
            style={{ bottom: "-3.5%", left: "-3%" }}
            aria-hidden="true"
          />
          <Image
            src="/strings-right-bottom.svg"
            alt=""
            width={49}
            height={49}
            className="absolute w-[5%] pointer-events-none z-10"
            style={{ bottom: "-3.5%", right: "-3%" }}
            aria-hidden="true"
          />

          {/* ── Video: frame + image + overlay + play button ── */}
          <button
            className="relative block w-full cursor-pointer group"
            aria-label="Play classes video"
            style={{ aspectRatio: "908 / 502" }}
          >
            {/* Gradient border frame (sits on top as the outer shell) */}
            <Image
              src="/class-gradient-frame.svg"
              alt=""
              width={908}
              height={502}
              className="absolute inset-0 w-full h-full z-3 pointer-events-none"
              aria-hidden="true"
            />

            {/* Thumbnail image — inset to sit inside the gradient stroke */}
            <div
              className="absolute overflow-hidden"
              style={{ inset: "1.3%", borderRadius: "3.2%" }}
            >
              <Image
                src="/video-image-classes.jpg"
                alt="Kids Multicultural World classes video"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 908px"
                priority
              />

              {/* Dark overlay — light so image stays visible */}
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Play button */}
            <div className="absolute inset-0 z-4 flex items-center justify-center">
              <div className="w-14 h-14 lg:w-[82px] lg:h-[82px] bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/50 group-hover:scale-110 transition-all duration-200">
                <svg
                  className="w-5 h-5 lg:w-6 lg:h-6 text-white ml-0.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* ── Cloud wave transition ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 w-full leading-none">
        <Image
          src="/white-cloud.svg"
          alt=""
          width={1448}
          height={170}
          className="w-full h-auto"
          aria-hidden="true"
          loading="lazy"
        />
      </div>
    </section>
  );
}
