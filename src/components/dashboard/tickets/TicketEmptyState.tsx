"use client";

import Image from "next/image";
import Link from "next/link";

export default function TicketEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 lg:py-24 px-4">
      <h2 className="text-lg lg:text-xl font-bold text-text-heading mb-2">
        You haven&apos;t purchased any event tickets yet.
      </h2>
      <p className="text-sm text-text-muted mb-6">
        Browse curated events and find your next opportunity.
      </p>
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm py-3.5 px-6 rounded-xl hover:bg-primary/90 transition-colors"
      >
        Discover Events
        <Image
          src="/dashboard/icons/arrow.svg"
          alt=""
          width={22}
          height={22}
        />
      </Link>
    </div>
  );
}
