import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { getSanityRevalidateSecret } from "@/sanity/env";

/**
 * On-demand revalidation webhook for Sanity.
 * Configure in Sanity Manage → API → Webhooks:
 *   URL: https://your-domain.com/api/revalidate
 *   Secret header: Authorization: Bearer <SANITY_REVALIDATE_SECRET>
 *   Or query: ?secret=<SANITY_REVALIDATE_SECRET>
 *
 * Never use NEXT_PUBLIC_ for the secret.
 */
export async function POST(request: NextRequest) {
  const expected = getSanityRevalidateSecret();

  if (!expected) {
    return NextResponse.json(
      { message: "Revalidation secret is not configured" },
      { status: 500 },
    );
  }

  const authHeader = request.headers.get("authorization");
  const bearer =
    authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : null;
  const querySecret = request.nextUrl.searchParams.get("secret");
  const provided = bearer || querySecret;

  if (!provided || provided !== expected) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = (await request.json().catch(() => null)) as {
      _type?: string;
      slug?: { current?: string };
    } | null;

    revalidateTag("post", "max");
    revalidatePath("/blog");
    revalidatePath("/sitemap.xml");

    const slug = body?.slug?.current;
    if (slug) {
      revalidateTag(`post:${slug}`, "max");
      revalidatePath(`/blog/${slug}`);
    }

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      slug: slug ?? null,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error revalidating",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
