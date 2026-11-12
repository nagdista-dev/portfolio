export type PressRow = {
  label: string;
  value: string;
  href?: string;
};

export type PressName = {
  name: string;
  note: string;
};

export type PressFaq = {
  question: string;
  answer: string;
};

export type PressWork = {
  name: string;
  description: string;
  href?: string;
  linkLabel?: string;
};

export type PressArticle = {
  title: string;
  href: string;
};

export type PressContent = {
  eyebrow: string;
  title: string;
  intro: string;
  snapshotTitle: string;
  snapshot: PressRow[];
  bioTitle: string;
  shortBio: string;
  educationTitle: string;
  education: PressRow[];
  learningTitle: string;
  learning: string[];
  experienceTitle: string;
  experience: string[];
  skillsTitle: string;
  skills: PressRow[];
  workTitle: string;
  workIntro: string;
  work: PressWork[];
  writingTitle: string;
  writing: PressArticle[];
  namesTitle: string;
  namesIntro: string;
  names: PressName[];
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
    eyebrow: "Profile & press kit",
    title: "Mahmoud Elnagdy",
    intro:
      "The canonical profile of Mahmoud Elnagdy, a full-stack developer based in Cairo, Egypt. Facts, education, skills, selected work, and official links — in one place.",
    snapshotTitle: "At a glance",
    snapshot: [
      { label: "Role", value: "Full-stack developer" },
      { label: "Location", value: "Cairo, Egypt" },
      {
        label: "Education",
        value: "B.Sc. Business Information Systems, 2026",
      },
      {
        label: "Availability",
        value:
          "Freelance until January 2027; military service January 2027 – March 2028; full-time after",
      },
      {
        label: "Languages",
        value: "Arabic (native), English (professional)",
      },
      {
        label: "Email",
        value: "nagdista@gmail.com",
        href: "mailto:nagdista@gmail.com",
      },
      {
        label: "Website",
        value: "nagdista.com",
        href: "https://nagdista.com/",
      },
      {
        label: "Most active on",
        value: "X (@nagdista)",
        href: "https://x.com/nagdista",
      },
      {
        label: "AI newsletter",
        value: "AI in Brief on LinkedIn",
        href: "https://www.linkedin.com/newsletters/ai-in-brief-7492152374984376320",
      },
    ],
    bioTitle: "Short bio",
    shortBio:
      "Mahmoud Elnagdy is a full-stack developer based in Cairo, Egypt. He builds fast, accessible, bilingual web products with React, Next.js, TypeScript, Node.js, and SQL, corporate WordPress websites with Elementor and Rank Math, and Shopify/Salla storefronts. He graduated in 2026 with a B.Sc. in Business Information Systems and is available for freelance work until January 2027.",
    educationTitle: "Education",
    education: [
      {
        label: "Degree",
        value: "B.Sc. in Business Information Systems",
      },
      {
        label: "Institution",
        value:
          "Misr Higher Institute for Commerce & Computers, Mansoura — also known locally as El-Sallab Higher Institute",
        href: "https://metmans.edu.eg/",
      },
      { label: "Graduated", value: "August 2026" },
      { label: "Cumulative grade", value: "Very Good" },
      {
        label: "Graduation project",
        value:
          "EduSwap — an educational tools exchange platform, graded Excellent (99%)",
      },
      {
        label: "Project stack",
        value: "React, Node.js, MongoDB, Socket.io",
      },
    ],
    learningTitle: "Learning path",
    learning: [
      "Self-taught programmer since the first day of university in 2022: learned by building, reading documentation, and shipping real projects.",
      "Studying English and building AI-assisted tools for learning languages.",
      "Learns by trial and error, and is open to feedback and advice from more experienced engineers.",
      "Public learning repositories document the path: Python fundamentals, GitHub CLI, animation, and frontend interview preparation.",
    ],
    experienceTitle: "Experience",
    experience: [
      "Freelance developer working directly with clients in Egypt, from requirements through delivery.",
      "Builds bilingual and local-first web products, plus corporate WordPress websites with Elementor and Rank Math, and Shopify/Salla storefront work.",
      "Selected work is listed below.",
    ],
    skillsTitle: "Skills",
    skills: [
      {
        label: "Front end",
        value: "React, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS",
      },
      {
        label: "Back end",
        value: "Node.js, Express, REST APIs, Socket.io",
      },
      {
        label: "Data",
        value: "SQL, SQLite, MongoDB, Mongoose",
      },
      {
        label: "Tooling",
        value: "Git, GitHub, Vite, FFmpeg, Vercel, Netlify",
      },
      {
        label: "WordPress",
        value:
          "WordPress, Elementor, Gutenberg, WooCommerce, PHP, MySQL, Rank Math SEO, Fluent Forms",
      },
      {
        label: "E-commerce",
        value:
          "Shopify and Salla storefronts, theme sections, product pages, payments and shipping setup",
      },
      {
        label: "Focus",
        value:
          "Accessibility, performance, bilingual and RTL interfaces, local-first products, corporate websites",
      },
    ],
    workTitle: "Selected work",
    workIntro:
      "Six featured case studies, plus the graduation project. Each project links to the full write-up.",
    work: [
      {
        name: "Bunyan Contracting",
        description:
          "Complete corporate WordPress site for a construction studio — seven pages, six project case studies, and an enquiry flow. Built with Elementor, Rank Math SEO, and Fluent Forms.",
        href: "https://nagdista.com/projects/bunyan-contracting/",
        linkLabel: "Case study",
      },
      {
        name: "Wasla",
        description:
          "Bilingual platform that turns YouTube playlists into structured courses.",
        href: "https://nagdista.com/projects/wasla/",
        linkLabel: "Case study",
      },
      {
        name: "LocalTube",
        description:
          "Self-hosted video library with SQLite progress tracking and FFmpeg thumbnails. Runs locally.",
        href: "https://nagdista.com/projects/localtube/",
        linkLabel: "Case study",
      },
      {
        name: "Hassala",
        description:
          "Privacy-first Chrome extension for Arabic ↔ English vocabulary.",
        href: "https://nagdista.com/projects/hassala/",
        linkLabel: "Case study",
      },
      {
        name: "Tarteeb",
        description:
          "Prayer-aware daily planner that works offline.",
        href: "https://nagdista.com/projects/tarteeb/",
        linkLabel: "Case study",
      },
      {
        name: "Yost",
        description:
          "Local-first dashboard for YouTube community posts.",
        href: "https://nagdista.com/projects/yost/",
        linkLabel: "Case study",
      },
      {
        name: "EduSwap",
        description:
          "Graduation project: educational tools exchange platform with real-time chat.",
      },
    ],
    writingTitle: "Writing",
    writing: [
      {
        title: "AI in Brief — a daily AI newsletter for developers",
        href: "https://www.linkedin.com/newsletters/ai-in-brief-7492152374984376320",
      },
      {
        title: "How I Built a Bilingual Portfolio with Next.js and TypeScript",
        href: "https://nagdista.com/blog/bilingual-portfolio-nextjs-typescript/",
      },
      {
        title: "MERN vs Next.js: Choosing the Right Stack",
        href: "https://nagdista.com/blog/mern-vs-nextjs/",
      },
      {
        title: "SQL vs MongoDB: A Practical Guide for Full-Stack Developers",
        href: "https://nagdista.com/blog/sql-vs-mongodb/",
      },
      {
        title: "إزاي تبني بورتفوليو احترافي بـ Next.js وTypeScript",
        href: "https://nagdista.com/ar/blog/build-portfolio-nextjs-typescript-ar/",
      },
      {
        title: "React vs Next.js: امتى تختار كل واحد؟",
        href: "https://nagdista.com/ar/blog/react-vs-nextjs-ar/",
      },
      {
        title: "أفضل ممارسات TypeScript في مشاريع React",
        href: "https://nagdista.com/ar/blog/typescript-best-practices-react-ar/",
      },
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
      {
        name: "Najdista",
        note: "Common misspelling of Nagdista; both refer to this same profile.",
      },
      { name: "نجديستا", note: "Arabic form of the online handle." },
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
          "Mahmoud Elnagdy is a full-stack developer in Cairo, Egypt, working with React, Next.js, TypeScript, Node.js, and SQL. He graduated in 2026 with a B.Sc. in Business Information Systems.",
      },
      {
        question: "Where did Mahmoud Elnagdy study?",
        answer:
          "He studied Business Information Systems at Misr Higher Institute for Commerce & Computers in Mansoura, also known locally as El-Sallab Higher Institute. He graduated in August 2026 with a Very Good cumulative grade.",
      },
      {
        question: "What was Mahmoud Elnagdy's graduation project?",
        answer:
          "EduSwap, an educational tools exchange platform built with React, Node.js, MongoDB, and Socket.io. It was graded Excellent (99%).",
      },
      {
        question: "What has Mahmoud Elnagdy built?",
        answer:
          "Featured projects include Bunyan Contracting, a complete corporate WordPress site, plus Wasla, LocalTube, Hassala, Tarteeb, and Yost — bilingual and local-first web products. Shopify and Salla storefront work is open for new projects. Case studies are at https://nagdista.com/projects/ and WordPress services at https://nagdista.com/wordpress/.",
      },
      {
        question: "Is Mahmoud Elnagdy available for work?",
        answer:
          "He is available for freelance work until January 2027. He begins military service in January 2027 for 15 months and returns to full-time work after March 2028.",
      },
      {
        question: "What is Nagdista (نجديستا)?",
        answer:
          "Nagdista — written نجديستا in Arabic — is the online handle of Mahmoud Elnagdy (محمود النجدي), a full-stack developer in Cairo, Egypt. It is built from his family name, Elnagdy. The official website is https://nagdista.com/. It is a personal brand, not a company.",
      },
      {
        question: "Is Nagdista related to Najd or Saudi Arabia?",
        answer:
          "No. Nagdista (نجديستا) is not a place, region, or country, and it has nothing to do with the Najd region of Saudi Arabia. It is the personal handle of Mahmoud Elnagdy, an Egyptian developer based in Cairo.",
      },
      {
        question: "Is it Nagdista or Najdista?",
        answer:
          "Nagdista is the correct spelling of the online handle. Najdista is a common misspelling, but it refers to the same person, Mahmoud Elnagdy, and the same website, https://nagdista.com/.",
      },
      {
        question: "Where is the official Mahmoud Elnagdy website?",
        answer:
          "The official website is https://nagdista.com/. The press kit at https://nagdista.com/press/ lists the official links, bio, name spellings, and contact details for verification.",
      },
      {
        question: "Does Mahmoud Elnagdy work with AI?",
        answer:
          "Yes. He writes AI in Brief, a daily LinkedIn newsletter about AI news for developers, and uses AI-assisted tools in his development and language-learning workflow. Read it at https://www.linkedin.com/newsletters/ai-in-brief-7492152374984376320.",
      },
      {
        question: "What is AI in Brief?",
        answer:
          "AI in Brief is a daily Arabic-language LinkedIn newsletter curated by Mahmoud Elnagdy. It summarizes the most important AI news for developers in a few minutes and is read by 2,000+ people on LinkedIn.",
      },
      {
        question: "Who is Mahmoud Elnagdy AI?",
        answer:
          "Mahmoud Elnagdy AI refers to the developer Mahmoud Elnagdy, not the perfume creator with the same name. He writes AI in Brief, a daily LinkedIn newsletter about AI news for developers, and builds AI-powered web features with React, Next.js, Node.js, and APIs such as the OpenAI API.",
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
    updated: "Last updated: 12 November 2026",
  },
  ar: {
    eyebrow: "الملف التعريفي والصحفي",
    title: "محمود النجدي",
    intro:
      "الملف الرسمي لمحمود النجدي، مطور فول ستاك في القاهرة، مصر. الحقائق والتعليم والمهارات والأعمال والروابط الرسمية في مكان واحد.",
    snapshotTitle: "نظرة سريعة",
    snapshot: [
      { label: "الدور", value: "مطور فول ستاك" },
      { label: "الموقع", value: "القاهرة، مصر" },
      {
        label: "التعليم",
        value: "بكالوريوس نظم ومعلومات الأعمال، 2026",
      },
      {
        label: "الإتاحة",
        value:
          "فريلانس حتى يناير 2027؛ خدمة عسكرية يناير 2027 – مارس 2028؛ دوام كامل بعدها",
      },
      {
        label: "اللغات",
        value: "العربية (أساسية)، الإنجليزية (احترافية)",
      },
      {
        label: "البريد",
        value: "nagdista@gmail.com",
        href: "mailto:nagdista@gmail.com",
      },
      {
        label: "الموقع الإلكتروني",
        value: "nagdista.com/ar",
        href: "https://nagdista.com/ar/",
      },
      {
        label: "أنشط منصة",
        value: "X (@nagdista)",
        href: "https://x.com/nagdista",
      },
      {
        label: "نشرة AI",
        value: "AI in Brief على LinkedIn",
        href: "https://www.linkedin.com/newsletters/ai-in-brief-7492152374984376320",
      },
    ],
    bioTitle: "نبذة مختصرة",
    shortBio:
      "محمود النجدي مطور فول ستاك في القاهرة، مصر. بيبني منتجات ويب سريعة وسهلة وثنائية اللغة بـReact وNext.js وTypeScript وNode.js وSQL، وكمان مواقع Corporate على وردبريس بـElementor وRank Math، وشغل متاجر شوبيفاي وسلة. اتخرج سنة 2026 ببكالوريوس نظم ومعلومات الأعمال، ومتاح للفريلانس لحد يناير 2027.",
    educationTitle: "التعليم",
    education: [
      {
        label: "الدرجة",
        value: "بكالوريوس نظم ومعلومات الأعمال",
      },
      {
        label: "المعهد",
        value:
          "معهد مصر العالي للتجارة والحاسبات بالمنصورة — المعروف محليًا بمعهد السلاب",
        href: "https://metmans.edu.eg/",
      },
      { label: "التخرج", value: "أغسطس 2026" },
      { label: "التقدير التراكمي", value: "جيد جدًا" },
      {
        label: "مشروع التخرج",
        value:
          "EduSwap — منصة لتبادل الأدوات التعليمية، بتقدير امتياز 99%",
      },
      {
        label: "تقنيات المشروع",
        value: "React وNode.js وMongoDB وSocket.io",
      },
    ],
    learningTitle: "مسار التعلّم",
    learning: [
      "مطور عصامي من أول يوم في الجامعة سنة 2022: اتعلم بالبناء وقراءة التوثيق وتسليم مشاريع حقيقية.",
      "بيدرس إنجليزي وبيبني أدوات مدعومة بالذكاء الاصطناعي لتعلّم اللغات.",
      "بيتعلم بالتجربة والخطأ، ومنفتح على الملاحظات والنصايح من مهندسين أكتر خبرة.",
      "مستودعات التعلّم العامة بتوثّق المسار: أساسيات Python، وGitHub CLI، والأنيميشن، والتحضير لمقابلات الواجهات.",
    ],
    experienceTitle: "الخبرة",
    experience: [
      "مطور فريلانس بيشتغل مباشرة مع عملاء في مصر، من فهم المتطلبات لحد التسليم.",
      "بيبني منتجات ويب ثنائية اللغة وتهتم بالعمل المحلي، وكمان مواقع Corporate على وردبريس بـElementor وRank Math، وشغل متاجر شوبيفاي وسلة.",
      "الأعمال المختارة تحت.",
    ],
    skillsTitle: "المهارات",
    skills: [
      {
        label: "الواجهة الأمامية",
        value: "React وNext.js وTypeScript وJavaScript وHTML وCSS وTailwind CSS",
      },
      {
        label: "الواجهة الخلفية",
        value: "Node.js وExpress وREST APIs وSocket.io",
      },
      {
        label: "البيانات",
        value: "SQL وSQLite وMongoDB وMongoose",
      },
      {
        label: "الأدوات",
        value: "Git وGitHub وVite وFFmpeg وVercel وNetlify",
      },
      {
        label: "وردبريس",
        value:
          "WordPress وElementor وGutenberg وWooCommerce وPHP وMySQL وRank Math SEO وFluent Forms",
      },
      {
        label: "التجارة الإلكترونية",
        value:
          "متاجر شوبيفاي وسلة، وأقسام ثيمات، وصفحات منتجات، وربط الدفع والشحن",
      },
      {
        label: "التركيز",
        value:
          "الإتاحة والأداء والواجهات ثنائية اللغة وRTL والمنتجات المحلية أولًا ومواقع الشركات",
      },
    ],
    workTitle: "أعمال مختارة",
    workIntro:
      "ست دراسات حالة مميزة، وكمان مشروع التخرج. كل مشروع مرتبط بالتفاصيل الكاملة.",
    work: [
      {
        name: "Bunyan Contracting",
        description:
          "موقع Corporate كامل على وردبريس لشركة مقاولات — سبع صفحات وست دراسات مشاريع ونموذج تواصل، مبني بـElementor وRank Math SEO وFluent Forms.",
        href: "https://nagdista.com/ar/projects/bunyan-contracting/",
        linkLabel: "دراسة الحالة",
      },
      {
        name: "Wasla",
        description:
          "منصة ثنائية اللغة تحوّل قوائم تشغيل YouTube إلى كورسات منظمة.",
        href: "https://nagdista.com/ar/projects/wasla/",
        linkLabel: "دراسة الحالة",
      },
      {
        name: "LocalTube",
        description:
          "مكتبة فيديو ذاتية الاستضافة مع تتبع تقدم بـSQLite وصور مصغرة بـFFmpeg. تعمل محليًا.",
        href: "https://nagdista.com/ar/projects/localtube/",
        linkLabel: "دراسة الحالة",
      },
      {
        name: "Hassala",
        description:
          "إضافة Chrome تحترم الخصوصية لمفردات العربية والإنجليزية.",
        href: "https://nagdista.com/ar/projects/hassala/",
        linkLabel: "دراسة الحالة",
      },
      {
        name: "Tarteeb",
        description:
          "منظم يومي بيراعي مواعيد الصلاة وبيشتغل أوفلاين.",
        href: "https://nagdista.com/ar/projects/tarteeb/",
        linkLabel: "دراسة الحالة",
      },
      {
        name: "Yost",
        description:
          "لوحة محلية لمنشورات مجتمع YouTube.",
        href: "https://nagdista.com/ar/projects/yost/",
        linkLabel: "دراسة الحالة",
      },
      {
        name: "EduSwap",
        description:
          "مشروع التخرج: منصة لتبادل الأدوات التعليمية مع محادثة فورية.",
      },
    ],
    writingTitle: "الكتابة",
    writing: [
      {
        title: "AI in Brief — نشرة يومية عن أخبار الذكاء الاصطناعي للمطورين",
        href: "https://www.linkedin.com/newsletters/ai-in-brief-7492152374984376320",
      },
      {
        title: "إزاي تبني بورتفوليو احترافي بـ Next.js وTypeScript",
        href: "https://nagdista.com/ar/blog/build-portfolio-nextjs-typescript-ar/",
      },
      {
        title: "React vs Next.js: امتى تختار كل واحد؟",
        href: "https://nagdista.com/ar/blog/react-vs-nextjs-ar/",
      },
      {
        title: "أفضل ممارسات TypeScript في مشاريع React",
        href: "https://nagdista.com/ar/blog/typescript-best-practices-react-ar/",
      },
      {
        title: "How I Built a Bilingual Portfolio with Next.js and TypeScript",
        href: "https://nagdista.com/blog/bilingual-portfolio-nextjs-typescript/",
      },
      {
        title: "MERN vs Next.js: Choosing the Right Stack",
        href: "https://nagdista.com/blog/mern-vs-nextjs/",
      },
      {
        title: "SQL vs MongoDB: A Practical Guide for Full-Stack Developers",
        href: "https://nagdista.com/blog/sql-vs-mongodb/",
      },
    ],
    namesTitle: "الأسماء وطرق الكتابة",
    namesIntro:
      "دي الصيغ المستخدمة في الملفات الرسمية. كل صيغة مكتوبة لوحدها.",
    names: [
      { name: "Mahmoud Elnagdy", note: "الصيغة الإنجليزية المفضلة." },
      {
        name: "Mahmoud Alnagdy",
        note: "نقل حرفي أقدم لسه موجود في بعض الملفات.",
      },
      { name: "Elnagdy", note: "اسم العائلة." },
      { name: "محمود النجدي", note: "الاسم العربي الكامل." },
      { name: "النجدي", note: "اسم العائلة بالعربية." },
      {
        name: "Nagdista",
        note: "اسم مستعار أونلاين بيستخدمه للموقع وملفات المطور.",
      },
      {
        name: "Najdista",
        note: "كتابة شائعة خاطئة لـNagdista؛ الاثنان يشيران إلى نفس الملف.",
      },
      { name: "نجديستا", note: "الصيغة العربية للاسم المستعار." },
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
        question: "مين محمود النجدي؟",
        answer:
          "محمود النجدي مطور فول ستاك في القاهرة، مصر، بيشتغل بـReact وNext.js وTypeScript وNode.js وSQL. اتخرج سنة 2026 ببكالوريوس نظم ومعلومات الأعمال.",
      },
      {
        question: "محمود النجدي درس فين؟",
        answer:
          "درس نظم ومعلومات الأعمال في معهد مصر العالي للتجارة والحاسبات بالمنصورة، المعروف محليًا بمعهد السلاب. اتخرج في أغسطس 2026 بتقدير تراكمي جيد جدًا.",
      },
      {
        question: "مشروع تخرج محمود النجدي إيه؟",
        answer:
          "EduSwap، منصة لتبادل الأدوات التعليمية اتعملت بـReact وNode.js وMongoDB وSocket.io، وخدت امتياز بنسبة 99%.",
      },
      {
        question: "محمود النجدي بنى إيه؟",
        answer:
          "من أبرز أعماله Bunyan Contracting، موقع Corporate كامل على وردبريس، وكمان Wasla وLocalTube وHassala وTarteeb وYost، وهي منتجات ويب ثنائية اللغة وتهتم بالعمل المحلي. شغل متاجر شوبيفاي وسلة مفتوح لمشاريع جديدة. دراسات الحالة على https://nagdista.com/ar/projects/ وخدمات وردبريس على https://nagdista.com/ar/wordpress/.",
      },
      {
        question: "محمود النجدي متاح للشغل؟",
        answer:
          "متاح للفريلانس لحد يناير 2027. بيبدأ الخدمة العسكرية في يناير 2027 لمدة 15 شهر، وبيرجع للعمل بدوام كامل بعد مارس 2028.",
      },
      {
        question: "مين نجديستا (Nagdista)؟",
        answer:
          "نجديستا (Nagdista) هو الاسم اللي بيستخدمه أونلاين محمود النجدي، مطور فول ستاك من القاهرة، مصر. الاسم مبني على اسم العيلة «النجدي»، والموقع الرسمي هو https://nagdista.com/. هو علامة شخصية ومش شركة.",
      },
      {
        question: "نجديستا ليها علاقة بنجد أو السعودية؟",
        answer:
          "لأ. نجديستا مش مكان ولا منطقة ولا بلد، ومالهاش أي علاقة بمنطقة نجد في السعودية. ده الاسم الشخصي أونلاين لمحمود النجدي، مطور مصري من القاهرة.",
      },
      {
        question: "الاسم Nagdista ولا Najdista؟",
        answer:
          "الكتابة الصح هي Nagdista. Najdista كتابة شائعة خاطئة، بس بتشير لنفس الشخص، محمود النجدي، ونفس الموقع https://nagdista.com/.",
      },
      {
        question: "فين الموقع الرسمي لمحمود النجدي؟",
        answer:
          "الموقع الرسمي هو https://nagdista.com/. وصفحة الملف الصحفي على https://nagdista.com/ar/press/ فيها الروابط الرسمية والنبذة وطرق كتابة الاسم وبيانات التواصل للتحقق.",
      },
      {
        question: "محمود النجدي بيشتغل بالذكاء الاصطناعي؟",
        answer:
          "أيوه. بيكتب AI in Brief، نشرة يومية على LinkedIn عن أخبار الذكاء الاصطناعي للمطورين، وبيستخدم أدوات AI في التطوير وتعلّم اللغات. اقراها على https://www.linkedin.com/newsletters/ai-in-brief-7492152374984376320.",
      },
      {
        question: "إيه هو AI in Brief؟",
        answer:
          "AI in Brief نشرة يومية بالعربي على LinkedIn بيكتبها محمود النجدي، وبتلخص أهم أخبار الذكاء الاصطناعي للمطورين في كام دقيقة، وبيقراها أكتر من 2,000 متابع على LinkedIn.",
      },
      {
        question: "مين النجدي AI؟",
        answer:
          "النجدي AI هو محمود النجدي المطور، مش صانع محتوى العطور اللي بنفس الاسم. بيكتب AI in Brief، نشرة يومية على LinkedIn عن أخبار الذكاء الاصطناعي للمطورين، وبيبني ميزات AI داخل منتجات الويب بـReact وNext.js وNode.js وAPIs زي OpenAI API.",
      },
      {
        question: "الاسم بيتكتب إزاي؟",
        answer:
          "الصيغة الإنجليزية المفضلة هي Mahmoud Elnagdy، وفيه نقل حرفي أقدم هو Mahmoud Alnagdy. وبالعربي: محمود النجدي.",
      },
    ],
    contactTitle: "للتواصل الصحفي",
    contactBody:
      "لو عايز تعمل مقابلة أو تقتبس أو تتأكد من معلومة، راسل nagdista@gmail.com. ولو هتستشهد بالملف ده، اربط بـhttps://nagdista.com/ar/.",
    updated: "آخر تحديث: 12 نوفمبر 2026",
  },
};
