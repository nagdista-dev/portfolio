export type PressName = {
  name: string;
  note: string;
};

export type PressFaq = {
  question: string;
  answer: string;
};

export type PressContent = {
  eyebrow: string;
  title: string;
  intro: string;
  bioTitle: string;
  shortBio: string;
  longBioTitle: string;
  longBio: string[];
  namesTitle: string;
  namesIntro: string;
  names: PressName[];
  factsTitle: string;
  facts: { label: string; value: string; href?: string }[];
  usageTitle: string;
  usage: string[];
  linksTitle: string;
  faqTitle: string;
  faq: PressFaq[];
  contactTitle: string;
  contactBody: string;
  updated: string;
};

export const PRESS: Record<"en" | "ar", PressContent> = {
  en: {
    eyebrow: "Press & identity",
    title: "Mahmoud Elnagdy",
    intro:
      "Canonical facts, bios, and name spellings for Mahmoud Elnagdy, a full-stack developer based in Cairo, Egypt.",
    bioTitle: "Short bio",
    shortBio:
      "Mahmoud Elnagdy is a full-stack developer based in Cairo, Egypt. He builds fast, accessible, bilingual web products with React, Next.js, TypeScript, Node.js, and SQL. He graduated in 2026 with a B.Sc. in Information Systems and is open to freelance projects and junior remote roles.",
    longBioTitle: "Long bio",
    longBio: [
      "Mahmoud Elnagdy started with front-end work — HTML, CSS, JavaScript, then React and Tailwind CSS — before moving into TypeScript, Node.js, Express, and relational databases. That range now lets him work across the stack, from interface details to API and data design.",
      "His featured work includes Wasla, a bilingual platform that turns YouTube playlists into structured courses; LocalTube, a self-hosted video library with FFmpeg thumbnails and SQLite progress tracking; Hassala, a privacy-first Chrome extension for Arabic ↔ English vocabulary; Tarteeb, a prayer-aware daily planner that works offline; and Yost, a local-first dashboard for YouTube community posts.",
      "He studied Information Systems and graduated in 2026 with a Very Good grade. He writes in English and Arabic, designs for both directions, and documents what he learns in evergreen articles on Next.js, React, TypeScript, and databases.",
    ],
    namesTitle: "Names and spellings",
    namesIntro:
      "These are the forms of the name used across official profiles. Each one is written on its own.",
    names: [
      { name: "Mahmoud Elnagdy", note: "Preferred English spelling." },
      {
        name: "Mahmoud Alnagdy",
        note: "Older transliteration still present on some profiles.",
      },
      { name: "Elnagdy", note: "Family name." },
      { name: "محمود النجدي", note: "Arabic full name." },
      { name: "النجدي", note: "Arabic family name." },
      {
        name: "Nagdista",
        note: "Online handle used for the website and developer profiles.",
      },
      { name: "نجديستا", note: "Arabic form of the online handle." },
    ],
    factsTitle: "Canonical facts",
    facts: [
      { label: "Role", value: "Full-stack developer" },
      { label: "Location", value: "Cairo, Egypt" },
      {
        label: "Education",
        value: "B.Sc. Information Systems, 2026 (Very Good)",
      },
      {
        label: "Stack",
        value: "React, Next.js, TypeScript, Node.js, Express, SQL",
      },
      { label: "Languages", value: "Arabic (native), English (professional)" },
      {
        label: "Availability",
        value: "Freelance projects and junior remote roles",
      },
      { label: "Website", value: "nagdista.com", href: "https://nagdista.com/" },
      {
        label: "Email",
        value: "nagdista@gmail.com",
        href: "mailto:nagdista@gmail.com",
      },
    ],
    usageTitle: "How to refer to me",
    usage: [
      "On first mention, use the full name: Mahmoud Elnagdy.",
      "In Arabic, use: محمود النجدي.",
      "Keep the full name and the online handle as separate mentions. Do not present them as a combined label.",
      "Link to https://nagdista.com/ as the canonical profile.",
      "For a one-line description: full-stack developer in Cairo, Egypt.",
    ],
    linksTitle: "Official links",
    faqTitle: "Common questions",
    faq: [
      {
        question: "Who is Mahmoud Elnagdy?",
        answer:
          "Mahmoud Elnagdy is a full-stack developer in Cairo, Egypt, working with React, Next.js, TypeScript, Node.js, and SQL. He graduated in 2026 with a B.Sc. in Information Systems.",
      },
      {
        question: "What has Mahmoud Elnagdy built?",
        answer:
          "Featured projects include Wasla, LocalTube, Hassala, Tarteeb, and Yost — bilingual and local-first web products. Case studies are at https://nagdista.com/projects/.",
      },
      {
        question: "Is Mahmoud Elnagdy available for work?",
        answer:
          "Yes. He is open to freelance projects and junior remote roles. Contact: nagdista@gmail.com.",
      },
      {
        question: "What is Nagdista?",
        answer:
          "Nagdista is an online handle used for a portfolio and developer profiles at https://nagdista.com/. It is a personal brand, not a company.",
      },
      {
        question: "How is the name spelled?",
        answer:
          "The preferred English spelling is Mahmoud Elnagdy. An older transliteration is Mahmoud Alnagdy. In Arabic: محمود النجدي.",
      },
    ],
    contactTitle: "Press contact",
    contactBody:
      "For interviews, quotes, or verification, email nagdista@gmail.com. Please link to https://nagdista.com/ when citing this profile.",
    updated: "Last updated: 8 November 2026",
  },
  ar: {
    eyebrow: "ملف صحفي وتعريفي",
    title: "محمود النجدي",
    intro:
      "حقائق ونبذة وطرق كتابة الاسم لمحمود النجدي، مطور فول ستاك في القاهرة، مصر.",
    bioTitle: "نبذة مختصرة",
    shortBio:
      "محمود النجدي مطور فول ستاك في القاهرة، مصر. يبني منتجات ويب سريعة وسهلة الاستخدام وثنائية اللغة باستخدام React وNext.js وTypeScript وNode.js وSQL. تخرج عام 2026 بدرجة بكالوريوس في نظم المعلومات، وهو متاح لمشاريع الفريلانس والوظائف عن بُعد للمبتدئين.",
    longBioTitle: "نبذة موسعة",
    longBio: [
      "بدأ محمود النجدي بالعمل على الواجهات الأمامية: HTML وCSS وJavaScript، ثم React وTailwind CSS، قبل أن ينتقل إلى TypeScript وNode.js وExpress وقواعد البيانات العلائقية. هذه الخبرة تسمح له بالعمل عبر الطبقات كلها، من تفاصيل الواجهة إلى تصميم الـAPI والبيانات.",
      "من أعماله البارزة Wasla، منصة ثنائية اللغة تحوّل قوائم تشغيل YouTube إلى كورسات منظمة؛ وLocalTube، مكتبة فيديو ذاتية الاستضافة مع صور مصغرة بـFFmpeg وتتبع تقدم بـSQLite؛ وHassala، إضافة Chrome تحترم الخصوصية لمفردات العربية والإنجليزية؛ وTarteeb، منظم يومي يراعي مواعيد الصلاة ويعمل دون اتصال؛ وYost، لوحة محلية لمنشورات مجتمع YouTube.",
      "درس نظم المعلومات وتخرج عام 2026 بتقدير جيد جدًا. يكتب بالعربية والإنجليزية، ويصمم للاتجاهين، ويوثّق ما يتعلمه في مقالات دائمة عن Next.js وReact وTypeScript وقواعد البيانات.",
    ],
    namesTitle: "الأسماء وطرق الكتابة",
    namesIntro:
      "هذه هي الصيغ المستخدمة في الملفات الرسمية. كل صيغة مكتوبة بشكل منفصل.",
    names: [
      { name: "Mahmoud Elnagdy", note: "الصيغة الإنجليزية المفضلة." },
      {
        name: "Mahmoud Alnagdy",
        note: "نقل حرفي أقدم لا يزال موجودًا في بعض الملفات.",
      },
      { name: "Elnagdy", note: "اسم العائلة." },
      { name: "محمود النجدي", note: "الاسم العربي الكامل." },
      { name: "النجدي", note: "اسم العائلة بالعربية." },
      {
        name: "Nagdista",
        note: "اسم مستعار أونلاين يُستخدم للموقع وملفات المطور.",
      },
      { name: "نجديستا", note: "الصيغة العربية للاسم المستعار." },
    ],
    factsTitle: "حقائق أساسية",
    facts: [
      { label: "الدور", value: "مطور فول ستاك" },
      { label: "الموقع", value: "القاهرة، مصر" },
      {
        label: "التعليم",
        value: "بكالوريوس نظم المعلومات، 2026 (جيد جدًا)",
      },
      {
        label: "التقنيات",
        value: "React وNext.js وTypeScript وNode.js وExpress وSQL",
      },
      {
        label: "اللغات",
        value: "العربية (أساسية)، الإنجليزية (احترافية)",
      },
      {
        label: "الإتاحة",
        value: "مشاريع فريلانس ووظائف عن بُعد للمبتدئين",
      },
      {
        label: "الموقع الإلكتروني",
        value: "nagdista.com/ar",
        href: "https://nagdista.com/ar/",
      },
      {
        label: "البريد",
        value: "nagdista@gmail.com",
        href: "mailto:nagdista@gmail.com",
      },
    ],
    usageTitle: "طريقة الإشارة إليّ",
    usage: [
      "عند أول ذكر، استخدم الاسم الكامل: محمود النجدي.",
      "اكتب الاسم الكامل والاسم المستعار أونلاين كل واحد في سياق منفصل، دون دمجهما في تسمية واحدة.",
      "اربط بـhttps://nagdista.com/ar/ كملف تعريفي رسمي.",
      "لوصف مختصر: مطور فول ستاك في القاهرة، مصر.",
    ],
    linksTitle: "روابط رسمية",
    faqTitle: "أسئلة شائعة",
    faq: [
      {
        question: "من هو محمود النجدي؟",
        answer:
          "محمود النجدي مطور فول ستاك في القاهرة، مصر، يعمل بـReact وNext.js وTypeScript وNode.js وSQL. تخرج عام 2026 بدرجة بكالوريوس في نظم المعلومات.",
      },
      {
        question: "ما الذي بناه محمود النجدي؟",
        answer:
          "من أبرز أعماله Wasla وLocalTube وHassala وTarteeb وYost، وهي منتجات ويب ثنائية اللغة وتهتم بالعمل المحلي. دراسات الحالة على https://nagdista.com/ar/projects/.",
      },
      {
        question: "هل محمود النجدي متاح للعمل؟",
        answer:
          "نعم. هو متاح لمشاريع الفريلانس والوظائف عن بُعد للمبتدئين. للتواصل: nagdista@gmail.com.",
      },
      {
        question: "ما هو Nagdista؟",
        answer:
          "Nagdista اسم مستعار أونلاين يُستخدم لموقع وملفات مطور على https://nagdista.com/. هو علامة شخصية وليس شركة.",
      },
      {
        question: "كيف يُكتب الاسم؟",
        answer:
          "الصيغة الإنجليزية المفضلة هي Mahmoud Elnagdy، وهناك نقل حرفي أقدم هو Mahmoud Alnagdy. وبالعربية: محمود النجدي.",
      },
    ],
    contactTitle: "للتواصل الصحفي",
    contactBody:
      "لإجراء مقابلات أو اقتباسات أو التحقق من المعلومات، راسل nagdista@gmail.com. يُرجى الربط بـhttps://nagdista.com/ar/ عند الاستشهاد بهذا الملف.",
    updated: "آخر تحديث: 8 نوفمبر 2026",
  },
};
