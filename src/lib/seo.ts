import type { Metadata } from "next";
import { AI_PAGE } from "@/content/ai";
import { PRESS } from "@/content/press";
import { WORDPRESS_PAGE } from "@/content/wordpress";
import { PROJECTS } from "@/content/projects";
import {
  PROJECT_CATEGORIES,
  getProjectCategory,
} from "@/content/project-categories";
import { NAME_VARIANTS, SITE } from "@/content/site";
import type { Article, Locale, Project } from "@/content/types";

const BRAND: Record<Locale, string> = {
  en: "Mahmoud Elnagdy",
  ar: "محمود النجدي",
};

function normalizePath(path: string): string {
  const leading = path.startsWith("/") ? path : `/${path}`;
  return leading.endsWith("/") ? leading : `${leading}/`;
}

function isoDateTime(value: string): string {
  return value.includes("T") ? value : `${value}T00:00:00+02:00`;
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
  imageWidth?: number;
  imageHeight?: number;
  absoluteTitle?: boolean;
  type?: "website" | "article";
  alternate?: boolean;
  noindex?: boolean;
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
  imageWidth = 1200,
  imageHeight = 630,
  absoluteTitle = false,
  type = "website",
  alternate = true,
  noindex = false,
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
          siteName: "Mahmoud Elnagdy",
          locale: locale === "ar" ? "ar_EG" : "en_US",
          alternateLocale: locale === "ar" ? ["en_US"] : ["ar_EG"],
          publishedTime,
          modifiedTime,
          authors: [SITE.name],
          tags,
          images: [
            {
              url: image,
              width: imageWidth,
              height: imageHeight,
              alt: fullTitle,
            },
          ],
        }
      : {
          type: "website",
          title: fullTitle,
          description,
          url: canonical,
          siteName: "Mahmoud Elnagdy",
          locale: locale === "ar" ? "ar_EG" : "en_US",
          alternateLocale: locale === "ar" ? ["en_US"] : ["ar_EG"],
          images: [
            {
              url: image,
              width: imageWidth,
              height: imageHeight,
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
    verification: {
      google: SITE.googleVerification,
    },
    robots: noindex
      ? { index: false, follow: false }
      : {
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
    givenName: locale === "ar" ? "محمود" : "Mahmoud",
    familyName: locale === "ar" ? "النجدي" : "Elnagdy",
    alternateName: NAME_VARIANTS,
    url: SITE.url,
    image: `${SITE.url}/images/portrait-informal.jpg`,
    thumbnailUrl: [
      `${SITE.url}/images/portrait-informal.jpg`,
      `${SITE.url}/images/portrait-formal.jpg`,
    ],
    jobTitle: locale === "ar" ? "مطور فول ستاك" : "Full-Stack Developer",
    description:
      locale === "ar"
        ? "مطور فول ستاك في القاهرة، مصر. يبني منتجات ويب ثنائية اللغة بـ React وNext.js وTypeScript وNode.js، ومواقع وردبريس للشركات، ومتاجر شوبيفاي وسلة."
        : "Full-stack developer in Cairo, Egypt. Builds bilingual web products with React, Next.js, TypeScript, and Node.js, plus corporate WordPress sites and Shopify/Salla storefronts.",
    disambiguatingDescription:
      locale === "ar"
        ? "مطور فول ستاك في القاهرة وصاحب مشاريع Wasla وLocalTube وHassala وTarteeb وYost؛ بكالوريوس نظم ومعلومات الأعمال 2026. هذا هو المطور المقصود بالاسم، ومش صانع محتوى العطور اللي بيحمل نفس الاسم. اسمه أونلاين نجديستا (Nagdista)، وده اسم شخصي مالوش علاقة بمنطقة نجد أو السعودية."
        : "Cairo-based full-stack developer and creator of Wasla, LocalTube, Hassala, Tarteeb, and Yost; B.Sc. in Business Information Systems, 2026. He is a different person from the perfume creator with the same name. His online handle is Nagdista (نجديستا), a personal name unrelated to the Najd region of Saudi Arabia.",
    email: `mailto:${SITE.email}`,
    telephone: SITE.phoneHref,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cairo",
      addressRegion: "Cairo Governorate",
      addressCountry: "EG",
    },
    nationality: { "@type": "Country", name: "Egypt" },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Misr Higher Institute for Commerce & Computers, Mansoura",
      alternateName: [
        "معهد مصر العالي للتجارة والحاسبات بالمنصورة",
        "El-Sallab Higher Institute for Commerce & Computers",
        "السلاب",
      ],
      url: "https://metmans.edu.eg/",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mansoura",
        addressRegion: "Dakahlia Governorate",
        addressCountry: "EG",
      },
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name:
        locale === "ar"
          ? "بكالوريوس نظم ومعلومات الأعمال"
          : "B.Sc. in Business Information Systems",
      educationalLevel: "Bachelor's degree",
      dateCreated: "2026",
      recognizedBy: {
        "@type": "CollegeOrUniversity",
        name: "Misr Higher Institute for Commerce & Computers, Mansoura",
      },
    },
    hasOccupation: {
      "@type": "Occupation",
      name: locale === "ar" ? "مطور فول ستاك" : "Full-Stack Developer",
      occupationLocation: {
        "@type": "City",
        name: "Cairo",
      },
      skills:
        "React, Next.js, TypeScript, Node.js, Express, MongoDB, SQL, Tailwind CSS, WordPress, WooCommerce, Shopify, Salla, OpenAI API",
    },
    mainEntityOfPage: pageUrl(locale, "/about/"),
    sameAs: [
      SITE.github,
      SITE.linkedin,
      SITE.x,
      SITE.youtube,
      SITE.khamsat,
      SITE.mostaql,
      SITE.devto,
      SITE.egyptInnovate,
      SITE.githubPages,
    ],
    subjectOf: [
      {
        "@type": "WebPage",
        url: pageUrl(locale, "/press/"),
        name:
          locale === "ar"
            ? "محمود النجدي — ملف صحفي وتعريفي"
            : "Mahmoud Elnagdy — Press & Identity Kit",
      },
      {
        "@type": "WebPage",
        url: pageUrl(locale, "/ai/"),
        name:
          locale === "ar"
            ? "محمود النجدي والذكاء الاصطناعي"
            : "Mahmoud Elnagdy on AI",
      },
      {
        "@type": "WebPage",
        url: pageUrl(locale, "/about/"),
        name:
          locale === "ar"
            ? "عن محمود النجدي"
            : "About Mahmoud Elnagdy",
      },
      {
        "@type": "WebPage",
        url: pageUrl(locale, "/"),
        name:
          locale === "ar"
            ? "محمود النجدي — مطور فول ستاك"
            : "Mahmoud Elnagdy — Full-Stack Developer",
      },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name:
            locale === "ar"
              ? "تصميم وبناء مواقع وردبريس للشركات"
              : "Corporate WordPress website design and development",
          url: pageUrl(locale, "/wordpress/"),
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name:
            locale === "ar"
              ? "تطوير متاجر شوبيفاي"
              : "Shopify store development",
          url: pageUrl(locale, "/projects/#cat-shopify"),
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name:
            locale === "ar"
              ? "تطوير متاجر سلة"
              : "Salla store development",
          url: pageUrl(locale, "/projects/#cat-salla"),
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name:
            locale === "ar"
              ? "تطوير تطبيقات ويب مخصصة"
              : "Custom web application development",
          url: pageUrl(locale, "/projects/"),
        },
      },
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "SQL",
      "Tailwind CSS",
      "WordPress",
      "Elementor",
      "Gutenberg",
      "WooCommerce",
      "Shopify",
      "Salla",
      "E-commerce development",
      "Rank Math SEO",
      "Fluent Forms",
      "Corporate website design",
      "Web accessibility",
      "Search engine optimization",
      "Self-taught programming",
      "Language learning",
      "Artificial Intelligence",
      "AI news",
      "AI in Brief",
      "AI-assisted development",
      "AI-assisted language learning",
      "OpenAI API",
      "تطوير الويب",
      "مواقع وردبريس",
      "متاجر شوبيفاي",
      "متاجر سلة",
      "التجارة الإلكترونية",
      "الذكاء الاصطناعي",
      "البرمجة",
    ],
    authorOf: {
      "@type": "Periodical",
      name: "AI in Brief",
      url: SITE.aiNewsletter,
      inLanguage: "ar",
      description:
        locale === "ar"
          ? "نشرة يومية على LinkedIn بتلخص أهم أخبار الذكاء الاصطناعي للمطورين."
          : "A daily LinkedIn newsletter that summarizes the most important AI news for developers.",
    },
    knowsLanguage: ["ar", "en"],
    worksFor: {
      "@type": "Organization",
      name: locale === "ar" ? "مستقل" : "Independent",
      url: SITE.url,
    },
  };
}

