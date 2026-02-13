/**
 * API Service Functions
 * 
 * These functions wrap the API client and provide type-safe methods
 * for interacting with the backend. Based on the old frontend's Action.js file.
 */

import apiClient from './client';
import { API_ENDPOINTS } from './endpoints';
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  ApiResponse,
} from '@/types/api';

// Helper to get token from localStorage
const getToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  const userInfo = localStorage.getItem('userInfo');
  if (userInfo) {
    try {
      const parsed = JSON.parse(userInfo);
      return parsed.token || parsed.access || null;
    } catch {
      return null;
    }
  }
  return null;
};

// Helper to get auth headers
const getAuthHeaders = () => {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// ==================== Authentication ====================

export const authService = {
  /**
   * Login with email/username and password
   */
  login: async (email: string, password: string): Promise<LoginResponse> => {
    const response = await apiClient.post<LoginResponse>(
      API_ENDPOINTS.AUTH.LOGIN,
      { username: email, password }
    );
    // Store user info in localStorage (matching old frontend behavior)
    if (typeof window !== 'undefined' && response.data) {
      localStorage.setItem('userInfo', JSON.stringify(response.data));
    }
    return response.data;
  },

  /**
   * Register a new user
   */
  register: async (data: RegisterRequest): Promise<LoginResponse> => {
    const response = await apiClient.post<LoginResponse>(
      API_ENDPOINTS.AUTH.REGISTER,
      data
    );
    // Store user info in localStorage (matching old frontend behavior)
    if (typeof window !== 'undefined' && response.data) {
      localStorage.setItem('userInfo', JSON.stringify(response.data));
    }
    return response.data;
  },

  /**
   * Logout user
   */
  logout: async (): Promise<void> => {
    try {
      await apiClient.post(API_ENDPOINTS.AUTH.LOGOUT, {}, {
        headers: getAuthHeaders(),
      });
    } finally {
      // Always clear localStorage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('userInfo');
      }
    }
  },

  /**
   * Request password reset
   */
  resetRequest: async (email: string): Promise<ApiResponse<void>> => {
    const response = await apiClient.post(API_ENDPOINTS.AUTH.RESET_REQUEST, {
      email,
    });
    return response.data;
  },

  /**
   * Set new password with reset token
   */
  resetToken: async (data: {
    token: string;
    password: string;
  }): Promise<ApiResponse<void>> => {
    const response = await apiClient.post(API_ENDPOINTS.AUTH.RESET_TOKEN, data);
    return response.data;
  },
};

// ==================== User & Profile ====================

export const userService = {
  /**
   * Get user dashboard data
   */
  getDashboard: async (): Promise<any> => {
    const response = await apiClient.get(API_ENDPOINTS.USER.DASHBOARD, {
      headers: getAuthHeaders(),
    });
    return response.data;
  },

  /**
   * Get kids view (list of kids)
   */
  getKidsView: async (params?: any): Promise<any> => {
    const response = await apiClient.post(API_ENDPOINTS.USER.KIDS_VIEW, params || {});
    return response.data;
  },

  /**
   * Get kid details by ID
   */
  getKidsDetails: async (id: string): Promise<any> => {
    const response = await apiClient.post(API_ENDPOINTS.USER.KIDS_DETAILS(id), {});
    return response.data;
  },

  /**
   * Edit user profile
   */
  editProfile: async (data: any): Promise<any> => {
    const response = await apiClient.post(API_ENDPOINTS.USER.EDIT_PROFILE, data, {
      headers: getAuthHeaders(),
    });
    return response.data;
  },

  /**
   * Delete other images
   */
  deleteImages: async (data: { id: string | number }): Promise<any> => {
    const response = await apiClient.post(API_ENDPOINTS.USER.DEL_IMAGES, data, {
      headers: getAuthHeaders(),
    });
    return response.data;
  },

  /**
   * Delete video
   */
  deleteVideo: async (data: { id: string | number }): Promise<any> => {
    const response = await apiClient.post(API_ENDPOINTS.USER.DEL_VIDEO, data, {
      headers: getAuthHeaders(),
    });
    return response.data;
  },
};

// ==================== Contests ====================

export const contestService = {
  /**
   * Get all contests
   */
  getAllContests: async (): Promise<any> => {
    const response = await apiClient.get(API_ENDPOINTS.CONTESTS.ALL);
    return response.data;
  },

  /**
   * Get contest by ID
   */
  getContest: async (id: string): Promise<any> => {
    const response = await apiClient.get(API_ENDPOINTS.CONTESTS.GET_CONTEST(id));
    return response.data;
  },

  /**
   * Get contestant by ID
   */
  getContestant: async (id: string): Promise<any> => {
    const response = await apiClient.get(API_ENDPOINTS.CONTESTS.GET_CONTESTANT(id));
    return response.data;
  },

  /**
   * Get star event
   */
  getStarEvent: async (): Promise<any> => {
    const response = await apiClient.get(API_ENDPOINTS.CONTESTS.STAR_EVENT);
    return response.data;
  },

  /**
   * Create star payment
   */
  createStarPayment: async (data: any): Promise<any> => {
    const response = await apiClient.post(API_ENDPOINTS.CONTESTS.CREATE_STAR_PAYMENT, data);
    return response.data;
  },
};

