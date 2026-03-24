"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/stores/useCartStore";

export default function CartContent() {
  const items = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clearCart);

  // Clean up any invalid items from previous bugs (NaN ids)
  useEffect(() => {
    const hasInvalid = items.some((i) => i.id == null || Number.isNaN(i.id));
    if (hasInvalid) {
      clearCart();
    }
  }, [items, clearCart]);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const totalPrice = useCartStore((s) => s.totalPrice);
  const [promoCode, setPromoCode] = useState("");

  const subtotal = totalPrice();
  const shipping = 1;
  const taxes = 2;
  const total = subtotal + shipping + taxes;

  return (
    <div className="w-full max-w-[1100px] flex flex-col-reverse lg:flex-row gap-4 md:gap-5 lg:gap-6 items-start">
      {/* ── Left card — Your Cart (wider) ── */}
      <div className="w-full bg-white rounded-2xl shadow-md p-5 sm:p-6 md:p-8">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
          Your Cart
        </h2>
        <p className="text-sm text-gray-500 mb-5 sm:mb-6">
          Complete your order for the Global Kids Festival
        </p>

        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 sm:mb-5">
          Payment Method
        </h3>

        {/* Cart items */}
        {items.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500 text-sm mb-4">Your cart is empty</p>
            <Link
              href="/shop"
              className="text-[#3491E8] text-sm font-medium hover:underline"
            >
              Browse the shop
            </Link>
          </div>
        ) : (
          <div className="space-y-3 sm:space-y-4 mb-6">
            {items.map((item, index) => (
              <div
                key={item.id ?? `cart-item-${index}`}
                className="flex items-center gap-3 sm:gap-4 border border-gray-200 rounded-xl p-3 sm:p-4"
              >
                {/* Product image placeholder */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-lg shrink-0 overflow-hidden">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Product info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                {/* Quantity controls */}
                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={() =>
                      updateQuantity(item.id, item.quantity - 1)
                    }
                    className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-50 transition-colors cursor-pointer"
                    aria-label={`Decrease ${item.name} quantity`}
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20 12H4"
                      />
                    </svg>
                  </button>
                  <span className="text-sm font-medium text-gray-900 w-4 text-center">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      updateQuantity(item.id, item.quantity + 1)
                    }
                    className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-50 transition-colors cursor-pointer"
                    aria-label={`Increase ${item.name} quantity`}
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>

                  {/* Remove button */}
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-red-400 hover:bg-red-50 hover:text-red-500 transition-colors cursor-pointer ml-1"
                    aria-label={`Remove ${item.name}`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Continue shopping link */}
        <Link
          href="/shop"
          className="inline-flex items-center justify-center text-[#3491E8] text-sm font-medium border border-[#3491E8] rounded-lg px-5 py-2.5 hover:bg-blue-50 transition-colors"
        >
          Continue shopping
        </Link>
      </div>

      {/* ── Right card — Order Summary (narrower, heavy shadow) ── */}
      <div
        className="w-full lg:w-[340px] bg-white rounded-2xl p-5 sm:p-6 shrink-0"
        style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 60px 40px -7px" }}
      >
        <h2 className="text-lg font-bold text-gray-900 mb-5 text-center">
          Order Summary
        </h2>

        {/* Line items */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Subtotal</span>
            <span className="font-medium text-gray-900">${subtotal}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Shipping</span>
            <span className="font-medium text-gray-900">${shipping}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Taxes</span>
            <span className="font-medium text-gray-900">${taxes}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-4" />

        {/* Total */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-base font-bold text-gray-900">Total:</span>
          <span className="text-2xl font-bold text-[#3491E8]">${total}</span>
        </div>

        {/* Promo code */}
        <div className="mb-5">
          <p className="text-sm text-gray-500 mb-2">Promo code</p>
          <div className="relative">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Enter promo code"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 pr-16 focus:outline-none focus:ring-2 focus:ring-[#3491E8] focus:border-transparent"
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-[#3491E8] text-sm font-medium hover:underline cursor-pointer"
            >
              Apply
            </button>
          </div>
        </div>

        {/* Proceed to Checkout */}
        <Link
          href="/checkout"
          className="w-full inline-flex items-center justify-center gap-2 bg-[#3491E8] hover:bg-[#2b7ed0] text-white text-sm font-semibold py-3.5 rounded-xl transition-colors"
        >
          Proceed to Checkout
          <Image
            src="/dashboard/icons/arrow.svg"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </div>
  );
}
