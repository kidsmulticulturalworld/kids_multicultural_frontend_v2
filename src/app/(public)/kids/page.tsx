import Image from "next/image";
import KidsPageContent from "@/components/sections/kids/KidsPageContent";

export default function KidsPage() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Striped circle — very top-right corner (where navbar meets page) */}
      <Image
        src="/testimonials/striped-circle-right-small.svg"
        alt=""
        width={102}
        height={119}
        className="absolute top-0 right-0 pointer-events-none w-[60px] h-[70px] sm:w-[80px] sm:h-[94px] lg:w-[102px] lg:h-[119px]"
        aria-hidden="true"
      />

      {/* Striped circle — right side, shifted down from top */}
      <Image
        src="/dashboard/striped-circle-half.svg"
        alt=""
        width={156}
        height={225}
        className="absolute top-[340px] right-0 pointer-events-none hidden sm:block sm:w-[100px] sm:h-[144px] lg:w-[156px] lg:h-[225px]"
        aria-hidden="true"
      />

      {/* Striped circle — left side, around row 2 (half circle peeking from left) */}
      <Image
        src="/testimonials/striped-circle-left.svg"
        alt=""
        width={110}
        height={164}
        className="absolute top-[38%] -left-[55px] pointer-events-none hidden sm:block sm:w-[80px] sm:h-[120px] sm:-left-[40px] lg:w-[110px] lg:h-[164px] lg:-left-[55px]"
        aria-hidden="true"
      />

      {/* Striped circle — right side, around row 4-5 */}
      <Image
        src="/testimonials/striped-circle-right-big.svg"
        alt=""
        width={96}
        height={112}
        className="absolute top-[62%] -right-2.5 pointer-events-none hidden lg:block"
        aria-hidden="true"
      />

      {/* Striped circle — bottom left area */}
      <Image
        src="/testimonials/striped-circle-left.svg"
        alt=""
        width={110}
        height={164}
        className="absolute bottom-32 -left-[55px] pointer-events-none hidden sm:block sm:w-[80px] sm:h-[120px] sm:-left-[40px] lg:w-[110px] lg:h-[164px] lg:-left-[55px]"
        aria-hidden="true"
      />

      {/* Small full striped circles scattered between rows */}
      <Image
        src="/kids/striped-circle-small.svg"
        alt=""
        width={52}
        height={52}
        className="absolute top-[28%] left-[12%] pointer-events-none w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] lg:w-[52px] lg:h-[52px]"
        aria-hidden="true"
      />
      <Image
        src="/kids/striped-circle-small.svg"
        alt=""
        width={44}
        height={44}
        className="absolute top-[50%] right-[15%] pointer-events-none w-[28px] h-[28px] sm:w-[36px] sm:h-[36px] lg:w-[44px] lg:h-[44px]"
        aria-hidden="true"
      />
      <Image
        src="/kids/striped-circle-small.svg"
        alt=""
        width={48}
        height={48}
        className="absolute top-[75%] left-[22%] pointer-events-none w-[30px] h-[30px] sm:w-[38px] sm:h-[38px] lg:w-[48px] lg:h-[48px]"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-2 sm:px-6 py-8 sm:py-12 lg:py-16">
        <KidsPageContent />
      </div>
    </section>
  );
}
