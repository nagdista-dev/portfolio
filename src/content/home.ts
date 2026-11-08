import type { Localized, SkillGroup, TimelineItem } from "./types";

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "frontend",
    label: { en: "Frontend", ar: "الواجهات" },
    note: {
      en: "The layer people touch — semantic HTML, strong typography, and as little JavaScript as the job needs.",
      ar: "الطبقة اللي الناس بتلمسها — HTML دلالي، تايبوجرافي قوي، وأقل JavaScript ممكن.",
    },
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Vite",
      "Framer Motion",
      "GSAP",
    ],
  },
  {
    id: "backend",
    label: { en: "Backend & data", ar: "الباك إند والبيانات" },
    note: {
      en: "APIs, data models, and the practical decisions that keep an application coherent.",
      ar: "APIs وموديلات البيانات والقرارات العملية اللي بتخلي التطبيق متماسك.",
    },
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "Authentication",
      "MongoDB",
      "SQL",
      "SQLite",
      "Puppeteer",
    ],
  },
  {
    id: "tools",
    label: { en: "Tools & delivery", ar: "الأدوات والتسليم" },
    note: {
      en: "The everyday environment: version control, design handoff, deployment, and browser APIs.",
      ar: "بيئة الشغل اليومية: التحكم في النسخ، تسليم التصميم، النشر، وواجهات المتصفح.",
    },
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Vercel",
      "Netlify",
      "Chrome Extensions",
      "FFmpeg",
      "WordPress",
      "Shopify",
      "OpenAI API",
    ],
  },
  {
    id: "foundations",
    label: { en: "Foundations", ar: "الأساسيات" },
    note: {
      en: "The habits behind the work: accessibility, speed, and interfaces that adapt.",
      ar: "العادات اللي وراء الشغل: الإتاحة، السرعة، وواجهات بتتأقلم.",
    },
    skills: [
      "Accessibility",
      "SEO",
      "Performance",
      "Responsive design",
      "Database design",
      "UI/UX",
      "Information Systems",
    ],
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    period: { en: "2026", ar: "2026" },
    title: {
      en: "B.Sc. Business Information Systems",
      ar: "بكالوريوس نظم ومعلومات الأعمال",
    },
    org: {
      en: "Misr Higher Institute for Commerce & Computers, Mansoura · Graduated August 2026 · Very Good",
      ar: "معهد مصر العالي للتجارة والحاسبات بالمنصورة · تخرج أغسطس 2026 · جيد جدًا",
    },
    description: {
      en: "Graduated in August 2026 with a Very Good cumulative grade. The graduation project was graded Excellent (99%) and focused on databases, systems analysis, and software development.",
      ar: "تخرج في أغسطس 2026 بتقدير تراكمي جيد جدًا. مشروع التخرج حصل على امتياز بنسبة 99% وكان مركزًا على قواعد البيانات وتحليل النظم وتطوير السوفتوير.",
    },
    kind: "education",
  },
  {
    period: { en: "2024–2025", ar: "2024–2025" },
    title: {
      en: "Freelance Web Developer",
      ar: "مطور ويب فريلانس",
    },
    org: { en: "Mostaql.com", ar: "مستقل" },
    description: {
      en: "Worked with clients on responsive web interfaces and front-end implementation, with a focus on React, Tailwind CSS, and clean delivery.",
      ar: "اشتغلت مع عملاء على واجهات ويب متجاوبة وتنفيذ فرونت إند، بتركيز على React وTailwind CSS وتسليم نظيف.",
    },
    kind: "work",
  },
  {
    period: { en: "2023–present", ar: "2023–الآن" },
    title: {
      en: "Independent Product Builder",
      ar: "بناء منتجات مستقل",
    },
    org: { en: "Self-directed", ar: "شغل ذاتي" },
    description: {
      en: "Designed and shipped bilingual learning tools, local-first software, browser extensions, and daily utilities — the five featured projects live here.",
      ar: "صممت ونفذت أدوات تعلم ثنائية اللغة، وسوفتوير محلي، وإكستنشنات متصفح، وأدوات يومية — المشاريع الخمسة المميزة جزء من الرحلة دي.",
    },
    kind: "project",
  },
  {
    period: { en: "2022", ar: "2022" },
    title: {
      en: "Started building for the web",
      ar: "بدأت أبني للويب",
    },
    org: { en: "Self-taught", ar: "تعلم ذاتي" },
    description: {
      en: "Began with HTML, CSS, and JavaScript, then moved into React, TypeScript, Node.js, and the rest of the stack.",
      ar: "بدأت بـ HTML وCSS وJavaScript، وبعدها دخلت React وTypeScript وNode.js وباقي الستاك.",
    },
    kind: "project",
  },
];

export const PRINCIPLES: Localized<
  { title: string; text: string }[]
> = {
  en: [
    {
      title: "Clarity over cleverness",
      text: "The best code is the code the next person can read. I favor simple data flow, obvious names, and interfaces that explain themselves.",
    },
    {
      title: "Performance is a feature",
      text: "Fast pages feel trustworthy. I keep bundles small, render on the server when it helps, and treat every client component as a cost.",
    },
    {
      title: "Bilingual by default",
      text: "Arabic and English are not an afterthought. I design layouts, typography, and content models that work in both directions from day one.",
    },
  ],
  ar: [
    {
      title: "الوضوح قبل الذكاء",
      text: "أحسن كود هو اللي اللي بعده يقدر يقرأه. بفضّل تدفق بيانات بسيط، وأسماء واضحة، وواجهات بتشرح نفسها.",
    },
    {
      title: "الأداء ميزة",
      text: "الصفحات السريعة بتكسب ثقة. بحافظ على حجم الحزم صغير، وبستخدم الرندر على السيرفر لما يفيد، وبعتبر كل client component تكلفة.",
    },
    {
      title: "ثنائية اللغة من البداية",
      text: "العربي والإنجليزي مش حاجة بتتضاف في الآخر. بصمم التخطيط والتايبوجرافي وموديل المحتوى عشان يشتغلوا في الاتجاهين من أول يوم.",
    },
  ],
};
