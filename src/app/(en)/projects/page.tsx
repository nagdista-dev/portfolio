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
  title: "Projects — WordPress, Shopify & Salla",
  description:
    "Case studies ordered by client demand: WordPress corporate sites, Shopify and Salla storefronts, React/Next apps, and browser extensions.",
  path: "/projects/",
  image: "/og/projects-en.png",
  keywords: [
    "Mahmoud Elnagdy projects",
    "Nagdista projects",
    "WordPress projects",
    "Shopify developer Cairo",
    "Salla developer",
    "React projects",
    "Next.js projects",
    "browser extension projects",
    "corporate WordPress case study",
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
