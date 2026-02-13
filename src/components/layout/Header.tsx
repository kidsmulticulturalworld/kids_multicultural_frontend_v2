"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiSearch,
  FiUser,
  FiMenu,
  FiX,
  FiChevronDown,
} from "react-icons/fi";
import { HiShoppingCart } from "react-icons/hi";
import { cn } from "@/lib/utils";

interface DropdownItem {
  label: string;
  href: string;
}

const classesItems: DropdownItem[] = [
  { label: "Modeling", href: "/classes/modeling" },
  { label: "Acting", href: "/classes/acting" },
  { label: "Life Skills", href: "/classes/life-skills" },
];

const eventsItems: DropdownItem[] = [
  { label: "Upcoming Events", href: "/events/upcoming" },
  { label: "Ongoing Events", href: "/events/ongoing" },
];

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Classes", href: "/classes", dropdown: classesItems },
  { label: "Magazines", href: "/magazines" },
  { label: "Discover Events", href: "/events", dropdown: eventsItems },
  { label: "Shop", href: "/shop" },
  { label: "Kids", href: "/kids" },
];

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleClickOutside = () => setOpenDropdown(null);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleDropdownEnter = (key: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setOpenDropdown(key);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  return (
    <header className="w-full bg-header relative z-50">
      {/* ===================== DESKTOP ===================== */}
      <div className="hidden lg:block">
        {/* Top Bar — Search + Cart */}
        <div className="border-b border-white/10">
          <div className="max-w-[1320px] mx-auto px-6 py-2.5">
            <div className="flex items-center gap-3">
              {/* Search bar */}
              <div className="flex-1 flex items-center bg-white/[0.08] rounded-lg px-3 py-[7px]">
                <FiSearch className="w-3.5 h-3.5 text-white/40 shrink-0" />
                <input
                  type="text"
                  placeholder="Search for anything on our website"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-white/60 placeholder-white/40 text-xs ml-2 focus:outline-none focus-visible:outline-none"
                />
                <button className="border border-white/30 text-white text-xs font-medium rounded-lg px-3.5 py-1 hover:bg-white/10 transition-colors">
                  Search
                </button>
              </div>

              {/* Cart icon — filled, centered */}
              <button className="w-9 h-9 flex items-center justify-center bg-white/[0.08] hover:bg-white/15 rounded-lg transition-colors">
                <HiShoppingCart className="w-4 h-4 text-white/70" />
              </button>
            </div>
          </div>
        </div>

        {/* Nav Bar — Logo + Links + Auth */}
        <div className="max-w-[1320px] mx-auto px-6 py-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/Logo.svg"
                alt="Kids Multicultural World"
                width={40}
                height={36}
              />
            </Link>

            {/* Nav links in pill */}
            <nav className="flex items-center bg-white/[0.08] rounded-lg px-1 py-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() =>
                    link.dropdown && handleDropdownEnter(link.label)
                  }
                  onMouseLeave={() => link.dropdown && handleDropdownLeave()}
                >
                  {link.dropdown ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenDropdown(
                          openDropdown === link.label ? null : link.label
                        );
                      }}
                      className="flex items-center gap-1 text-white/80 hover:text-white text-[13px] font-medium px-3 py-1.5 rounded-md hover:bg-white/[0.08] transition-colors"
                    >
                      {link.label}
                      <FiChevronDown
                        className={cn(
                          "w-3 h-3 transition-transform",
                          openDropdown === link.label && "rotate-180"
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-white text-[13px] font-medium px-3 py-1.5 rounded-md hover:bg-white/[0.08] transition-colors block"
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {link.dropdown && openDropdown === link.label && (
                    <div
                      className="absolute top-full left-0 mt-1.5 w-44 bg-header-dropdown rounded-lg shadow-lg overflow-hidden z-50 border border-white/10"
                      onMouseEnter={() => handleDropdownEnter(link.label)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      {link.dropdown.map((item, index) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "block px-3.5 py-2.5 text-white/80 hover:bg-white/[0.08] hover:text-white text-[13px] transition-colors",
                            index < link.dropdown!.length - 1 &&
                              "border-b border-white/10"
                          )}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Auth */}
            <div className="flex items-center gap-4">
              <Link
                href="/login"
                className="text-white/80 hover:text-white text-[13px] font-medium transition-colors"
              >
                Sign in
              </Link>
              <button className="bg-enroll hover:bg-enroll/90 text-white text-[13px] font-semibold px-4 py-1.5 rounded-lg transition-colors">
                Enroll your kid
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== MOBILE ===================== */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between px-4 py-2.5 relative">
          {/* Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 flex items-center justify-center bg-white/[0.08] rounded-md"
          >
            {mobileMenuOpen ? (
              <FiX className="w-4 h-4 text-white/70" />
            ) : (
              <FiMenu className="w-4 h-4 text-white/70" />
            )}
          </button>

          {/* Logo centered */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2"
          >
            <Image
              src="/Logo.svg"
              alt="Kids Multicultural World"
              width={36}
              height={32}
            />
          </Link>

          {/* Right icons */}
          <div className="flex items-center gap-1.5">
            <button className="w-9 h-9 flex items-center justify-center hover:bg-white/[0.08] rounded-md transition-colors">
              <FiSearch className="w-4 h-4 text-white/60" />
            </button>
            <button className="w-9 h-9 flex items-center justify-center bg-white/[0.08] rounded-md">
              <HiShoppingCart className="w-4 h-4 text-white/70" />
            </button>
            <button className="w-9 h-9 flex items-center justify-center bg-white/[0.08] rounded-md">
              <FiUser className="w-4 h-4 text-white/60" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-header-dropdown px-4 py-3 max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col gap-0.5">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileDropdown(
                            mobileDropdown === link.label ? null : link.label
                          )
                        }
                        className="flex items-center justify-between w-full text-white/80 hover:text-white text-sm font-medium px-2.5 py-2.5 rounded-md hover:bg-white/[0.05] transition-colors"
                      >
                        {link.label}
                        <FiChevronDown
                          className={cn(
                            "w-3.5 h-3.5 transition-transform",
                            mobileDropdown === link.label && "rotate-180"
                          )}
                        />
                      </button>
                      {mobileDropdown === link.label && (
                        <div className="pl-3 pb-0.5">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block text-white/60 hover:text-white text-[13px] px-2.5 py-2 rounded-md hover:bg-white/[0.05] transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="block text-white/80 hover:text-white text-sm font-medium px-2.5 py-2.5 rounded-md hover:bg-white/[0.05] transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <Link
                href="/login"
                className="text-white/80 hover:text-white text-sm font-medium px-2.5 py-1.5 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign in
              </Link>
              <button className="w-full bg-enroll hover:bg-enroll/90 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
                Enroll your kid
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
