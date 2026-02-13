import Image from "next/image";
import Link from "next/link";

export default function Impact() {
  return (
    <section className="-mt-px pt-24 lg:pt-40 pb-24 lg:pb-36 bg-[#E5F1FC]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <h2 className="font-display text-center text-[28px] lg:text-[48px] leading-tight mb-3 lg:mb-4">
          <span className="text-text-heading">Impacted Over</span>
          <br />
          <span className="text-primary">38,000 Kids Globally</span>
        </h2>

        {/* Subtitle */}
        <p className="text-center text-text-muted text-sm lg:text-base leading-relaxed max-w-[600px] mx-auto mb-12 lg:mb-16">
          Your child&apos;s future is a masterpiece — let&apos;s start painting
          it today!
        </p>

        {/* Stars + Gallery wrapper */}
        <div className="relative">
          {/* Left star mascot — peeks above top-left of card */}
          <Image
            src="/impact/star-left.svg"
            alt=""
            width={163}
            height={163}
            className="absolute -left-2 lg:left-6 -top-[30px] lg:-top-[60px] w-[60px] lg:w-[140px] z-0"
            aria-hidden="true"
            loading="lazy"
          />

          {/* Right star mascot — peeks above top-right of card, larger & higher */}
          <Image
            src="/impact/star-right.svg"
            alt=""
            width={237}
            height={237}
            className="absolute -right-2 lg:right-2 -top-[45px] lg:-top-[100px] w-[75px] lg:w-[180px] z-0"
            aria-hidden="true"
            loading="lazy"
          />

          {/* Gallery card */}
          <div className="relative z-10 bg-white rounded-2xl lg:rounded-3xl shadow-sm border border-gray-200/60 p-2 lg:p-5">
            {/* Desktop gallery */}
            <Image
              src="/impact/Gallery.png"
              alt="Gallery of kids impacted globally by Kids Multicultural World"
              width={1264}
              height={813}
              className="hidden lg:block w-full h-auto rounded-2xl"
              loading="lazy"
              sizes="(min-width: 1024px) 1200px, 100vw"
            />
            {/* Mobile gallery */}
            <Image
              src="/impact/gallery-mobile.png"
              alt="Gallery of kids impacted globally by Kids Multicultural World"
              width={353}
              height={391}
              className="block lg:hidden w-full h-auto rounded-xl"
              loading="lazy"
              sizes="(max-width: 1023px) 100vw"
            />
          </div>
        </div>

        {/* Gallery link */}
        <div className="text-center mt-10 lg:mt-14">
          <Link
            href="/gallery"
            className="text-primary font-medium text-sm lg:text-base hover:underline"
          >
            Go to Kids Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
