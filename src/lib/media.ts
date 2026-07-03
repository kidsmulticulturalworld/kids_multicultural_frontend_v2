import { getApiOrigin } from "@/lib/api/base-url";

export function isRemoteMediaUrl(url: string): boolean {
  return url.startsWith("http://") || url.startsWith("https://");
}

/** Turn `/media/...` or absolute URLs into a browser-loadable image URL. */
export function mediaUrl(path: string | null | undefined): string {
  if (!path) return "";
  if (isRemoteMediaUrl(path)) return path;
  const origin = getApiOrigin();
  return `${origin}${path.startsWith("/") ? "" : "/"}${path}`;
}
