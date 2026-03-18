"use client";

import { useState } from "react";
import ShopCategoryTabs from "./ShopCategoryTabs";
import ShopFilters from "./ShopFilters";
import ShopProductCard from "./ShopProductCard";
import { products } from "./shopData";

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
