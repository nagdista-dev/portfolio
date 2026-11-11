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
  locale: "ar",
  title: "المشاريع — وردبريس وشوبيفاي وسلة",
  description:
    "دراسات حالة مرتبة حسب أكتر طلب من العملاء: مواقع وردبريس، ومتاجر شوبيفاي وسلة، وتطبيقات React وNext.js، وإكستنشنز المتصفح.",
  path: "/projects/",
  image: "/og/projects-ar.png",
  keywords: [
    "مشاريع محمود النجدي",
    "مشاريع نجديستا",
    "مشاريع وردبريس",
    "مطور شوبيفاي",
    "مطور سلة",
    "مشاريع React",
    "مشاريع Next.js",
    "إكستنشن متصفح",
    "دراسة حالة موقع شركة",
    "مشاريع مفتوحة المصدر",
  ],
});

export default async function ArabicProjectsPage() {
  const repos = await getGitHubRepos();

  return (
    <>
      <ProjectsView locale="ar" repos={repos} />
      <JsonLd data={projectsCollectionJsonLd("ar")} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "الرئيسية", url: pageUrl("ar", "/") },
          { name: "المشاريع", url: pageUrl("ar", "/projects/") },
        ])}
      />
    </>
  );
}
