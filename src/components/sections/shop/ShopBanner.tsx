import Image from "next/image";

export default function ShopBanner() {
  return (
    <section className="bg-white py-10 md:py-14 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-5 md:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[28px] md:rounded-[32px] bg-gradient-to-br from-[#e4def8] via-[#f3eefc] to-white min-h-[340px] md:min-h-[380px] lg:min-h-[420px]">
          {/* Decorative layer */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <Image
              src="/shop/striped-circle-top-left.svg"
              alt=""
              width={142}
              height={127}
              className="absolute top-0 left-0 w-20 md:w-28 lg:w-36"
            />
            <Image
              src="/dashboard/striped-circle-half.svg"
              alt=""
              width={156}
              height={225}
              className="absolute -top-8 right-[38%] w-16 md:w-24 lg:w-[140px] opacity-80 hidden sm:block"
            />
            <Image
              src="/shop/striped-circle-top-right.svg"
              alt=""
              width={120}
              height={120}
              className="absolute -top-4 -right-6 w-16 md:w-24 opacity-80"
            />
            <Image
              src="/dashboard/striped-circle-quatre.svg"
              alt=""
              width={142}
              height={96}
              className="absolute bottom-6 left-[42%] w-16 md:w-24 opacity-70 hidden md:block"
            />
            <Image
              src="/dashboard/striped-circle-quatre.svg"
              alt=""
              width={96}
              height={64}
              className="absolute top-[42%] left-[8%] w-12 md:w-16 opacity-60"
            />
            <Image
              src="/shop/striped-circle-bottom-right.svg"
              alt=""
              width={140}
              height={140}
              className="absolute -bottom-8 right-[28%] w-20 md:w-28 opacity-70"
            />
            <Image
              src="/dashboard/yellow-star-third.svg"
              alt=""
              width={131}
              height={232}
              className="absolute bottom-0 left-0 w-16 md:w-24 lg:w-[110px]"
            />
            <Image
              src="/shop/top-star.svg"
              alt=""
              width={48}
              height={48}
              className="absolute top-8 left-[36%] w-7 md:w-10"
            />
            <Image
              src="/shop/star-by-hoodie.svg"
              alt=""
              width={56}
              height={56}
              className="absolute top-10 right-[34%] w-8 md:w-12 hidden sm:block"
            />
            <Image
              src="/shop/cut-star-right.svg"
              alt=""
              width={80}
              height={80}
              className="absolute bottom-16 right-4 w-12 md:w-16"
            />
            <Image
              src="/dashboard/pink-star-full.svg"
              alt=""
              width={48}
              height={48}
              className="absolute bottom-24 left-[28%] w-8 md:w-10"
            />
            <Image
              src="/dashboard/faint-yellow-star-third.svg"
              alt=""
              width={80}
              height={60}
              className="absolute top-[30%] right-[22%] w-10 md:w-14 hidden lg:block"
            />
            <Image
              src="/white-cloud.svg"
              alt=""
              width={400}
              height={50}
              className="absolute -bottom-6 left-0 w-[55%] opacity-40"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-6 lg:gap-4 items-center px-6 py-10 md:px-10 md:py-12 lg:px-14 lg:py-8">
            <div className="max-w-[640px]">
              <p className="font-display text-[#1a2744] text-[26px] md:text-[34px] lg:text-[40px] leading-tight mb-5">
                Represent your culture. Represent your community. Represent Kids
                Multicultural World!
              </p>
              <p className="text-[#FC6B33] font-geist font-semibold text-sm md:text-base lg:text-lg leading-relaxed">
                All Kids Multicultural World Ambassadors are required to have an
                official T-shirt.
              </p>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <Image
                src="/shop/star-by-hoodie.svg"
                alt=""
                width={40}
                height={40}
                className="absolute -top-2 left-8 w-7 md:w-9 hidden lg:block"
                aria-hidden="true"
              />
              <Image
                src="/shop/tshirt-banner.jpeg"
                alt="Kids Multicultural World official T-shirt"
                width={520}
                height={520}
                className="w-[70%] max-w-[340px] lg:w-full lg:max-w-[400px] h-auto drop-shadow-sm object-contain"
                sizes="(max-width: 1024px) 60vw, 400px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
