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

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  // Add other registration fields as needed
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

