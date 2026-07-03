import Image, { type ImageProps } from "next/image";
import { isRemoteMediaUrl } from "@/lib/media";

/**
 * Remote API/S3 images skip Next.js optimization so the browser loads them
 * directly (avoids server-side fetch failures on external hosts).
 */
export default function MediaImage({ src, ...rest }: ImageProps) {
  const unoptimized = typeof src === "string" && isRemoteMediaUrl(src);
  return <Image src={src} unoptimized={unoptimized} {...rest} />;
}
