import Link from "next/link";
import { isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { ArrowRight, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";
import type { BlogCardData } from "@/lib/blog";

interface BlogCardProps {
  post: BlogCardData;
  headingLevel?: "h2" | "h3";
  className?: string;
}

const BlogCard = ({ post, headingLevel = "h2", className }: BlogCardProps) => {
  const Heading = headingLevel;

  return (
    <Link
      href={`/blog/${post.uid}`}
      className={cn(
        "group flex flex-col h-full rounded-2xl overflow-hidden bg-card border border-border",
        "transition-all duration-300 hover:border-primary/30 hover:shadow-medium motion-safe:hover:-translate-y-1",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
        className
      )}
    >
      <div className="relative aspect-[16/10] bg-accent overflow-hidden">
        {isFilled.image(post.cover) ? (
          <PrismicNextImage
            field={post.cover}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
            className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
            fallbackAlt=""
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <Leaf className="w-10 h-10 text-accent-foreground/40" />
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-3 text-xs">
          {post.category && (
            <span className="inline-flex items-center rounded-full bg-accent text-accent-foreground px-2.5 py-0.5 font-semibold">
              {post.category}
            </span>
          )}
          {post.date && (
            <time dateTime={post.dateTime ?? undefined} className="text-muted-foreground">
              {post.date}
            </time>
          )}
        </div>

        <Heading className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {post.title}
        </Heading>

        {post.excerpt && (
          <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
            {post.excerpt}
          </p>
        )}

        <div className="flex-1" />

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
          Прочетете статията
          <ArrowRight className="w-4 h-4 motion-safe:group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
};

export default BlogCard;
