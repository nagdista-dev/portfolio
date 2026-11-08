import type { Metadata } from "next";
import { BlogView } from "@/components/blog-view";
import { JsonLd } from "@/components/json-ld";
import { getArticles } from "@/content/blog";
import { SITE } from "@/content/site";
import { breadcrumbJsonLd, buildMetadata, pageUrl } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  locale: "en",
  title: "Writing — Notes on Web Development & Architecture",
  description:
    "Evergreen articles by Mahmoud Elnagdy about Next.js, React, TypeScript, databases, and building bilingual web products.",
  path: "/blog/",
  image: "/og/blog-en.png",
  keywords: [
    "Mahmoud Elnagdy blog",
    "Next.js articles",
    "React articles",
    "TypeScript best practices",
    "SQL vs MongoDB",
  ],
});

export default function EnglishBlogPage() {
  const articles = getArticles("en");

  return (
    <>
      <BlogView locale="en" />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "@id": `${pageUrl("en", "/blog/")}#blog`,
          url: pageUrl("en", "/blog/"),
          name: "Notes from the build",
          inLanguage: "en",
          author: { "@id": `${SITE.url}/#person` },
          blogPost: articles.map((article) => ({
            "@type": "BlogPosting",
            headline: article.title,
            url: pageUrl("en", `/blog/${article.slug}/`),
            datePublished: article.date,
          })),
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: pageUrl("en", "/") },
          { name: "Writing", url: pageUrl("en", "/blog/") },
        ])}
      />
    </>
  );
}
