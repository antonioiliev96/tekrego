import { asDate, asText, type ImageField } from "@prismicio/client";
import type { BlogPostDocument } from "@/prismicio-types";

export type BlogCategory = NonNullable<BlogPostDocument["data"]["category"]>;

// `satisfies Record<BlogCategory, …>` fails the build when this list and the
// Prismic Select options drift apart (missing or misspelled category).
const categoryOrder = {
  "Юмейхо терапия": 1,
  "Масажи": 2,
  "Биорезонанс": 3,
  "Здраве и съвети": 4,
  "Новини и промоции": 5,
} satisfies Record<BlogCategory, number>;

export const CATEGORIES = Object.keys(categoryOrder) as BlogCategory[];

export const POSTS_ORDERING = [
  { field: "my.blog_post.publication_date", direction: "desc" },
] as const;

export const CARD_FIELDS = [
  "title",
  "publication_date",
  "category",
  "cover_image",
  "excerpt",
] as const satisfies readonly (keyof BlogPostDocument["data"])[];

/** A post as returned by the card query: only CARD_FIELDS are in `data`. */
export type BlogPostCard = Omit<BlogPostDocument, "data"> & {
  data: Pick<BlogPostDocument["data"], (typeof CARD_FIELDS)[number]>;
};

export type BlogCardData = {
  id: string;
  uid: string;
  title: string;
  date: string | null;
  dateTime: string | null;
  excerpt: string | null;
  cover: ImageField;
  category: BlogCategory | null;
};

export function formatDate(date: string | null | undefined) {
  const d = asDate(date ?? null);
  if (!d) return null;
  return new Intl.DateTimeFormat("bg-BG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}

/**
 * Return a JPEG of an exact size, for social previews and structured data.
 *
 * Prismic serves images through imgix, where `auto=format` overrides `fm`, so
 * it is removed to get a predictable JPEG instead of AVIF/WebP.
 */
export function cropImageUrl(url: string, width: number, height: number) {
  const u = new URL(url);
  u.searchParams.set("auto", "compress");
  u.searchParams.set("fit", "crop");
  u.searchParams.set("fm", "jpg");
  u.searchParams.set("w", String(width));
  u.searchParams.set("h", String(height));
  return u.toString();
}

export function toBlogCard(post: BlogPostCard): BlogCardData {
  return {
    id: post.id,
    uid: post.uid,
    title: asText(post.data.title),
    date: formatDate(post.data.publication_date),
    dateTime: post.data.publication_date || null,
    excerpt: post.data.excerpt || null,
    cover: post.data.cover_image,
    category: post.data.category || null,
  };
}
