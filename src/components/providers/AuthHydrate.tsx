"use client";

import { useEffect } from "react";
import { hydrateAuthFromStorage } from "@/lib/auth/session";

/** Restores Bearer token from `userInfo` so API calls work after refresh. */
export default function AuthHydrate() {
  useEffect(() => {
    hydrateAuthFromStorage();
  }, []);
  return null;
}
