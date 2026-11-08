import type { Metadata } from "next";
import { BlogView } from "@/components/blog-view";
import { JsonLd } from "@/components/json-ld";
import { getArticles } from "@/content/blog";
import { SITE } from "@/content/site";
import { breadcrumbJsonLd, buildMetadata, pageUrl } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "ar",
  title: "مقالات — ملاحظات عن تطوير الويب والمعمارية",
  description:
    "مقالات دائمة لمحمود النجدي عن Next.js وReact وTypeScript وقواعد البيانات وبناء منتجات ويب ثنائية اللغة.",
  path: "/blog/",
  image: "/og/blog-ar.png",
  keywords: [
    "مقالات محمود النجدي",
    "مقالات Next.js",
    "مقالات React",
    "TypeScript",
    "SQL vs MongoDB",
  ],
});

export default function ArabicBlogPage() {
  const articles = getArticles("ar");

  return (
    <>
      <BlogView locale="ar" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "@id": `${pageUrl("ar", "/blog/")}#blog`,
          url: pageUrl("ar", "/blog/"),
          name: "ملاحظات من البناء",
          inLanguage: "ar",
          author: { "@id": `${SITE.url}/#person` },
          blogPost: articles.map((article) => ({
            "@type": "BlogPosting",
            headline: article.title,
            url: pageUrl("ar", `/blog/${article.slug}/`),
            datePublished: article.date,
          })),
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "الرئيسية", url: pageUrl("ar", "/") },
          { name: "مقالات", url: pageUrl("ar", "/blog/") },
        ])}
      />
    </>
  );
}
