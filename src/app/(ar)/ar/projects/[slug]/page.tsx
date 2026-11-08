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
    locale: "ar",
    title: project.copy.ar.seoTitle,
    description: project.copy.ar.seoDescription,
    path: `/projects/${project.slug}/`,
    image: `/og/project-${project.slug}-ar.png`,
    keywords: [
      project.name,
      ...project.stack,
      "محمود النجدي",
      "نجديستا",
    ],
  });
}

export default async function ArabicProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <>
      <ProjectView project={project} locale="ar" />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "الرئيسية", url: pageUrl("ar", "/") },
          { name: "المشاريع", url: pageUrl("ar", "/projects/") },
          { name: project.name, url: pageUrl("ar", `/projects/${project.slug}/`) },
        ])}
      />
      <JsonLd data={projectJsonLd(project, "ar")} />
    </>
  );
}
