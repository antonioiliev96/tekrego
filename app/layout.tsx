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
    other: {},
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="bg" suppressHydrationWarning className={`${inter.variable} ${libreCaslonText.variable} ${roboto.variable} ${robotoMono.variable} ${cormorantGaramond.variable}`}>
            <head>
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:alt" content="Юмейхо център ТеКрегО - Професионални масажи в Русе" />
                <meta name="twitter:image:alt" content="Юмейхо център ТеКрегО - Професионални масажи в Русе" />
                <meta property="og:image:secure_url" content={`${siteConfig.seo.siteUrl}/og-image.png`} />
                <meta property="og:site_name" content={siteConfig.business.name} />
                <meta name="theme-color" content="#1f2937" />
                <meta name="msapplication-TileColor" content="#1f2937" />
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
                <Analytics />
            </body>
        </html>
    );
}
