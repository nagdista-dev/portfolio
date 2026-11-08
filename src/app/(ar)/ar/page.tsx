import type { Metadata } from "next";
import { HomeView } from "@/components/home-view";
import { JsonLd } from "@/components/json-ld";
import { getGitHubRepos } from "@/lib/github";
import { buildMetadata, pageUrl, personJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ar",
  title: "محمود النجدي — مطور فول ستاك في القاهرة",
  description:
    "محمود النجدي مطور فول ستاك في القاهرة، مصر. يبني منتجات ويب سريعة وسهلة الاستخدام وثنائية اللغة بـ React وNext.js وTypeScript وNode.js وSQL.",
  path: "/",
  image: "/og/home-ar.png",
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
          mainEntity: personJsonLd("ar"),
        }}
      />
    </>
  );
}
