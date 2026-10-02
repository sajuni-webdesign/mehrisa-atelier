import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope, Pinyon_Script } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { StoreProvider } from "@/components/StoreProvider";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pinyon",
  display: "swap",
  preload: false,
});

const title = "Boutique & Bridal Fashion Website Design Demo | Sajuni";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s | Sajuni" },
  description: site.description,
  applicationName: `${site.name} – Demo by Sajuni`,
  keywords: [
    "luxury boutique",
    "designer boutique",
    "bridal lehenga",
    "designer lehenga online",
    "Banarasi silk saree",
    "Kanjeevaram saree",
    "anarkali suits",
    "Indo-western gowns",
    "Indian couture",
    "custom bridal wear",
    "festive wear for women",
    "ethnic wear boutique India",
  ],
  authors: [{ name: "Saptashi Saha (Sajuni)", url: site.designerUrl }],
  creator: "Sajuni",
  category: "fashion",
  alternates: { canonical: `${site.url}/` },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: `${site.url}/`,
    siteName: `${site.name} – Demo by Sajuni`,
    title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#fff8f4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" suppressHydrationWarning className={`${cormorant.variable} ${manrope.variable} ${pinyon.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-wine focus:px-5 focus:py-3 focus:text-ivory"
        >
          Skip to content
        </a>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
