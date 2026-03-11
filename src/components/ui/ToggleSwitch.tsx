"use client";

import { cn } from "@/lib/utils";

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
}

export default function ToggleSwitch({
  checked,
  onChange,
  disabled = false,
  label,
  className,
}: ToggleSwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={cn(
        "relative inline-flex h-[32px] w-[56px] shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        checked ? "bg-[#34C759]" : "bg-gray-300",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      <span
        className={cn(
          "pointer-events-none inline-block h-[26px] w-[26px] rounded-full bg-white shadow-md ring-0 transition-transform duration-200",
          checked ? "translate-x-[27px]" : "translate-x-[3px]"
        )}
      />
    </button>
  );
}
