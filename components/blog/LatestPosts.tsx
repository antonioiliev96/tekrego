import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import BlogCard from "@/components/blog/BlogCard";
import { toBlogCard, type BlogCategory } from "@/lib/blog";
import { getPostCards } from "@/lib/blog-queries";
import { cn } from "@/lib/utils";

interface LatestPostsProps {
  title: string;
  description?: string;
  /** Show only this topic; the section is hidden when it has no posts. */
  category?: BlogCategory;
  limit?: number;
  variant?: "default" | "alt";
}

const LatestPosts = async ({ title, description, category, limit = 3, variant = "default" }: LatestPostsProps) => {
  const posts = (await getPostCards())
    .filter((p) => !category || p.data.category === category)
    .slice(0, limit);

  if (posts.length === 0) return null;

  return (
    <Section variant={variant}>
      <SectionHeader subtitle="Блог" title={title} description={description} />
      <ul className={cn("grid gap-6 md:gap-8", posts.length === 1 ? "max-w-md mx-auto" : posts.length === 2 ? "sm:grid-cols-2 max-w-4xl mx-auto" : "sm:grid-cols-2 lg:grid-cols-3")}>
        {posts.map((post) => (
          <li key={post.id}>
            <BlogCard post={toBlogCard(post)} headingLevel="h3" />
          </li>
        ))}
      </ul>
      <div className="text-center mt-10">
        <Button variant="outline" size="lg" asChild>
          <Link href="/blog">
            Всички статии
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </Section>
  );
};

export default LatestPosts;
