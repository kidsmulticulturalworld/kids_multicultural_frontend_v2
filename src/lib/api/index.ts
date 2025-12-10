/**
 * API Module - Main Export
 * 
 * Central export point for all API-related functionality.
 * Import from here for cleaner imports in your components.
 */

export { default as apiClient } from './client';
export { API_ENDPOINTS } from './endpoints';
export {
  authService,
  userService,
  contestService,
  eventService,
  shopService,
  magazineService,
  orderService,
  castingService,
  newsletterService,
  apiServices,
} from './services';

