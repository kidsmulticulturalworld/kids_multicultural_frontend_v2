import Image from "next/image";

const partners = [
  { name: "CBS 2", logo: "/trusted/zero-two.svg", width: 90, height: 60 },
  { name: "The Los Angeles Tribune", logo: "/trusted/la-tribune.svg", width: 200, height: 50 },
  { name: "WR", logo: "/trusted/wr-image.svg", width: 100, height: 50 },
  { name: "ABC 7 Chicago", logo: "/trusted/abc-chicago.svg", width: 80, height: 60 },
];

export default function PressPartners() {
  return (
    <section className="py-10 lg:py-14 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section label */}
        <p className="text-center text-gray-500 text-sm lg:text-base mb-8 lg:mb-10">
          Trusted by reputable brands
        </p>

        {/* Logos row */}
        <div className="flex items-center justify-center gap-8 lg:gap-16">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className="h-8 lg:h-14 w-auto object-contain transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
