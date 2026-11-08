import type { Metadata } from "next";
import { ThanksView } from "@/components/thanks-view";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ar",
  title: "الرسالة وصلت",
  description: "رسالتك لمحمود النجدي وصلت.",
  path: "/thanks/",
  image: "/og/home-ar.png",
  noindex: true,
});

export default function ArabicThanksPage() {
  return <ThanksView locale="ar" />;
}
