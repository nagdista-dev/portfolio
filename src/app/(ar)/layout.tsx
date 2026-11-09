import type { Metadata, Viewport } from "next";
import "../globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { JsonLd } from "@/components/json-ld";
import { SITE } from "@/content/site";
import { personJsonLd, siteNavigationJsonLd, websiteJsonLd } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next";
import { alexandria, ibmPlexSansArabic } from "@/lib/fonts-ar";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "محمود النجدي",
    template: "%s — محمود النجدي",
  },
  description:
    "محمود النجدي مطور فول ستاك في القاهرة، مصر. يبني منتجات ويب سريعة وسهلة الاستخدام وثنائية اللغة بـ React وNext.js وTypeScript وNode.js وSQL.",
  applicationName: "نجديستا",
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
  authors: [{ name: SITE.nameAr, url: SITE.url }],
  creator: SITE.nameAr,
  publisher: SITE.nameAr,
  keywords: [
    "محمود النجدي",
    "النجدي",
    "نجديستا",
    "مطور فول ستاك",
    "مطور ويب القاهرة",
    "مطور Next.js",
    "مطور React مصر",
    "Mahmoud Elnagdy",
    "Nagdista",
  ],
  alternates: {
    canonical: "/ar/",
    languages: {
      en: "/",
      ar: "/ar/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    siteName: "نجديستا",
    locale: "ar_EG",
    alternateLocale: ["en_US"],
    url: `${SITE.url}/ar/`,
    title: "محمود النجدي — مطور فول ستاك",
    description:
      "منتجات ويب ثنائية اللغة بـ React وNext.js وTypeScript وNode.js وSQL. من القاهرة، مصر.",
    images: [{ url: "/og/home-ar-square.png", width: 1200, height: 1200 }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@nagdista",
    site: "@nagdista",
    images: ["/og/home-ar-square.png"],
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

export default function ArabicLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`locale-ar ${alexandria.variable} ${ibmPlexSansArabic.variable}`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <link
          rel="alternate"
          type="application/json"
          href="/identity.json"
          title="Machine-readable profile"
        />
        <meta
          name="msvalidate.01"
          content="A97765CFC294546AC47FBCA2401662C8"
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          تخطَّ إلى المحتوى
        </a>
        <SiteHeader locale="ar" />
        <main id="main">{children}</main>
        <SiteFooter locale="ar" />
        <ScrollReveal />
        <JsonLd data={personJsonLd("ar")} />
        <JsonLd data={websiteJsonLd("ar")} />
        <JsonLd data={siteNavigationJsonLd("ar")} />
        <Analytics />
      </body>
    </html>
  );
}
