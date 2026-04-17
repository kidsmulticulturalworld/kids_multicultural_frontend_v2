import { useAuthStore } from "@/stores/useAuthStore";

/** Rehydrate Zustand from `localStorage` after a full page load (persist middleware runs async). */
export function hydrateAuthFromStorage(): void {
  if (typeof window === "undefined") return;
  if (useAuthStore.getState().token) return;
  const raw = localStorage.getItem("userInfo");
  if (!raw) return;
  try {
    const data = JSON.parse(raw) as Record<string, unknown>;
    persistAuthFromResponse(data);
  } catch {
    localStorage.removeItem("userInfo");
  }
}

/** Backend may return JWT `access` (login) or legacy `token` (register). */
export function persistAuthFromResponse(data: Record<string, unknown>): void {
  const access =
    (typeof data.access === "string" && data.access) ||
    (typeof data.token === "string" && data.token) ||
    "";
  if (!access) return;

  const refresh =
    typeof data.refresh === "string" ? data.refresh : undefined;

  const user = {
    id: Number(data.id),
    username: String(data.username ?? ""),
    email: String(data.email ?? ""),
    first_name:
      typeof data.first_name === "string" ? data.first_name : undefined,
    last_name: typeof data.last_name === "string" ? data.last_name : undefined,
  };

  useAuthStore.getState().setAuth(user, access, refresh);

  if (typeof window !== "undefined") {
    const payload = { ...data, access, token: access };
    localStorage.setItem("userInfo", JSON.stringify(payload));
  }
}
