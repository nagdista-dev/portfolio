import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { PressView } from "@/components/press-view";
import {
  breadcrumbJsonLd,
  buildMetadata,
  pageUrl,
  pressFaqJsonLd,
  pressPageJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ar",
  title: "محمود النجدي — ملف صحفي وتعريفي",
  absoluteTitle: true,
  description:
    "حقائق ونبذة وطرق كتابة الاسم وروابط رسمية لمحمود النجدي، مطور فول ستاك في القاهرة، مصر.",
  path: "/press/",
  image: "/og/about-ar.png",
  keywords: [
    "محمود النجدي",
    "النجدي",
    "نجديستا",
    "Najdista",
    "مطور فول ستاك القاهرة",
    "Mahmoud Elnagdy",
  ],
});

export default function ArabicPressPage() {
  return (
    <>
      <PressView locale="ar" />
      <JsonLd data={pressPageJsonLd("ar")} />
      <JsonLd data={pressFaqJsonLd("ar")} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "الرئيسية", url: pageUrl("ar", "/") },
          { name: "ملف صحفي", url: pageUrl("ar", "/press/") },
        ])}
      />
    </>
  );
}
