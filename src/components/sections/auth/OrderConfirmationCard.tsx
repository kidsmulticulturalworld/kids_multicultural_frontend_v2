"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/stores/useCartStore";

interface SnapshotItem {
  name: string;
  quantity: number;
  price: number;
}

export default function OrderConfirmationCard() {
  const items = useCartStore((s) => s.items);
  const totalPrice = useCartStore((s) => s.totalPrice);
  const clearCart = useCartStore((s) => s.clearCart);

  // Snapshot cart data on first render, then clear
  const [snapshot] = useState<{
    items: SnapshotItem[];
    subtotal: number;
  }>(() => ({
    items: items.map((i) => ({ name: i.name, quantity: i.quantity, price: i.price })),
    subtotal: totalPrice(),
  }));

  const hasClearedRef = useRef(false);

  useEffect(() => {
    if (!hasClearedRef.current) {
      hasClearedRef.current = true;
      clearCart();
    }
  }, [clearCart]);

  const subtotal = snapshot.subtotal;
  const shipping = 1;
  const taxes = 2;
  const total = subtotal + shipping + taxes;

  return (
    <div className="w-full max-w-[720px] bg-white rounded-2xl shadow-md p-5 sm:p-6 md:p-10">
      {/* ── Success icon with gradient border ── */}
      <div className="flex justify-center mb-4">
        <div className="relative w-[76px] h-[76px] sm:w-[88px] sm:h-[88px]">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 88 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="order-confirm-gradient"
                x1="44"
                y1="0"
                x2="44"
                y2="88"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0EC1B8" />
                <stop offset="0.485577" stopColor="#BF12BF" />
                <stop offset="1" stopColor="#15BC3C" />
              </linearGradient>
            </defs>
            <circle
              cx="44"
              cy="44"
              r="41"
              stroke="url(#order-confirm-gradient)"
              strokeWidth="3.5"
              fill="white"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 sm:w-11 sm:h-11"
            >
              <path
                d="M22 2l3.09 5.26L30.5 5.5l1.76 5.41L37.67 12l-.59 5.67 4.42 3.55-3.18 4.65 2.18 5.23-4.87 2.85-.18 5.69-5.63.64-2.72 5.01L22 42l-5.1 2.64-2.72-5.01-5.63-.64-.18-5.69-4.87-2.85 2.18-5.23-3.18-4.65 4.42-3.55L6.33 12l5.41-1.09L13.5 5.5l5.41 1.76L22 2z"
                fill="#15BC3C"
              />
              <path
                d="M15 22l5 5 9-9"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* ── Heading ── */}
      <p className="text-center text-sm text-gray-500 mb-1">Thank you!</p>
      <h1 className="font-display text-center text-xl sm:text-2xl md:text-[32px] text-[#3491E8] mb-3">
        Your Order is Confirmed
      </h1>
      <p className="text-center text-sm text-gray-500 mb-1">
        We will send a confirmation email to example@gmail.com
      </p>
      <p className="text-center text-sm text-gray-500 mb-6 sm:mb-8">
        Your order number is <span className="font-bold text-gray-900">#321avc432de</span>
      </p>

      {/* ── Order Summary ── */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-5">
        Order Summary
      </h2>

      {/* Cart Items */}
      <h3 className="text-sm font-semibold text-gray-900 mb-2">Cart Items</h3>
      <div className="space-y-2 mb-4">
        {snapshot.items.length > 0 ? (
          snapshot.items.map((item, index) => (
            <div
              key={`order-${index}`}
              className="flex items-center justify-between text-sm"
            >
              <span className="text-gray-700">
                {item.name} x{item.quantity}
              </span>
              <span className="font-medium text-gray-900">
                ${item.price * item.quantity}
              </span>
            </div>
          ))
        ) : (
          <>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-700">Hoodie x1</span>
              <span className="font-medium text-gray-900">$120</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-700">TShirt x1</span>
              <span className="font-medium text-gray-900">$56</span>
            </div>
          </>
        )}
      </div>

      <div className="border-t border-gray-200 my-4" />

      {/* Pricing */}
      <div className="space-y-2 mb-3">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold text-gray-900">Subtotal</span>
          <span className="font-medium text-gray-900">${subtotal || 340}</span>
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

      <div className="border-t border-gray-200 my-4" />

      {/* Total */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-base font-bold text-gray-900">Total:</span>
        <span className="text-2xl font-bold text-[#3491E8]">${total || 343}</span>
      </div>

      {/* Shipping Address */}
      <div className="mb-4">
        <h3 className="text-sm font-bold text-gray-900 mb-1.5">
          Shipping Address
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          23, Oba Adesoji Bouleverd, Works and Housing Estate, Gwarinpa, Abuja.
          <br />
          Gwarinpa Abuja, Abuja 900108
          <br />
          Canada
        </p>
      </div>

      {/* Contact Information */}
      <div className="mb-4">
        <h3 className="text-sm font-bold text-gray-900 mb-1.5">
          Contact Information
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Rasheed Chukwuka Bolatito
          <br />
          Rash.ID@gmail.com
        </p>
      </div>

      {/* Estimated Time of Arrival */}
      <div className="mb-6">
        <h3 className="text-sm font-bold text-gray-900 mb-1">
          Estimated Time of Arrival
        </h3>
        <p className="text-sm text-gray-600">1 - 2 days</p>
      </div>

      {/* Continue to Homepage button */}
      <Link
        href="/"
        className="w-full inline-flex items-center justify-center gap-2 bg-[#3491E8] hover:bg-[#2b7ed0] text-white text-sm font-semibold py-3.5 rounded-xl transition-colors"
      >
        Continue to Homepage
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
  );
}
