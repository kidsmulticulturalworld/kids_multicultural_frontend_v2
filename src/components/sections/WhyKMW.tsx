import Image from "next/image";

const benefits = [
  { title: "Real World Exposure", image: "/why/first-child.svg" },
  { title: "Real World Exposure", image: "/why/second-child.svg" },
  { title: "Trusted by Families", image: "/why/third-child.svg" },
  { title: "Seen and Celebrated", image: "/why/fourth-child.svg" },
];

export default function WhyKMW() {
  return (
    <section className="py-14 lg:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <h2 className="font-display text-center text-[28px] lg:text-[48px] leading-tight mb-4 lg:mb-5">
          <span className="text-text-heading">Why </span>
          <span className="text-primary">Kids Multicultural World?</span>
        </h2>

        {/* Subtitle */}
        <p className="text-center text-text-muted text-sm lg:text-base leading-relaxed max-w-[640px] mx-auto mb-10 lg:mb-14">
          Because raising culturally aware, confident kids starts with exposure,
          expression, and education. At KMW, we don&apos;t just teach — we
          ignite a lifelong love for diversity and creativity.
        </p>

        {/* Cards grid — 1 col mobile, 4 col desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-[36px] lg:rounded-[36px] group"
            >
              {/* Card image — shorter on mobile, taller on desktop */}
              <div className="aspect-square lg:aspect-3/4 relative">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(min-width: 1024px) 25vw, 100vw"
                />

                {/* Bottom gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

                {/* Label */}
                <span
                  className="absolute bottom-4 left-0 right-0 text-center text-white font-display text-lg lg:text-base"
                  style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
                >
                  {benefit.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
