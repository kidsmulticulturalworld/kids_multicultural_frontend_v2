import { getApiOrigin } from "@/lib/api/base-url";

/** Turn `/media/...` or absolute URLs into a browser-loadable image URL. */
export function mediaUrl(path: string | null | undefined): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const origin = getApiOrigin();
  return `${origin}${path.startsWith("/") ? "" : "/"}${path}`;
}
