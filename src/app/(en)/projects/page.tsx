import type { Metadata } from "next";
import { ProjectsView } from "@/components/projects-view";
import { JsonLd } from "@/components/json-ld";
import { getGitHubRepos } from "@/lib/github";
import {
  breadcrumbJsonLd,
  buildMetadata,
  pageUrl,
  projectsCollectionJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Projects by Platform — WordPress, React & Next.js, Extensions",
  description:
    "Case studies grouped by platform: Bunyan Contracting on WordPress, Wasla, LocalTube, Tarteeb, and Yost on React & Next.js, Hassala as a browser extension, plus every public GitHub repository. Shopify and Salla work is open.",
  path: "/projects/",
  image: "/og/projects-en.png",
  keywords: [
    "Mahmoud Elnagdy projects",
    "Nagdista projects",
    "React projects",
    "Next.js projects",
    "WordPress projects",
    "browser extension projects",
    "corporate WordPress case study",
    "Shopify developer Cairo",
    "Salla developer",
    "open source projects Cairo",
  ],
});

export default async function EnglishProjectsPage() {
  const repos = await getGitHubRepos();

  return (
    <>
      <ProjectsView locale="en" repos={repos} />
      <JsonLd data={projectsCollectionJsonLd("en")} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: pageUrl("en", "/") },
          { name: "Projects", url: pageUrl("en", "/projects/") },
        ])}
      />
    </>
  );
}
