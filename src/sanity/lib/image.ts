import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { sanityDataset, sanityProjectId } from "@/sanity/env";

const builder =
  sanityProjectId && sanityDataset
    ? createImageUrlBuilder({
        projectId: sanityProjectId,
        dataset: sanityDataset,
      })
    : null;

export function urlForImage(source: SanityImageSource) {
  if (!builder) return null;
  return builder.image(source);
}

export function getSanityImageUrl(
  source: SanityImageSource | null | undefined,
  width = 1200,
): string | undefined {
  if (!source || !builder) return undefined;
  return builder.image(source).width(width).auto("format").url();
}
