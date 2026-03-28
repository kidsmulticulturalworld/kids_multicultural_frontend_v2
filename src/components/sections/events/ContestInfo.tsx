"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { ContestDetail } from "./eventsData";

function getTimeLeft(deadline: string) {
  const diff = new Date(deadline).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    mins: Math.floor((diff / (1000 * 60)) % 60),
    secs: Math.floor((diff / 1000) % 60),
  };
}

function CountdownTimer({ deadline }: { deadline: string }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(deadline));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(deadline));
    }, 1000);
    return () => clearInterval(interval);
  }, [deadline]);

  return (
    <div
      className="flex justify-center"
      style={{
        background: "#C1DEF833",
        borderRadius: "12px",
        padding: "28px 20px",
        gap: "16px",
      }}
    >
      {[
        { value: timeLeft.days, label: "Days" },
        { value: timeLeft.hours, label: "Hours" },
        { value: timeLeft.mins, label: "Mins" },
        { value: timeLeft.secs, label: "Secs" },
      ].map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center justify-center bg-white"
          style={{
            width: "64px",
            height: "56px",
            borderRadius: "4px",
            border: "6px solid #3491E8",
          }}
        >
          <span className="text-base font-bold text-[#3491E8] leading-none">
            {String(item.value).padStart(2, "0")}
          </span>
          <span className="text-[9px] font-medium text-[#3491E8]">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function CountdownTimerDesktop({ deadline }: { deadline: string }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(deadline));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(deadline));
    }, 1000);
    return () => clearInterval(interval);
  }, [deadline]);

  return (
    <div
      className="flex justify-center"
      style={{
        background: "#C1DEF833",
        borderRadius: "12px",
        padding: "52px 48px",
        gap: "32px",
      }}
    >
      {[
        { value: timeLeft.days, label: "Days" },
        { value: timeLeft.hours, label: "Hours" },
        { value: timeLeft.mins, label: "Mins" },
        { value: timeLeft.secs, label: "Secs" },
      ].map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center justify-center bg-white"
          style={{
            width: "80px",
            height: "68px",
            borderRadius: "4px",
            border: "8px solid #3491E8",
            padding: "8px 24px",
          }}
        >
          <span className="text-2xl font-bold text-[#3491E8] leading-none">
            {String(item.value).padStart(2, "0")}
          </span>
          <span className="text-xs font-medium text-[#3491E8]">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function DisclaimerMobile({ contest }: { contest: ContestDetail }) {
  return (
    <div
      className="relative"
      style={{
        background: "#FFF9D9",
        borderRadius: "12px",
        padding: "20px",
      }}
    >
      {/* Alert icon — top-left inside the card on mobile */}
      <Image
        src="/contest-alert.svg"
        alt=""
        width={100}
        height={125}
        className="w-[80px] h-auto mb-3"
        aria-hidden="true"
      />

      <div
        style={{
          fontSize: "14px",
          lineHeight: "22px",
          color: "#1E1B0B",
        }}
      >
        <p className="mb-4">{contest.disclaimer}</p>
        <p>
          All votes go towards{" "}
          <span className="font-semibold">{contest.votesOrg}</span>
        </p>
      </div>
    </div>
  );
}

function DisclaimerDesktop({ contest }: { contest: ContestDetail }) {
  return (
    <div
      className="relative overflow-visible"
      style={{
        background: "#FFF9D9",
        borderRadius: "12px",
        padding: "28px 20px",
      }}
    >
      <div
        style={{
          fontSize: "14px",
          lineHeight: "22px",
          color: "#1E1B0B",
          paddingRight: "140px",
        }}
      >
        <p className="mb-4">{contest.disclaimer}</p>
        <p>
          All votes go towards{" "}
          <span className="font-semibold">{contest.votesOrg}</span>
        </p>
      </div>

      {/* Alert icon — overlapping top-right on desktop */}
      <Image
        src="/contest-alert.svg"
        alt=""
        width={181}
        height={227}
        className="absolute w-[181px] h-auto"
        style={{ top: "-9px", right: "-20px" }}
        aria-hidden="true"
      />
    </div>
  );
}

export default function ContestInfo({ contest }: { contest: ContestDetail }) {
  return (
    <>
      {/* ── Mobile / Tablet: stacked, no border card ── */}
      <div className="lg:hidden mb-6 flex flex-col gap-5">
        {/* Title */}
        <h1 className="text-xl md:text-2xl font-semibold text-black">
          {contest.title}
        </h1>

        <hr style={{ borderColor: "#77777733" }} />

        {/* Date range */}
        <div className="flex items-center gap-2 text-[#2C4F7A] text-sm">
          <Image
            src="/dashboard/icons/calendar-icon.svg"
            alt=""
            width={14}
            height={14}
            className="shrink-0"
          />
          {contest.dateRange}
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-[#1E1E1E] text-base leading-6">
          <Image
            src="/dashboard/icons/map-marker.svg"
            alt=""
            width={16}
            height={16}
            className="shrink-0"
          />
          {contest.location}
        </div>

        {/* Contestant count */}
        <div className="flex items-center gap-2 text-[#1E1E1E] text-base leading-6">
          <svg
            className="w-4 h-4 shrink-0"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 01-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 01-6 3.22z" />
          </svg>
          {contest.contestantCount} Contestants
        </div>

        <hr style={{ borderColor: "#77777733" }} />

        {/* Winners Price */}
        <div>
          <p className="font-bold text-base text-black mb-4">Winners Price:</p>
          <ul className="flex flex-col gap-2.5 text-base text-[#1E1E1E] leading-6 list-disc pl-5">
            {contest.prizes.map((prize, i) => (
              <li key={i}>{prize}</li>
            ))}
          </ul>
        </div>

        {/* Countdown */}
        <CountdownTimer deadline={contest.deadline} />

        {/* Disclaimer */}
        <DisclaimerMobile contest={contest} />
      </div>

      {/* ── Desktop: two-column card with border ── */}
      <div
        className="hidden lg:block mb-10 p-4"
        style={{
          border: "1px solid #77777733",
          borderRadius: "20px",
        }}
      >
        <div className="flex flex-row gap-5">
          {/* Left — Contest details */}
          <div
            className="flex-[1_1_0%] flex flex-col gap-5 px-10 py-8 border-r"
            style={{ borderColor: "#77777733" }}
          >
            <h1 className="text-[32px] leading-10 font-semibold text-black">
              {contest.title}
            </h1>

            <hr style={{ borderColor: "#77777733" }} />

            <div className="flex items-center gap-2 text-[#2C4F7A] text-base">
              <Image
                src="/dashboard/icons/calendar-icon.svg"
                alt=""
                width={14}
                height={14}
                className="shrink-0"
              />
              {contest.dateRange}
            </div>

            <div className="flex items-center gap-2 text-[#1E1E1E] text-base leading-6">
              <Image
                src="/dashboard/icons/map-marker.svg"
                alt=""
                width={16}
                height={16}
                className="shrink-0"
              />
              {contest.location}
            </div>

            <div className="flex items-center gap-2 text-[#1E1E1E] text-base leading-6">
              <svg
                className="w-4 h-4 shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 01-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 01-6 3.22z" />
              </svg>
              {contest.contestantCount} Contestants
            </div>

            <hr style={{ borderColor: "#77777733" }} />

            <div>
              <p className="font-bold text-base text-black mb-4">
                Winners Price:
              </p>
              <ul className="flex flex-col gap-2.5 text-base text-[#1E1E1E] leading-6 list-disc pl-5">
                {contest.prizes.map((prize, i) => (
                  <li key={i}>{prize}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — Countdown + Disclaimer */}
          <div
            className="flex flex-col flex-[1_1_0%]"
            style={{ gap: "20px" }}
          >
            <CountdownTimerDesktop deadline={contest.deadline} />
            <DisclaimerDesktop contest={contest} />
          </div>
        </div>
      </div>
    </>
  );
}
