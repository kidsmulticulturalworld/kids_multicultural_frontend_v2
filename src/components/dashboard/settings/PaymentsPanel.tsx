"use client";

import { PaymentMethod } from "@/types/api";

interface PaymentsPanelProps {
  methods: PaymentMethod[];
  onRemove: (id: number) => void;
  onAdd: () => void;
}

function CardIcon({ brand }: { brand: string }) {
  const label = brand === "visa" ? "Visa" : "Mastercard";
  return (
    <div
      className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center shrink-0"
      aria-label={label}
    >
      <svg
        width="12"
        height="10"
        viewBox="0 0 12 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5 2.33333H1.16667V1.16667H10.5M10.5 8.16667H1.16667V4.66667H10.5M10.5 0H1.16667C0.519167 0 0 0.519167 0 1.16667V8.16667C0 8.47609 0.122916 8.77283 0.341709 8.99162C0.560501 9.21042 0.857247 9.33333 1.16667 9.33333H10.5C10.8094 9.33333 11.1062 9.21042 11.325 8.99162C11.5437 8.77283 11.6667 8.47609 11.6667 8.16667V1.16667C11.6667 0.519167 11.1417 0 10.5 0Z"
          fill="#9ca3af"
        />
      </svg>
    </div>
  );
}

function BrandLabel({ brand }: { brand: string }) {
  return brand === "visa" ? "Visa" : "Mastercard";
}

export default function PaymentsPanel({
  methods,
  onRemove,
  onAdd,
}: PaymentsPanelProps) {
  return (
    <div className="bg-[#f5f5f5] rounded-2xl p-6 lg:p-8">
      <h2 className="text-xl font-bold text-text-heading mb-6">Payments</h2>

      <p className="text-base font-semibold text-text-heading mb-5">
        Payment Methods
      </p>

      <div className="space-y-4">
        {methods.map((method) => (
          <div
            key={method.id}
            className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4"
          >
            {/* Card icon */}
            <CardIcon brand={method.brand} />

            {/* Card details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-medium text-text-heading">
                  <BrandLabel brand={method.brand} />
                </span>
                <span className="text-sm text-text-heading">
                  ····{method.last4}
                </span>
                {method.isDefault && (
                  <span className="text-xs font-medium text-text-muted bg-gray-100 border border-gray-200 rounded-full px-2.5 py-0.5">
                    Default
                  </span>
                )}
              </div>
              <p className="text-sm text-text-muted mt-0.5">
                Expires {method.expiryDate}
              </p>
            </div>

            {/* Remove button */}
            <button
              onClick={() => onRemove(method.id)}
              className="text-sm font-medium text-red-400 hover:text-red-500 transition-colors shrink-0"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Add payment method button */}
      <button
        onClick={onAdd}
        className="mt-6 w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-enroll hover:bg-enroll/90 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
      >
        Add payment method
        <span className="text-base">+</span>
      </button>
    </div>
  );
}
