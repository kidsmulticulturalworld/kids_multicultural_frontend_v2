import Image from "next/image";

export default function ShopBanner() {
  return (
    <section className="bg-white py-10 md:py-14 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-5 md:px-6 lg:px-10">
        {/* Desktop / Tablet */}
        <Image
          src="/shop-promotional-banner.svg"
          alt="Kids Multicultural World Designers & Hoodies — Designer T Shirts, Hoodies, and Bonnets"
          width={1280}
          height={340}
          className="hidden md:block w-full h-auto"
          sizes="(max-width: 1024px) 90vw, 1280px"
          priority
        />

        {/* Mobile */}
        <div className="block md:hidden">
          <Image
            src="/shop-promotional-banner-mobile.svg"
            alt="Kids Multicultural World Designers & Hoodies — Designer T Shirts, Hoodies, and Bonnets"
            width={600}
            height={700}
            className="w-full h-auto"
            sizes="100vw"
            priority
          />

          <p className="text-[#FC6B33] font-geist font-semibold text-sm leading-[22px] mt-6 px-1">
            &ldquo;Every purchase supports our mission of empowering kids around
            the world through culture and creativity.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
