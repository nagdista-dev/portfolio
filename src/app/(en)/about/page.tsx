import type { Metadata } from "next";
import { AboutView } from "@/components/about-view";
import { JsonLd } from "@/components/json-ld";
import {
  breadcrumbJsonLd,
  buildMetadata,
  pageUrl,
  profilePageJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "About Mahmoud Elnagdy — Full-Stack Developer in Cairo",
  absoluteTitle: true,
  description:
    "About Mahmoud Elnagdy: a full-stack developer in Cairo building bilingual, accessible web products with React, Next.js, TypeScript, and Node.js.",
  path: "/about/",
  image: "/og/about-en.png",
  keywords: [
    "about Mahmoud Elnagdy",
    "Mahmoud Alnagdy developer",
    "Nagdista about",
    "Najdista about",
    "full-stack developer Cairo",
  ],
});

export default function EnglishAboutPage() {
  return (
    <>
      <AboutView locale="en" />
      <JsonLd data={profilePageJsonLd("en")} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: pageUrl("en", "/") },
          { name: "About", url: pageUrl("en", "/about/") },
        ])}
      />
    </>
  );
}
