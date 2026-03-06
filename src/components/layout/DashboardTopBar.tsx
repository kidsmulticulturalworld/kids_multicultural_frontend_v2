"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiMenu } from "react-icons/fi";
import DashboardMobileDrawer from "./DashboardMobileDrawer";

export default function DashboardTopBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="bg-[#1F3F66] lg:bg-white lg:rounded-t-2xl px-3 lg:px-6 py-3 lg:py-3.5 lg:border-b lg:border-gray-100">
      {/* ── Mobile Layout ── */}
      <div className="lg:hidden">
        {/* Row 1: Logo + icons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDrawerOpen(true)}
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 transition-colors"
              aria-label="Open menu"
            >
              <FiMenu className="w-5 h-5 text-white/70" />
            </button>

            <Link href="/">
              <Image
                src="/Logo.svg"
                alt="Kids Multicultural World"
                width={40}
                height={36}
              />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 transition-colors">
              <Image
                src="/dashboard/icons/bell.svg"
                alt="Notifications"
                width={20}
                height={20}
                className="brightness-0 invert opacity-70"
              />
            </button>

            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 transition-colors">
              <Image
                src="/dashboard/icons/cart.svg"
                alt="Cart"
                width={20}
                height={20}
                className="brightness-0 invert opacity-70"
              />
            </button>

            <div
              className="w-10 h-10 rounded-full p-[2px]"
              style={{
                background:
                  "conic-gradient(from 180deg, #0EC1B8, #15BC3C, #BF12BF, #0EC1B8)",
              }}
            >
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/dashboard/profile-image.jpg"
                  alt="User avatar"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px bg-white/15 my-3 -mx-2" />

        {/* Row 2: Search bar */}
        <div className="flex items-center bg-white/10 border border-white/20 rounded-xl px-4 py-3 w-full">
          <FiSearch className="w-4 h-4 text-white/50 shrink-0" />
          <input
            type="text"
            placeholder="Search for anything on our website"
            className="flex-1 min-w-0 bg-transparent text-sm text-white/80 placeholder-white/40 ml-2.5 focus:outline-none"
          />
          <button className="border border-white/30 text-white/70 text-sm font-medium rounded-md px-4 py-1 hover:bg-white/10 transition-colors">
            Search
          </button>
        </div>
      </div>

      {/* ── Desktop Layout ── */}
      <div className="hidden lg:flex items-center justify-between">
        {/* Search bar */}
        <div className="flex items-center bg-white border border-gray-200 rounded-full px-4 py-2.5 max-w-lg w-full">
          <FiSearch className="w-4 h-4 text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="Search for anything on our website"
            className="flex-1 bg-transparent text-sm text-gray-500 placeholder-gray-400 ml-2.5 focus:outline-none"
          />
          <button className="border border-gray-300 text-gray-700 text-sm font-medium rounded-md px-4 py-1 hover:bg-gray-50 transition-colors">
            Search
          </button>
        </div>

        {/* Right side — notification, cart, avatar */}
        <div className="flex items-center gap-4">
          {/* Notification bell */}
          <button className="w-11 h-11 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors">
            <Image
              src="/dashboard/icons/bell.svg"
              alt="Notifications"
              width={20}
              height={20}
            />
          </button>

          {/* Cart */}
          <button className="w-11 h-11 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors">
            <Image
              src="/dashboard/icons/cart.svg"
              alt="Cart"
              width={20}
              height={20}
            />
          </button>

          {/* User avatar with gradient border on gray bg */}
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100">
            <div
              className="w-10 h-10 rounded-full p-[2.5px]"
              style={{
                background:
                  "conic-gradient(from 180deg, #0EC1B8, #15BC3C, #BF12BF, #0EC1B8)",
              }}
            >
              <div className="w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/dashboard/profile-image.jpg"
                  alt="User avatar"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <DashboardMobileDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </div>
  );
}
