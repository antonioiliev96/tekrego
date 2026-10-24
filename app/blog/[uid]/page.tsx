import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { asText, isFilled, NotFoundError } from "@prismicio/client";
import { PrismicRichText, type JSXMapSerializer } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { ChevronRight } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import BlogCard from "@/components/blog/BlogCard";
import SharePost from "@/components/blog/SharePost";
import StudioCta from "@/components/blog/StudioCta";
import { linkResolver, SITE_URL } from "@/prismicio";
import { cropImageUrl, formatDate, toBlogCard } from "@/lib/blog";
import { getPostByUID, getPostCards } from "@/lib/blog-queries";
import { generateMetadata as buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/content/siteContent";
import { cn } from "@/lib/utils";

type BlogPostPageProps = {
    params: Promise<{ uid: string }>;
};

// The UID is checked against the cached card list first, so a request for an
// unknown /blog/<uid> makes no Prismic API call.
async function getPost(uid: string) {
    const cards = await getPostCards();
    if (!cards.some((p) => p.uid === uid)) notFound();
    // Only a missing document is a 404. Other errors (5xx, timeout, 401) must
    // throw: during ISR revalidation a notFound() would replace the cached page.
    const post = await getPostByUID(uid).catch((err) => {
        if (err instanceof NotFoundError) notFound();
        throw err;
    });
    return { post, cards };
}

const richTextComponents: JSXMapSerializer = {
    image: ({ node }) => {
        const image = (
            <PrismicNextImage field={node} sizes="(max-width: 768px) 100vw, 672px" className="w-full h-auto rounded-lg" />
        );
        // Keep the link an editor can set on an image (the default serializer does).
        return isFilled.link(node.linkTo) ? <PrismicNextLink field={node.linkTo}>{image}</PrismicNextLink> : image;
    },
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { uid } = await params;
    const { post, cards } = await getPost(uid);

    const title = asText(post.data.title);
    const date = formatDate(post.data.publication_date);
    const category = post.data.category;
    const cover = post.data.cover_image;
    const postUrl = `${SITE_URL}/blog/${uid}`;

    // Related posts: same category first, then the most recent.
    const others = cards.filter((p) => p.uid !== uid);
    const sameCategory = category ? others.filter((p) => p.data.category === category) : [];
    const related = [...sameCategory, ...others.filter((p) => !sameCategory.includes(p))].slice(0, 3);

    const imageSource = post.data.meta_image?.url || cover?.url;
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            description: post.data.meta_description || post.data.excerpt || undefined,
            // Google recommends 16:9, 4:3 and 1:1 versions for article results.
            image: imageSource
                ? [cropImageUrl(imageSource, 1200, 675), cropImageUrl(imageSource, 1200, 900), cropImageUrl(imageSource, 1200, 1200)]
                : `${siteConfig.seo.siteUrl}/og-image.png`,
            datePublished: post.data.publication_date || post.first_publication_date,
            dateModified: post.last_publication_date,
            articleSection: category || undefined,
            inLanguage: "bg",
            mainEntityOfPage: postUrl,
            author: { "@type": "Organization", name: siteConfig.business.name, url: siteConfig.seo.siteUrl },
            publisher: {
                "@type": "Organization",
                name: siteConfig.business.name,
                logo: { "@type": "ImageObject", url: `${siteConfig.seo.siteUrl}/logo.png` },
            },
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Начало", item: siteConfig.seo.siteUrl },
                { "@type": "ListItem", position: 2, name: "Блог", item: `${siteConfig.seo.siteUrl}/blog` },
                { "@type": "ListItem", position: 3, name: title, item: postUrl },
            ],
        },
    ];

    const crumbLink =
        "rounded-sm text-muted-foreground hover:text-accent-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background";

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
            />

            <article>
                <header className="bg-cream-dark pt-10 pb-12 md:pt-14 md:pb-16">
                    <div className="container-narrow">
                        <div className="max-w-2xl mx-auto">
                            <nav aria-label="Навигационна пътека">
                                <ol className="flex flex-wrap items-center gap-1.5 text-sm">
                                    <li>
                                        <Link href="/" className={crumbLink}>Начало</Link>
                                    </li>
                                    <li aria-hidden="true">
                                        <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
                                    </li>
                                    <li>
                                        <Link href="/blog" className={crumbLink}>Блог</Link>
                                    </li>
                                </ol>
                            </nav>

                            <div className="flex flex-wrap items-center gap-3 mt-6 mb-4 text-sm">
                                {category && (
                                    <span className="inline-flex items-center rounded-full bg-card border border-primary/20 text-accent-foreground px-3 py-1 text-xs font-semibold">
                                        {category}
                                    </span>
                                )}
                                {date && (
                                    <time dateTime={post.data.publication_date ?? undefined} className="text-muted-foreground">
                                        {date}
                                    </time>
                                )}
                            </div>

                            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4 text-balance">{title}</h1>
                            {post.data.excerpt && (
                                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">{post.data.excerpt}</p>
                            )}
                        </div>
                    </div>
                </header>

                {isFilled.image(cover) && (
                    <div className="container-narrow mt-8 md:mt-10">
                        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-card">
                            <PrismicNextImage field={cover} fill priority sizes="(max-width: 896px) 100vw, 896px" className="object-cover" />
                        </div>
                    </div>
                )}

                <div className="container-narrow py-12 md:py-16">
                    <div className="max-w-2xl mx-auto">
                        {isFilled.richText(post.data.body) && (
                            <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-semibold prose-headings:text-balance">
                                <PrismicRichText field={post.data.body} linkResolver={linkResolver} components={richTextComponents} />
                            </div>
                        )}
                        <SharePost url={postUrl} title={title} />
                        <StudioCta />
                    </div>
                </div>
            </article>

            {related.length > 0 && (
                <Section variant="alt">
                    <SectionHeader title="Още статии" />
                    <ul className={cn("grid gap-6 md:gap-8", related.length === 1 ? "max-w-md mx-auto" : related.length === 2 ? "sm:grid-cols-2 max-w-4xl mx-auto" : "sm:grid-cols-2 lg:grid-cols-3")}>
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
    const { post } = await getPost(uid);
    const title = asText(post.data.title);
    const imageSource = post.data.meta_image?.url || post.data.cover_image?.url;

    const base = buildMetadata({
        title: post.data.meta_title || title,
        description: post.data.meta_description || post.data.excerpt || siteConfig.seo.defaultDescription,
        image: imageSource ? cropImageUrl(imageSource, 1200, 630) : undefined,
        imageType: imageSource ? "image/jpeg" : undefined,
        url: `${siteConfig.seo.siteUrl}/blog/${uid}`,
        type: "article",
    });

    return {
        ...base,
        openGraph: {
            ...base.openGraph,
            type: "article",
            publishedTime: post.data.publication_date || post.first_publication_date,
            modifiedTime: post.last_publication_date,
            section: post.data.category || undefined,
        },
    };
}

export async function generateStaticParams() {
    const posts = await getPostCards();

    return posts.map((post) => ({ uid: post.uid }));
}
