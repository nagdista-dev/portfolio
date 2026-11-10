import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleView } from "@/components/article-view";
import { JsonLd } from "@/components/json-ld";
import { getArticle, getArticles } from "@/content/blog";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  buildMetadata,
  pageUrl,
} from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getArticles("ar").map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle("ar", slug);

  if (!article) return {};

  return buildMetadata({
    locale: "ar",
    title: article.seoTitle ?? article.title,
    description: article.description,
    path: `/blog/${article.slug}/`,
    image: `/og/article-${article.slug}.png`,
    type: "article",
    alternate: false,
    publishedTime: article.date,
    modifiedTime: article.updated ?? article.date,
    tags: article.tags,
    keywords: article.tags,
  });
}

export default async function ArabicArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = getArticle("ar", slug);

  if (!article) notFound();

  return (
    <>
      <ArticleView article={article} locale="ar" />
      <JsonLd data={articleJsonLd(article)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "الرئيسية", url: pageUrl("ar", "/") },
          { name: "مقالات", url: pageUrl("ar", "/blog/") },
          { name: article.title, url: pageUrl("ar", `/blog/${article.slug}/`) },
        ])}
      />
    </>
  );
}
