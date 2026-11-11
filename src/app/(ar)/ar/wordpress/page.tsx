import type { Metadata } from "next";
import { WordPressView } from "@/components/wordpress-view";
import { JsonLd } from "@/components/json-ld";
import {
  breadcrumbJsonLd,
  buildMetadata,
  pageUrl,
  wordpressFaqJsonLd,
  wordpressPageJsonLd,
  wordpressServiceJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ar",
  title: "تصميم مواقع وردبريس للشركات",
  description:
    "محمود النجدي يبني مواقع وردبريس للشركات بـ Elementor وRank Math SEO وFluent Forms — تصميم مخصص وهيكل نضيف وموقع فريقك يقدر يعدله. شوف دراسة حالة Bunyan Contracting.",
  path: "/wordpress/",
  image: "/og/wordpress-ar.png",
  keywords: [
    "تصميم مواقع وردبريس",
    "مطور وردبريس القاهرة",
    "مواقع شركات وردبريس",
    "تصميم مواقع شركات مصر",
    "مطور Elementor",
    "SEO وردبريس",
    "Rank Math",
    "Fluent Forms",
    "موقع وردبريس عربي",
    "محمود النجدي وردبريس",
    "Bunyan Contracting",
    "وردبريس فريلانس مصر",
  ],
});

export default function ArabicWordPressPage() {
  return (
    <>
      <WordPressView locale="ar" />
      <JsonLd data={wordpressPageJsonLd("ar")} />
      <JsonLd data={wordpressServiceJsonLd("ar")} />
      <JsonLd data={wordpressFaqJsonLd("ar")} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "الرئيسية", url: pageUrl("ar", "/") },
          { name: "وردبريس", url: pageUrl("ar", "/wordpress/") },
        ])}
      />
    </>
  );
}
