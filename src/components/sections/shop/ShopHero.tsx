import Image from "next/image";

export default function ShopHero() {
  return (
    <section className="relative overflow-hidden">
      {/* ── Background: solid color matching header ── */}
      <div className="absolute inset-0 z-0 bg-header" />

      {/* ── Pink/reddish tint — radiates from center outward ── */}
      <div
        className="absolute inset-0 z-1 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(255, 105, 180, 0.25) 0%, transparent 75%)",
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
      <div className="relative z-10 flex flex-col items-center px-6 pt-10 pb-28 lg:pt-24 lg:pb-56">
        <h1 className="font-display text-white text-[48px] lg:text-[80px] text-center mb-3 lg:mb-5">
          Shop
        </h1>
        <p className="text-white/70 text-center text-sm tracking-[0.1em] lg:text-xl lg:tracking-[0.15em] max-w-2xl">
          Stylish, comfy, and culture-loving apparel for kids and families.
        </p>
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