export function profilePageJsonLd(locale: Locale): Record<string, unknown> {
  const url = pageUrl(locale, "/about/");
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${url}#profile`,
    url,
    name:
      locale === "ar"
        ? "عن محمود النجدي"
        : "About Mahmoud Elnagdy",
    inLanguage: locale === "ar" ? "ar" : "en",
    dateModified: isoDateTime(SITE.lastUpdated),
    isPartOf: { "@id": `${SITE.url}/#website` },
    mainEntity: personJsonLd(locale),
  };
}

export function pressPageJsonLd(locale: Locale): Record<string, unknown> {
  const url = pageUrl(locale, "/press/");
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${url}#profile`,
    url,
    name:
      locale === "ar"
        ? "محمود النجدي — ملف صحفي وتعريفي"
        : "Mahmoud Elnagdy — Press & Identity Kit",
    inLanguage: locale === "ar" ? "ar" : "en",
    dateModified: isoDateTime(SITE.lastUpdated),
    isPartOf: { "@id": `${SITE.url}/#website` },
    mainEntity: personJsonLd(locale),
  };
}

export function pressFaqJsonLd(locale: Locale): Record<string, unknown> {
  const url = pageUrl(locale, "/press/");
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    inLanguage: locale === "ar" ? "ar" : "en",
    mainEntity: PRESS[locale].faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function aiPageJsonLd(locale: Locale): Record<string, unknown> {
  const url = pageUrl(locale, "/ai/");
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${url}#profile`,
    url,
    name:
      locale === "ar"
        ? "محمود النجدي والذكاء الاصطناعي"
        : "Mahmoud Elnagdy on AI",
    inLanguage: locale === "ar" ? "ar" : "en",
    dateModified: isoDateTime(SITE.lastUpdated),
    isPartOf: { "@id": `${SITE.url}/#website` },
    mainEntity: personJsonLd(locale),
    mentions: {
      "@type": "Periodical",
      name: "AI in Brief",
      url: SITE.aiNewsletter,
      inLanguage: "ar",
    },
  };
}

