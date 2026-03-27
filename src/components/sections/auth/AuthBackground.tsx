import Image from "next/image";

interface AuthBackgroundProps {
  children: React.ReactNode;
}

export default function AuthBackground({ children }: AuthBackgroundProps) {
  return (
    <section className="bg-white py-0 md:py-16 lg:py-20 px-0 md:px-10 lg:px-16">
      {/* ── Outer rounded container with decorative background ── */}
      <div className="relative max-w-[1280px] mx-auto min-h-[600px] md:min-h-[700px] md:rounded-3xl overflow-hidden">
        {/* ── Background split: decorative left + gradient right (desktop) ── */}
        <div className="absolute inset-0 hidden md:flex">
          {/* Left — light bg with decorative elements */}
          <div className="relative w-1/2 bg-[#f5f7fa]">
            {/* ── Striped circle — top-left corner, clipped ── */}
            <Image
              src="/auth/striped-circle-top-left.svg"
              alt=""
              width={142}
              height={127}
              className="absolute top-0 left-0 w-28 lg:w-36"
              aria-hidden="true"
            />

            {/* ── Yellow star — large, top area ── */}
            <Image
              src="/profile/yellow-star.svg"
              alt=""
              width={45}
              height={45}
              className="absolute top-[10%] left-[30%] w-9 lg:w-11"
              aria-hidden="true"
            />

            {/* ── Faint yellow star — smaller, above/right of large one ── */}
            <Image
              src="/dashboard/faint-yellow-star-third.svg"
              alt=""
              width={30}
              height={30}
              className="absolute top-[6%] left-[42%] w-6 lg:w-8"
              aria-hidden="true"
            />

            {/* ── Small yellow star — near top center ── */}
            <Image
              src="/dashboard/yellow-star-third.svg"
              alt=""
              width={20}
              height={20}
              className="absolute top-[14%] left-[48%] w-4 lg:w-5"
              aria-hidden="true"
            />

            {/* ── Blue/gray star — top right area of left half ── */}
            <Image
              src="/profile/blue-star.svg"
              alt=""
              width={35}
              height={35}
              className="absolute top-[8%] left-[62%] w-6 lg:w-8"
              aria-hidden="true"
            />

            {/* ── Small dots cluster — scattered near stars ── */}
            <div className="absolute top-[12%] left-[38%] w-1.5 h-1.5 rounded-full bg-gray-300/60" />
            <div className="absolute top-[9%] left-[55%] w-1 h-1 rounded-full bg-gray-300/50" />
            <div className="absolute top-[16%] left-[25%] w-1 h-1 rounded-full bg-gray-300/40" />

            {/* ── Pink dot — accent ── */}
            <Image
              src="/profile/pink-circle.svg"
              alt=""
              width={8}
              height={8}
              className="absolute top-[18%] left-[56%] w-1.5 lg:w-2"
              aria-hidden="true"
            />

            {/* ── Blue star — above striped circle, left area ── */}
            <Image
              src="/profile/blue-star.svg"
              alt=""
              width={40}
              height={40}
              className="absolute top-[28%] left-[16%] w-10 lg:w-12"
              aria-hidden="true"
            />

            {/* ── Small blue dot — near blue star ── */}
            <Image
              src="/profile/blue-circle.svg"
              alt=""
              width={8}
              height={8}
              className="absolute top-[26%] left-[24%] w-1.5 lg:w-2"
              aria-hidden="true"
            />

            {/* ── Faint pink star — right side, mid area ── */}
            <Image
              src="/dashboard/pink-star-third.svg"
              alt=""
              width={22}
              height={22}
              className="absolute top-[30%] left-[55%] w-6 lg:w-8 opacity-40"
              aria-hidden="true"
            />

            {/* ── Large striped circle — bottom-left, partially clipped ── */}
            <Image
              src="/testimonials/striped-circle-left.svg"
              alt=""
              width={222}
              height={331}
              className="absolute bottom-[8%] left-[-4%] w-52 lg:w-72"
              aria-hidden="true"
            />

            {/* ── Small striped accent — bottom right area of left half ── */}
            <Image
              src="/shop/striped-circle-top-left.svg"
              alt=""
              width={60}
              height={36}
              className="absolute bottom-[18%] left-[60%] w-10 lg:w-14 opacity-30"
              aria-hidden="true"
            />
          </div>

          {/* Right — CSS mesh gradient */}
          <div
            className="relative w-1/2"
            aria-hidden="true"
            style={{
              background: `
                radial-gradient(circle at 95% 2%, rgba(255, 120, 200, 0.85) 0%, transparent 30%),
                radial-gradient(circle at 80% 8%, rgba(240, 150, 230, 0.6) 0%, transparent 25%),
                radial-gradient(ellipse at 50% 40%, rgba(195, 175, 240, 0.7) 0%, transparent 50%),
                radial-gradient(ellipse at 30% 30%, rgba(210, 195, 245, 0.4) 0%, transparent 45%),
                radial-gradient(ellipse at 75% 80%, rgba(245, 185, 165, 0.65) 0%, transparent 30%),
                radial-gradient(circle at 70% 92%, rgba(255, 210, 80, 0.7) 0%, transparent 18%),
                radial-gradient(circle at 60% 95%, rgba(130, 225, 200, 0.5) 0%, transparent 15%),
                radial-gradient(circle at 50% 90%, rgba(140, 190, 255, 0.4) 0%, transparent 18%),
                linear-gradient(145deg, rgba(245, 240, 255, 0.3) 0%, rgba(215, 195, 250, 0.6) 35%, rgba(220, 195, 240, 0.5) 55%, rgba(240, 205, 210, 0.4) 75%, rgba(230, 225, 215, 0.3) 100%)
              `,
            }}
          />
        </div>

        {/* ── Mobile background: light bg + decorations + gradient strip on right ── */}
        <div className="absolute inset-0 md:hidden bg-[#f5f7fa]">
          {/* Gradient strip on the right edge */}
          <div
            className="absolute top-0 right-0 w-[35%] h-full"
            style={{
              background: `
                radial-gradient(circle at 85% 5%, rgba(255, 120, 200, 0.7) 0%, transparent 40%),
                radial-gradient(ellipse at 60% 40%, rgba(200, 185, 245, 0.4) 0%, transparent 50%),
                radial-gradient(circle at 80% 90%, rgba(255, 210, 80, 0.5) 0%, transparent 25%),
                linear-gradient(160deg, rgba(230, 220, 255, 0.5) 0%, rgba(240, 200, 235, 0.4) 50%, rgba(245, 230, 215, 0.3) 100%)
              `,
            }}
          />

          {/* Yellow star — top-left */}
          <Image
            src="/profile/yellow-star.svg"
            alt=""
            width={40}
            height={40}
            className="absolute top-[2%] left-[5%] w-9"
            aria-hidden="true"
          />

          {/* Blue star — top center-left with dot */}
          <Image
            src="/profile/blue-star.svg"
            alt=""
            width={22}
            height={22}
            className="absolute top-[2%] left-[35%] w-5"
            aria-hidden="true"
          />
          <div className="absolute top-[2.5%] left-[32%] w-1.5 h-1.5 rounded-full bg-gray-300/60" />

          {/* Blue star — top center-right */}
          <Image
            src="/profile/blue-star.svg"
            alt=""
            width={28}
            height={28}
            className="absolute top-[2%] left-[58%] w-6"
            aria-hidden="true"
          />

          {/* Striped circle — left edge, mid-area, partially clipped */}
          <Image
            src="/dashboard/striped-circle-half.svg"
            alt=""
            width={156}
            height={225}
            className="absolute top-[25%] left-[-12%] w-20"
            aria-hidden="true"
          />

          {/* Striped circle — top right area */}
          <Image
            src="/kids/striped-circle-small.svg"
            alt=""
            width={48}
            height={48}
            className="absolute top-[-1%] right-[2%] w-16"
            aria-hidden="true"
          />

          {/* Small blue star — lower left */}
          <Image
            src="/profile/blue-star.svg"
            alt=""
            width={16}
            height={16}
            className="absolute top-[8%] left-[22%] w-3.5"
            aria-hidden="true"
          />
        </div>

        {/* ── Centered content ── */}
        <div className="relative z-10 flex items-center justify-center min-h-[600px] md:min-h-[700px] px-4 sm:px-6 py-8 sm:py-10 md:py-16">
          {children}
        </div>
      </div>
    </section>
  );
}
