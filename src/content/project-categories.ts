import type { Localized, ProjectCategory } from "./types";

export type ProjectCategoryMeta = {
  id: ProjectCategory;
  label: Localized<string>;
  kicker: Localized<string>;
  description: Localized<string>;
  available: boolean;
};

export const PROJECT_CATEGORIES: ProjectCategoryMeta[] = [
  {
    id: "wordpress",
    label: { en: "WordPress", ar: "وردبريس" },
    kicker: { en: "Corporate sites", ar: "مواقع شركات" },
    description: {
      en: "Corporate websites built on WordPress — real content models, editable sections, and SEO that holds up after launch.",
      ar: "مواقع شركات على وردبريس — محتوى منظّم، وأقسام تقدر تعدّلها بنفسك، وSEO شغال بعد الإطلاق.",
    },
    available: true,
  },
  {
    id: "react-next",
    label: { en: "React & Next.js", ar: "React وNext.js" },
    kicker: { en: "Web apps", ar: "تطبيقات ويب" },
    description: {
      en: "Product work with React, Next.js, TypeScript, and Node — dashboards, learning tools, planners, and local-first apps.",
      ar: "شغل منتجات بـ React وNext.js وTypeScript وNode — داشبوردات وأدوات تعلم ومنظمات وتطبيقات محلية.",
    },
    available: true,
  },
  {
    id: "browser-extensions",
    label: { en: "Browser extensions", ar: "إكستنشنز المتصفح" },
    kicker: { en: "Chrome · Brave · Edge", ar: "Chrome · Brave · Edge" },
    description: {
      en: "Small, focused extensions that do one job well and keep your data on your machine.",
      ar: "إكستنشنز صغيرة بتركيز واضح، بتعمل حاجة واحدة كويس وبتسيب بياناتك على جهازك.",
    },
    available: true,
  },
  {
    id: "shopify",
    label: { en: "Shopify", ar: "شوبيفاي" },
    kicker: { en: "Open for work", ar: "متاح للشغل" },
    description: {
      en: "Storefronts, theme customization, and product pages that load fast and sell clearly.",
      ar: "متاجر وتخصيص ثيمات وصفحات منتجات سريعة وواضحة في البيع.",
    },
    available: false,
  },
  {
    id: "salla",
    label: { en: "Salla", ar: "سلة" },
    kicker: { en: "Open for work", ar: "متاح للشغل" },
    description: {
      en: "Arabic-first Salla stores built for the way people actually shop in the Gulf.",
      ar: "متاجر سلة عربية أولًا، مبنية على طريقة الشراء الحقيقية في الخليج.",
    },
    available: false,
  },
];

export function getProjectCategory(
  id: ProjectCategory,
): ProjectCategoryMeta {
  return PROJECT_CATEGORIES.find((category) => category.id === id)!;
}
