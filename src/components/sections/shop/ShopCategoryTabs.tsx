"use client";

import type { ShopCategoryTab } from "./shopData";

interface ShopCategoryTabsProps {
  categories: ShopCategoryTab[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export default function ShopCategoryTabs({
  categories,
  activeCategory,
  onCategoryChange,
}: ShopCategoryTabsProps) {
  if (categories.length <= 1) return null;

  return (
    <div className="overflow-x-auto mb-6 -mx-5 px-5 md:mx-0 md:px-0">
      <div className="inline-flex items-center bg-[#EFEFEF] rounded-full p-1.5">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => onCategoryChange(cat.id)}
            className={`px-4 md:px-5 py-2 md:py-2.5 text-xs md:text-sm font-medium rounded-full transition-all cursor-pointer whitespace-nowrap ${
              activeCategory === cat.id
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}
