import { MetadataRoute } from 'next'
import { siteConfig } from '@/content/siteContent'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${siteConfig.seo.siteUrl}/sitemap.xml`,
  }
}
