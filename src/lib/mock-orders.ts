import { ShopOrder } from "@/types/api";

/**
 * Legacy mock orders — kept for reference / design review. Not used by the app;
 * My Orders loads data from `GET/POST /api/my_orders` via `orderService.getMyOrders`.
 *
 * Original mock data (do not delete):
 * ─────────────────────────────────────────────────────────────────────────────
 * [
 *   {
 *     id: 1,
 *     orderNumber: "823409234",
 *     status: "delivered",
 *     date: "Wed, May 5th, 2025",
 *     paymentMethod: "VISA",
 *     paymentLast4: "2345",
 *     total: 129.99,
 *     imageUrl: "/dashboard/shopping-image.svg",
 *   },
 *   {
 *     id: 2,
 *     orderNumber: "823409235",
 *     status: "shipped",
 *     date: "Wed, May 5th, 2025",
 *     paymentMethod: "VISA",
 *     paymentLast4: "2345",
 *     total: 129.99,
 *     imageUrl: "/dashboard/shopping-image.svg",
 *   },
 *   {
 *     id: 3,
 *     orderNumber: "823409236",
 *     status: "processing",
 *     date: "Wed, May 5th, 2025",
 *     paymentMethod: "VISA",
 *     paymentLast4: "2345",
 *     total: 129.99,
 *     imageUrl: "/dashboard/shopping-image.svg",
 *   },
 *   {
 *     id: 4,
 *     orderNumber: "823409100",
 *     status: "delivered",
 *     date: "Mon, March 10th, 2025",
 *     paymentMethod: "Mastercard",
 *     paymentLast4: "8912",
 *     total: 79.99,
 *     imageUrl: "/dashboard/shopping-image.svg",
 *   },
 *   {
 *     id: 5,
 *     orderNumber: "823409050",
 *     status: "delivered",
 *     date: "Fri, February 14th, 2025",
 *     paymentMethod: "VISA",
 *     paymentLast4: "5678",
 *     total: 49.99,
 *     imageUrl: "/dashboard/shopping-image.svg",
 *   },
 * ]
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const mockOrders: ShopOrder[] = [];
