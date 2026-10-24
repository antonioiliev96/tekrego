import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import PageHeader from "@/components/ui/PageHeader";
import BlogExplorer from "@/components/blog/BlogExplorer";
import { toBlogCard } from "@/lib/blog";
import { getPostCards } from "@/lib/blog-queries";
import { generateMetadata as buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/content/siteContent";

export const metadata: Metadata = buildMetadata({
    title: "Блог",
    description: "Статии и съвети за Юмейхо терапия, масажи, биорезонанс и здравословен начин на живот от Юмейхо център ТеКрегО в Русе.",
    url: `${siteConfig.seo.siteUrl}/blog`,
});

export default async function BlogPage() {
    const posts = await getPostCards();

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
