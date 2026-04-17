"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { userService, shopService } from "@/lib/api/services";
import { parseDashboardPayload, parseShopListResponse } from "@/lib/api/data-mappers";
import { useAuthStore } from "@/stores/useAuthStore";

const tabs = ["Classes", "Magazines", "Upcoming events", "Shop"] as const;

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<string>("Classes");
  const user = useAuthStore((s) => s.user);

  const { data: dashRaw, isLoading: dashLoading, isError: dashError } = useQuery({
    queryKey: ["user-dashboard"],
    queryFn: () => userService.getDashboard(),
  });

  const { data: shopRaw, isLoading: shopLoading } = useQuery({
    queryKey: ["shop-items"],
    queryFn: () => shopService.getShopItems(),
  });

  const dash = parseDashboardPayload(dashRaw);
  const shopProducts = parseShopListResponse(shopRaw);

  const firstName = user?.first_name?.trim() || user?.username || "there";
  const welcome = `Welcome ${firstName} 👋`;

  return (
    <div>
      {/* ── Welcome Section — white bg on mobile to cover gradient ── */}
      <div className="bg-white px-4 pt-6 pb-4 lg:bg-transparent lg:px-8 lg:pt-8 lg:pb-0">
        <div className="flex items-center gap-3 lg:gap-4 mb-0 lg:mb-8">
        {/* Scalloped avatar with gradient border */}
        <div className="relative w-[48px] h-[50px] lg:w-[60px] lg:h-[62px] shrink-0">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 57 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="avatar-gradient"
                x1="28.2429"
                y1="-0.773438"
                x2="28.2429"
                y2="59.2266"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0EC1B8" />
                <stop offset="0.485577" stopColor="#BF12BF" />
                <stop offset="1" stopColor="#15BC3C" />
              </linearGradient>
              <clipPath id="scallop-clip">
                <path d="M22.6208 3.27441C25.7555 0.241889 30.7302 0.24189 33.8649 3.27441C35.2141 4.57954 37.0903 5.18868 38.9489 4.92578C43.2674 4.31497 47.292 7.23929 48.0456 11.5352C48.3699 13.3841 49.5299 14.9795 51.1882 15.8594C55.0408 17.9036 56.578 22.6354 54.6628 26.5537C53.8384 28.2402 53.8384 30.2129 54.6628 31.8994C56.578 35.8177 55.0408 40.5496 51.1882 42.5938C49.5299 43.4736 48.3699 45.069 48.0456 46.918C47.292 51.2138 43.2674 54.1382 38.9489 53.5273C37.0903 53.2644 35.2141 53.8736 33.8649 55.1787C30.7302 58.2112 25.7555 58.2112 22.6208 55.1787C21.2716 53.8736 19.3955 53.2645 17.5368 53.5273C13.2183 54.1382 9.19371 51.2138 8.44012 46.918C8.11579 45.069 6.9558 43.4736 5.29755 42.5938C1.44491 40.5496 -0.0923247 35.8177 1.82294 31.8994C2.64734 30.2129 2.64734 28.2402 1.82294 26.5537C-0.0923258 22.6354 1.44491 17.9036 5.29755 15.8594C6.9558 14.9795 8.11579 13.3841 8.44012 11.5352C9.19371 7.23929 13.2183 4.31497 17.5368 4.92578C19.3955 5.18868 21.2716 4.57954 22.6208 3.27441Z" />
              </clipPath>
            </defs>
            <image
              href="/to-vote-for.jpg"
              x="3"
              y="3"
              width="51"
              height="53"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#scallop-clip)"
            />
            <path
              d="M22.6208 3.27441C25.7555 0.241889 30.7302 0.24189 33.8649 3.27441C35.2141 4.57954 37.0903 5.18868 38.9489 4.92578C43.2674 4.31497 47.292 7.23929 48.0456 11.5352C48.3699 13.3841 49.5299 14.9795 51.1882 15.8594C55.0408 17.9036 56.578 22.6354 54.6628 26.5537C53.8384 28.2402 53.8384 30.2129 54.6628 31.8994C56.578 35.8177 55.0408 40.5496 51.1882 42.5938C49.5299 43.4736 48.3699 45.069 48.0456 46.918C47.292 51.2138 43.2674 54.1382 38.9489 53.5273C37.0903 53.2644 35.2141 53.8736 33.8649 55.1787C30.7302 58.2112 25.7555 58.2112 22.6208 55.1787C21.2716 53.8736 19.3955 53.2645 17.5368 53.5273C13.2183 54.1382 9.19371 51.2138 8.44012 46.918C8.11579 45.069 6.9558 43.4736 5.29755 42.5938C1.44491 40.5496 -0.0923247 35.8177 1.82294 31.8994C2.64734 30.2129 2.64734 28.2402 1.82294 26.5537C-0.0923258 22.6354 1.44491 17.9036 5.29755 15.8594C6.9558 14.9795 8.11579 13.3841 8.44012 11.5352C9.19371 7.23929 13.2183 4.31497 17.5368 4.92578C19.3955 5.18868 21.2716 4.57954 22.6208 3.27441Z"
              stroke="url(#avatar-gradient)"
              strokeWidth="2.5"
              fill="none"
            />
          </svg>
        </div>
        <div>
          <h1 className="text-xl lg:text-2xl font-bold text-text-heading">
            {welcome}
          </h1>
          <p className="text-sm text-text-muted">
            Ready to explore your next adventure?
          </p>
        </div>
      </div>
      </div>

      <div className="px-4 pb-6 lg:px-8 lg:pb-8">
        <div className="mt-4 lg:mt-0 mb-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden bg-gray-200/80 lg:bg-transparent rounded-full lg:rounded-none p-1 lg:p-0">
          <div className="flex items-center gap-2 lg:bg-gray-100/70 lg:rounded-full lg:p-1 w-fit">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-4 lg:px-5 py-2 text-sm font-medium rounded-full transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-white text-text-heading shadow-sm border border-gray-200"
                    : "text-text-muted hover:text-text-body"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <p className="text-sm text-text-muted mt-4 mb-6">
          {activeTab === "Classes" &&
            "Explore some of our classes and enroll for one that\u2019s best suited for your child"}
          {activeTab === "Magazines" &&
            "Browse our collection of magazines filled with useful tips and inspiration"}
          {activeTab === "Upcoming events" &&
            "Explore some of our upcoming events. Come see children perform their best live on the stage"}
          {activeTab === "Shop" &&
            "Shop our curated collection of products and merchandise"}
        </p>

        {dashError && (
          <p className="text-sm text-red-600 mb-4">
            We couldn\u2019t load your dashboard. Try refreshing the page.
          </p>
        )}

        {activeTab === "Classes" && (
          <>
            {dashLoading ? (
              <p className="text-sm text-text-muted">Loading\u2026</p>
            ) : dash.subscriptions.length === 0 ? (
              <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-card">
                <p className="text-sm text-text-muted mb-4">
                  No class subscriptions yet. Browse our public classes to enroll.
                </p>
                <Link
                  href="/classes"
                  className="inline-flex items-center justify-center rounded-full bg-primary text-white font-semibold text-sm px-6 py-3"
                >
                  View classes
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {dash.subscriptions.map((classItem) => (
                  <div
                    key={classItem.id}
                    className="border border-gray-200 rounded-2xl p-4 lg:p-5 bg-white shadow-card"
                  >
                    <div className="rounded-xl overflow-hidden mb-5">
                      <Image
                        src={classItem.image}
                        alt={classItem.title}
                        width={400}
                        height={280}
                        className="w-full h-60 object-cover"
                      />
                    </div>

                    <h3 className="text-lg font-bold text-text-heading mb-2">
                      {classItem.title}
                    </h3>

                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5">
                        <Image
                          src="/dashboard/icons/map-marker.svg"
                          alt=""
                          width={16}
                          height={16}
                          className="shrink-0"
                        />
                        <span className="text-sm text-text-muted">
                          {classItem.location}
                        </span>
                      </div>
                      <span className="text-2xl font-bold text-primary">
                        ${classItem.price}
                      </span>
                    </div>
                    {classItem.date ? (
                      <p className="text-xs text-text-muted mb-4">{classItem.date}</p>
                    ) : null}

                    {classItem.enrolled ? (
                      <button
                        type="button"
                        className="w-full flex items-center justify-center gap-2 bg-success text-white font-semibold text-sm py-3.5 rounded-xl"
                      >
                        Already Enrolled
                        <Image
                          src="/dashboard/icons/check-decagram.svg"
                          alt=""
                          width={22}
                          height={22}
                        />
                      </button>
                    ) : (
                      <Link
                        href="/classes"
                        className="w-full flex items-center justify-center gap-2 bg-primary text-white font-semibold text-sm py-3.5 rounded-xl uppercase tracking-wide"
                      >
                        Enroll Now
                        <Image
                          src="/dashboard/icons/arrow.svg"
                          alt=""
                          width={22}
                          height={22}
                        />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {activeTab === "Magazines" && (
          <>
            {dashLoading ? (
              <p className="text-sm text-text-muted">Loading\u2026</p>
            ) : dash.magazines.length === 0 ? (
              <p className="text-sm text-text-muted">
                No magazines on your dashboard yet.{" "}
                <Link href="/magazine" className="text-primary font-medium underline">
                  Browse the magazine page
                </Link>
              </p>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                {dash.magazines.map((mag) => (
                  <div
                    key={mag.id}
                    className="border border-gray-200 rounded-2xl p-4 bg-white shadow-card"
                  >
                    <div className="rounded-xl overflow-hidden mb-4">
                      <Image
                        src={mag.image}
                        alt={mag.title}
                        width={400}
                        height={520}
                        className="w-full h-auto object-cover"
                      />
                    </div>

                    <h3 className="text-base font-bold text-text-heading mb-1.5">
                      {mag.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {mag.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {activeTab === "Upcoming events" && (
          <>
            {dashLoading ? (
              <p className="text-sm text-text-muted">Loading\u2026</p>
            ) : dash.events.length === 0 ? (
              <p className="text-sm text-text-muted">
                No upcoming events here yet.{" "}
                <Link href="/events" className="text-primary font-medium underline">
                  See all events
                </Link>
              </p>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                {dash.events.map((event) => (
                  <div
                    key={event.id}
                    className="border border-gray-200 rounded-2xl p-4 bg-white shadow-card"
                  >
                    <div className="rounded-xl overflow-hidden mb-4">
                      <Image
                        src={event.image}
                        alt={event.title}
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </div>

                    <h3 className="text-base font-bold text-text-heading mb-3">
                      {event.title}
                    </h3>

                    <div className="flex items-center gap-2 mb-2">
                      <Image
                        src="/dashboard/icons/calendar-icon.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="shrink-0"
                      />
                      <span className="text-sm text-text-muted">{event.date}</span>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <Image
                        src="/dashboard/icons/map-marker.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="shrink-0"
                      />
                      <span className="text-sm text-text-muted">
                        {event.location}
                      </span>
                    </div>

                    <span className="text-2xl font-bold text-primary">
                      ${event.price}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {activeTab === "Shop" && (
          <>
            {shopLoading ? (
              <p className="text-sm text-text-muted">Loading\u2026</p>
            ) : shopProducts.length === 0 ? (
              <p className="text-sm text-text-muted">
                No products available right now.{" "}
                <Link href="/shop" className="text-primary font-medium underline">
                  Visit the shop
                </Link>
              </p>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                {shopProducts.map((item) => (
                  <div
                    key={item.id}
                    className="border border-gray-200 rounded-2xl p-4 bg-white shadow-card"
                  >
                    <div className="rounded-xl overflow-hidden mb-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={400}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>

                    <h3 className="text-base font-bold text-text-heading mb-1.5">
                      {item.name}
                    </h3>

                    <span className="block text-2xl font-bold text-primary mb-4">
                      ${item.price}
                    </span>

                    <Link
                      href="/shop"
                      className="w-full flex items-center justify-center gap-2 bg-primary text-white font-semibold text-sm py-3.5 rounded-xl"
                    >
                      View in shop
                      <Image
                        src="/dashboard/icons/cart-icon.svg"
                        alt=""
                        width={18}
                        height={18}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
