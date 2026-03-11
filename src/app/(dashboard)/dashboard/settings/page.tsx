"use client";

import { useState } from "react";
import SettingsTabs, {
  SettingsTabValue,
} from "@/components/dashboard/settings/SettingsTabs";
import NotificationsPanel from "@/components/dashboard/settings/NotificationsPanel";
import SecurityPanel from "@/components/dashboard/settings/SecurityPanel";
import PaymentsPanel from "@/components/dashboard/settings/PaymentsPanel";
import DangerZonePanel from "@/components/dashboard/settings/DangerZonePanel";
import { NotificationPreferences, NotificationChannel, PaymentMethod } from "@/types/api";
import { mockSettings } from "@/lib/mock-settings";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTabValue>("notifications");
  const [notifications, setNotifications] = useState<NotificationPreferences>(
    mockSettings.notifications,
  );
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>(
    mockSettings.paymentMethods,
  );

  const handleToggle = (
    key: keyof Pick<
      NotificationPreferences,
      "shopOrderUpdates" | "eventsAlerts"
    >,
    value: boolean,
  ) => {
    setNotifications((prev) => ({ ...prev, [key]: value }));
  };

  const handleChannelChange = (channel: NotificationChannel) => {
    setNotifications((prev) => ({ ...prev, preferredChannel: channel }));
  };

  const handleRemovePayment = (id: number) => {
    setPaymentMethods((prev) => prev.filter((m) => m.id !== id));
  };

  const handleAddPayment = () => {
    // TODO: integrate with payment flow
    console.log("Add payment method");
  };

  const handleDeactivate = () => {
    // TODO: integrate with API
    console.log("Deactivate account");
  };

  const handleDeleteAccount = () => {
    // TODO: integrate with API
    console.log("Delete account");
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-white px-4 pt-6 pb-4 lg:bg-transparent lg:px-8 lg:pt-8 lg:pb-0">
        <h1 className="text-xl lg:text-2xl font-bold text-text-heading">
          Settings
        </h1>
        <p className="text-sm text-text-muted mt-1">
          Manage your account preferences and configurations
        </p>
      </div>

      {/* Content */}
      <div className="px-4 pb-6 lg:px-8 lg:pb-8">
        {/* Mobile tabs */}
        <div className="mt-4 lg:mt-6 mb-6 lg:hidden">
          <SettingsTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        {/* Desktop: side-by-side layout / Mobile: stacked */}
        <div className="flex flex-col lg:flex-row gap-6 lg:mt-6">
          {/* Desktop sidebar tabs */}
          <div className="hidden lg:block">
            <SettingsTabs activeTab={activeTab} onTabChange={setActiveTab} />
          </div>

          {/* Panel content */}
          <div className="flex-1 lg:flex-initial lg:w-[780px]">
            {activeTab === "notifications" && (
              <NotificationsPanel
                preferences={notifications}
                onToggle={handleToggle}
                onChannelChange={handleChannelChange}
              />
            )}

            {activeTab === "security" && <SecurityPanel />}

            {activeTab === "payments" && (
              <PaymentsPanel
                methods={paymentMethods}
                onRemove={handleRemovePayment}
                onAdd={handleAddPayment}
              />
            )}

            {activeTab === "danger-zone" && (
              <DangerZonePanel
                onDeactivate={handleDeactivate}
                onDelete={handleDeleteAccount}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
