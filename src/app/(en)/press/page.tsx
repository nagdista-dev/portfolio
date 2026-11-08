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
  locale: "en",
  title: "Mahmoud Elnagdy — Press & Identity Kit",
  absoluteTitle: true,
  description:
    "Canonical facts, bios, name spellings, and official links for Mahmoud Elnagdy, a full-stack developer based in Cairo, Egypt.",
  path: "/press/",
  image: "/og/about-en.png",
  keywords: [
    "Mahmoud Elnagdy",
    "Mahmoud Alnagdy",
    "محمود النجدي",
    "Nagdista",
    "full-stack developer Cairo",
  ],
});

export default function EnglishPressPage() {
  return (
    <>
      <PressView locale="en" />
      <JsonLd data={pressPageJsonLd("en")} />
      <JsonLd data={pressFaqJsonLd("en")} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: pageUrl("en", "/") },
          { name: "Press", url: pageUrl("en", "/press/") },
        ])}
      />
    </>
  );
}
