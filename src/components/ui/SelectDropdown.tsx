"use client";

import { cn } from "@/lib/utils";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectDropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  label?: string;
  helperText?: string;
  disabled?: boolean;
  className?: string;
}

export default function SelectDropdown({
  value,
  onChange,
  options,
  label,
  helperText,
  disabled = false,
  className,
}: SelectDropdownProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && (
        <label className="text-base font-semibold text-text-heading">
          {label}
        </label>
      )}
      <div className="relative w-full max-w-[380px]">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={cn(
            "w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 pr-10 text-base text-text-body outline-none transition-colors duration-200",
            "focus:border-primary focus:ring-2 focus:ring-primary/20",
            "hover:border-gray-300",
            disabled && "opacity-50 cursor-not-allowed bg-gray-50"
          )}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      {helperText && (
        <p className="text-sm text-text-muted">{helperText}</p>
      )}
    </div>
  );
}
