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
  locale: "ar",
  title: "عن محمود النجدي — مطور فول ستاك في القاهرة",
  absoluteTitle: true,
  description:
    "عن محمود النجدي: مطور فول ستاك في القاهرة يبني منتجات ويب ثنائية اللغة وسهلة الاستخدام بـ React وNext.js وTypeScript وNode.js.",
  path: "/about/",
  image: "/og/about-ar.png",
  keywords: [
    "عن محمود النجدي",
    "محمود النجدي مطور",
    "نجديستا",
    "مطور فول ستاك القاهرة",
  ],
});

export default function ArabicAboutPage() {
  return (
    <>
      <AboutView locale="ar" />
      <JsonLd data={profilePageJsonLd("ar")} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "الرئيسية", url: pageUrl("ar", "/") },
          { name: "عني", url: pageUrl("ar", "/about/") },
        ])}
      />
    </>
  );
}
