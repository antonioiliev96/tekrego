import { Metadata } from "next";
import { siteConfig } from "@/content/siteContent";

interface OpenGraphConfig {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
}

export function generateMetadata(config: OpenGraphConfig = {}): Metadata {
  const {
    title = siteConfig.seo.defaultTitle,
    description = siteConfig.seo.defaultDescription,
    image = "/og-image.png",
    url = siteConfig.seo.siteUrl,
    type = "website"
  } = config;

  const fullImageUrl = image.startsWith("http") ? image : `${siteConfig.seo.siteUrl}${image}`;

  return {
    title,
    description,
    keywords: siteConfig.seo.keywords,
    authors: [{ name: siteConfig.business.name }],
    creator: siteConfig.business.name,
    publisher: siteConfig.business.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type,
      locale: siteConfig.seo.locale,
      url,
      siteName: siteConfig.business.name,
      title,
      description,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.business.name} - ${description}`,
          type: "image/png",
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [fullImageUrl],
      creator: siteConfig.seo.twitterHandle,
    },
    alternates: {
      canonical: url,
    },
  };
}

// Default metadata for the site
export const defaultMetadata = generateMetadata();

// Specific metadata for different page types
export const serviceMetadata = (serviceName: string, serviceDescription: string) => 
  generateMetadata({
    title: `${serviceName} | ${siteConfig.business.name}`,
    description: serviceDescription,
    url: `${siteConfig.seo.siteUrl}/services`,
  });

export const contactMetadata = generateMetadata({
  title: `Контакти | ${siteConfig.business.name}`,
  description: `Свържете се с ${siteConfig.business.name} в Русе. Телефон: ${siteConfig.business.phone}. Адрес: ${siteConfig.business.address.full}`,
  url: `${siteConfig.seo.siteUrl}/contact`,
});

export const galleryMetadata = generateMetadata({
  title: `Галерия | ${siteConfig.business.name}`,
  description: `Вижте нашето професионално масажно студио в Русе. Уютна обстановка за релаксация и лечебни масажи.`,
  url: `${siteConfig.seo.siteUrl}/gallery`,
});