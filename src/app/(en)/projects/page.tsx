import type { Metadata } from "next";
import { ProjectsView } from "@/components/projects-view";
import { JsonLd } from "@/components/json-ld";
import { getGitHubRepos } from "@/lib/github";
import { breadcrumbJsonLd, buildMetadata, pageUrl } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Projects — Web Apps & Open Source",
  description:
    "Case studies and open-source projects by Mahmoud Elnagdy (Nagdista): Wasla, LocalTube, Hassala, Tarteeb, Yost, and every public GitHub repository.",
  path: "/projects/",
  image: "/og/projects-en.png",
  keywords: [
    "Mahmoud Elnagdy projects",
    "Nagdista projects",
    "React projects",
    "Next.js projects",
    "open source projects Cairo",
  ],
});

export default async function EnglishProjectsPage() {
  const repos = await getGitHubRepos();

  return (
    <>
      <ProjectsView locale="en" repos={repos} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: pageUrl("en", "/") },
          { name: "Projects", url: pageUrl("en", "/projects/") },
        ])}
      />
    </>
  );
}
