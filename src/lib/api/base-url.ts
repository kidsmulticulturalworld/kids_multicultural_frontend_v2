/**
 * Backend routes live under `/api/*` (e.g. `/api/login`).
 * Ensures `NEXT_PUBLIC_API_BASE_URL` works whether or not it includes `/api`.
 */
export function getApiBaseUrl(): string {
  const raw = (
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api"
  ).replace(/\/+$/, "");
  return raw.endsWith("/api") ? raw : `${raw}/api`;
}

/** Origin for media URLs (`/media/...`) — no trailing slash. */
export function getApiOrigin(): string {
  return getApiBaseUrl().replace(/\/api\/?$/, "");
}
