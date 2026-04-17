"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import OrderTabs, { OrderTabValue } from "@/components/dashboard/orders/OrderTabs";
import OrderEmptyState from "@/components/dashboard/orders/OrderEmptyState";
import OrderCard from "@/components/dashboard/orders/OrderCard";
// import { mockOrders } from "@/lib/mock-orders"; // legacy mocks — see `mock-orders.ts` (commented reference)
import { orderService } from "@/lib/api/services";
import { mapMyOrdersResponse } from "@/lib/orders/map-my-orders";
import type { ShopOrder } from "@/types/api";

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState<OrderTabValue>("all");

  const {
    data: orders = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["my-orders", { page: 1 }],
    queryFn: async () => {
      const raw = await orderService.getMyOrders({ page: 1 });
      return mapMyOrdersResponse(raw);
    },
  });

  const filteredOrders = orders.filter((order: ShopOrder) => {
    if (activeTab === "all") return true;
    return order.status === activeTab;
  });

  return (
    <div>
      <div className="bg-white px-4 pt-6 pb-4 lg:bg-transparent lg:px-8 lg:pt-8 lg:pb-0">
        <h1 className="text-xl lg:text-2xl font-bold text-text-heading">
          My Orders
        </h1>
        <p className="text-sm text-text-muted mt-1">
          Review and manage items you&apos;ve purchased from the shop.
        </p>
      </div>

      <div className="px-4 pb-6 lg:px-8 lg:pb-8">
        <div className="mt-4 lg:mt-6 mb-6">
          <OrderTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        {isLoading && (
          <p className="text-sm text-text-muted py-8">Loading your orders…</p>
        )}

        {isError && (
          <div
            className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-800"
            role="alert"
          >
            {axios.isAxiosError(error)
              ? (error.response?.status === 401
                  ? "Sign in to see your orders."
                  : "Could not load orders.")
              : error instanceof Error
                ? error.message
                : "Could not load orders."}{" "}
            <button
              type="button"
              onClick={() => refetch()}
              className="underline font-medium ml-1"
            >
              Retry
            </button>
          </div>
        )}

        {!isLoading && !isError && filteredOrders.length === 0 && (
          <OrderEmptyState />
        )}

        {!isLoading && !isError && filteredOrders.length > 0 && (
          <div className="flex flex-col gap-4 lg:max-w-5xl">
            {filteredOrders.map((order: ShopOrder) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
