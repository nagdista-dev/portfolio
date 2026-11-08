import type { Metadata } from "next";
import { HomeView } from "@/components/home-view";
import { JsonLd } from "@/components/json-ld";
import { getGitHubRepos } from "@/lib/github";
import { buildMetadata, pageUrl, personJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Mahmoud Elnagdy — Full-Stack Developer in Cairo",
  description:
    "Mahmoud Elnagdy is a full-stack developer in Cairo, Egypt. He builds fast, accessible, bilingual web products with React, Next.js, TypeScript, Node.js, and SQL.",
  path: "/",
  image: "/og/home-en.png",
  absoluteTitle: true,
  keywords: [
    "Mahmoud Elnagdy",
    "Mahmoud Alnagdy",
    "Elnagdy",
    "Nagdista",
    "محمود النجدي",
    "النجدي",
    "نجديستا",
    "full-stack developer Cairo",
    "Next.js developer Egypt",
  ],
});

export default async function EnglishHomePage() {
  const repos = await getGitHubRepos();

  return (
    <>
      <HomeView locale="en" repoCount={repos.length} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "@id": `${pageUrl("en", "/")}#profile`,
          url: pageUrl("en", "/"),
          name: "Mahmoud Elnagdy — Full-Stack Developer",
          inLanguage: "en",
          mainEntity: personJsonLd("en"),
        }}
      />
    </>
  );
}