export function aiFaqJsonLd(locale: Locale): Record<string, unknown> {
  const url = pageUrl(locale, "/ai/");
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    inLanguage: locale === "ar" ? "ar" : "en",
    mainEntity: AI_PAGE[locale].faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function websiteJsonLd(locale: Locale): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: "Mahmoud Elnagdy",
    alternateName: ["Nagdista", "Najdista", "نجديستا", "محمود النجدي", "Elnagdy"],
    description:
      locale === "ar"
        ? "بورتفوليو محمود النجدي، مطور فول ستاك في القاهرة."
        : "The portfolio of Mahmoud Elnagdy, a full-stack developer in Cairo.",
    inLanguage: ["en", "ar"],
    image: `${SITE.url}/images/portrait-informal.jpg`,
    logo: `${SITE.url}/icons/nagdista-512.png`,
    about: { "@id": `${SITE.url}/#person` },
    publisher: { "@id": `${SITE.url}/#person` },
  };
}

export function siteNavigationJsonLd(
  locale: Locale,
): Record<string, unknown> {
  const ar = locale === "ar";
  const items = [
    { name: ar ? "أعمالي" : "Work", path: "/projects/" },
    { name: ar ? "وردبريس" : "WordPress", path: "/wordpress/" },
    { name: ar ? "عني" : "About", path: "/about/" },
    { name: ar ? "مقالات" : "Writing", path: "/blog/" },
    { name: ar ? "الذكاء الاصطناعي" : "AI", path: "/ai/" },
    { name: ar ? "ملف صحفي" : "Press", path: "/press/" },
    { name: ar ? "تواصل" : "Contact", path: "/#contact" },
  ];
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: ar ? "روابط الموقع الأساسية" : "Primary site navigation",
    itemListElement: items.map((item, index) => {
      const hashIndex = item.path.indexOf("#");
      const url =
        hashIndex === -1
          ? pageUrl(locale, item.path)
          : `${pageUrl(locale, item.path.slice(0, hashIndex))}${item.path.slice(hashIndex)}`;
      return {
        "@type": "SiteNavigationElement",
        position: index + 1,
        name: item.name,
        url,
      };
    }),
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

export function projectsCollectionJsonLd(
  locale: Locale,
): Record<string, unknown> {
  const url = pageUrl(locale, "/projects/");
  const ar = locale === "ar";

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    url,
    name: ar
      ? "مشاريع محمود النجدي حسب المنصة"
      : "Mahmoud Elnagdy projects by platform",
    description: ar
      ? "مشاريع محمود النجدي مقسّمة حسب المنصة ومرتبة حسب أكتر طلب من العملاء: وردبريس، شوبيفاي، سلة، React وNext.js، وإكستنشنز المتصفح."
      : "Mahmoud Elnagdy's projects grouped by platform and ordered by client demand: WordPress, Shopify, Salla, React & Next.js, and browser extensions.",
    inLanguage: locale,
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#person` },
    author: { "@id": `${SITE.url}/#person` },
    dateModified: isoDateTime(SITE.lastUpdated),
    primaryImageOfPage: `${SITE.url}/og/projects-${locale}.png`,
    breadcrumb: { "@id": `${url}#breadcrumb` },
    mainEntity: {
      "@type": "ItemList",
      name: ar ? "مشاريع مختارة" : "Selected projects",
      numberOfItems: PROJECTS.length,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      itemListElement: PROJECTS.map((project, index) => {
        const projectUrl = pageUrl(locale, `/projects/${project.slug}/`);
        return {
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": project.kind === "website" ? "WebSite" : "SoftwareSourceCode",
            "@id": `${projectUrl}#project`,
            url: projectUrl,
            name: project.name,
            description: project.copy[locale].summary,
            genre: getProjectCategory(project.category).label[locale],
            keywords: [...project.stack, project.status[locale]].join(", "),
          },
        };
      }),
    },
    hasPart: PROJECT_CATEGORIES.map((category) => ({
      "@type": "WebPageElement",
      "@id": `${url}#cat-${category.id}`,
      name: category.label[locale],
      description: category.description[locale],
      isPartOf: { "@id": `${url}#collection` },
    })),
  };
}

