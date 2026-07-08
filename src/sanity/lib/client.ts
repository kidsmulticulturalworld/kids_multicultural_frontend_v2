import { createClient, type QueryParams } from "next-sanity";
import {
  getSanityPublicConfig,
  getSanityReadToken,
  sanityApiVersion,
  sanityDataset,
  sanityProjectId,
} from "@/sanity/env";

/**
 * Server-side Sanity client.
 * Uses SANITY_API_READ_TOKEN when set (private datasets / draft perspectives).
 * Token is never bundled to the browser.
 */
export function getSanityClient() {
  const token = getSanityReadToken();

  return createClient({
    projectId: sanityProjectId || getSanityPublicConfig().projectId,
    dataset: sanityDataset,
    apiVersion: sanityApiVersion,
    useCdn: !token,
    token,
    perspective: "published",
    stega: false,
  });
}

export async function sanityFetch<T>({
  query,
  params = {},
  tags = [],
  revalidate = 60,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
  revalidate?: number | false;
}): Promise<T> {
  const client = getSanityClient();
  return client.fetch<T>(query, params, {
    next: {
      revalidate,
      tags,
    },
  });
}
