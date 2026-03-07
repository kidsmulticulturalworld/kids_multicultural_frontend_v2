import Image from "next/image";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import DashboardTopBar from "@/components/layout/DashboardTopBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white lg:bg-[#1F3F66]">
      {/* ── Sidebar ── */}
      <DashboardSidebar />

      {/* ── Main Area (right of sidebar) ── */}
      <div className="ml-0 lg:ml-[88px] p-0 lg:p-4 min-h-screen flex flex-col">
        {/* ── Top Bar — white background, rounded top ── */}
        <DashboardTopBar />

        {/* ── Content Panel — gradient background, rounded bottom ── */}
        <div className="relative flex-1 mx-3 mb-3 mt-2 lg:mx-0 lg:mb-0 lg:mt-0 rounded-none lg:rounded-b-2xl lg:rounded-t-none overflow-hidden">
          {/* Mesh Gradient Background — Mobile (stronger) */}
          <div className="absolute inset-0 z-0 lg:hidden">
            <div className="absolute inset-0 bg-white" />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 80% at 15% 35%, rgba(172, 214, 255, 0.6) 0%, transparent 65%)",
              }}
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 70% at 90% 25%, rgba(232, 180, 255, 0.55) 0%, transparent 65%)",
              }}
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 65% 80%, rgba(255, 170, 200, 0.65) 0%, transparent 60%)",
              }}
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 45% at 30% 90%, rgba(232, 180, 255, 0.5) 0%, transparent 60%)",
              }}
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 50% 35% at 50% 95%, rgba(255, 230, 150, 0.4) 0%, transparent 60%)",
              }}
            />
          </div>

          {/* Mesh Gradient Background — Desktop */}
          <div className="absolute inset-0 z-0 hidden lg:block">
            <div className="absolute inset-0 bg-white" />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 70% at 20% 40%, rgba(172, 214, 255, 0.35) 0%, transparent 70%)",
              }}
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 50% 60% at 85% 30%, rgba(232, 180, 255, 0.3) 0%, transparent 70%)",
              }}
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 50% 50% at 70% 90%, rgba(255, 182, 193, 0.25) 0%, transparent 70%)",
              }}
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 40% 30% at 50% 95%, rgba(255, 230, 150, 0.2) 0%, transparent 70%)",
              }}
            />
          </div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
            <Image
              src="/dashboard/striped-circle-half.svg"
              alt=""
              width={156}
              height={225}
              className="absolute -top-6 right-[30%] opacity-80"
              aria-hidden="true"
            />

            <Image
              src="/dashboard/striped-circle-major.svg"
              alt=""
              width={168}
              height={251}
              className="absolute bottom-0 -left-6 opacity-70"
              aria-hidden="true"
            />

            <Image
              src="/dashboard/striped-circle-quatre.svg"
              alt=""
              width={142}
              height={96}
              className="absolute bottom-24 right-[15%] opacity-60"
              aria-hidden="true"
            />

            <Image
              src="/dashboard/pink-star-third.svg"
              alt=""
              width={232}
              height={144}
              className="absolute top-20 -right-12"
              aria-hidden="true"
            />

            <Image
              src="/dashboard/pink-star-full.svg"
              alt=""
              width={73}
              height={73}
              className="absolute top-[15%] right-[25%]"
              aria-hidden="true"
            />

            <Image
              src="/dashboard/yellow-star-third.svg"
              alt=""
              width={131}
              height={232}
              className="absolute bottom-[20%] -left-8"
              aria-hidden="true"
            />

            <Image
              src="/dashboard/faint-yellow-star-third.svg"
              alt=""
              width={143}
              height={103}
              className="absolute bottom-10 left-[45%]"
              aria-hidden="true"
            />

            <Image
              src="/dashboard/pink-star-full.svg"
              alt=""
              width={90}
              height={90}
              className="absolute bottom-16 left-[35%]"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(55%) sepia(60%) saturate(500%) hue-rotate(185deg) brightness(95%)",
              }}
              aria-hidden="true"
            />

            <Image
              src="/dashboard/pink-star-full.svg"
              alt=""
              width={50}
              height={50}
              className="absolute bottom-40 right-[20%]"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(55%) sepia(60%) saturate(500%) hue-rotate(185deg) brightness(95%)",
              }}
              aria-hidden="true"
            />

            {/* Repeated decorative elements */}
            <Image
              src="/dashboard/striped-circle-half.svg"
              alt=""
              width={140}
              height={200}
              className="absolute top-[40%] -right-10 opacity-70"
              aria-hidden="true"
            />

            <Image
              src="/dashboard/pink-star-third.svg"
              alt=""
              width={180}
              height={112}
              className="absolute top-[50%] -left-12"
              aria-hidden="true"
            />
          </div>

          {/* Page Content */}
          <div className="relative z-2">{children}</div>
        </div>
      </div>
    </div>
  );
}
