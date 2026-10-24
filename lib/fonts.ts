import { Roboto, Cormorant_Garamond } from "next/font/google";

// Both are variable fonts: one file per subset covers every weight. Cyrillic is
// required because all page text is Bulgarian.
export const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-roboto",
});

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-cormorant",
});
