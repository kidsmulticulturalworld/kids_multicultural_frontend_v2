"use client";

import { sizeOptions, priceFilters } from "./shopData";

interface ShopFiltersProps {
  activeSizes: string[];
  activePrices: string[];
  onToggleSize: (size: string) => void;
  onTogglePrice: (price: string) => void;
}

export default function ShopFilters({
  activeSizes,
  activePrices,
  onToggleSize,
  onTogglePrice,
}: ShopFiltersProps) {
  return (
    <div className="bg-white rounded-xl px-4 md:px-5 py-4 mb-6 md:mb-8">
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        {/* Size filters */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          <span className="text-sm font-semibold text-gray-900">Size</span>
          {sizeOptions.map((size) => {
            const isActive = activeSizes.includes(size);
            return (
              <button
                key={size}
                onClick={() => onToggleSize(size)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full transition-colors cursor-pointer ${
                  isActive
                    ? "bg-[#3491E833] text-[#3491E8] border border-[#3491E833]"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300"
                }`}
              >
                {size}
                {isActive && (
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="2" y1="2" x2="10" y2="10" />
                    <line x1="10" y1="2" x2="2" y2="10" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>

        {/* Divider — vertical on desktop, horizontal on mobile */}
        <div className="hidden md:block w-px h-6 bg-gray-300 mx-1" />
        <div className="block md:hidden h-px w-full bg-gray-200" />

        {/* Price filters */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          <span className="text-sm font-semibold text-gray-900">Price $</span>
          {priceFilters.map((price) => {
            const isActive = activePrices.includes(price);
            return (
              <button
                key={price}
                onClick={() => onTogglePrice(price)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full transition-colors cursor-pointer ${
                  isActive
                    ? "bg-[#3491E833] text-[#3491E8] border border-[#3491E833]"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300"
                }`}
              >
                {price}
                {isActive && (
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="2" y1="2" x2="10" y2="10" />
                    <line x1="10" y1="2" x2="2" y2="10" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
