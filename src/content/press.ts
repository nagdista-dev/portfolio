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
  href: string;
  linkLabel: string;
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
      "Mahmoud Elnagdy is a full-stack developer based in Cairo, Egypt. He builds fast, accessible, bilingual web products with React, Next.js, TypeScript, Node.js, and SQL. He graduated in 2026 with a B.Sc. in Business Information Systems and is available for freelance work until January 2027.",
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
        href: "https://github.com/nagdista-dev/new-edu-swap",
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
      "Builds bilingual and local-first web products; selected work is listed below.",
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
        label: "Focus",
        value:
          "Accessibility, performance, bilingual and RTL interfaces, local-first products",
      },
    ],
    workTitle: "Selected work",
    workIntro:
      "Five featured case studies, plus the graduation project. Each project links to the full write-up.",
    work: [
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
        href: "https://github.com/nagdista-dev/new-edu-swap",
        linkLabel: "Repository",
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
          "Featured projects include Wasla, LocalTube, Hassala, Tarteeb, and Yost — bilingual and local-first web products. Case studies are at https://nagdista.com/projects/.",
      },
      {
        question: "Is Mahmoud Elnagdy available for work?",
        answer:
          "He is available for freelance work until January 2027. He begins military service in January 2027 for 15 months and returns to full-time work after March 2028.",
      },
      {
        question: "What is Nagdista?",
        answer:
          "Nagdista is an online handle used for a portfolio and developer profiles at https://nagdista.com/. It is a personal brand, not a company.",
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
        question: "How is the name spelled?",
        answer:
          "The preferred English spelling is Mahmoud Elnagdy. An older transliteration is Mahmoud Alnagdy. In Arabic: محمود النجدي.",
      },
    ],
    contactTitle: "Press contact",
    contactBody:
      "For interviews, quotes, or verification, email nagdista@gmail.com. Please link to https://nagdista.com/ when citing this profile.",
    updated: "Last updated: 9 November 2026",
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
      "محمود النجدي مطور فول ستاك في القاهرة، مصر. يبني منتجات ويب سريعة وسهلة الاستخدام وثنائية اللغة باستخدام React وNext.js وTypeScript وNode.js وSQL. تخرج عام 2026 بدرجة بكالوريوس في نظم ومعلومات الأعمال، وهو متاح للفريلانس حتى يناير 2027.",
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
        href: "https://github.com/nagdista-dev/new-edu-swap",
      },
      {
        label: "تقنيات المشروع",
        value: "React وNode.js وMongoDB وSocket.io",
      },
    ],
    learningTitle: "مسار التعلّم",
    learning: [
      "مطور عصامي من أول يوم في الجامعة سنة 2022: تعلّم بالبناء وقراءة التوثيق وتسليم مشاريع حقيقية.",
      "يدرس الإنجليزية ويبني أدوات مدعومة بالذكاء الاصطناعي لتعلّم اللغات.",
      "يتعلم بالتجربة والخطأ، ومنفتح على الملاحظات والنصايح من المهندسين الأكثر خبرة.",
      "مستودعات التعلّم العامة توثّق المسار: أساسيات Python، وGitHub CLI، والأنيميشن، والتحضير لمقابلات الواجهات.",
    ],
    experienceTitle: "الخبرة",
    experience: [
      "مطور فريلانس يعمل مباشرة مع عملاء في مصر، من فهم المتطلبات حتى التسليم.",
      "يبني منتجات ويب ثنائية اللغة وتهتم بالعمل المحلي؛ الأعمال المختارة بالأسفل.",
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
        label: "التركيز",
        value:
          "الإتاحة والأداء والواجهات ثنائية اللغة وRTL والمنتجات المحلية أولًا",
      },
    ],
    workTitle: "أعمال مختارة",
    workIntro:
      "خمس دراسات حالة مميزة، بالإضافة إلى مشروع التخرج. كل مشروع مرتبط بالتفاصيل الكاملة.",
    work: [
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
          "منظم يومي يراعي مواعيد الصلاة ويعمل دون اتصال.",
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
        href: "https://github.com/nagdista-dev/new-edu-swap",
        linkLabel: "المستودع",
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
          "محمود النجدي مطور فول ستاك في القاهرة، مصر، يعمل بـReact وNext.js وTypeScript وNode.js وSQL. تخرج عام 2026 بدرجة بكالوريوس في نظم ومعلومات الأعمال.",
      },
      {
        question: "أين درس محمود النجدي؟",
        answer:
          "درس نظم ومعلومات الأعمال في معهد مصر العالي للتجارة والحاسبات بالمنصورة، المعروف محليًا بمعهد السلاب. تخرج في أغسطس 2026 بتقدير تراكمي جيد جدًا.",
      },
      {
        question: "ما هو مشروع تخرج محمود النجدي؟",
        answer:
          "EduSwap، منصة لتبادل الأدوات التعليمية بُنيت بـReact وNode.js وMongoDB وSocket.io، وحصلت على امتياز بنسبة 99%.",
      },
      {
        question: "ما الذي بناه محمود النجدي؟",
        answer:
          "من أبرز أعماله Wasla وLocalTube وHassala وTarteeb وYost، وهي منتجات ويب ثنائية اللغة وتهتم بالعمل المحلي. دراسات الحالة على https://nagdista.com/ar/projects/.",
      },
      {
        question: "هل محمود النجدي متاح للعمل؟",
        answer:
          "متاح للفريلانس حتى يناير 2027. يبدأ الخدمة العسكرية في يناير 2027 لمدة 15 شهرًا، ويعود للعمل بدوام كامل بعد مارس 2028.",
      },
      {
        question: "ما هو Nagdista؟",
        answer:
          "Nagdista اسم مستعار أونلاين يُستخدم لموقع وملفات مطور على https://nagdista.com/. هو علامة شخصية وليس شركة.",
      },
      {
        question: "هل محمود النجدي بيشتغل بالذكاء الاصطناعي؟",
        answer:
          "أيوه. بيكتب AI in Brief، نشرة يومية على LinkedIn عن أخبار الذكاء الاصطناعي للمطورين، وبيستخدم أدوات AI في التطوير وتعلّم اللغات. اقرأها على https://www.linkedin.com/newsletters/ai-in-brief-7492152374984376320.",
      },
      {
        question: "إيه هو AI in Brief؟",
        answer:
          "AI in Brief نشرة يومية بالعربي على LinkedIn بيكتبها محمود النجدي، وبتلخص أهم أخبار الذكاء الاصطناعي للمطورين في كام دقيقة، وبيقراها أكتر من 2,000 متابع على LinkedIn.",
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
    updated: "آخر تحديث: 9 نوفمبر 2026",
  },
};
