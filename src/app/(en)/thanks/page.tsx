import type { Metadata } from "next";
import { ThanksView } from "@/components/thanks-view";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Message sent",
  description: "Your message to Mahmoud Elnagdy has been sent.",
  path: "/thanks/",
  image: "/og/home-en.png",
  noindex: true,
});

export default function EnglishThanksPage() {
  return <ThanksView locale="en" />;
}
