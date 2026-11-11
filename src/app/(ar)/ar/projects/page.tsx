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
  title: "المشاريع حسب المنصة — وردبريس وReact وNext.js وإكستنشنز",
  description:
    "دراسات حالة مرتبة حسب المنصة: Bunyan Contracting على وردبريس، وWasla وLocalTube وTarteeb وYost على React وNext.js، وHassala كإكستنشن متصفح، وكل مستودعات GitHub العامة. شغل شوبيفاي وسلة مفتوح.",
  path: "/projects/",
  image: "/og/projects-ar.png",
  keywords: [
    "مشاريع محمود النجدي",
    "مشاريع نجديستا",
    "مشاريع React",
    "مشاريع Next.js",
    "مشاريع وردبريس",
    "إكستنشن متصفح",
    "دراسة حالة موقع شركة",
    "مطور شوبيفاي",
    "مطور سلة",
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
