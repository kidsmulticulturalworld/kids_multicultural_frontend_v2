import Link from "next/link";

export const metadata = {
  title: "Privacy",
  description:
    "How Kids Multicultural World handles information for families and children.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#E8EDF2] py-6 sm:py-10 lg:py-14 px-3 sm:px-6">
      <div
        className="max-w-[800px] mx-auto rounded-2xl sm:rounded-3xl border-[8px] sm:border-[12px] border-[#3491E833] overflow-hidden"
        style={{ background: "#3491E814" }}
      >
        <div className="relative overflow-hidden bg-header">
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)`,
              backgroundSize: "18px 18px",
            }}
          />
          <div className="relative z-10 text-center py-10 sm:py-12 px-4">
            <h1 className="font-display text-3xl sm:text-4xl text-white font-bold">
              Privacy & safety
            </h1>
            <p className="mt-2 text-white/80 text-sm">
              For families · United States
            </p>
          </div>
        </div>
        <div className="h-1.5 bg-[#3491E8]" />
        <div className="px-5 py-8 sm:px-10 sm:py-10 space-y-6 text-sm sm:text-base text-gray-700 leading-relaxed">
          <p>
            Kids Multicultural World respects your family&apos;s privacy. This
            page summarizes how we treat information when you use our website,
            register for programs, or sign up for updates.
          </p>
          <p>
            If you are under 13, a parent or guardian should help you use this
            site and approve any sign-ups. We collect only what we need to run
            our programs, process payments, and stay in touch about events you
            care about.
          </p>
          <p>
            We do not sell personal information. For questions or requests about
            your data, contact us at{" "}
            <a
              href="mailto:global@kidsmulticulturalworld.org"
              className="text-[#3491E8] font-medium hover:underline"
            >
              global@kidsmulticulturalworld.org
            </a>
            .
          </p>
          <p className="text-gray-600 text-sm">
            For full legal terms, see our{" "}
            <Link href="/terms" className="text-[#3491E8] font-medium hover:underline">
              Terms of Use
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
