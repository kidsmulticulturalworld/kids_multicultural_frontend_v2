"use client";

import { categories } from "./shopData";

interface ShopCategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ShopCategoryTabs({
  activeCategory,
  onCategoryChange,
}: ShopCategoryTabsProps) {
  return (
    <div className="overflow-x-auto mb-6 -mx-5 px-5 md:mx-0 md:px-0">
      <div className="inline-flex items-center bg-[#EFEFEF] rounded-full p-1.5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-4 md:px-5 py-2 md:py-2.5 text-xs md:text-sm font-medium rounded-full transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === cat
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
