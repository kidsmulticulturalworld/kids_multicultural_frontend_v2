/**
 * API Endpoints
 * 
 * Centralized definition of all API endpoints.
 * This makes it easy to update endpoint URLs and maintain consistency.
 * Based on the backend Django REST API structure from kids_python_anywhere.
 */

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api';

export const API_ENDPOINTS = {
  // Authentication
  AUTH: {
    LOGIN: `${API_BASE}/login`,
    REGISTER: `${API_BASE}/register`,
    LOGOUT: `${API_BASE}/logout`,
    RESET_REQUEST: `${API_BASE}/reset_request`,
    RESET_TOKEN: `${API_BASE}/reset_token`,
  },

  // User & Profile
  USER: {
    DASHBOARD: `${API_BASE}/dashboard`,
    KIDS_VIEW: `${API_BASE}/kids_view`,
    KIDS_DETAILS: (id: string) => `${API_BASE}/kids_details/${id}`,
    EDIT_PROFILE: `${API_BASE}/edit_profile`,
    DEL_IMAGES: `${API_BASE}/del_other_images`,
    DEL_VIDEO: `${API_BASE}/del_Video`,
  },

  // Contests
  CONTESTS: {
    ALL: `${API_BASE}/all-contest`,
    GET_CONTEST: (id: string) => `${API_BASE}/get_contest/${id}`,
    GET_CONTESTANT: (id: string) => `${API_BASE}/get_contestant/${id}`,
    STAR_EVENT: `${API_BASE}/get_star_event`,
    CREATE_STAR_PAYMENT: `${API_BASE}/create_star_payment`,
  },

  // Events
  EVENTS: {
    LIST: `${API_BASE}/event_view`,
    DETAIL: (id: string) => `${API_BASE}/event_detail/${id}`,
    TICKETS: `${API_BASE}/event_tickets`,
    ALL_TICKETS: `${API_BASE}/all_tickets`,
    SINGLE_TICKET: `${API_BASE}/single_tickets`,
  },

  // Shop
  SHOP: {
    LIST: `${API_BASE}/shop_view`,
    DETAIL: (id: string) => `${API_BASE}/shop_detail/${id}`,
  },

  // Magazines
  MAGAZINES: {
    LIST: `${API_BASE}/magazine_view`,
  },

  // Orders & Payments
  ORDERS: {
    MY_ORDERS: `${API_BASE}/my_orders`,
    CHECKOUT: `${API_BASE}/checkout`,
    VERIFY_PAYMENT: `${API_BASE}/verify_payment`,
    RECEIPT: (id: string) => `${API_BASE}/get-receipt/${id}`,
  },

  // Casting
  CASTING: {
    GET_INFO: `${API_BASE}/get_casting_info`,
    SAVE_IMG: `${API_BASE}/save_cast_img`,
    SAVE_CONSENT: `${API_BASE}/saveConsentData`,
  },

  // Newsletter
  NEWSLETTER: {
    SUBSCRIBE: `${API_BASE}/newsletter`,
    SEND: `${API_BASE}/send_news_letter`,
  },

  // Dynamic endpoint helper (for endpoints that use link parameter)
  DYNAMIC: (link: string) => `${API_BASE}/${link}`,
} as const;

