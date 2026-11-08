import type { Metadata } from "next";
import { ProjectsView } from "@/components/projects-view";
import { JsonLd } from "@/components/json-ld";
import { getGitHubRepos } from "@/lib/github";
import { breadcrumbJsonLd, buildMetadata, pageUrl } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ar",
  title: "مشاريع مختارة — تطبيقات ويب ومفتوحة المصدر",
  description:
    "دراسات حالة ومشاريع مفتوحة المصدر لمحمود النجدي (نجديستا): Wasla وLocalTube وHassala وTarteeb وYost، وكل مستودعات GitHub العامة.",
  path: "/projects/",
  image: "/og/projects-ar.png",
  keywords: [
    "مشاريع محمود النجدي",
    "مشاريع نجديستا",
    "مشاريع React",
    "مشاريع Next.js",
    "مشاريع مفتوحة المصدر",
  ],
});

export default async function ArabicProjectsPage() {
  const repos = await getGitHubRepos();

  return (
    <>
      <ProjectsView locale="ar" repos={repos} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "الرئيسية", url: pageUrl("ar", "/") },
          { name: "المشاريع", url: pageUrl("ar", "/projects/") },
        ])}
      />
    </>
  );
}
