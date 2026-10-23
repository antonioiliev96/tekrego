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

export function toBlogCard(post: BlogPostDocument): BlogCardData {
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
