import type { Metadata, Viewport } from "next";
import "../globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { JsonLd } from "@/components/json-ld";
import { SITE } from "@/content/site";
import { personJsonLd, siteNavigationJsonLd, websiteJsonLd } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next";
import { inter, spaceGrotesk } from "@/lib/fonts-en";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Mahmoud Elnagdy",
    template: "%s — Mahmoud Elnagdy",
  },
  description:
    "Mahmoud Elnagdy is a full-stack developer in Cairo, Egypt. He builds fast, accessible, bilingual web products with React, Next.js, TypeScript, Node.js, and SQL.",
  applicationName: "Nagdista",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icons/nagdista-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icons/nagdista-96.png", sizes: "96x96", type: "image/png" },
      { url: "/icons/nagdista-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/icons/nagdista-180.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  keywords: [
    "Mahmoud Elnagdy",
    "Mahmoud Alnagdy",
    "Elnagdy",
    "Nagdista",
    "محمود النجدي",
    "النجدي",
    "نجديستا",
    "full-stack developer Cairo",
    "Next.js developer Egypt",
    "React developer Cairo",
    "TypeScript developer",
  ],
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ar: "/ar/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    siteName: "Nagdista",
    locale: "en_US",
    alternateLocale: ["ar_EG"],
    url: SITE.url,
    title: "Mahmoud Elnagdy — Full-Stack Developer",
    description:
      "Bilingual web products built with React, Next.js, TypeScript, Node.js, and SQL. Based in Cairo, Egypt.",
    images: [{ url: "/og/home-en-square.png", width: 1200, height: 1200 }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@nagdista",
    site: "@nagdista",
    images: ["/og/home-en-square.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#f7f4ef",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const bootScript = `document.documentElement.classList.add('js')`;

export default function EnglishLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`locale-en ${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader locale="en" />
        <main id="main">{children}</main>
        <SiteFooter locale="en" />
        <ScrollReveal />
        <JsonLd data={personJsonLd("en")} />
        <JsonLd data={websiteJsonLd("en")} />
        <JsonLd data={siteNavigationJsonLd("en")} />
        <Analytics />
      </body>
    </html>
  );
}
