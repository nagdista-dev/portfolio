import type { Metadata } from "next";
import { HomeView } from "@/components/home-view";
import { JsonLd } from "@/components/json-ld";
import { getGitHubRepos } from "@/lib/github";
import { buildMetadata, pageUrl, personJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ar",
  title: "محمود النجدي",
  description:
    "محمود النجدي مطور فول ستاك في القاهرة، مصر. بكالوريوس نظم ومعلومات الأعمال 2026. يبني منتجات ويب سريعة وثنائية اللغة بـ React وNext.js وTypeScript وNode.js.",
  path: "/",
  image: "/og/home-ar-square.png",
  imageWidth: 1200,
  imageHeight: 1200,
  absoluteTitle: true,
  keywords: [
    "محمود النجدي",
    "النجدي",
    "نجديستا",
    "مطور فول ستاك",
    "مطور ويب القاهرة",
    "مطور Next.js",
    "مطور React مصر",
    "Mahmoud Elnagdy",
    "Nagdista",
  ],
});

export default async function ArabicHomePage() {
  const repos = await getGitHubRepos();

  return (
    <>
      <HomeView locale="ar" repoCount={repos.length} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "@id": `${pageUrl("ar", "/")}#profile`,
          url: pageUrl("ar", "/"),
          name: "محمود النجدي — مطور فول ستاك",
          inLanguage: "ar",
          dateModified: "2026-11-09T00:00:00+02:00",
          isPartOf: { "@id": "https://nagdista.com/#website" },
          mainEntity: personJsonLd("ar"),
        }}
      />
    </>
  );
}
