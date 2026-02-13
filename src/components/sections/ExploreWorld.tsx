"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const tabs = [
  { id: "magazine", label: "Magazine" },
  { id: "classes", label: "Classes" },
  { id: "events", label: "Events" },
  { id: "shop", label: "Shop" },
];

const tabContent = {
  magazine: {
    title: "Magazine",
    description:
      "Flip through vibrant stories, interviews, and cultural insights crafted for curious young minds and their grown-ups. Explore, learn, and celebrate the world — one page at a time.",
    tags: ["Cultural stories", "Kid Spotlights"],
    buttonText: "View magazine",
    buttonHref: "/magazines",
    image: "/explore/magazines.svg",
    bgColor: "#FF6B4A",
  },
  classes: {
    title: "Classes",
    description:
      "Join our diverse range of classes designed to help kids explore their talents and cultural heritage through hands-on learning.",
    tags: ["Modeling", "Life Skills"],
    buttonText: "View classes",
    buttonHref: "/classes",
    image: "/explore/classes-image.svg",
    bgColor: "#3B82F6",
  },
  events: {
    title: "Events",
    description:
      "Discover exciting events and celebrations that bring together kids from around the world to share and celebrate diversity.",
    tags: ["Upcoming", "Ongoing"],
    buttonText: "View events",
    buttonHref: "/events",
    image: "/explore/events.svg",
    bgColor: "#FF1F8F",
  },
  shop: {
    title: "Shop",
    description:
      "Browse our collection of cultural merchandise, books, and accessories that celebrate diversity and creativity.",
    tags: ["Merchandise", "Books"],
    buttonText: "Visit shop",
    buttonHref: "/shop",
    image: "/explore/shop-image.svg",
    bgColor: "#FFD700",
  },
};

export default function ExploreWorld() {
  const [activeTab, setActiveTab] = useState("magazine");
  const content = tabContent[activeTab as keyof typeof tabContent];

  return (
    <section className="relative pt-14 lg:pt-20 pb-48 lg:pb-72 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <h2 className="font-display text-center text-[28px] lg:text-[48px] leading-tight mb-4">
          <span className="text-text-heading">Explore </span>
          <span className="text-primary">Our World</span>
        </h2>

        {/* Subtitle */}
        <p className="text-center text-text-muted text-sm lg:text-base leading-relaxed max-w-[600px] mx-auto mb-10 lg:mb-14">
          Step inside a universe of color, culture, and creativity. From
          hands-on classes to global celebrations
        </p>

        {/* Tabbed card container */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200/60 p-5 lg:p-8">
          {/* Tab navigation */}
          <div className="flex items-center gap-3 mb-6 lg:mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-sm lg:text-base font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-gray-900 text-white"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content — two columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
            {/* Left — dark info card */}
            <div className="bg-navy-dark rounded-2xl p-6 lg:p-8 flex flex-col justify-between min-h-[320px] lg:min-h-[380px]">
              <div>
                {/* Title */}
                <h3 className="font-display text-white text-[28px] lg:text-[36px] mb-3 lg:mb-4">
                  {content.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-sm lg:text-[15px] leading-relaxed mb-5 lg:mb-6">
                  {content.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6 lg:mb-8">
                  {content.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full border border-white/20 text-white/80 text-xs lg:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA button */}
              <Link
                href={content.buttonHref}
                className="inline-flex items-center gap-2.5 bg-white text-gray-900 font-semibold text-sm lg:text-[15px] pl-5 pr-2 py-2 rounded-xl self-start hover:bg-gray-100 transition-colors"
              >
                {content.buttonText}
                <span className="w-8 h-8 flex items-center justify-center bg-enroll rounded-full">
                  <Image
                    src="/explore/explore-arrow-icon.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="w-3.5 h-3.5"
                    loading="lazy"
                  />
                </span>
              </Link>
            </div>

            {/* Right — colored image card */}
            <div
              className="rounded-2xl overflow-hidden min-h-[280px] lg:min-h-[380px] relative flex items-end justify-center"
              style={{ backgroundColor: content.bgColor }}
            >
              <Image
                src={content.image}
                alt={content.title}
                width={500}
                height={400}
                className="w-[90%] h-auto object-contain translate-y-4"
                loading="lazy"
                sizes="(min-width: 1024px) 550px, 90vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Blue cloud wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full leading-none">
        <Image
          src="/explore/cloud.svg"
          alt=""
          width={1448}
          height={170}
          className="w-full h-auto"
          aria-hidden="true"
          loading="lazy"
        />
      </div>
    </section>
  );
}