// ==================== Events ====================

export const eventService = {
  /**
   * Get all events
   */
  getEvents: async (): Promise<any> => {
    const response = await apiClient.post(API_ENDPOINTS.EVENTS.LIST, {});
    return response.data;
  },

  /**
   * Get event details by ID
   */
  getEventDetail: async (id: string): Promise<any> => {
    const response = await apiClient.get(API_ENDPOINTS.EVENTS.DETAIL(id));
    return response.data;
  },

  /**
   * Get event tickets
   */
  getEventTickets: async (data: any): Promise<any> => {
    const response = await apiClient.post(API_ENDPOINTS.EVENTS.TICKETS, data, {
      headers: getAuthHeaders(),
    });
    return response.data;
  },

  /**
   * Get all tickets (verify tickets by reference ID)
   */
  getAllTickets: async (data: { id: string }): Promise<any> => {
    const response = await apiClient.post(API_ENDPOINTS.EVENTS.ALL_TICKETS, data);
    return response.data;
  },

  /**
   * Get single ticket (verify single ticket by ticket ID)
   */
  getSingleTicket: async (data: { id: string }): Promise<any> => {
    const response = await apiClient.post(API_ENDPOINTS.EVENTS.SINGLE_TICKET, data);
    return response.data;
  },
};

// ==================== Shop ====================

export const shopService = {
  /**
   * Get all shop items
   */
  getShopItems: async (): Promise<any> => {
    const response = await apiClient.post(API_ENDPOINTS.SHOP.LIST, {});
    return response.data;
  },

  /**
   * Get shop item details by ID
   */
  getShopDetail: async (id: string): Promise<any> => {
    const response = await apiClient.get(API_ENDPOINTS.SHOP.DETAIL(id));
    return response.data;
  },
};

// ==================== Magazines ====================

export const magazineService = {
  /**
   * Get all magazines
   */
  getMagazines: async (): Promise<any> => {
    const response = await apiClient.post(API_ENDPOINTS.MAGAZINES.LIST, {});
    return response.data;
  },
};

// ==================== Orders & Payments ====================

export const orderService = {
  /**
   * Get user orders
   */
  getMyOrders: async (params?: any): Promise<any> => {
    const response = await apiClient.post(API_ENDPOINTS.ORDERS.MY_ORDERS, params || {}, {
      headers: getAuthHeaders(),
    });
    return response.data;
  },

  /**
   * Create checkout (payment intent)
   */
  checkout: async (data: any): Promise<any> => {
    const token = getToken();
    const config = token
      ? { headers: { Authorization: `Bearer ${token}` } }
      : { headers: { 'Content-Type': 'application/json' } };
    
    const response = await apiClient.post(API_ENDPOINTS.ORDERS.CHECKOUT, data, config);
    return response.data;
  },

  /**
   * Verify payment (requires authentication)
   */
  verifyPayment: async (): Promise<any> => {
    const response = await apiClient.post(API_ENDPOINTS.ORDERS.VERIFY_PAYMENT, {}, {
      headers: getAuthHeaders(),
    });
    return response.data;
  },

  /**
   * Get receipt by ID
   */
  getReceipt: async (id: string): Promise<any> => {
    const response = await apiClient.post(API_ENDPOINTS.ORDERS.RECEIPT(id), {});
    return response.data;
  },
};

// ==================== Casting ====================

export const castingService = {
  /**
   * Get casting info by ID
   */
  getCastingInfo: async (id: string): Promise<any> => {
    const response = await apiClient.post(API_ENDPOINTS.CASTING.GET_INFO, { id });
    return response.data;
  },

  /**
   * Save casting image (multipart/form-data)
   * Requires: FormData with 'image' file and 'secrete' (client secret from payment)
   */
  saveCastImage: async (formData: FormData): Promise<any> => {
    const response = await apiClient.post(API_ENDPOINTS.CASTING.SAVE_IMG, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  /**
   * Save consent data (multipart/form-data)
   */
  saveConsentData: async (formData: FormData): Promise<any> => {
    const response = await apiClient.post(API_ENDPOINTS.CASTING.SAVE_CONSENT, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },
};

// ==================== Newsletter ====================

export const newsletterService = {
  /**
   * Subscribe to newsletter
   */
  subscribe: async (data: { newsEmail: string }): Promise<any> => {
    const response = await apiClient.post(API_ENDPOINTS.NEWSLETTER.SUBSCRIBE, data);
    return response.data;
  },

  /**
   * Send newsletter (admin)
   */
  sendNewsletter: async (data: any): Promise<any> => {
    const response = await apiClient.post(API_ENDPOINTS.NEWSLETTER.SEND, data, {
      headers: getAuthHeaders(),
    });
    return response.data;
  },
};

// Export all services as a single object for convenience
export const apiServices = {
  auth: authService,
  user: userService,
  contest: contestService,
  event: eventService,
  shop: shopService,
  magazine: magazineService,
  order: orderService,
  casting: castingService,
  newsletter: newsletterService,
};

