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
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
    ...defaultMetadata,
    metadataBase: new URL(siteConfig.seo.siteUrl),
    title: {
        default: "Юмейхо център ТеКрегО | Професионални Масажи и Юмейхо Терапия в Русе",
        template: "%s | Юмейхо център ТеКрегО",
    },
    description: "Професионално масажно студио в централната част на Русе. Юмейхо терапия, класически масаж, биорезонанс, вендузотерапия и още. Сертифициран терапевт. Записване: +359 87 7225535",
    appleWebApp: {
        title: "ТеКрегО",
        statusBarStyle: "default",
        capable: true,
    },
    openGraph: {
        ...defaultMetadata.openGraph,
        siteName: siteConfig.business.name,
        images: [
            {
                url: `${siteConfig.seo.siteUrl}/og-image.png`,
                width: 1200,
                height: 630,
                alt: "Юмейхо център ТеКрегО - Професионални масажи в Русе",
                type: "image/png",
                secureUrl: `${siteConfig.seo.siteUrl}/og-image.png`,
            }
        ],
    },
    twitter: {
        ...defaultMetadata.twitter,
        images: {
            url: `${siteConfig.seo.siteUrl}/og-image.png`,
            alt: "Юмейхо център ТеКрегО - Професионални масажи в Русе",
        },
    },
    other: {
        "theme-color": "#1f2937",
        "msapplication-TileColor": "#1f2937",
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="bg" suppressHydrationWarning className={`${inter.variable} ${libreCaslonText.variable} ${roboto.variable} ${robotoMono.variable} ${cormorantGaramond.variable}`}>
            <body>
                <Providers>
                    <LocalBusinessSchema />
                    <div className="flex flex-col min-h-screen">
                        <Header />
                        <main className="flex-grow">{children}</main>
                        <Footer />
                    </div>
                </Providers>
                <Analytics />
            </body>
        </html>
    );
}
