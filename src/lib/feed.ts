import { ARTICLES } from "@/content/blog";
import { SITE } from "@/content/site";
import { pageUrl } from "@/lib/seo";
import type { Locale } from "@/content/types";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function buildFeed(locale: Locale): string {
  const articles = ARTICLES.filter((article) => article.locale === locale);
  const title =
    locale === "ar"
      ? "مقالات محمود النجدي"
      : "Mahmoud Elnagdy — Notes from the build";
  const description =
    locale === "ar"
      ? "ملاحظات عن تطوير الويب والمعمارية وقواعد البيانات."
      : "Notes on web development, architecture, and databases.";
  const feedPath = locale === "ar" ? "/ar/feed.xml" : "/feed.xml";
  const updated = articles[0]?.date ?? "2026-11-05";

  const items = articles
    .map((article) => {
      const link = pageUrl(locale, `/blog/${article.slug}/`);
      return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
      <description>${escapeXml(article.description)}</description>
      <category>${escapeXml(article.category)}</category>
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(title)}</title>
    <link>${SITE.url}${locale === "ar" ? "/ar/" : "/"}</link>
    <description>${escapeXml(description)}</description>
    <language>${locale === "ar" ? "ar" : "en"}</language>
    <lastBuildDate>${new Date(updated).toUTCString()}</lastBuildDate>
    <atom:link href="${SITE.url}${feedPath}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;
}