export function wordpressPageJsonLd(
  locale: Locale,
): Record<string, unknown> {
  const url = pageUrl(locale, "/wordpress/");
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name:
      locale === "ar"
        ? "تصميم مواقع وردبريس للشركات — محمود النجدي"
        : "Corporate WordPress Websites — Mahmoud Elnagdy",
    description: WORDPRESS_PAGE[locale].intro,
    inLanguage: locale === "ar" ? "ar" : "en",
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${url}#service` },
    primaryImageOfPage: `${SITE.url}/og/wordpress-${locale}.png`,
    dateModified: isoDateTime(SITE.lastUpdated),
    mainEntity: { "@id": `${url}#service` },
    author: { "@id": `${SITE.url}/#person` },
    breadcrumb: { "@id": `${url}#breadcrumb` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".page-intro__title", ".page-intro__intro"],
    },
  };
}

export function wordpressServiceJsonLd(
  locale: Locale,
): Record<string, unknown> {
  const url = pageUrl(locale, "/wordpress/");
  const content = WORDPRESS_PAGE[locale];
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name:
      locale === "ar"
        ? "تصميم وبناء مواقع وردبريس للشركات"
        : "Corporate WordPress website design and development",
    serviceType:
      locale === "ar"
        ? "مواقع وردبريس للشركات"
        : "Corporate WordPress websites",
    description: content.intro,
    url,
    provider: { "@id": `${SITE.url}/#person` },
    areaServed: [
      { "@type": "Country", name: "Egypt" },
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Place", name: "Remote worldwide" },
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: pageUrl(locale, "/#contact"),
      servicePhone: SITE.phoneHref,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name:
        locale === "ar"
          ? "خدمات مواقع وردبريس"
          : "WordPress website services",
      itemListElement: content.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.text,
        },
      })),
    },
  };
}

export function wordpressFaqJsonLd(locale: Locale): Record<string, unknown> {
  const url = pageUrl(locale, "/wordpress/");
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    inLanguage: locale === "ar" ? "ar" : "en",
    mainEntity: WORDPRESS_PAGE[locale].faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
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
    datePublished: isoDateTime(article.date),
    dateModified: isoDateTime(article.updated ?? article.date),
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
  const category = getProjectCategory(project.category);
  const base = {
    "@context": "https://schema.org",
    "@id": `${url}#project`,
    name: project.name,
    description: project.copy[locale].summary,
    url,
    image: `${SITE.url}/og/project-${project.slug}-${locale}.png`,
    screenshot: project.gallery?.map((shot) => `${SITE.url}${shot.src}`),
    author: { "@id": `${SITE.url}/#person` },
    inLanguage: locale,
    genre: category.label[locale],
    keywords: [
      ...project.stack,
      category.label[locale],
      project.status[locale],
    ].join(", "),
  };

  if (project.kind === "website") {
    return {
      ...base,
      "@type": "WebSite",
      publisher: { "@id": `${SITE.url}/#person` },
      about: {
        "@type": "Organization",
        name: project.name,
        url: project.links.live,
      },
    };
  }

  return {
    ...base,
    "@type": "SoftwareSourceCode",
    codeRepository: project.links.repo,
    programmingLanguage: project.stack,
  };
}
