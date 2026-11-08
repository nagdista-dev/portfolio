import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectView } from "@/components/project-view";
import { JsonLd } from "@/components/json-ld";
import { PROJECTS, getProject } from "@/content/projects";
import {
  breadcrumbJsonLd,
  buildMetadata,
  pageUrl,
  projectJsonLd,
} from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return buildMetadata({
    locale: "en",
    title: project.copy.en.seoTitle,
    description: project.copy.en.seoDescription,
    path: `/projects/${project.slug}/`,
    image: `/og/project-${project.slug}-en.png`,
    keywords: [
      project.name,
      ...project.stack,
      "Mahmoud Elnagdy",
      "Nagdista",
    ],
  });
}

export default async function EnglishProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <>
      <ProjectView project={project} locale="en" />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: pageUrl("en", "/") },
          { name: "Projects", url: pageUrl("en", "/projects/") },
          { name: project.name, url: pageUrl("en", `/projects/${project.slug}/`) },
        ])}
      />
      <JsonLd data={projectJsonLd(project, "en")} />
    </>
  );
}
