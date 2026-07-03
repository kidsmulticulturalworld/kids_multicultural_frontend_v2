"use client";

import { useEffect, useState } from "react";
import { useVoteCheckoutStore } from "@/stores/useVoteCheckoutStore";

/** Wait for persisted vote-checkout state to rehydrate from localStorage. */
export function useVoteCheckoutHydrated(): boolean {
  const [hydrated, setHydrated] = useState(
    () => useVoteCheckoutStore.persist.hasHydrated()
  );

  useEffect(() => {
    if (useVoteCheckoutStore.persist.hasHydrated()) {
      setHydrated(true);
      return;
    }
    return useVoteCheckoutStore.persist.onFinishHydration(() => {
      setHydrated(true);
    });
  }, []);

  return hydrated;
}
