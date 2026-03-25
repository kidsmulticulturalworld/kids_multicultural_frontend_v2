"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ShopCategoryTabs from "./ShopCategoryTabs";
import ShopFilters from "./ShopFilters";
import ShopProductCard from "./ShopProductCard";
import { products } from "./shopData";
import { useCartStore } from "@/stores/useCartStore";

export default function ShopProducts() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSizes, setActiveSizes] = useState<string[]>(["Baby"]);
  const [activePrices, setActivePrices] = useState<string[]>(["Under $20"]);

  const handleToggleSize = (size: string) => {
    setActiveSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const handleTogglePrice = (price: string) => {
    setActivePrices((prev) =>
      prev.includes(price)
        ? prev.filter((p) => p !== price)
        : [...prev, price]
    );
  };

  const [hydrated, setHydrated] = useState(false);
  const cartItems = useCartStore((s) => s.items);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    setHydrated(true);
  }, []);

  // Filter products based on active category
  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (p) => p.category === activeCategory.toLowerCase()
        );

  return (
    <section className="bg-white py-10 md:py-14 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6 lg:px-10">
        {/* Go to Cart bar — shows when items in cart */}
        {hydrated && cartCount > 0 && (
          <Link
            href="/cart"
            className="mb-6 flex items-center justify-between bg-[#3491E8] text-white rounded-xl px-5 py-3.5 hover:bg-[#2b7ed0] transition-colors"
          >
            <div className="flex items-center gap-3">
              <Image
                src="/dashboard/icons/cart-icon.svg"
                alt=""
                width={22}
                height={22}
                className="w-5 h-5 brightness-0 invert"
                aria-hidden="true"
              />
              <span className="text-sm font-semibold">
                {cartCount} {cartCount === 1 ? "item" : "items"} in your cart
              </span>
            </div>
            <span className="text-sm font-semibold flex items-center gap-1.5">
              Go to Cart
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
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </Link>
        )}

        {/* Category tabs */}
        <ShopCategoryTabs
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Filters + Product grid container */}
        <div className="bg-[#F5F5F5] border border-gray-200 rounded-2xl overflow-hidden px-5 md:px-6 lg:px-8 py-5 md:py-6 lg:py-8">
          {/* Filters */}
          <ShopFilters
            activeSizes={activeSizes}
            activePrices={activePrices}
            onToggleSize={handleToggleSize}
            onTogglePrice={handleTogglePrice}
          />

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProducts.map((product) => (
              <ShopProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
