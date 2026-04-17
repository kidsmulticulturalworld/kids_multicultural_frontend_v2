import type { ShopOrder, ShopOrderStatus } from "@/types/api";

/** Shape of each row from `Shop_salesSerializer` on `/api/my_orders`. */
export interface MyOrdersApiRow {
  id: number;
  name: string;
  price: number;
  email?: string;
  is_shop?: boolean;
  phone?: string;
  customer_name?: string;
  date?: string;
}

export interface MyOrdersApiResponse {
  orders: MyOrdersApiRow[];
  page?: number;
  pages?: number;
}

/**
 * Maps Django shop sale rows to dashboard `ShopOrder`.
 * The API does not expose fulfillment status; we show all paid shop rows as processing
 * until the backend adds a status field.
 */
export function mapShopSaleToShopOrder(row: MyOrdersApiRow): ShopOrder {
  const d = row.date ? new Date(row.date) : new Date();
  const dateStr = d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const status: ShopOrderStatus = "processing";

  return {
    id: row.id,
    orderNumber: `KMW-${row.id}`,
    status,
    date: dateStr,
    paymentMethod: "Card",
    paymentLast4: "****",
    total: Number(row.price) || 0,
    imageUrl: "/dashboard/shopping-image.svg",
  };
}

export function mapMyOrdersResponse(res: MyOrdersApiResponse): ShopOrder[] {
  const rows = Array.isArray(res?.orders) ? res.orders : [];
  return rows.map(mapShopSaleToShopOrder);
}
