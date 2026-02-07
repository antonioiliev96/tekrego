import { Inter, Libre_Caslon_Text, Roboto, Roboto_Mono, Cormorant_Garamond } from "next/font/google";

export const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
});

export const libreCaslonText = Libre_Caslon_Text({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

export const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-roboto",
});

export const robotoMono = Roboto_Mono({
  weight: ["400", "700"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-mono",
});

export const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-cormorant",
});
