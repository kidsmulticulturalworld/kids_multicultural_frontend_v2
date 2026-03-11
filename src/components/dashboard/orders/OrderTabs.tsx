"use client";

import { cn } from "@/lib/utils";

export type OrderTabValue = "all" | "delivered" | "shipped" | "processing";

const tabs: { label: string; value: OrderTabValue }[] = [
  { label: "All", value: "all" },
  { label: "Delivered", value: "delivered" },
  { label: "Shipped", value: "shipped" },
  { label: "Processing", value: "processing" },
];

interface OrderTabsProps {
  activeTab: OrderTabValue;
  onTabChange: (tab: OrderTabValue) => void;
}

export default function OrderTabs({ activeTab, onTabChange }: OrderTabsProps) {
  return (
    <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden bg-gray-300/70 lg:bg-transparent rounded-full lg:rounded-none p-1 lg:p-0">
      <div className="flex items-center gap-2 lg:bg-gray-200/70 lg:rounded-full lg:p-1 w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => onTabChange(tab.value)}
            className={cn(
              "px-4 lg:px-5 py-2 text-sm font-medium rounded-full transition-colors whitespace-nowrap",
              activeTab === tab.value
                ? "bg-white text-text-heading shadow-sm border border-gray-200"
                : "text-text-muted hover:text-text-body"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
