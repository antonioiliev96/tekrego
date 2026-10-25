import { draftMode } from "next/headers";
import { ForbiddenError, ParsingError } from "@prismicio/client";
import { createClient } from "@/prismicio";
import { CARD_FIELDS, POSTS_ORDERING, type BlogPostCard } from "@/lib/blog";

/**
 * Run a query, and in draft mode retry it once on the published content.
 *
 * In draft mode the client reads the preview ref from the `io.prismic.preview`
 * cookie. When that ref is no longer valid (the preview session ended, or the
 * previewed release was published), every query throws "Invalid ref of
 * preview" (a ParsingError) and each blog page becomes a 500 for that editor.
 * An explicit `ref` takes precedence over the cookie, so the retry uses the
 * master ref. Network errors and Prismic 5xx are not retried: during a valid
 * preview they must not silently show published content.
 */
async function withPreviewFallback<T>(query: (ref?: string) => Promise<T>): Promise<T> {
  try {
    return await query();
  } catch (err) {
    const isBadPreviewRef = err instanceof ParsingError || err instanceof ForbiddenError;
    if (!isBadPreviewRef || !(await draftMode()).isEnabled) throw err;
    const { ref } = await createClient().getMasterRef();
    return query(ref);
  }
}

/**
 * Fetch every post with card fields only, newest first.
 *
 * The body is ~80% of a post. Full posts would make one 100-post API page
 * exceed Next's 2 MB fetch-cache limit, and an uncached list would call Prismic
 * on every request. All blog pages, the sitemap and the service pages use this
 * exact query, so they share one cached fetch that the webhook revalidates.
 */
export async function getPostCards(): Promise<BlogPostCard[]> {
  return withPreviewFallback((ref) =>
    createClient().getAllByType("blog_post", {
      orderings: [...POSTS_ORDERING],
      fetch: CARD_FIELDS.map((field) => `blog_post.${field}`),
      ref,
    })
  );
}

export function getPostByUID(uid: string) {
  return withPreviewFallback((ref) => createClient().getByUID("blog_post", uid, { ref }));
}
