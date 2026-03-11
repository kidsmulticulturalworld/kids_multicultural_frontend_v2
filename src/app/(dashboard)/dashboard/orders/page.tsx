"use client";

import { useState } from "react";
import OrderTabs, { OrderTabValue } from "@/components/dashboard/orders/OrderTabs";
import OrderEmptyState from "@/components/dashboard/orders/OrderEmptyState";
import OrderCard from "@/components/dashboard/orders/OrderCard";
import { mockOrders } from "@/lib/mock-orders";

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState<OrderTabValue>("all");

  const filteredOrders = mockOrders.filter((order) => {
    if (activeTab === "all") return true;
    return order.status === activeTab;
  });

  return (
    <div>
      {/* Header */}
      <div className="bg-white px-4 pt-6 pb-4 lg:bg-transparent lg:px-8 lg:pt-8 lg:pb-0">
        <h1 className="text-xl lg:text-2xl font-bold text-text-heading">
          My Orders
        </h1>
        <p className="text-sm text-text-muted mt-1">
          Review and manage items you&apos;ve purchased from the shop.
        </p>
      </div>

      {/* Content */}
      <div className="px-4 pb-6 lg:px-8 lg:pb-8">
        {/* Tabs */}
        <div className="mt-4 lg:mt-6 mb-6">
          <OrderTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        {/* Order list or empty state */}
        {filteredOrders.length === 0 ? (
          <OrderEmptyState />
        ) : (
          <div className="flex flex-col gap-4 lg:max-w-5xl">
            {filteredOrders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
