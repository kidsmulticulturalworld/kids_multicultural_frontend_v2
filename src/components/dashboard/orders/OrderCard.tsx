"use client";

import Image from "next/image";
import { ShopOrder, ShopOrderStatus } from "@/types/api";

interface OrderCardProps {
  order: ShopOrder;
}

const statusStyles: Record<ShopOrderStatus, string> = {
  delivered: "bg-green-50 text-green-600 border-green-200",
  shipped: "bg-blue-50 text-blue-600 border-blue-200",
  processing: "bg-orange-50 text-orange-600 border-orange-200",
};

const statusLabels: Record<ShopOrderStatus, string> = {
  delivered: "Delivered",
  shipped: "Shipped",
  processing: "Processing",
};

export default function OrderCard({ order }: OrderCardProps) {
  return (
    <div className="border border-gray-200 rounded-2xl p-4 lg:p-5 bg-white shadow-card">
      {/* ── Desktop: horizontal layout ── */}
      <div className="hidden lg:flex gap-5">
        {/* Thumbnail */}
        <div className="w-[140px] h-[130px] rounded-xl overflow-hidden bg-gray-100 shrink-0">
          <Image
            src={order.imageUrl}
            alt={`Order #${order.orderNumber}`}
            width={140}
            height={130}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details + Total */}
        <div className="flex-1 min-w-0 flex justify-between">
          {/* Left: details */}
          <div>
            {/* Order number + status tag */}
            <div className="flex items-center gap-2.5">
              <h3 className="text-base font-bold text-text-heading">
                Order #{order.orderNumber}
              </h3>
              <span className={`inline-flex px-2.5 py-0.5 text-xs font-semibold rounded-full border ${statusStyles[order.status]}`}>
                {statusLabels[order.status]}
              </span>
            </div>

            {/* Date + Payment */}
            <div className="flex items-center gap-1.5 mt-2">
              <Image src="/dashboard/icons/calendar-icon.svg" alt="" width={14} height={14} className="shrink-0" />
              <span className="text-sm text-text-muted">
                {order.date} | {order.paymentMethod} ••{order.paymentLast4}
              </span>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2 mt-4">
              <button className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-text-muted border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                Buy again
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.25 13C11.695 13 11.25 13.445 11.25 14C11.25 14.2652 11.3554 14.5196 11.5429 14.7071C11.7304 14.8946 11.9848 15 12.25 15C12.5152 15 12.7696 14.8946 12.9571 14.7071C13.1446 14.5196 13.25 14.2652 13.25 14C13.25 13.445 12.8 13 12.25 13ZM4.25 5V6H5.25L7.05 9.795L6.37 11.02C6.295 11.16 6.25 11.325 6.25 11.5C6.25 11.7652 6.35536 12.0196 6.54289 12.2071C6.73043 12.3946 6.98478 12.5 7.25 12.5H13.25V11.5H7.46C7.42685 11.5 7.39505 11.4868 7.37161 11.4634C7.34817 11.4399 7.335 11.4082 7.335 11.375C7.335 11.35 7.34 11.33 7.35 11.315L7.8 10.5H11.525C11.9 10.5 12.23 10.29 12.4 9.985L14.19 6.75C14.225 6.67 14.25 6.585 14.25 6.5C14.25 6.36739 14.1973 6.24021 14.1036 6.14645C14.0098 6.05268 13.8826 6 13.75 6H6.355L5.885 5M7.25 13C6.695 13 6.25 13.445 6.25 14C6.25 14.2652 6.35536 14.5196 6.54289 14.7071C6.73043 14.8946 6.98478 15 7.25 15C7.51522 15 7.76957 14.8946 7.95711 14.7071C8.14464 14.5196 8.25 14.2652 8.25 14C8.25 13.445 7.8 13 7.25 13Z" fill="currentColor"/>
                </svg>
              </button>
              <button className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-text-muted border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                Report an issue
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 1.33333C4.32 1.33333 1.33333 4.32 1.33333 8C1.33333 11.68 4.32 14.6667 8 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8C14.6667 4.32 11.68 1.33333 8 1.33333ZM8.66667 11.3333H7.33333V10H8.66667V11.3333ZM8.66667 8.66667H7.33333V4.66667H8.66667V8.66667Z" fill="currentColor"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Right: total — vertically centered */}
          <div className="flex items-center shrink-0">
            <div className="text-right">
              <p className="text-xs text-text-muted">Total</p>
              <p className="text-xl font-bold text-text-heading">
                ${order.total.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile: vertical card layout ── */}
      <div className="lg:hidden">
        {/* Product image */}
        <div className="rounded-xl overflow-hidden mb-4">
          <Image
            src={order.imageUrl}
            alt={`Order #${order.orderNumber}`}
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Order number + status tag */}
        <div className="flex items-center gap-2.5">
          <h3 className="text-base font-bold text-text-heading">
            Order #{order.orderNumber}
          </h3>
          <span className={`inline-flex px-2.5 py-0.5 text-xs font-semibold rounded-full border ${statusStyles[order.status]}`}>
            {statusLabels[order.status]}
          </span>
        </div>

        {/* Date + Payment */}
        <div className="flex items-center gap-1.5 mt-2">
          <Image src="/dashboard/icons/calendar-icon.svg" alt="" width={14} height={14} className="shrink-0" />
          <span className="text-sm text-text-muted">
            {order.date} | {order.paymentMethod} ••{order.paymentLast4}
          </span>
        </div>

        {/* Total */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-sm text-text-muted">Total:</span>
          <span className="text-lg font-bold text-primary">
            ${order.total.toFixed(2)}
          </span>
        </div>

        {/* Action buttons — side by side */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <button className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-sm font-medium text-text-muted border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            Buy again
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.33333 12.6667C4.6 12.6667 4.00667 13.2667 4.00667 14C4.00667 14.7333 4.6 15.3333 5.33333 15.3333C6.06667 15.3333 6.66667 14.7333 6.66667 14C6.66667 13.2667 6.06667 12.6667 5.33333 12.6667ZM12 12.6667C11.2667 12.6667 10.6733 13.2667 10.6733 14C10.6733 14.7333 11.2667 15.3333 12 15.3333C12.7333 15.3333 13.3333 14.7333 13.3333 14C13.3333 13.2667 12.7333 12.6667 12 12.6667ZM5.48667 10.3533L5.53333 10.16L6.2 8.94667H10.9267C11.4 8.94667 11.82 8.69333 12.0333 8.31333L14.36 4.08L13.1867 3.43333H13.18L12.4933 4.66667L10.9267 7.61333H6.45333L6.36 7.42L5.08667 4.66667L4.54 3.56L4 2.44667L3.12 0.666668H1.33333V2H2.66667L5.06667 7.04L4.14667 8.70667C4.04 8.90667 3.98 9.14 3.98 9.38667C3.98 10.12 4.58 10.72 5.31333 10.72H13.3333V9.38667H5.59333C5.50667 9.38667 5.43333 9.32 5.43333 9.24L5.48667 10.3533Z" fill="currentColor"/>
            </svg>
          </button>
          <button className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-sm font-medium text-text-muted border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            Report an issue
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 1.33333C4.32 1.33333 1.33333 4.32 1.33333 8C1.33333 11.68 4.32 14.6667 8 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8C14.6667 4.32 11.68 1.33333 8 1.33333ZM8.66667 11.3333H7.33333V10H8.66667V11.3333ZM8.66667 8.66667H7.33333V4.66667H8.66667V8.66667Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
