"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const topNavItems = [
  { icon: "/dashboard/icons/dashboard-icon.svg", href: "/dashboard", label: "Dashboard" },
  { icon: "/dashboard/icons/profile-icon.svg", href: "/dashboard/profile", label: "Profile" },
  { icon: "/dashboard/icons/ticket-account-icon.svg", href: "/dashboard/tickets", label: "Tickets" },
  { icon: "/dashboard/icons/order-bool-descending-variant.svg", href: "/dashboard/enrollments", label: "Enrollments" },
];

const bottomNavItems = [
  { icon: "/dashboard/icons/settings.svg", href: "/dashboard/settings", label: "Settings" },
  { icon: "/dashboard/icons/logout.svg", href: "/logout", label: "Logout" },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-[88px] hidden lg:flex flex-col items-center z-40 bg-[#1F3F66]">
      {/* Logo in white rounded container */}
      <Link
        href="/"
        className="mt-5 mb-3 w-14 h-14 flex items-center justify-center bg-white/90 rounded-xl shadow-sm"
      >
        <Image
          src="/Logo.svg"
          alt="Kids Multicultural World"
          width={40}
          height={36}
        />
      </Link>

      {/* Separator line */}
      <div className="w-10 h-px bg-white/20 mb-4" />

      {/* Top navigation icons */}
      <nav className="flex flex-col items-center gap-2.5">
        {topNavItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              title={item.label}
              className={cn(
                "w-[50px] h-[50px] flex items-center justify-center rounded-xl transition-colors",
                active
                  ? "bg-enroll text-white shadow-blue"
                  : "bg-white/8 border border-white/10 text-white/50 hover:bg-white/14 hover:text-white/70"
              )}
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={22}
                height={22}
                className={cn(!active && "opacity-60")}
              />
            </Link>
          );
        })}
      </nav>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom icons */}
      <nav className="flex flex-col items-center gap-2.5 mb-6">
        {bottomNavItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              title={item.label}
              className={cn(
                "w-[50px] h-[50px] flex items-center justify-center rounded-xl transition-colors",
                active
                  ? "bg-enroll text-white shadow-blue"
                  : "bg-white/8 border border-white/10 text-white/50 hover:bg-white/14 hover:text-white/70"
              )}
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={22}
                height={22}
                className={cn(!active && "opacity-60")}
              />
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
