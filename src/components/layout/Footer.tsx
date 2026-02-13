import Image from "next/image";
import Link from "next/link";

const navigations = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Shop", href: "/shop" },
  { label: "Magazines", href: "/magazines" },
];

const activities = [
  { label: "Model Registration", href: "/casting" },
  { label: "Classes", href: "/classes" },
  { label: "Events", href: "/events" },
];

const others = [
  { label: "Login", href: "/login" },
  { label: "My Cart", href: "/cart" },
  { label: "Terms Of Use", href: "/terms" },
];

const socials = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.07 1.646.07 4.85 0 3.204-.012 3.584-.07 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.646.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.266-.07-1.647-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#1C1F2E] overflow-hidden">
      {/* Upper content */}
      <div className="max-w-[1200px] mx-auto px-6 pt-14 lg:pt-20 pb-52 lg:pb-56">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Left — Logo + contact info */}
          <div className="lg:col-span-5">
            <Image
              src="/Logo.svg"
              alt="Kids Multicultural World"
              width={120}
              height={108}
              className="w-[100px] lg:w-[120px] h-auto"
              loading="lazy"
            />

            {/* Contact info */}
            <div className="mt-8 space-y-4">
              {/* Email */}
              <div className="flex items-center gap-3">
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  className="w-5 h-4 shrink-0"
                >
                  <path
                    d="M18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z"
                    fill="#FF6B6B"
                  />
                </svg>
                <span className="text-white font-medium text-sm lg:text-base">
                  global@Kidsmulticulturalworld.org
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="w-5 h-5 shrink-0"
                >
                  <path
                    d="M3.59 1.238C3.848 0.978 4.238 0.894 4.58 1.024L8.148 2.384C8.452 2.5 8.666 2.77 8.71 3.092L9.248 7.066C9.29 7.366 9.172 7.666 8.94 7.856L7.138 9.38C8.144 11.494 9.854 13.2 11.97 14.21L13.494 12.408C13.684 12.178 13.982 12.06 14.282 12.1L18.256 12.638C18.58 12.684 18.85 12.898 18.964 13.2L20.324 16.77C20.454 17.112 20.37 17.5 20.11 17.76L17.662 20.21C17.388 20.484 16.988 20.582 16.624 20.462C12.466 19.106 8.818 16.538 6.184 13.166C3.55 9.794 2.058 5.722 1.886 1.726C1.868 1.352 2.066 1.002 2.396 0.838L3.59 1.238Z"
                    fill="#4ECDC4"
                  />
                </svg>
                <span className="text-white font-medium text-sm lg:text-base">
                  7086633189
                </span>
              </div>
            </div>
          </div>

          {/* Right — 3 link columns */}
          <div className="lg:col-span-7 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Navigations */}
            <div>
              <h3 className="text-[#D0E2F5]  font-bold text-base lg:text-lg mb-3 lg:mb-6">
                Navigations
              </h3>
              <ul className="space-y-3">
                {navigations.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Activities */}
            <div>
              <h3 className="text-[#D0E2F5]  font-bold text-base lg:text-lg mb-3 lg:mb-6">
                Activities
              </h3>
              <ul className="space-y-3">
                {activities.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Others */}
            <div>
              <h3 className="text-[#D0E2F5]  font-bold text-base lg:text-lg mb-3 lg:mb-6">
                Others
              </h3>
              <ul className="space-y-3">
                {others.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Blue cloud wave */}
      <div className="w-full -mt-32 lg:-mt-40 leading-none">
        <Image
          src="/footer-cloud.svg"
          alt=""
          width={1448}
          height={207}
          className="w-full h-auto"
          aria-hidden="true"
          loading="lazy"
        />
      </div>

      {/* Bottom bar — copyright + social icons */}
      <div className="bg-[#2C4F7A] px-6 pb-8 lg:pb-10 -mt-px">
        <div className="max-w-[1200px] mx-auto flex flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            &copy; 2025, KidsMulticulturalWorld.org
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 text-white/80 hover:text-white hover:border-white/60 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
