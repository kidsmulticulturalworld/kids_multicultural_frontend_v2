"use client";

import { useEffect, useState } from "react";
import { useVoteCheckoutStore } from "@/stores/useVoteCheckoutStore";

/** Wait for persisted vote-checkout state to rehydrate from localStorage. */
export function useVoteCheckoutHydrated(): boolean {
  // Start false: during SSR/prerender there is no persisted state and the
  // `persist` API may be unavailable, so we only inspect it on the client.
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const persist = useVoteCheckoutStore.persist;
    if (!persist) {
      setHydrated(true);
      return;
    }
    if (persist.hasHydrated()) {
      setHydrated(true);
      return;
    }
    return persist.onFinishHydration(() => {
      setHydrated(true);
    });
  }, []);

  return hydrated;
}
