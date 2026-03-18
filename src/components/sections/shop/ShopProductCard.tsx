"use client";

import Image from "next/image";
import type { Product } from "./shopData";

interface ShopProductCardProps {
  product: Product;
}

export default function ShopProductCard({ product }: ShopProductCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden">
      {/* Product image */}
      <div className="p-4 pb-0">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="w-full h-auto object-contain"
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 380px"
        />
      </div>

      {/* Product details */}
      <div className="p-4 pt-3">
        <h3 className="text-sm font-medium text-gray-900 mb-1">
          {product.name}
        </h3>
        <p className="text-[#3491E8] text-base font-bold">
          ${product.price}
        </p>

        {/* Add to Cart — visible on hover */}
        <button className="mt-3 w-full flex items-center justify-center gap-2 bg-[#3491E8] hover:bg-[#2b7ed0] text-white text-sm font-medium py-2.5 rounded-lg transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100 cursor-pointer">
          Add to Cart
          <Image
            src="/dashboard/icons/cart-icon.svg"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
}
