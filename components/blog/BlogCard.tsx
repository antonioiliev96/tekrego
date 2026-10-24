import Link from "next/link";
import { isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { ArrowRight, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";
import type { BlogCardData } from "@/lib/blog";

interface BlogCardProps {
  post: BlogCardData;
  headingLevel?: "h2" | "h3";
  variant?: "default" | "lead";
  /** Load the cover early; use for cards that are visible without scrolling. */
  priority?: boolean;
  className?: string;
}

const BlogCard = ({ post, headingLevel = "h2", variant = "default", priority = false, className }: BlogCardProps) => {
  const Heading = headingLevel;
  const isLead = variant === "lead";

  return (
    <Link
      href={`/blog/${post.uid}`}
      className={cn(
        "group h-full rounded-2xl overflow-hidden bg-card border border-border",
        "transition-[border-color,box-shadow,transform] duration-300 hover:border-primary/30 hover:shadow-medium motion-safe:hover:-translate-y-1",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
        isLead ? "flex flex-col md:grid md:grid-cols-[3fr_2fr]" : "flex flex-col",
        className
      )}
    >
      <div className={cn("relative bg-accent overflow-hidden", isLead ? "aspect-[16/10] md:aspect-auto md:min-h-[22rem]" : "aspect-[16/10]")}>
        {isFilled.image(post.cover) ? (
          <PrismicNextImage
            field={post.cover}
            fill
            priority={priority}
            sizes={isLead ? "(max-width: 768px) 100vw, 760px" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"}
            className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
            fallbackAlt=""
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <Leaf className="w-10 h-10 text-accent-foreground/40" />
          </div>
        )}
      </div>

      <div className={cn("flex flex-col flex-1", isLead ? "p-6 md:p-10 md:justify-center" : "p-6")}>
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

        <Heading
          className={cn(
            "font-serif font-semibold text-foreground mb-2 text-balance group-hover:text-accent-foreground transition-colors",
            isLead ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"
          )}
        >
          {post.title}
        </Heading>

        {post.excerpt && (
          <p className={cn("leading-relaxed text-muted-foreground text-pretty", isLead ? "text-base line-clamp-4" : "text-sm line-clamp-3")}>
            {post.excerpt}
          </p>
        )}

        {!isLead && <div className="flex-1" />}

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-foreground">
          Прочетете статията
          <ArrowRight className="w-4 h-4 motion-safe:group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
};

export default BlogCard;
