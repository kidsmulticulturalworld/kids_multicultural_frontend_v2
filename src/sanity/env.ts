/**
 * Sanity env helpers.
 *
 * Project ID + dataset are non-secrets (also needed client-side for Studio/CDN).
 * Tokens and revalidate secrets MUST stay server-only — never use NEXT_PUBLIC_.
 */

function requirePublic(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(
      `Missing environment variable: ${name}. Add it to .env.local (see .env.example).`,
    );
  }
  return value;
}

export const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const sanityApiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2025-01-01";

/** Server-only read token — never expose via NEXT_PUBLIC_ */
export function getSanityReadToken(): string | undefined {
  return process.env.SANITY_API_READ_TOKEN;
}

export function getSanityRevalidateSecret(): string | undefined {
  return process.env.SANITY_REVALIDATE_SECRET;
}

/** Use when Studio or client config must run — fails loudly if misconfigured. */
export function getSanityPublicConfig() {
  return {
    projectId: requirePublic(
      "NEXT_PUBLIC_SANITY_PROJECT_ID",
      process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    ),
    dataset: requirePublic(
      "NEXT_PUBLIC_SANITY_DATASET",
      process.env.NEXT_PUBLIC_SANITY_DATASET,
    ),
    apiVersion: sanityApiVersion,
  };
}

export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
    process.env.VERCEL_URL?.replace(/\/+$/, "").replace(/^/, "https://") ||
    "http://localhost:3000"
  );
}
