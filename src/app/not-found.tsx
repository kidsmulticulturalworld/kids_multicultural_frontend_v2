import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-br from-[#FFF5E6] via-[#E8F4FF] to-[#F3E8FF] overflow-hidden relative">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(52, 145, 232, 0.25) 0%, transparent 45%),
            radial-gradient(circle at 80% 20%, rgba(15, 193, 184, 0.2) 0%, transparent 40%),
            radial-gradient(circle at 50% 80%, rgba(191, 18, 191, 0.15) 0%, transparent 45%)
          `,
        }}
      />

      <div className="relative z-10 max-w-lg w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32">
            <Image
              src="/large-green-half-bubble.svg"
              alt=""
              width={140}
              height={140}
              className="absolute -right-4 -top-2 w-16 opacity-80 animate-pulse"
              aria-hidden
            />
            <Image
              src="/Logo.svg"
              alt="Kids Multicultural World"
              width={120}
              height={110}
              className="relative mx-auto drop-shadow-md"
              priority
            />
          </div>
        </div>

        <p className="text-sm font-bold text-[#3491E8] uppercase tracking-widest mb-2">
          Oops-a-daisy!
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#1F3F66] leading-tight mb-3">
          This page went on an adventure
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
          We looked under the rainbow and behind the stage curtains no page
          here. <br /> Let&apos;s hop back to somewhere fun!
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#3491E8] text-white font-semibold px-8 py-3.5 text-sm shadow-lg shadow-[#3491E8]/30 hover:bg-[#2b7ed0] transition-colors"
          >
            Home sweet home
          </Link>
          <Link
            href="/kids"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border-2 border-[#1F3F66]/20 bg-white/80 text-[#1F3F66] font-semibold px-8 py-3.5 text-sm hover:bg-white transition-colors"
          >
            Meet the kids
          </Link>
        </div>

        <p className="mt-10 text-xs text-gray-500">
          Error 404 · If you followed a link from an email, it might be old or
          mistyped.
        </p>
      </div>
    </div>
  );
}
