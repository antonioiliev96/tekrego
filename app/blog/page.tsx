import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import PageHeader from "@/components/ui/PageHeader";
import BlogExplorer from "@/components/blog/BlogExplorer";
import { createClient } from "@/prismicio";
import { POSTS_ORDERING, toBlogCard } from "@/lib/blog";
import { generateMetadata as buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/content/siteContent";

export const metadata: Metadata = buildMetadata({
    title: "Блог",
    description: "Статии и съвети за Юмейхо терапия, масажи, биорезонанс и здравословен начин на живот от Юмейхо център ТеКрегО в Русе.",
    url: `${siteConfig.seo.siteUrl}/blog`,
});

export default async function BlogPage() {
    const client = createClient();
    const posts = await client.getAllByType("blog_post", {
        orderings: [...POSTS_ORDERING],
    });

    return (
        <>
            <PageHeader
                subtitle="Блог"
                title="Статии и съвети"
                description="Полезно за Юмейхо терапията, масажите, биорезонанса и грижата за тялото."
            />
            <Section>
                <BlogExplorer posts={posts.map(toBlogCard)} />
            </Section>
        </>
    );
}
