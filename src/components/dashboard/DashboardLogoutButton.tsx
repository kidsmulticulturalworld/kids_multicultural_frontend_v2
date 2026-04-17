"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { authService } from "@/lib/api/services";
import { cn } from "@/lib/utils";

type Props = {
  /** Narrow icon rail (desktop sidebar) */
  variant: "sidebar-icon" | "drawer-row";
  onAfterLogout?: () => void;
};

export default function DashboardLogoutButton({
  variant,
  onAfterLogout,
}: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handle = async () => {
    setLoading(true);
    try {
      await authService.logout();
    } finally {
      onAfterLogout?.();
      router.push("/");
      setLoading(false);
    }
  };

  if (variant === "sidebar-icon") {
    return (
      <button
        type="button"
        title="Logout"
        aria-label="Logout"
        onClick={handle}
        disabled={loading}
        className={cn(
          "w-[50px] h-[50px] flex items-center justify-center rounded-xl transition-colors",
          "bg-white/8 border border-white/10 text-white/50 hover:bg-white/14 hover:text-white/70"
        )}
      >
        <Image
          src="/dashboard/icons/logout.svg"
          alt=""
          width={22}
          height={22}
          className="opacity-60"
        />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handle}
      disabled={loading}
      className={cn(
        "flex items-center gap-3 px-3 py-3 rounded-xl transition-colors w-full max-w-full text-left",
        "text-white/60 hover:bg-white/10 hover:text-white/80"
      )}
    >
      <Image
        src="/dashboard/icons/logout.svg"
        alt=""
        width={22}
        height={22}
        className="opacity-60"
      />
      <span className="text-sm font-medium">
        {loading ? "Signing out…" : "Logout"}
      </span>
    </button>
  );
}
