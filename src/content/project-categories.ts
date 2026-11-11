import type { Localized, ProjectCategory } from "./types";

export type ProjectCategoryMeta = {
  id: ProjectCategory;
  label: Localized<string>;
  kicker: Localized<string>;
  description: Localized<string>;
  available: boolean;
  openBody?: Localized<string>;
  openTags?: Localized<string[]>;
};

export const PROJECT_CATEGORIES: ProjectCategoryMeta[] = [
  {
    id: "wordpress",
    label: { en: "WordPress", ar: "وردبريس" },
    kicker: {
      en: "Corporate sites · Most requested",
      ar: "مواقع شركات · الأكتر طلب",
    },
    description: {
      en: "Corporate websites built on WordPress — real content models, editable sections, and SEO that holds up after launch.",
      ar: "مواقع شركات على وردبريس — محتوى منظّم، وأقسام تقدر تعدّلها بنفسك، وSEO شغال بعد الإطلاق.",
    },
    available: true,
  },
  {
    id: "shopify",
    label: { en: "Shopify", ar: "شوبيفاي" },
    kicker: { en: "E-commerce · Global", ar: "تجارة إلكترونية · عالمي" },
    description: {
      en: "Custom storefronts, theme sections, product pages, speed, and app integrations — built to sell clearly.",
      ar: "متاجر مخصصة، وأقسام ثيمات، وصفحات منتجات، وسرعة، وربط تطبيقات — مبنية تبيع بوضوح.",
    },
    available: false,
    openBody: {
      en: "No public Shopify case study yet. I take on custom storefronts, theme work, product pages, speed fixes, and app integrations — your store can be the first one documented here.",
      ar: "لسه مفيش دراسة حالة منشورة على شوبيفاي. ببني متاجر مخصصة، وأشتغل على الثيمات وصفحات المنتجات والسرعة وربط التطبيقات — ومتجرك ممكن يكون أول واحد يتوثّق هنا.",
    },
    openTags: {
      en: [
        "Custom themes",
        "Product pages",
        "Speed & SEO",
        "App integrations",
      ],
      ar: ["ثيمات مخصصة", "صفحات منتجات", "سرعة وSEO", "ربط التطبيقات"],
    },
  },
  {
    id: "salla",
    label: { en: "Salla", ar: "سلة" },
    kicker: { en: "E-commerce · Gulf", ar: "تجارة إلكترونية · الخليج" },
    description: {
      en: "Arabic-first Salla stores built for the way people actually shop in the Gulf — themes, product content, and checkout details.",
      ar: "متاجر سلة عربية أولًا، مبنية على طريقة الشراء الحقيقية في الخليج — ثيمات ومحتوى منتجات وتفاصيل الدفع.",
    },
    available: false,
    openBody: {
      en: "No public Salla case study yet. I build Arabic-first Salla storefronts — custom themes, product content, payment and shipping setup, and the details Gulf shoppers notice.",
      ar: "لسه مفيش دراسة حالة منشورة على سلة. ببني متاجر سلة عربية أولًا — ثيمات مخصصة، ومحتوى منتجات، وربط الدفع والشحن، والتفاصيل اللي العميل الخليجي بياخد باله منها.",
    },
    openTags: {
      en: [
        "Arabic-first themes",
        "Product content",
        "Payments & shipping",
        "Gulf checkout",
      ],
      ar: ["ثيمات عربية أولًا", "محتوى المنتجات", "الدفع والشحن", "تجربة شراء خليجية"],
    },
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
];

export function getProjectCategory(
  id: ProjectCategory,
): ProjectCategoryMeta {
  return PROJECT_CATEGORIES.find((category) => category.id === id)!;
}
