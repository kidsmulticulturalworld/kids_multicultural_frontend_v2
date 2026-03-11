"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export type SettingsTabValue =
  | "notifications"
  | "security"
  | "payments"
  | "danger-zone";

const tabs: {
  label: string;
  value: SettingsTabValue;
  icon: string;
}[] = [
  {
    label: "Notifications",
    value: "notifications",
    icon: "/dashboard/icons/bell-settings.svg",
  },
  {
    label: "Security",
    value: "security",
    icon: "/dashboard/icons/lock.svg",
  },
  {
    label: "Payments",
    value: "payments",
    icon: "/dashboard/icons/payment-card.svg",
  },
  {
    label: "Danger Zone",
    value: "danger-zone",
    icon: "/dashboard/icons/warning.svg",
  },
];

// CSS filter: gray (#636363) → blue (#3491E8)
const activeIconFilter =
  "brightness(0) saturate(100%) invert(46%) sepia(85%) saturate(1200%) hue-rotate(190deg) brightness(95%) contrast(92%)";

interface SettingsTabsProps {
  activeTab: SettingsTabValue;
  onTabChange: (tab: SettingsTabValue) => void;
}

export default function SettingsTabs({
  activeTab,
  onTabChange,
}: SettingsTabsProps) {
  return (
    <>
      {/* Mobile: Horizontal scrollable tabs */}
      <div className="lg:hidden overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden bg-gray-300/70 rounded-full p-1">
        <div className="flex items-center gap-2 w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => onTabChange(tab.value)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-colors whitespace-nowrap",
                activeTab === tab.value
                  ? "bg-white text-text-heading shadow-sm border border-gray-200"
                  : "text-text-muted hover:text-text-body",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop: Vertical sidebar tabs with icons */}
      <div className="hidden lg:block w-[220px] shrink-0">
        <div className="bg-[#f5f5f5] rounded-2xl p-3">
          <nav className="flex flex-col gap-1">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => onTabChange(tab.value)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors text-left w-full",
                    isActive
                      ? "bg-white text-primary"
                      : "text-text-body hover:bg-gray-50 hover:text-text-heading",
                  )}
                >
                  <Image
                    src={tab.icon}
                    alt=""
                    width={14}
                    height={14}
                    className="shrink-0"
                    style={isActive ? { filter: activeIconFilter } : undefined}
                  />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
