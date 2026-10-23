import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { asText, isFilled } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { ArrowLeft } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import BlogCard from "@/components/blog/BlogCard";
import SharePost from "@/components/blog/SharePost";
import { createClient, linkResolver, SITE_URL } from "@/prismicio";
import { POSTS_ORDERING, formatDate, toBlogCard } from "@/lib/blog";
import { generateMetadata as buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/content/siteContent";

type BlogPostPageProps = {
    params: Promise<{ uid: string }>;
};

async function getPost(uid: string) {
    const client = createClient();
    return client.getByUID("blog_post", uid).catch(() => notFound());
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { uid } = await params;
    const post = await getPost(uid);
    const client = createClient();

    const title = asText(post.data.title);
    const date = formatDate(post.data.publication_date);
    const category = post.data.category;
    const cover = post.data.cover_image;
    const postUrl = `${SITE_URL}/blog/${uid}`;

    // Related posts: same category first, then the most recent.
    const others = (await client.getAllByType("blog_post", { orderings: [...POSTS_ORDERING] })).filter(
        (p) => p.uid !== uid
    );
    const sameCategory = category ? others.filter((p) => p.data.category === category) : [];
    const related = [...sameCategory, ...others.filter((p) => !sameCategory.includes(p))].slice(0, 3);

    const imageUrl = post.data.meta_image?.url || cover?.url || `${siteConfig.seo.siteUrl}/og-image.png`;
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title,
        description: post.data.meta_description || post.data.excerpt || undefined,
        image: imageUrl,
        datePublished: post.data.publication_date || post.first_publication_date,
        dateModified: post.last_publication_date,
        inLanguage: "bg",
        mainEntityOfPage: postUrl,
        author: { "@type": "Organization", name: siteConfig.business.name, url: siteConfig.seo.siteUrl },
        publisher: {
            "@type": "Organization",
            name: siteConfig.business.name,
            logo: { "@type": "ImageObject", url: `${siteConfig.seo.siteUrl}/logo.png` },
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
            />

            <article>
                <header className="bg-cream-dark pt-12 pb-12 md:pt-16 md:pb-16">
                    <div className="container-narrow">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent-foreground transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
                        >
                            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                            Всички статии
                        </Link>

                        <div className="flex flex-wrap items-center gap-3 mt-6 mb-4 text-sm">
                            {category && (
                                <span className="inline-flex items-center rounded-full bg-primary/10 text-accent-foreground px-3 py-1 text-xs font-semibold">
                                    {category}
                                </span>
                            )}
                            {date && (
                                <time dateTime={post.data.publication_date ?? undefined} className="text-muted-foreground">
                                    {date}
                                </time>
                            )}
                        </div>

                        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">{title}</h1>
                        {post.data.excerpt && (
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{post.data.excerpt}</p>
                        )}
                    </div>
                </header>

                {isFilled.image(cover) && (
                    <div className="container-narrow -mb-4 mt-8 md:mt-10">
                        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-card">
                            <PrismicNextImage field={cover} fill priority sizes="(max-width: 896px) 100vw, 896px" className="object-cover" />
                        </div>
                    </div>
                )}

                <div className="container-narrow py-12 md:py-16">
                    {isFilled.richText(post.data.body) && (
                        <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-semibold">
                            <PrismicRichText field={post.data.body} linkResolver={linkResolver} />
                        </div>
                    )}
                    <SharePost url={postUrl} title={title} />
                </div>
            </article>

            {related.length > 0 && (
                <Section variant="alt">
                    <SectionHeader title="Още статии" />
                    <ul className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {related.map((p) => (
                            <li key={p.id}>
                                <BlogCard post={toBlogCard(p)} headingLevel="h3" />
                            </li>
                        ))}
                    </ul>
                </Section>
            )}
        </>
    );
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { uid } = await params;
    const post = await getPost(uid);
    const title = asText(post.data.title);

    return buildMetadata({
        title: post.data.meta_title || title,
        description: post.data.meta_description || post.data.excerpt || siteConfig.seo.defaultDescription,
        image: post.data.meta_image?.url || post.data.cover_image?.url || undefined,
        url: `${siteConfig.seo.siteUrl}/blog/${uid}`,
        type: "article",
    });
}

export async function generateStaticParams() {
    const client = createClient();
    const posts = await client.getAllByType("blog_post");

    return posts.map((post) => ({ uid: post.uid }));
}
