/**
 * TypeScript type definitions for API responses
 *
 * These types should match the Django backend serializers.
 * Update these as you discover the actual response structures.
 */

// Authentication Types
export interface LoginRequest {
  username?: string;
  email?: string;
  password: string;
}

export interface LoginResponse {
  access: string;
  refresh: string;
  user?: {
    id: number;
    username: string;
    email: string;
  };
}

/** Matches Django `registerUser`: username is typically the email. */
export interface RegisterRequest {
  first_name: string;
  other_names: string;
  email: string;
  password: string;
  phone?: string;
  zip_code?: string;
  fullAddress?: string;
  state?: string;
  city?: string;
}

// User & Profile Types
export interface User {
  id: number;
  username: string;
  email: string;
  first_name?: string;
  last_name?: string;
  // Add other user fields as needed
}

export interface KidProfile {
  id: number;
  name: string;
  age?: number;
  images?: string[];
  videos?: string[];
  // Add other profile fields as needed
}

// Contest Types
export interface Contest {
  id: number;
  title: string;
  description?: string;
  start_date?: string;
  end_date?: string;
  // Add other contest fields as needed
}

export interface Contestant {
  id: number;
  contest: number;
  kid_profile: number;
  votes?: number;
  // Add other contestant fields as needed
}

// Event Types
export interface Event {
  id: number;
  title: string;
  description?: string;
  date?: string;
  location?: string;
  // Add other event fields as needed
}

export interface Ticket {
  id: number;
  event: number;
  ticket_type?: string;
  price?: number;
  // Add other ticket fields as needed
}

// Event Ticket (for My Tickets page)
export interface EventTicket {
  id: number;
  eventName: string;
  location: string;
  date: string;
  time: string;
  price: number;
  purchaseDate: string;
  imageUrl: string;
  status: "upcoming" | "past";
}

// Shop Types
export interface ShopItem {
  id: number;
  name: string;
  description?: string;
  price: number;
  images?: string[];
  // Add other shop item fields as needed
}

// Magazine Types
export interface Magazine {
  id: number;
  title: string;
  description?: string;
  cover_image?: string;
  // Add other magazine fields as needed
}

// Order Types
export interface Order {
  id: number;
  items: OrderItem[];
  total: number;
  status: string;
  created_at: string;
  // Add other order fields as needed
}

export interface OrderItem {
  id: number;
  product: number;
  quantity: number;
  price: number;
  // Add other order item fields as needed
}

// Shop Order (for My Orders page)
export type ShopOrderStatus = "delivered" | "shipped" | "processing";

export interface ShopOrder {
  id: number;
  orderNumber: string;
  status: ShopOrderStatus;
  date: string;
  paymentMethod: string;
  paymentLast4: string;
  total: number;
  imageUrl: string;
}

// Settings Types
export type NotificationChannel = "email" | "sms" | "push";

export interface NotificationPreferences {
  shopOrderUpdates: boolean;
  eventsAlerts: boolean;
  preferredChannel: NotificationChannel;
}

export interface ChangePasswordForm {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export type CardBrand = "visa" | "mastercard";

export interface PaymentMethod {
  id: number;
  brand: CardBrand;
  last4: string;
  expiryDate: string;
  isDefault: boolean;
}

export interface SettingsData {
  notifications: NotificationPreferences;
  paymentMethods: PaymentMethod[];
}

// Payment Types
export interface PaymentIntent {
  client_secret: string;
  // Add other payment intent fields as needed
}

// API Response Wrapper
export interface ApiResponse<T> {
  data?: T;
  message?: string;
  error?: string;
}

// Pagination Types
export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
