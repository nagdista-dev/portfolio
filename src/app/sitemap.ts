import type { MetadataRoute } from "next";
import { PROJECTS } from "@/content/projects";
import { ARTICLES } from "@/content/blog";
import { SITE } from "@/content/site";

export const dynamic = "force-static";

const BASE = SITE.url;

function pair(path: string): MetadataRoute.Sitemap[number]["alternates"] {
  return {
    languages: {
      en: `${BASE}${path}`,
      ar: `${BASE}/ar${path}`,
      "x-default": `${BASE}${path}`,
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-11-09T00:00:00.000Z");

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      alternates: pair("/"),
    },
    {
      url: `${BASE}/ar/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
      alternates: pair("/"),
    },
    {
      url: `${BASE}/about/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: pair("/about/"),
    },
    {
      url: `${BASE}/ar/about/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: pair("/about/"),
    },
    {
      url: `${BASE}/press/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: pair("/press/"),
    },
    {
      url: `${BASE}/ar/press/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: pair("/press/"),
    },
    {
      url: `${BASE}/ai/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: pair("/ai/"),
    },
    {
      url: `${BASE}/ar/ai/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: pair("/ai/"),
    },
    {
      url: `${BASE}/projects/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: pair("/projects/"),
    },
    {
      url: `${BASE}/ar/projects/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: pair("/projects/"),
    },
    {
      url: `${BASE}/blog/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: pair("/blog/"),
    },
    {
      url: `${BASE}/ar/blog/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
      alternates: pair("/blog/"),
    },
  ];

  const projectPages: MetadataRoute.Sitemap = PROJECTS.flatMap((project) => [
    {
      url: `${BASE}/projects/${project.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: pair(`/projects/${project.slug}/`),
    },
    {
      url: `${BASE}/ar/projects/${project.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.65,
      alternates: pair(`/projects/${project.slug}/`),
    },
  ]);

  const articlePages: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url:
      article.locale === "ar"
        ? `${BASE}/ar/blog/${article.slug}/`
        : `${BASE}/blog/${article.slug}/`,
    lastModified: new Date(article.updated ?? article.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages, ...articlePages];
}
