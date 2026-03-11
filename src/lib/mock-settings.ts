import { SettingsData, NotificationChannel, PaymentMethod } from "@/types/api";

export const notificationChannelOptions: {
  value: NotificationChannel;
  label: string;
}[] = [
  { value: "email", label: "Email" },
  { value: "sms", label: "SMS" },
  { value: "push", label: "Push Notification" },
];

export const mockPaymentMethods: PaymentMethod[] = [
  {
    id: 1,
    brand: "visa",
    last4: "2345",
    expiryDate: "09/25",
    isDefault: true,
  },
  {
    id: 2,
    brand: "mastercard",
    last4: "8854",
    expiryDate: "09/25",
    isDefault: false,
  },
];

export const mockSettings: SettingsData = {
  notifications: {
    shopOrderUpdates: true,
    eventsAlerts: false,
    preferredChannel: "email",
  },
  paymentMethods: mockPaymentMethods,
};
