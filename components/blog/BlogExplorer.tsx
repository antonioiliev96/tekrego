"use client";

import { useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BlogCard from "@/components/blog/BlogCard";
import { CATEGORIES, type BlogCardData, type BlogCategory } from "@/lib/blog";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 9;

type CategoryFilter = BlogCategory | "all";

const pillClass = (active: boolean) =>
  cn(
    "inline-flex shrink-0 snap-start items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
    active
      ? "bg-accent-foreground border-accent-foreground text-primary-foreground"
      : "bg-card border-border text-foreground hover:border-primary/40 hover:text-accent-foreground"
  );

export default function BlogExplorer({ posts }: { posts: BlogCardData[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [page, setPage] = useState(1);
  const listRef = useRef<HTMLDivElement>(null);

  // Counts ignore the search box so the rail shows how big each topic is.
  const counts = useMemo(() => {
    const map = Object.fromEntries(CATEGORIES.map((c) => [c, 0])) as Record<BlogCategory, number>;
    for (const p of posts) {
      if (p.category && p.category in map) map[p.category]++;
    }
    return map;
  }, [posts]);

  const filtered = useMemo(() => {
    const q = query.trim().toLocaleLowerCase("bg");
    return posts.filter((post) => {
      if (category !== "all" && post.category !== category) return false;
      if (!q) return true;
      return `${post.title} ${post.excerpt ?? ""}`.toLocaleLowerCase("bg").includes(q);
    });
  }, [posts, query, category]);

  // The newest post leads the unfiltered list; filtered results stay a plain grid.
  const showLead = category === "all" && !query.trim() && filtered.length > 0;
  const lead = showLead ? filtered[0] : null;
  const gridPosts = showLead ? filtered.slice(1) : filtered;

  const pageCount = Math.max(1, Math.ceil(gridPosts.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const visible = gridPosts.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const goToPage = (next: number) => {
    setPage(next);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    listRef.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  };

  const selectCategory = (next: CategoryFilter) => {
    setCategory(next);
    setPage(1);
  };

  if (posts.length === 0) {
    return (
      <p className="text-center text-lg text-muted-foreground py-12">
        Все още няма публикувани статии. Очаквайте скоро!
      </p>
    );
  }

  return (
    <div ref={listRef} className="scroll-mt-28">
      <div className="flex flex-col gap-6 mb-10">
        <div className="relative max-w-md w-full mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" aria-hidden="true" />
          <Input
            type="search"
            name="q"
            autoComplete="off"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Търсене в статиите…"
            aria-label="Търсене в статиите"
            className="pl-9 h-11 rounded-full bg-card"
          />
        </div>

        {/* One swipeable row on phones, centred and wrapped from md up. scroll-px
            matches px: without it, snapping pulls the first topic to the screen edge. */}
        <div
          role="group"
          aria-label="Филтър по тема"
          className="flex gap-2 overflow-x-auto snap-x pb-2 -mx-4 px-4 scroll-px-4 sm:-mx-6 sm:px-6 sm:scroll-px-6 md:mx-0 md:px-0 md:scroll-px-0 md:pb-0 md:flex-wrap md:justify-center md:overflow-visible"
        >
          <button type="button" aria-pressed={category === "all"} onClick={() => selectCategory("all")} className={pillClass(category === "all")}>
            Всички
            <span className="text-xs opacity-80 tabular-nums">{posts.length}</span>
          </button>
          {CATEGORIES.map((c) => (
            <button key={c} type="button" aria-pressed={category === c} onClick={() => selectCategory(c)} className={pillClass(category === c)}>
              {c}
              <span className="text-xs opacity-80 tabular-nums">{counts[c]}</span>
            </button>
          ))}
        </div>
      </div>

      <p aria-live="polite" className="sr-only">
        {filtered.length === 1 ? "Намерена е 1 статия" : `Намерени са ${filtered.length} статии`}
      </p>

      {lead && currentPage === 1 && <BlogCard post={lead} variant="lead" priority className="mb-6 md:mb-8" />}

      {visible.length > 0 ? (
        <ul className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((post, i) => (
            <li key={post.id}>
              <BlogCard post={post} priority={!lead && currentPage === 1 && i < 3} />
            </li>
          ))}
        </ul>
      ) : (
        !lead && (
          <p className="text-center text-muted-foreground py-12">
            Няма статии, които отговарят на търсенето. Опитайте с друга дума или изберете „Всички“.
          </p>
        )
      )}

      {pageCount > 1 && (
        <nav aria-label="Страници" className="flex flex-wrap items-center justify-center gap-2 mt-12">
          <Button variant="outline" size="icon" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} aria-label="Предишна страница">
            <ChevronLeft />
          </Button>
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
            <Button
              key={n}
              variant={n === currentPage ? "default" : "outline"}
              size="icon"
              onClick={() => goToPage(n)}
              aria-current={n === currentPage ? "page" : undefined}
              aria-label={`Страница ${n}`}
              className={cn("tabular-nums", n === currentPage && "bg-accent-foreground hover:bg-accent-foreground/90")}
            >
              {n}
            </Button>
          ))}
          <Button variant="outline" size="icon" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === pageCount} aria-label="Следваща страница">
            <ChevronRight />
          </Button>
        </nav>
      )}
    </div>
  );
}
