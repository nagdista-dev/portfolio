import type { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    slug: "bunyan-contracting",
    index: "01",
    name: "Bunyan Contracting",
    year: "2026",
    featured: true,
    category: "wordpress",
    kind: "website",
    stack: [
      "WordPress",
      "Elementor",
      "Rank Math SEO",
      "Fluent Forms",
      "PHP",
      "MySQL",
    ],
    links: {
      live: "https://bunyan.nagdista.com",
    },
    cover: {
      bg: "#EDE7DC",
      fg: "#14110D",
      accent: "#F04E23",
      motif: "corporate",
      domain: "bunyan.nagdista.com",
    },
    status: {
      en: "Live · WordPress",
      ar: "مباشر · وردبريس",
    },
    gallery: [
      {
        src: "/images/projects/bunyan/home.webp",
        alt: {
          en: "Bunyan Contracting homepage with the headline Built to outlast",
          ar: "الصفحة الرئيسية لـ Bunyan Contracting بعنوان Built to outlast",
        },
        caption: {
          en: "Home — an editorial hero with the studio's proof points in the first screen.",
          ar: "الرئيسية — هيرو تحريري وأرقام الاستوديو في أول شاشة.",
        },
      },
      {
        src: "/images/projects/bunyan/services.webp",
        alt: {
          en: "Bunyan services page listing residential, workplace, hospitality, and industrial work",
          ar: "صفحة خدمات Bunyan وفيها قطاعات السكني والمكاتب والضيافة والصناعي",
        },
        caption: {
          en: "Services — four sectors, one standard, each with its own detail section.",
          ar: "الخدمات — أربع قطاعات بمعيار واحد، وكل قطاع له تفاصيله.",
        },
      },
      {
        src: "/images/projects/bunyan/projects.webp",
        alt: {
          en: "Bunyan selected projects page with project counts by sector",
          ar: "صفحة مشاريع Bunyan المختارة وعدد المشاريع في كل قطاع",
        },
        caption: {
          en: "Selected work — project proof with sector counts and case-study links.",
          ar: "المشاريع — إثبات الشغل بعدد المشاريع لكل قطاع ولينكات دراسات الحالة.",
        },
      },
      {
        src: "/images/projects/bunyan/project-fold.webp",
        alt: {
          en: "The Fold project case study page with location, year, sector, status, and scope",
          ar: "دراسة مشروع The Fold وفيها الموقع والسنة والقطاع والحالة ونطاق العمل",
        },
        caption: {
          en: "The Fold — a case study with location, year, sector, status, and scope.",
          ar: "The Fold — دراسة مشروع بالموقع والسنة والقطاع والحالة ونطاق العمل.",
        },
      },
      {
        src: "/images/projects/bunyan/contact.webp",
        alt: {
          en: "Bunyan contact page with direct lines and a project enquiry form",
          ar: "صفحة تواصل Bunyan وفيها بيانات مباشرة ونموذج استفسار مشروع",
        },
        caption: {
          en: "Contact — direct lines and a project enquiry form in one place.",
          ar: "التواصل — خطوط مباشرة ونموذج استفسار مشروع في مكان واحد.",
        },
      },
      {
        src: "/images/projects/bunyan/about.webp",
        alt: {
          en: "Bunyan about page with the studio's rules and five-stage process",
          ar: "صفحة عن Bunyan وفيها قواعد الاستوديو ومراحله الخمس",
        },
        caption: {
          en: "About — the studio's rules, stages, and point of view.",
          ar: "عن الشركة — قواعد الاستوديو ومراحله ووجهة نظره.",
        },
      },
    ],
    copy: {
      en: {
        tagline: "A construction studio that looks as solid as it builds.",
        summary:
          "A complete corporate WordPress website for a Cairo construction studio: services, project proof, team, insights, and a working enquiry flow — built with Elementor and a clean SEO foundation.",
        overview:
          "Bunyan Contracting is a self-initiated corporate website for a fictional construction studio in New Cairo. The brief was simple: make a contractor look established, specific, and trustworthy — without the stock-photo corporate language that makes so many construction sites forgettable. The result is a seven-page WordPress site with six project case studies, a services structure, a team page, insights, and a contact flow that feels like a real studio.",
        challenge:
          "Corporate WordPress sites usually fail in one of two ways: a bought theme with the client's text poured in, or a page-builder experiment that the client can never edit safely. Bunyan had to avoid both. The design needed to feel custom and editorial, while every section had to stay editable by a non-technical team. The content also had to carry the credibility — numbers, process, project facts, named people — instead of decorative claims.",
        approach:
          "I started with the content model: services, sectors, project facts, team roles, and the questions a real client asks before hiring a contractor. Then I built a small design system in Elementor — a warm paper palette, one strong orange accent, large editorial type, rules instead of cards, and consistent fact tables. Every page is assembled from reusable sections, so the client can change copy, images, and project details without touching layout. Rank Math handles titles, descriptions, schema, and the sitemap; Fluent Forms powers the enquiry form; OMGF serves fonts locally.",
        features: [
          "Seven-page corporate structure: home, about, services, projects, team, insights, contact",
          "Six project case studies with location, year, sector, status, and scope",
          "Reusable Elementor sections the client can edit without breaking layout",
          "Service and sector pages built around how clients actually choose a contractor",
          "Working project enquiry form with Fluent Forms",
          "Rank Math SEO: per-page titles, descriptions, schema, and XML sitemap",
          "Locally hosted fonts via OMGF for speed and privacy",
          "Responsive layouts and a mobile navigation built into the design",
        ],
        technical: [
          "WordPress with Elementor",
          "Custom design system built from global colors, type, and reusable sections",
          "PHP and MySQL on shared hosting",
          "Rank Math SEO for metadata, schema, and sitemaps",
          "Fluent Forms for the project enquiry flow",
          "OMGF for local font delivery",
          "No custom plugin lock-in: the site stays editable in the WordPress admin",
        ],
        outcome:
          "Bunyan made the case for WordPress as a serious corporate tool, not a compromise. The hard part was not the page builder; it was the editorial structure — deciding what a contractor should prove, in what order, and with which numbers. That structure is portable: the same approach works for clinics, law firms, logistics companies, agencies, and any business that needs to look credible before the first call. I can take this pattern into a new corporate niche and rebuild the content model around it.",
        seoTitle: "Bunyan Contracting — Corporate WordPress Website",
        seoDescription:
          "A complete corporate WordPress website for a Cairo construction studio, built with Elementor, Rank Math SEO, and Fluent Forms. A case study by Mahmoud Elnagdy.",
      },
      ar: {
        tagline: "شركة مقاولات شكلها قد شغلها.",
        summary:
          "موقع Corporate كامل على وردبريس لشركة مقاولات في القاهرة: خدمات، ومشاريع موثقة، وفريق، ومقالات، ونموذج تواصل شغال — مبني بـ Elementor وأساس SEO نضيف.",
        overview:
          "Bunyan Contracting موقع Corporate عملته بنفسي لشركة مقاولات خيالية في القاهرة الجديدة. البريف كان بسيط: خلي المقاول يبان راسخ ومحدد وموثوق — من غير لغة الشركات الجاهزة والصور المخزنة اللي بتخلي معظم مواقع المقاولات متشابهة. النتيجة موقع وردبريس من سبع صفحات، فيه ست دراسات مشاريع، وهيكل خدمات، وصفحة فريق، ومقالات، ونموذج تواصل حاسس إنه استوديو حقيقي.",
        challenge:
          "مواقع الشركات على وردبريس عادةً بتفشل بطريقتين: ثيم مشترى والنص بتاع العميل اتصب فيه، أو تجربة page builder العميل عمره ما يقدر يعدلها بأمان. Bunyan كان لازم يتجنب الاتنين. التصميم لازم يحس إنه مخصص وتحريري، وفي نفس الوقت كل قسم يفضل قابل للتعديل لفريق مش تقني. والمحتوى نفسه لازم يشيل المصداقية — أرقام، وعملية، وحقائق مشاريع، وناس بأسمائها — بدل الادعاءات الديكورية.",
        approach:
          "بدأت بموديل المحتوى: الخدمات، والقطاعات، وحقائق المشاريع، وأدوار الفريق، والأسئلة اللي العميل الحقيقي بيسألها قبل ما يختار مقاول. بعدها بنيت design system صغير في Elementor — باليت ورقي دافي، لون برتقالي واحد قوي، تايبوجرافي تحريري كبير، خطوط بدل الكروت، وجداول حقائق ثابتة. كل صفحة بتتبني من أقسام قابلة لإعادة الاستخدام، فالعميل يقدر يغير النص والصور وتفاصيل المشاريع من غير ما يلمس التخطيط. Rank Math بيتعامل مع العناوين والأوصاف والـ schema والـ sitemap؛ وFluent Forms بيشغل نموذج التواصل؛ وOMGF بيقدم الخطوط محليًا.",
        features: [
          "هيكل Corporate من سبع صفحات: الرئيسية، عن الشركة، الخدمات، المشاريع، الفريق، المقالات، التواصل",
          "ست دراسات مشاريع بالموقع والسنة والقطاع والحالة ونطاق العمل",
          "أقسام Elementor قابلة لإعادة الاستخدام والعميل يقدر يعدلها من غير ما يكسر التخطيط",
          "صفحات خدمات وقطاعات مبنية على طريقة اختيار العميل للمقاول فعليًا",
          "نموذج استفسار مشروع شغال بـ Fluent Forms",
          "SEO بـ Rank Math: عناوين وأوصاف وschema وXML sitemap لكل صفحة",
          "خطوط محلية عبر OMGF للسرعة والخصوصية",
          "تخطيطات متجاوبة وملاحة موبايل جزء من التصميم",
        ],
        technical: [
          "وردبريس مع Elementor",
          "Design system مخصص من ألوان وخطوط وأقسام قابلة لإعادة الاستخدام",
          "PHP وMySQL على استضافة مشتركة",
          "Rank Math SEO للميتاداتا والـ schema والـ sitemaps",
          "Fluent Forms لنموذج استفسار المشروع",
          "OMGF لتقديم الخطوط محليًا",
          "من غير قفل على plugin مخصص: الموقع يفضل قابل للتعديل من لوحة وردبريس",
        ],
        outcome:
          "Bunyan أثبت إن وردبريس أداة Corporate جدية، مش حل وسط. الصعب ما كانش الـ page builder؛ الصعب كان الهيكل التحريري — تقرر المقاول يثبت إيه، وبأي ترتيب، وبأنهي أرقام. الهيكل ده قابل للنقل: نفس الطريقة تشتغل مع عيادات، ومكاتب محامين، وشركات لوجستيك، ووكالات، وأي بيزنس محتاج يبان موثوق قبل أول مكالمة. أقدر آخد النمط ده لأي قطاع وأعيد بناء موديل المحتوى حوله.",
        seoTitle: "Bunyan Contracting — موقع Corporate على وردبريس",
        seoDescription:
          "موقع Corporate كامل على وردبريس لشركة مقاولات في القاهرة، مبني بـ Elementor وRank Math SEO وFluent Forms. دراسة حالة من محمود النجدي.",
      },
    },
  },
  {
    slug: "wasla",
    index: "02",
    name: "Wasla",
    year: "2025",
    featured: true,
    category: "react-next",
    stack: [
      "React 19",
      "Tailwind CSS",
      "Node.js",
      "Express 5",
      "YouTube Data API",
      "Vercel",
    ],
    links: {
      repo: "https://github.com/nagdista-dev/wasla",
      live: "https://wasla-alpha.vercel.app",
    },
    cover: {
      bg: "#17332D",
      fg: "#F7F4EF",
      accent: "#FF4D00",
      motif: "playlist",
      domain: "wasla.nagdista.com",
    },
    status: {
      en: "Live alpha",
      ar: "نسخة تجريبية مباشرة",
    },
    gallery: [
      {
        src: "/images/projects/wasla/home.webp",
        alt: {
          en: "Wasla home feed with the latest videos from four Arabic and English channels",
          ar: "الرئيسية في وصلة وفيها أحدث فيديوهات أربع قنوات عربية وإنجليزية",
        },
        caption: {
          en: "Home — one feed for every channel, with categories and search within reach.",
          ar: "الرئيسية — فيد واحد لكل القنوات، والتصنيفات والبحث في متناول إيدك.",
        },
      },
      {
        src: "/images/projects/wasla/player.webp",
        alt: {
          en: "Wasla player page with the video, description, notes, and transcript tabs",
          ar: "صفحة المشاهدة في وصلة وفيها الفيديو والوصف والملاحظات والنص",
        },
        caption: {
          en: "Player — watch, read the description, and keep notes without leaving the page.",
          ar: "المشاهدة — اتفرج واقرأ الوصف وسجّل ملاحظاتك من غير ما تسيب الصفحة.",
        },
      },
      {
        src: "/images/projects/wasla/channels.webp",
        alt: {
          en: "Wasla channels page with channel cards, categories, and open actions",
          ar: "صفحة القنوات في وصلة وفيها كروت القنوات والتصنيفات وأزرار الفتح",
        },
        caption: {
          en: "Channels — every channel you follow, grouped and ready to open.",
          ar: "القنوات — كل القنوات اللي بتتابعها، مرتبة وجاهزة تفتحها.",
        },
      },
      {
        src: "/images/projects/wasla/how-to-use.webp",
        alt: {
          en: "Wasla Arabic how-to-use guide with a welcome panel and quick start sections",
          ar: "دليل الاستخدام في وصلة بالعربي، وفيه ترحيب وأقسام للبدء السريع",
        },
        caption: {
          en: "Guide — Arabic-first onboarding that explains the product on one screen.",
          ar: "الدليل — تعريف بالعربي يشرح المنتج في شاشة واحدة.",
        },
      },
    ],
    copy: {
      en: {
        tagline: "YouTube playlists, turned into structured courses.",
        summary:
          "A bilingual learning platform that imports channels and playlists, organizes them into courses, and remembers where you stopped.",
        overview:
          "Wasla is a video learning platform built around a simple idea: YouTube is full of great courses, but it is not built like a classroom. Wasla imports channels and playlists by ID, handle, or URL, then turns them into structured courses with progress tracking, categories, and search.",
        challenge:
          "The YouTube Data API gives you a lot of raw material but no course structure. The challenge was to model channels, playlists, and videos in a way that felt like a curriculum — without asking the user to organize everything by hand.",
        approach:
          "I built a React 19 front end with a Tailwind CSS interface that defaults to Arabic and switches cleanly to English. The Express API handles channel resolution and playlist imports; the UI groups videos into course-like units, stores progress locally, and lets you resume where you left off.",
        features: [
          "Import channels by ID, handle, or URL",
          "Turn playlists into structured courses",
          "Track progress and resume playback",
          "Filter and search by category, time range, and sort order",
          "Bilingual interface with Arabic as the default",
          "Responsive, progressive web app experience",
        ],
        technical: [
          "React 19 + Tailwind CSS front end",
          "Node.js + Express 5 API layer",
          "YouTube Data API for channel and playlist metadata",
          "Vercel deployment",
        ],
        outcome:
          "Wasla taught me how much product thinking lives inside a data model. The difference between a playlist and a course is not technical — it is a set of assumptions about how people learn. Building the bilingual UI also forced me to design the layout for both directions from the start.",
        seoTitle: "Wasla — Bilingual Learning Platform",
        seoDescription:
          "Wasla turns YouTube channels and playlists into structured, bilingual courses with progress tracking. A case study by Mahmoud Elnagdy.",
      },
      ar: {
        tagline: "قوائم تشغيل يوتيوب تتحول لكورسات منظمة.",
        summary:
          "منصة تعلم ثنائية اللغة بتستورد القنوات وقوائم التشغيل، بتنظمها في كورسات، وبتفتكر وقفت فين.",
        overview:
          "Wasla منصة تعلم فيديو مبنية على فكرة بسيطة: يوتيوب مليان كورسات حلوة، بس مش مبني زي فصل دراسي. Wasla بتستورد القنوات وقوائم التشغيل بالـ ID أو الـ handle أو اللينك، وبعدين تحولها لكورسات منظمة مع تتبع للتقدم وتصنيفات وبحث.",
        challenge:
          "YouTube Data API بيديك مواد خام كتير بس مفيش هيكل كورس. التحدي كان إني أعمل موديل للقنوات وقوائم التشغيل والفيديوهات يحس فيه المستخدم إنه منهج — من غير ما أطلب منه ينظم كل حاجة بإيده.",
        approach:
          "بنيت واجهة React 19 بـ Tailwind CSS بتفتح بالعربي افتراضيًا وبتتحول للإنجليزي بشكل نظيف. Express API بيتعامل مع القنوات واستيراد قوائم التشغيل؛ والواجهة بتجمع الفيديوهات في وحدات شبه الكورس، وبتخزن التقدم محليًا، وبتخليك تكمل من حيث وقفت.",
        features: [
          "استيراد القنوات بالـ ID أو الـ handle أو اللينك",
          "تحويل قوائم التشغيل لكورسات منظمة",
          "تتبع التقدم واستكمال التشغيل",
          "فلترة وبحث بالتصنيف والفترة الزمنية والترتيب",
          "واجهة ثنائية اللغة والعربي هو الافتراضي",
          "تجربة PWA متجاوبة",
        ],
        technical: [
          "واجهة React 19 + Tailwind CSS",
          "طبقة API بـ Node.js + Express 5",
          "YouTube Data API لبيانات القنوات وقوائم التشغيل",
          "النشر على Vercel",
        ],
        outcome:
          "Wasla علمتني قد إيه في تفكير منتج جوه موديل البيانات. الفرق بين قائمة تشغيل وكورس مش تقني — هو مجموعة افتراضات عن طريقة تعلم الناس. وبناء الواجهة الثنائية خلاني أصمم التخطيط للاتجاهين من البداية.",
        seoTitle: "Wasla — منصة تعلم يوتيوب ثنائية اللغة",
        seoDescription:
          "Wasla بتحول قنوات وقوائم تشغيل يوتيوب لكورسات منظمة ثنائية اللغة مع تتبع للتقدم. دراسة حالة من محمود النجدي.",
      },
    },
  },
  {
    slug: "localtube",
    index: "03",
    name: "LocalTube",
    year: "2025",
    featured: true,
    category: "react-next",
    stack: [
      "React 19",
      "TypeScript",
      "Express",
      "SQLite",
      "FFmpeg",
      "Vite",
    ],
    links: {
      repo: "https://github.com/nagdista-dev/tubely",
    },
    cover: {
      bg: "#1B1B1F",
      fg: "#F7F4EF",
      accent: "#FF4D00",
      motif: "video",
      domain: "LocalTube · self-hosted",
    },
    status: {
      en: "Open source · Self-hosted",
      ar: "مفتوح المصدر · استضافة ذاتية",
    },
    gallery: [
      {
        src: "/images/projects/localtube/home.webp",
        width: 1600,
        height: 1000,
        alt: {
          en: "LocalTube home screen with continue watching, categories, and recent videos",
          ar: "الرئيسية في LocalTube وفيها استكمال المشاهدة والتصنيفات وأحدث الفيديوهات",
        },
        caption: {
          en: "Home — continue watching, categories, and recent videos on one screen.",
          ar: "الرئيسية — استكمال المشاهدة والتصنيفات وأحدث الفيديوهات في شاشة واحدة.",
        },
      },
      {
        src: "/images/projects/localtube/course.webp",
        width: 1600,
        height: 1000,
        alt: {
          en: "LocalTube course page with lessons, progress, and study planning",
          ar: "صفحة الكورس في LocalTube وفيها الدروس والتقدم وتخطيط المذاكرة",
        },
        caption: {
          en: "Course mode — lessons, progress, and a plan that matches the way you study.",
          ar: "وضع الكورس — دروس وتقدم وخطة ماشية مع طريقة مذاكرتك.",
        },
      },
      {
        src: "/images/projects/localtube/player.webp",
        width: 1600,
        height: 1000,
        alt: {
          en: "LocalTube video player with playback controls, notes, and next videos",
          ar: "مشغل الفيديو في LocalTube وفيها أدوات التشغيل والملاحظات والفيديوهات الجاية",
        },
        caption: {
          en: "Player — local playback with the controls and context you expect.",
          ar: "المشغل — تشغيل محلي بكل الأدوات والسياق اللي متعوّد عليه.",
        },
      },
      {
        src: "/images/projects/localtube/stats.webp",
        width: 1600,
        height: 1000,
        alt: {
          en: "LocalTube statistics screen with watch time and study totals",
          ar: "شاشة الإحصائيات في LocalTube وفيها وقت المشاهدة وإجمالي المذاكرة",
        },
        caption: {
          en: "Statistics — watch time and study totals, kept on your machine.",
          ar: "الإحصائيات — وقت المشاهدة وإجمالي المذاكرة، محفوظين على جهازك.",
        },
      },
    ],
    copy: {
      en: {
        tagline: "Your own video library. No algorithm.",
        summary:
          "A self-hosted video library with YouTube-style browsing, course progress, and a Pomodoro timer — all running on your machine.",
        overview:
          "LocalTube is a self-hosted video library for the videos already on your computer. It scans local folders, extracts metadata and thumbnails with FFmpeg, and serves a YouTube-style browsing and player experience — without uploading anything.",
        challenge:
          "Local video collections are usually a folder tree and a generic player. The challenge was to make them feel browsable and study-friendly: categories, continue watching, course progress, search, and a timer that fits actual study sessions.",
        approach:
          "The app pairs a React 19 + TypeScript front end with an Express + TypeScript backend. SQLite stores watch history, favorites, course progress, and Pomodoro tasks. FFmpeg generates thumbnails; HTTP range requests handle playback. Optional yt-dlp and YouTube API integrations add downloads and metadata without becoming required dependencies.",
        features: [
          "Scan local folders and extract video metadata",
          "YouTube-style browsing and player experience",
          "Nested categories, courses, favorites, and watch history",
          "Continue watching, search, sorting, and progress tracking",
          "Course mode with study planning and statistics",
          "Pomodoro timer with saved settings and tasks",
          "Optional yt-dlp downloads and YouTube metadata",
          "English and Arabic UI",
        ],
        technical: [
          "React 19 + TypeScript + Vite front end",
          "Express + TypeScript backend",
          "SQLite with better-sqlite3",
          "FFmpeg thumbnails and HTTP range streaming",
        ],
        outcome:
          "LocalTube was my deepest lesson in local-first architecture. Every feature had to work without a cloud account, which made file handling, SQLite migrations, and streaming decisions much more explicit. It also taught me to design optional integrations: yt-dlp and the YouTube API are useful, but the app must work without them.",
        seoTitle: "LocalTube — Self-Hosted Video Library",
        seoDescription:
          "LocalTube by Mahmoud Elnagdy: a self-hosted video library with YouTube-style browsing, SQLite progress tracking, FFmpeg thumbnails, and a Pomodoro timer.",
      },
      ar: {
        tagline: "مكتبة الفيديو بتاعتك. من غير خوارزمية.",
        summary:
          "مكتبة فيديو self-hosted بتجربة تصفح زي يوتيوب، وتقدم للكورسات، ومؤقت بومودورو — كلها شغالة على جهازك.",
        overview:
          "LocalTube مكتبة فيديو self-hosted للفيديوهات اللي عندك على الكمبيوتر. بتفحص الفولدرات المحلية، وبتستخرج البيانات والصور المصغرة بـ FFmpeg، وبتقدم تجربة تصفح ومشغل زي يوتيوب — من غير ما ترفع أي حاجة.",
        challenge:
          "مكتبات الفيديو المحلية عادةً شجرة فولدرات ومشغل عادي. التحدي كان إني أخليها قابلة للتصفح ومناسبة للدراسة: تصنيفات، واستكمال المشاهدة، وتقدم الكورسات، وبحث، ومؤقت يناسب جلسات المذاكرة الحقيقية.",
        approach:
          "التطبيق بيجمع واجهة React 19 + TypeScript مع باك إند Express + TypeScript. SQLite بيخزن سجل المشاهدة والمفضلة وتقدم الكورسات ومهام البومودورو. FFmpeg بيولد الصور المصغرة؛ وHTTP range requests بتتعامل مع التشغيل. تكامل yt-dlp وYouTube API اختياري، بيضيف تحميل وبيانات من غير ما يبقوا متطلبات أساسية.",
        features: [
          "فحص الفولدرات المحلية واستخراج بيانات الفيديو",
          "تصفح ومشغل بتجربة شبه يوتيوب",
          "تصنيفات متداخلة وكورسات ومفضلة وسجل مشاهدة",
          "استكمال المشاهدة وبحث وترتيب وتتبع تقدم",
          "وضع الكورس مع تخطيط دراسة وإحصائيات",
          "مؤقت بومودورو بإعدادات ومهام محفوظة",
          "تحميل اختياري بـ yt-dlp وبيانات يوتيوب",
          "واجهة إنجليزي وعربي",
        ],
        technical: [
          "واجهة React 19 + TypeScript + Vite",
          "باك إند Express + TypeScript",
          "SQLite مع better-sqlite3",
          "صور مصغرة بـ FFmpeg وبث HTTP range",
        ],
        outcome:
          "LocalTube كان أعمق درس ليّا في المعمارية المحلية. كل ميزة كان لازم تشتغل من غير حساب سحابي، وده خلّى التعامل مع الملفات وترقيات SQLite وقرارات البث أوضح بكتير. كمان علمني أصمم تكاملات اختيارية: yt-dlp وYouTube API مفيدين، بس التطبيق لازم يشتغل من غيرهم.",
        seoTitle: "LocalTube — مكتبة فيديو self-hosted",
        seoDescription:
          "LocalTube مكتبة فيديو self-hosted بتصفح زي يوتيوب، وتتبع تقدم بـ SQLite، وصور مصغرة بـ FFmpeg، ومؤقت بومودورو. دراسة حالة من محمود النجدي.",
      },
    },
  },
  {
    slug: "hassala",
    index: "04",
    name: "Hassala",
    year: "2025–2026",
    featured: true,
    category: "browser-extensions",
    stack: [
      "Manifest V3",
      "JavaScript",
      "HTML",
      "chrome.storage",
      "Markdown",
    ],
    links: {
      repo: "https://github.com/nagdista-dev/hassala",
      live: "https://hassala.nagdista.com/",
    },
    cover: {
      bg: "#E8DFC8",
      fg: "#17211F",
      accent: "#0F766E",
      motif: "wordbank",
      domain: "hassala.nagdista.com",
    },
    status: {
      en: "Live · Open source",
      ar: "مباشر · مفتوح المصدر",
    },
    gallery: [
      {
        src: "/images/projects/hassala/wordbank.webp",
        alt: {
          en: "Hassala word bank with saved words, translations, and folders",
          ar: "بنك الكلمات في Hassala وفيه الكلمات المحفوظة والترجمات والفولدرات",
        },
        caption: {
          en: "Word bank — every saved word, its translation, and the folder it belongs to.",
          ar: "بنك الكلمات — كل كلمة حفظتها وترجمتها والفولدر اللي فيه.",
        },
      },
      {
        src: "/images/projects/hassala/popup.webp",
        width: 420,
        height: 334,
        alt: {
          en: "Hassala extension popup translating resilient to Arabic with save options",
          ar: "بوب أب إكستنشن Hassala بيترجم resilient للعربي ومعاه اختيارات الحفظ",
        },
        caption: {
          en: "Popup — translate, listen, and save without leaving the page.",
          ar: "البوب أب — ترجم واسمع واحفظ من غير ما تسيب الصفحة.",
        },
      },
      {
        src: "/images/projects/hassala/site.webp",
        alt: {
          en: "Hassala marketing site with the headline Arabic to English, every word kept",
          ar: "موقع Hassala التسويقي وعنوانه Arabic to English, every word kept",
        },
        caption: {
          en: "Site — bilingual documentation and a clear download path.",
          ar: "الموقع — توثيق ثنائي اللغة وطريق تحميل واضح.",
        },
      },
    ],
    copy: {
      en: {
        tagline: "Every word you translate, kept.",
        summary:
          "A free Chrome extension that translates Arabic ↔ English and saves the words you care about in a private, local word bank.",
        overview:
          "Hassala is a browser extension for Arabic ↔ English learners. Translate a word by typing, selecting it on a page, or clicking it in a YouTube subtitle — then save it to a private word bank stored inside the extension.",
        challenge:
          "Most translators are disposable: you get a translation, close the tab, and lose it. Hassala needed to make saving frictionless while keeping the data local, exportable, and useful for review. It also had to handle Arabic and English direction changes without making the interface feel like two different products.",
        approach:
          "I built the extension on Manifest V3 with a local-first storage model in chrome.storage.local. Translation starts automatically after typing stops, selection translation uses a lightweight in-page panel, and YouTube subtitles become interactive word-by-word. The word bank supports folders and exports to Markdown, plain text, CSV, and JSON. The UI is English-first with full Arabic and RTL support, and the companion site includes bilingual guides.",
        features: [
          "Arabic ↔ English translation with automatic direction",
          "Selection translation on any page",
          "Interactive YouTube subtitles",
          "Private local word bank with folders",
          "Export to Markdown, TXT, CSV, and JSON",
          "No account, tracking, or analytics",
          "English-first UI with full Arabic and RTL support",
        ],
        technical: [
          "Manifest V3 extension for Chrome, Brave, Edge, and Chromium",
          "chrome.storage.local for private on-device data",
          "Content scripts for selection and YouTube subtitle interactions",
          "Static documentation site with bilingual guides",
        ],
        outcome:
          "Hassala taught me how much product quality lives in constraints. No account, no server, no tracking — every feature had to earn its place in local storage and in the browser's permission model. The bilingual documentation also made me think about SEO and onboarding as part of the product, not as an afterthought.",
        seoTitle: "Hassala — Arabic ↔ English Word Bank",
        seoDescription:
          "Hassala is a free, open-source Chrome extension that translates Arabic ↔ English and saves words to a private local word bank. A case study by Mahmoud Elnagdy.",
      },
      ar: {
        tagline: "كل كلمة بتترجمها، محفوظة.",
        summary:
          "إكستنشن Chrome مجاني بيترجم عربي ↔ إنجليزي وبيحفظ الكلمات اللي تهمك في بنك كلمات محلي وخاص.",
        overview:
          "Hassala إكستنشن متصفح لمتعلمي العربي ↔ الإنجليزي. ترجم كلمة بالكتابة، أو بتحديدها في أي صفحة، أو بالضغط عليها في ترجمة يوتيوب — وبعدين احفظها في بنك كلمات خاص جوه الإكستنشن.",
        challenge:
          "أغلب المترجمات مؤقتة: بتاخد الترجمة، تقفل التاب، وتضيع. Hassala كان لازم يخلي الحفظ سهل من غير تعقيد، وفي نفس الوقت يخلي البيانات محلية وقابلة للتصدير ومفيدة للمراجعة. وكان لازم يتعامل مع تغيير اتجاه العربي والإنجليزي من غير ما الواجهة تحس إنها منتجين مختلفين.",
        approach:
          "بنيت الإكستنشن على Manifest V3 بموديل تخزين محلي في chrome.storage.local. الترجمة بتبدأ أوتوماتيك بعد ما توقف كتابة، وترجمة التحديد بتستخدم بانل خفيف في الصفحة، وترجمة يوتيوب بقت تفاعلية كلمة بكلمة. بنك الكلمات بيدعم فولدرات وتصدير لـ Markdown وTXT وCSV وJSON. الواجهة إنجليزي أولًا مع دعم كامل للعربي وRTL، والموقع المصاحب فيه أدلة ثنائية اللغة.",
        features: [
          "ترجمة عربي ↔ إنجليزي باتجاه أوتوماتيك",
          "ترجمة التحديد في أي صفحة",
          "ترجمة يوتيوب تفاعلية",
          "بنك كلمات محلي وخاص مع فولدرات",
          "تصدير Markdown وTXT وCSV وJSON",
          "من غير حساب أو تتبع أو تحليلات",
          "واجهة إنجليزي أولًا مع دعم عربي وRTL كامل",
        ],
        technical: [
          "إكستنشن Manifest V3 لـ Chrome وBrave وEdge وChromium",
          "chrome.storage.local لبيانات خاصة على الجهاز",
          "Content scripts لترجمة التحديد وتفاعل ترجمة يوتيوب",
          "موقع توثيق ثابت بأدلة ثنائية اللغة",
        ],
        outcome:
          "Hassala علمتني قد إيه جودة المنتج بتعيش جوه القيود. مفيش حساب، مفيش سيرفر، مفيش تتبع — كل ميزة كان لازم تستحق مكانها في التخزين المحلي وفي موديل صلاحيات المتصفح. التوثيق الثنائي كمان خلاني أفكر في SEO والـ onboarding كجزء من المنتج مش حاجة تتضاف في الآخر.",
        seoTitle: "Hassala — إكستنشن بنك كلمات عربي ↔ إنجليزي",
        seoDescription:
          "Hassala إكستنشن Chrome مجاني ومفتوح المصدر بيترجم عربي ↔ إنجليزي وبيحفظ الكلمات في بنك كلمات محلي خاص. دراسة حالة من محمود النجدي.",
      },
    },
  },
  {
    slug: "tarteeb",
    index: "05",
    name: "Tarteeb",
    year: "2025",
    featured: true,
    category: "react-next",
    stack: ["React 19", "Tailwind CSS 4", "Netlify", "PWA"],
    links: {
      repo: "https://github.com/nagdista-dev/tarteeb",
    },
    cover: {
      bg: "#20324A",
      fg: "#F7F4EF",
      accent: "#FF4D00",
      motif: "schedule",
      domain: "Tarteeb · prayer-aware planner",
    },
    status: {
      en: "Live · Works offline",
      ar: "مباشر · بيشتغل أوفلاين",
    },
    gallery: [
      {
        src: "/images/projects/tarteeb/tasks.webp",
        alt: {
          en: "Tarteeb tasks page with the day progress and prayer-based task list",
          ar: "صفحة المهام في ترتيب وفيها تقدم اليوم وقائمة المهام حسب أوقات الصلاة",
        },
        caption: {
          en: "Tasks — the day's work, ordered around prayer times and progress.",
          ar: "المهام — شغل اليوم مرتب حول أوقات الصلاة ومعاه نسبة الإنجاز.",
        },
      },
      {
        src: "/images/projects/tarteeb/stats.webp",
        alt: {
          en: "Tarteeb statistics with task completion, prayer status, and habit rings",
          ar: "إحصائيات ترتيب وفيها إنجاز المهام وحالة الصلاة وحلقات العادات",
        },
        caption: {
          en: "Statistics — task, prayer, and habit progress in one honest view.",
          ar: "الإحصائيات — تقدم المهام والصلاة والعادات في نظرة واحدة صادقة.",
        },
      },
      {
        src: "/images/projects/tarteeb/settings.webp",
        alt: {
          en: "Tarteeb settings for day start, font size, theme, and time format",
          ar: "إعدادات ترتيب لبداية اليوم وحجم الخط والسمة وتنسيق الوقت",
        },
        caption: {
          en: "Settings — day start, theme, type scale, and time format, all in reach.",
          ar: "الإعدادات — بداية اليوم والسمة وحجم الخط وتنسيق الوقت، كله في متناول إيدك.",
        },
      },
    ],
    copy: {
      en: {
        tagline: "A day planned around prayer, not around noise.",
        summary:
          "A minimal daily planner that structures your schedule around prayer times and works offline.",
        overview:
          "Tarteeb is a daily planner built around a simple constraint: the day already has a rhythm. Instead of starting with an empty calendar, it generates a schedule around prayer times, then lets you shape the rest.",
        challenge:
          "Most planners assume the user will build structure from scratch. Tarteeb had to provide a useful default without being rigid — and it had to work offline, because the moments when you need a plan are not always moments when you have a connection.",
        approach:
          "I built a React 19 interface with Tailwind CSS 4, kept the visual language quiet, and generated the daily schedule from prayer times. The app is responsive, installable, and functional offline. The goal was a tool that feels calm enough to open every day.",
        features: [
          "Prayer-time-aware daily planning",
          "Automatic schedule generation",
          "Clean, minimal interface",
          "Responsive on mobile and desktop",
          "Works offline",
        ],
        technical: [
          "React 19 + Tailwind CSS 4",
          "Client-side schedule generation",
          "Offline-ready PWA behavior",
          "Deployed on Netlify",
        ],
        outcome:
          "Tarteeb was a lesson in restraint. The hardest part was not adding features — it was deciding which ones would break the calm. It also reinforced how much a single default can do for a daily tool: if the first screen is useful, people come back.",
        seoTitle: "Tarteeb — Prayer-Aware Daily Planner",
        seoDescription:
          "Tarteeb is a minimal daily planner that structures your day around prayer times, works offline, and stays calm. A case study by Mahmoud Elnagdy.",
      },
      ar: {
        tagline: "يوم مرتب حول الصلاة، مش حول الضوضاء.",
        summary:
          "منظم يومي بسيط بيبني جدولك حول مواعيد الصلاة وبيشتغل أوفلاين.",
        overview:
          "Tarteeb منظم يومي مبني على قيد بسيط: اليوم أصلًا له إيقاع. بدل ما تبدأ بتقويم فاضي، التطبيق بيولّد جدول حول مواعيد الصلاة، وبعدها بتشكّل الباقي.",
        challenge:
          "أغلب المنظمات بتفترض إن المستخدم هيبني الهيكل من الصفر. Tarteeb كان لازم يبدأ بـافتراضي مفيد من غير ما يبقى جامد — وكان لازم يشتغل أوفلاين، لأن اللحظات اللي محتاج فيها خطة مش دايمًا فيها نت.",
        approach:
          "بنيت واجهة React 19 بـ Tailwind CSS 4، وخليت اللغة البصرية هادية، وولّدت الجدول اليومي من مواعيد الصلاة. التطبيق متجاوب وقابل للتثبيت وبيشتغل أوفلاين. الهدف كان أداة هادية كفاية إنك تفتحها كل يوم.",
        features: [
          "تخطيط يومي واعي بمواعيد الصلاة",
          "توليد جدول أوتوماتيك",
          "واجهة نظيفة وبسيطة",
          "متجاوب على الموبايل والديسكتوب",
          "بيشتغل أوفلاين",
        ],
        technical: [
          "React 19 + Tailwind CSS 4",
          "توليد الجدول على العميل",
          "سلوك PWA جاهز للأوفلاين",
          "النشر على Netlify",
        ],
        outcome:
          "Tarteeb كان درس في ضبط النفس. أصعب حاجة ما كانتش إضافة ميزات — كانت إني أقرر أنهي ميزات هتكسر الهدوء. كمان أكدت لي قد إيه افتراضي واحد ممكن يعمل فرق في أداة يومية: لو أول شاشة مفيدة، الناس بترجع.",
        seoTitle: "Tarteeb — منظم يومي حول مواعيد الصلاة",
        seoDescription:
          "Tarteeb منظم يومي بسيط بيبني يومك حول مواعيد الصلاة، وبيشتغل أوفلاين، وبيحافظ على الهدوء. دراسة حالة من محمود النجدي.",
      },
    },
  },
  {
    slug: "yost",
    index: "06",
    name: "Yost",
    year: "2025",
    featured: true,
    category: "react-next",
    stack: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "Express",
      "Puppeteer",
    ],
    links: {
      repo: "https://github.com/nagdista-dev/yost",
    },
    cover: {
      bg: "#2A1E3A",
      fg: "#F7F4EF",
      accent: "#FF4D00",
      motif: "feed",
      domain: "Yost · local feed",
    },
    status: {
      en: "Live preview · Local-first",
      ar: "معاينة مباشرة · محلي أولًا",
    },
    gallery: [
      {
        src: "/images/projects/yost/feed.webp",
        width: 960,
        height: 720,
        alt: {
          en: "Yost community feed showing posts from a YouTube channel in a clean list",
          ar: "فيد بوستات مجتمع يوتيوب في Yost، وفيه بوستات قناة في قائمة نظيفة",
        },
        caption: {
          en: "Feed — community posts from your channels, without videos or recommendations.",
          ar: "الفيد — بوستات مجتمع قنواتك، من غير فيديوهات ولا توصيات.",
        },
      },
    ],
    copy: {
      en: {
        tagline: "No videos. No algorithm. Just posts.",
        summary:
          "A local dashboard that pulls YouTube community posts from your favorite channels into one clean feed.",
        overview:
          "Yost is a local-first dashboard for YouTube community posts. It collects posts from multiple channels into a single feed, with search and filters, so you can follow what creators are saying without the video feed or the recommendation engine.",
        challenge:
          "Community posts are not exposed through a simple public API in the way videos are. Yost needed a scraping layer robust enough to collect posts from multiple channels, plus a front end that made the results feel like a feed rather than a data dump.",
        approach:
          "A React 19 + Vite front end talks to an Express backend that uses Puppeteer with a stealth plugin to collect posts. The app is designed to run on your machine, keeping the data local. The interface focuses on reading: a unified feed, search, and filters, with no video player and no algorithmic ranking.",
        features: [
          "Collect community posts from multiple channels",
          "Unified, chronological feed",
          "Search and filter posts",
          "Local-first design",
          "No videos, no recommendations",
        ],
        technical: [
          "React 19 + Vite + Tailwind CSS front end",
          "Node.js + Express backend",
          "Puppeteer with stealth plugin for scraping",
          "Local-first data flow",
        ],
        outcome:
          "Yost taught me to respect the boundary between a demo and a tool. Scraping is fragile, so the backend has to fail gracefully and the UI has to stay honest about what it can load. It also made me think harder about local-first software: the value is not just privacy, it is ownership.",
        seoTitle: "Yost — YouTube Community Posts Dashboard",
        seoDescription:
          "Yost is a local-first dashboard that collects YouTube community posts into one clean, searchable feed. A case study by Mahmoud Elnagdy.",
      },
      ar: {
        tagline: "مفيش فيديوهات. مفيش خوارزمية. بوستات بس.",
        summary:
          "داشبورد محلي بيجمع بوستات مجتمع يوتيوب من القنوات اللي بتحبها في فيد واحد نظيف.",
        overview:
          "Yost داشبورد محلي أولًا لبوستات مجتمع يوتيوب. بيجمع البوستات من أكتر من قناة في فيد واحد، مع بحث وفلاتر، عشان تتابع اللي صنّاع المحتوى بيقولوه من غير فيد الفيديو أو محرك التوصيات.",
        challenge:
          "بوستات المجتمع مش متاحة من خلال API عام بسيط زي الفيديوهات. Yost كان محتاج طبقة scraping قوية كفاية تجمع البوستات من أكتر من قناة، وواجهة تخلي النتايج تحس إنها فيد مش دفعة بيانات.",
        approach:
          "واجهة React 19 + Vite بتتكلم مع باك إند Express بيستخدم Puppeteer مع stealth plugin لجمع البوستات. التطبيق مصمم يشتغل على جهازك، وبيحافظ على البيانات محلية. الواجهة بتركز على القراءة: فيد موحد وبحث وفلاتر، من غير مشغل فيديو ومن غير ترتيب خوارزمي.",
        features: [
          "جمع بوستات المجتمع من أكتر من قناة",
          "فيد موحد ومرتب زمنيًا",
          "بحث وفلترة البوستات",
          "تصميم محلي أولًا",
          "مفيش فيديوهات ولا توصيات",
        ],
        technical: [
          "واجهة React 19 + Vite + Tailwind CSS",
          "باك إند Node.js + Express",
          "Puppeteer مع stealth plugin للـ scraping",
          "تدفق بيانات محلي أولًا",
        ],
        outcome:
          "Yost علمني أحترم الحدود بين الديمو والأداة. الـ scraping هش، فالباك إند لازم يفشل بلطف والواجهة تفضل صادقة في اللي تقدر تحمله. كمان خلاني أفكر أعمق في السوفتوير المحلي: القيمة مش بس خصوصية، دي ملكية.",
        seoTitle: "Yost — داشبورد بوستات مجتمع يوتيوب",
        seoDescription:
          "Yost داشبورد محلي بيجمع بوستات مجتمع يوتيوب في فيد واحد نظيف وقابل للبحث. دراسة حالة من محمود النجدي.",
      },
    },
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((project) => project.featured);

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getNextProject(slug: string): Project {
  const index = PROJECTS.findIndex((project) => project.slug === slug);
  return PROJECTS[(index + 1) % PROJECTS.length];
}
