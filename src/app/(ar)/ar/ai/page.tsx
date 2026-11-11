import type { Metadata } from "next";
import { AiView } from "@/components/ai-view";
import { JsonLd } from "@/components/json-ld";
import {
  aiFaqJsonLd,
  aiPageJsonLd,
  breadcrumbJsonLd,
  buildMetadata,
  pageUrl,
} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ar",
  title: "الذكاء الاصطناعي وتطوير الويب",
  description:
    "محمود النجدي يكتب AI in Brief، نشرة يومية على LinkedIn عن أخبار الذكاء الاصطناعي للمطورين، ويستخدم أدوات AI في التطوير والاختبار والعمل ثنائي اللغة.",
  path: "/ai/",
  image: "/og/about-ar.png",
  keywords: [
    "محمود النجدي AI",
    "النجدي AI",
    "الذكاء الاصطناعي",
    "AI in Brief",
    "Najdista",
    "مطور AI القاهرة",
    "تطوير بالذكاء الاصطناعي",
  ],
});

export default function ArabicAiPage() {
  return (
    <>
      <AiView locale="ar" />
      <JsonLd data={aiPageJsonLd("ar")} />
      <JsonLd data={aiFaqJsonLd("ar")} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "الرئيسية", url: pageUrl("ar", "/") },
          { name: "الذكاء الاصطناعي", url: pageUrl("ar", "/ai/") },
        ])}
      />
    </>
  );
}
