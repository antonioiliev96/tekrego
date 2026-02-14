import { ReactNode } from "react";
import { Providers } from "@/components/Providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LocalBusinessSchema } from "@/components/SEO";
import { inter, libreCaslonText, roboto, robotoMono, cormorantGaramond } from "@/lib/fonts";
import { defaultMetadata } from "@/lib/metadata";
import { siteConfig } from "@/content/siteContent";
import "@/app/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    ...defaultMetadata,
    metadataBase: new URL(siteConfig.seo.siteUrl),
    title: {
        default: "Юмейхо център ТекрегО | Професионални Масажи и Юмейхо Терапия в Русе",
        template: "%s | Юмейхо център ТекрегО",
    },
    description: "Професионално масажно студио в центъра на Русе. Юмейхо терапия, класически масаж, биорезонанс, вендузотерапия и още. Сертифициран терапевт. Записване: +359 87 7225535",
    appleWebApp: {
        title: "ТекрегО",
        statusBarStyle: "default",
        capable: true,
    },
    verification: {
        google: "your-google-verification-code",
    },
    other: {
        "google-site-verification": "your-google-verification-code",
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="bg" suppressHydrationWarning className={`${inter.variable} ${libreCaslonText.variable} ${roboto.variable} ${robotoMono.variable} ${cormorantGaramond.variable}`}>
            <head>
                {/* Additional Open Graph meta tags for better social media sharing */}
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:alt" content="Юмейхо център ТекрегО - Професионални масажи в Русе" />
                
                {/* Facebook specific meta tags */}
                <meta property="fb:app_id" content="your-facebook-app-id" />
                
                {/* Additional Twitter meta tags */}
                <meta name="twitter:image:alt" content="Юмейхо център ТекрегО - Професионални масажи в Русе" />
                
                {/* WhatsApp and Telegram specific meta tags */}
                <meta property="og:image:secure_url" content={`${siteConfig.seo.siteUrl}/og-image.png`} />
                
                {/* LinkedIn specific meta tags */}
                <meta property="og:site_name" content={siteConfig.business.name} />
                
                {/* Viber specific meta tags */}
                <meta name="viber:sharing:image" content={`${siteConfig.seo.siteUrl}/og-image.png`} />
                
                {/* General meta tags for better SEO */}
                <meta name="theme-color" content="#1f2937" />
                <meta name="msapplication-TileColor" content="#1f2937" />
                <meta name="msapplication-TileImage" content="/og-image.png" />
                
                {/* Preload the OG image for faster loading */}
                <link rel="preload" href="/og-image.png" as="image" type="image/png" />
            </head>
            <body>
                <Providers>
                    <LocalBusinessSchema />
                    <div className="flex flex-col min-h-screen">
                        <Header />
                        <main className="flex-grow">{children}</main>
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
