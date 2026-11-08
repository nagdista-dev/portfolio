import type { Metadata } from "next";
import { NAME_VARIANTS, SITE } from "@/content/site";
import type { Article, Locale, Project } from "@/content/types";

const BRAND: Record<Locale, string> = {
  en: "Mahmoud Elnagdy (Nagdista)",
  ar: "محمود النجدي (نجديستا)",
};

function normalizePath(path: string): string {
  const leading = path.startsWith("/") ? path : `/${path}`;
  return leading.endsWith("/") ? leading : `${leading}/`;
}

export function pageUrl(locale: Locale, path: string): string {
  const normalized = normalizePath(path);
  return new URL(
    locale === "ar" ? `/ar${normalized}` : normalized,
    SITE.url,
  ).toString();
}

export function englishUrl(path: string): string {
  return new URL(normalizePath(path), SITE.url).toString();
}

export function arabicUrl(path: string): string {
  return new URL(`/ar${normalizePath(path)}`, SITE.url).toString();
}

type BuildMetadataInput = {
  locale: Locale;
  title: string;
  description: string;
  path: string;
  image: string;
  absoluteTitle?: boolean;
  type?: "website" | "article";
  alternate?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
  keywords?: string[];
};

export function buildMetadata({
  locale,
  title,
  description,
  path,
  image,
  absoluteTitle = false,
  type = "website",
  alternate = true,
  publishedTime,
  modifiedTime,
  tags,
  keywords,
}: BuildMetadataInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} — ${BRAND[locale]}`;
  const canonical = pageUrl(locale, path);
  const languages = alternate
    ? {
        en: englishUrl(path),
        ar: arabicUrl(path),
        "x-default": englishUrl(path),
      }
    : undefined;

  const openGraph: Metadata["openGraph"] =
    type === "article"
      ? {
          type: "article",
          title: fullTitle,
          description,
          url: canonical,
          siteName: "Nagdista",
          locale: locale === "ar" ? "ar_EG" : "en_US",
          alternateLocale: locale === "ar" ? ["en_US"] : ["ar_EG"],
          publishedTime,
          modifiedTime,
          authors: [SITE.name],
          tags,
          images: [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: fullTitle,
            },
          ],
        }
      : {
          type: "website",
          title: fullTitle,
          description,
          url: canonical,
          siteName: "Nagdista",
          locale: locale === "ar" ? "ar_EG" : "en_US",
          alternateLocale: locale === "ar" ? ["en_US"] : ["ar_EG"],
          images: [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: fullTitle,
            },
          ],
        };

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
      ...(languages ? { languages } : {}),
    },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@nagdista",
      site: "@nagdista",
    },
    authors: [{ name: SITE.name, url: SITE.url }],
    creator: SITE.name,
    publisher: SITE.name,
    keywords,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function personJsonLd(locale: Locale): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}/#person`,
    name: SITE.name,
    alternateName: NAME_VARIANTS,
    url: SITE.url,
    image: `${SITE.url}/og/home-${locale}.png`,
    jobTitle: locale === "ar" ? "مطور فول ستاك" : "Full-Stack Developer",
    description:
      locale === "ar"
        ? "مطور فول ستاك في القاهرة، مصر. يبني منتجات ويب ثنائية اللغة بـ React وNext.js وTypeScript وNode.js."
        : "Full-stack developer in Cairo, Egypt. Builds bilingual web products with React, Next.js, TypeScript, and Node.js.",
    email: `mailto:${SITE.email}`,
    telephone: SITE.phoneHref,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cairo",
      addressCountry: "EG",
    },
    sameAs: [SITE.github, SITE.linkedin, SITE.x, SITE.topmate],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "SQL",
      "Tailwind CSS",
      "Web accessibility",
      "Search engine optimization",
    ],
    knowsLanguage: ["ar", "en"],
    worksFor: {
      "@type": "Organization",
      name: "Nagdista",
      url: SITE.url,
    },
  };
}

export function websiteJsonLd(locale: Locale): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: "Mahmoud Elnagdy — Nagdista",
    description:
      locale === "ar"
        ? "بورتفوليو محمود النجدي (نجديستا)، مطور فول ستاك في القاهرة."
        : "The portfolio of Mahmoud Elnagdy (Nagdista), a full-stack developer in Cairo.",
    inLanguage: ["en", "ar"],
    publisher: { "@id": `${SITE.url}/#person` },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleJsonLd(article: Article): Record<string, unknown> {
  const url = pageUrl(article.locale, `/blog/${article.slug}/`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.updated ?? article.date,
    author: { "@id": `${SITE.url}/#person` },
    publisher: { "@id": `${SITE.url}/#person` },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: `${SITE.url}/og/article-${article.slug}.png`,
    inLanguage: article.locale,
    keywords: article.tags.join(", "),
    articleSection: article.category,
  };
}

export function projectJsonLd(
  project: Project,
  locale: Locale,
): Record<string, unknown> {
  const url = pageUrl(locale, `/projects/${project.slug}/`);
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    "@id": `${url}#project`,
    name: project.name,
    description: project.copy[locale].summary,
    url,
    codeRepository: project.links.repo,
    image: `${SITE.url}/og/project-${project.slug}-${locale}.png`,
    programmingLanguage: project.stack,
    author: { "@id": `${SITE.url}/#person` },
    inLanguage: locale,
  };
}
