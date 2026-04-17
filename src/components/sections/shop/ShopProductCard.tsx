"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "./shopData";
import { useCartStore } from "@/stores/useCartStore";

interface ShopProductCardProps {
  product: Product;
}

export default function ShopProductCard({ product }: ShopProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const items = useCartStore((s) => s.items);
  const [justAdded, setJustAdded] = useState(false);

  // Extract numeric ID from "product-1" → 1
  const numericId = parseInt(product.id.replace(/\D/g, ""), 10) || 0;
  const isInCart = items.some((i) => i.id === numericId);

  const handleAddToCart = () => {
    addItem({
      id: numericId,
      name: product.name,
      price: product.price,
      image: product.image,
      size: product.size[0] ?? "One size",
      color: "Default",
      type: "shop",
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

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
        <button
          onClick={handleAddToCart}
          className={`mt-3 w-full flex items-center justify-center gap-2 text-sm font-medium py-2.5 rounded-lg transition-all cursor-pointer ${
            justAdded
              ? "bg-green-500 text-white"
              : isInCart
                ? "bg-green-50 text-green-700 border border-green-200 hover:bg-green-100"
                : "bg-[#3491E8] hover:bg-[#2b7ed0] text-white"
          }`}
        >
          {justAdded ? "Added!" : isInCart ? "In Cart — Add More" : "Add to Cart"}
          <Image
            src="/dashboard/icons/cart-icon.svg"
            alt=""
            width={20}
            height={20}
            className={`w-5 h-5 ${isInCart && !justAdded ? "" : ""}`}
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
}
