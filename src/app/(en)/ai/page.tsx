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
  locale: "en",
  title: "AI & Developer Workflows",
  description:
    "Mahmoud Elnagdy writes AI in Brief, a daily LinkedIn newsletter about AI for developers, and builds AI-powered web features.",
  path: "/ai/",
  image: "/og/about-en.png",
  keywords: [
    "Mahmoud Elnagdy AI",
    "Mahmoud Elnagdy artificial intelligence",
    "AI in Brief",
    "AI developer Cairo",
    "AI-assisted development",
    "OpenAI API developer",
  ],
});

export default function EnglishAiPage() {
  return (
    <>
      <AiView locale="en" />
      <JsonLd data={aiPageJsonLd("en")} />
      <JsonLd data={aiFaqJsonLd("en")} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: pageUrl("en", "/") },
          { name: "AI", url: pageUrl("en", "/ai/") },
        ])}
      />
    </>
  );
}
