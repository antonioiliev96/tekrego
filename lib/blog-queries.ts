import { createClient } from "@/prismicio";
import { CARD_FIELDS, POSTS_ORDERING, type BlogPostCard } from "@/lib/blog";

/**
 * Fetch every post with card fields only, newest first.
 *
 * The body is ~80% of a post. Full posts would make one 100-post API page
 * exceed Next's 2 MB fetch-cache limit, and an uncached list would call Prismic
 * on every request. All blog pages, the sitemap and the service pages use this
 * exact query, so they share one cached fetch that the webhook revalidates.
 */
export async function getPostCards(): Promise<BlogPostCard[]> {
  return createClient().getAllByType("blog_post", {
    orderings: [...POSTS_ORDERING],
    fetch: CARD_FIELDS.map((field) => `blog_post.${field}`),
  });
}

export function getPostByUID(uid: string) {
  return createClient().getByUID("blog_post", uid);
}
