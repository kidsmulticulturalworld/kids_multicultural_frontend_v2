"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { FiX } from "react-icons/fi";

const topNavItems = [
  { icon: "/dashboard/icons/dashboard-icon.svg", href: "/dashboard", label: "Dashboard" },
  { icon: "/dashboard/icons/profile-icon.svg", href: "/dashboard/profile", label: "Profile" },
  { icon: "/dashboard/icons/ticket-account-icon.svg", href: "/dashboard/community", label: "Community" },
  { icon: "/dashboard/icons/order-bool-descending-variant.svg", href: "/dashboard/enrollments", label: "Enrollments" },
];

const bottomNavItems = [
  { icon: "/dashboard/icons/settings.svg", href: "/dashboard/settings", label: "Settings" },
  { icon: "/dashboard/icons/logout.svg", href: "/logout", label: "Logout" },
];

interface DashboardMobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DashboardMobileDrawer({ isOpen, onClose }: DashboardMobileDrawerProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 lg:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-screen w-[260px] z-50 bg-[#1F3F66] flex flex-col transition-transform duration-300 ease-in-out lg:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header: Logo + Close */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3">
          <Link
            href="/"
            className="w-14 h-14 flex items-center justify-center bg-white/90 rounded-xl shadow-sm"
            onClick={onClose}
          >
            <Image
              src="/Logo.svg"
              alt="Kids Multicultural World"
              width={40}
              height={36}
            />
          </Link>

          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 text-white/70 hover:bg-white/20 transition-colors"
            aria-label="Close menu"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Separator */}
        <div className="mx-5 h-px bg-white/20 mb-4" />

        {/* Top nav items */}
        <nav className="flex flex-col gap-1.5 px-4">
          {topNavItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 px-3 py-3 rounded-xl transition-colors",
                  active
                    ? "bg-enroll text-white shadow-blue"
                    : "text-white/60 hover:bg-white/10 hover:text-white/80"
                )}
              >
                <Image
                  src={item.icon}
                  alt=""
                  width={22}
                  height={22}
                  className={cn(!active && "opacity-60")}
                />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Bottom nav items */}
        <nav className="flex flex-col gap-1.5 px-4 pb-6">
          {bottomNavItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 px-3 py-3 rounded-xl transition-colors",
                  active
                    ? "bg-enroll text-white shadow-blue"
                    : "text-white/60 hover:bg-white/10 hover:text-white/80"
                )}
              >
                <Image
                  src={item.icon}
                  alt=""
                  width={22}
                  height={22}
                  className={cn(!active && "opacity-60")}
                />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
