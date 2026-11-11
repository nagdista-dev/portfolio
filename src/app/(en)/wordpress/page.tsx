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
  locale: "en",
  title: "Corporate WordPress Websites",
  description:
    "Mahmoud Elnagdy builds corporate WordPress websites with Elementor, Rank Math SEO, and Fluent Forms — custom design, clean structure, and a site your team can edit. See the Bunyan Contracting case study.",
  path: "/wordpress/",
  image: "/og/wordpress-en.png",
  keywords: [
    "WordPress developer Cairo",
    "corporate WordPress website",
    "WordPress website design Egypt",
    "Elementor developer",
    "WordPress SEO",
    "Rank Math SEO",
    "Fluent Forms",
    "Arabic WordPress website",
    "Mahmoud Elnagdy WordPress",
    "Bunyan Contracting",
    "WordPress freelance Egypt",
    "corporate website design",
  ],
});

export default function EnglishWordPressPage() {
  return (
    <>
      <WordPressView locale="en" />
      <JsonLd data={wordpressPageJsonLd("en")} />
      <JsonLd data={wordpressServiceJsonLd("en")} />
      <JsonLd data={wordpressFaqJsonLd("en")} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: pageUrl("en", "/") },
          { name: "WordPress", url: pageUrl("en", "/wordpress/") },
        ])}
      />
    </>
  );
}
