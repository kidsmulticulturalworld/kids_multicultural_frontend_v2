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
    imageLayout: "bottom" as const,
  },
  classes: {
    title: "Classes",
    description:
      "Explore immersive cultural classes designed to spark creativity and confidence in kids. Dive into dance, language, art, and more — all through a multicultural lens.",
    tags: ["Cultural growth", "Cultural awareness"],
    buttonText: "Explore classes",
    buttonHref: "/classes",
    image: "/explore/classes-image.svg",
    bgColor: "#ACD6FF",
    imageLayout: "full-width" as const,
  },
  events: {
    title: "Events",
    description:
      "Discover upcoming experiences that bring families together through music, storytelling, and celebration. Browse, save your favorites, and grab your spot.",
    tags: ["Cultural stories", "Kids spotlights"],
    buttonText: "Discover events",
    buttonHref: "/events",
    image: "/explore/events.svg",
    bgColor: "#91FFCB",
    imageLayout: "full-height" as const,
  },
  shop: {
    title: "Shop",
    description:
      "Browse our curated collection of kids’ merch inspired by global cultures. From hoodies to bonnets, find something colorful, meaningful — and made to wear with pride.",
    tags: ["Cultural growth", "Cultural awareness"],
    buttonText: "Visit shop",
    buttonHref: "/shop",
    image: "/explore/shop-image.svg",
    bgColor: "#FCEC97",
    imageLayout: "bottom" as const,
  },
};

export default function ExploreWorld() {
  const [activeTab, setActiveTab] = useState("magazine");
  const content = tabContent[activeTab as keyof typeof tabContent];

  return (
    <section className="relative pt-14 lg:pt-20 pb-48 lg:pb-72 bg-white">
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

        {/* Outer gray box */}
        <div className="bg-[#EDEDF0] rounded-2xl lg:rounded-3xl p-3 lg:p-8">
          {/* Tab header bar — white bg, right side fully curved, narrower than body */}
          <div className="relative bg-white mb-3 lg:mb-0 px-3 lg:px-6 lg:pr-14 py-2.5 lg:py-4 lg:w-fit explore-tab-header">
            <div className="flex items-center gap-1 lg:gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 lg:px-5 py-1.5 lg:py-2 rounded-full text-xs lg:text-base font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-[#e9f3fc] text-[#1E1E1E]"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Inverse radius — concave curve connecting tab header to body */}
            {/* <div
              className="absolute z-10"
              style={{
                left: "100%",
                bottom: "-56px",
                width: "56px",
                height: "56px",
                background:
                  "radial-gradient(circle at 0% 0%, transparent 56px, #EDEDF0 56px)",
              }}
            /> */}
          </div>

          {/* Tab body — white container inside gray box */}
          <div className="bg-white rounded-xl lg:rounded-none lg:rounded-b-2xl lg:rounded-tr-2xl p-3 lg:p-6">
            <div
              key={activeTab}
              className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-3 lg:gap-4 tab-fade-in"
            >
              {/* Left — dark info card */}
              <div className="bg-[#2E343B] rounded-xl lg:rounded-2xl p-5 lg:p-8 flex flex-col justify-between min-h-[280px] lg:min-h-[380px]">
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
                className={`rounded-xl lg:rounded-2xl min-h-[220px] lg:min-h-[380px] relative overflow-hidden ${
                  content.imageLayout === "full-height"
                    ? "flex items-stretch"
                    : "flex items-end justify-center"
                }`}
                style={{ backgroundColor: content.bgColor }}
              >
                <Image
                  src={content.image}
                  alt={content.title}
                  width={500}
                  height={400}
                  className={
                    content.imageLayout === "full-width"
                      ? "w-full h-auto object-contain"
                      : content.imageLayout === "full-height"
                        ? "w-[95%] h-full object-contain mx-auto"
                        : "w-[90%] h-auto object-contain self-end"
                  }
                  loading="lazy"
                  sizes="(min-width: 1024px) 550px, 90vw"
                />
              </div>
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
