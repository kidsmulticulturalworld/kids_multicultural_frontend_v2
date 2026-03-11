"use client";

import ToggleSwitch from "@/components/ui/ToggleSwitch";
import SelectDropdown from "@/components/ui/SelectDropdown";
import { NotificationPreferences, NotificationChannel } from "@/types/api";
import { notificationChannelOptions } from "@/lib/mock-settings";

interface NotificationsPanelProps {
  preferences: NotificationPreferences;
  onToggle: (key: keyof Pick<NotificationPreferences, "shopOrderUpdates" | "eventsAlerts">, value: boolean) => void;
  onChannelChange: (channel: NotificationChannel) => void;
}

export default function NotificationsPanel({
  preferences,
  onToggle,
  onChannelChange,
}: NotificationsPanelProps) {
  return (
    <div className="bg-[#f5f5f5] rounded-2xl p-6 lg:p-8">
      <h2 className="text-xl font-bold text-text-heading mb-8">
        Notification Preferences
      </h2>

      <div className="space-y-8">
        {/* Shop order updates */}
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
          <div>
            <p className="text-base font-semibold text-text-heading">
              Shop order updates
            </p>
            <p className="text-base text-text-muted mt-0.5">
              Get updates about your merchandise orders
            </p>
          </div>
          <ToggleSwitch
            checked={preferences.shopOrderUpdates}
            onChange={(val) => onToggle("shopOrderUpdates", val)}
            label="Toggle shop order updates"
            className="shrink-0"
          />
        </div>

        {/* Events Alerts */}
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
          <div>
            <p className="text-base font-semibold text-text-heading">
              Events Alerts
            </p>
            <p className="text-base text-text-muted mt-0.5">
              Receive alerts about new events you might be interested in
            </p>
          </div>
          <ToggleSwitch
            checked={preferences.eventsAlerts}
            onChange={(val) => onToggle("eventsAlerts", val)}
            label="Toggle events alerts"
            className="shrink-0"
          />
        </div>

        {/* Preferred Notification Channel */}
        <SelectDropdown
          label="Preferred Notification Channel"
          value={preferences.preferredChannel}
          onChange={(val) => onChannelChange(val as NotificationChannel)}
          options={notificationChannelOptions}
          helperText="This is how we'll contact you for all enabled notifications"
        />
      </div>
    </div>
  );
}
