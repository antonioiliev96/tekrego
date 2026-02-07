import { ReactNode } from "react";
import { Providers } from "@/components/Providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LocalBusinessSchema } from "@/components/SEO";
import { inter, libreCaslonText, roboto, robotoMono, cormorantGaramond } from "@/lib/fonts";
import "@/app/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: "Масажно студио в Русе | Професионални масажи",
        template: "%s | Масажно студио в Русе",
    },
    description: "Професионално масажно студио в Русе. Предлагаме релаксиращи, лечебни и спортни масажи в уютна обстановка.",
    keywords: ["масаж", "масажно студио", "Русе", "релаксиращ масаж", "лечебен масаж", "спортен масаж"],
    openGraph: {
        type: "website",
        locale: "bg_BG",
        siteName: "Масажно студио в Русе",
    },
    appleWebApp: {
        title: "Tekrego",
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
            </body>
        </html>
    );
}
