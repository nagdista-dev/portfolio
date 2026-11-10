import type { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    slug: "wasla",
    index: "01",
    name: "Wasla",
    year: "2025",
    featured: true,
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
    },
    status: {
      en: "Live alpha",
      ar: "نسخة تجريبية مباشرة",
    },
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
    index: "02",
    name: "LocalTube",
    year: "2025",
    featured: true,
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
    },
    status: {
      en: "Open source · Self-hosted",
      ar: "مفتوح المصدر · استضافة ذاتية",
    },
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
    index: "03",
    name: "Hassala",
    year: "2025–2026",
    featured: true,
    stack: [
      "Manifest V3",
      "JavaScript",
      "HTML",
      "chrome.storage",
      "Markdown",
    ],
    links: {
      repo: "https://github.com/nagdista-dev/hassala",
      live: "https://nagdista-dev.github.io/hassala/",
    },
    cover: {
      bg: "#E8DFC8",
      fg: "#17211F",
      accent: "#0F766E",
      motif: "wordbank",
    },
    status: {
      en: "Live · Open source",
      ar: "مباشر · مفتوح المصدر",
    },
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
    index: "04",
    name: "Tarteeb",
    year: "2025",
    featured: true,
    stack: ["React 19", "Tailwind CSS 4", "Netlify", "PWA"],
    links: {
      repo: "https://github.com/nagdista-dev/tarteeb",
    },
    cover: {
      bg: "#20324A",
      fg: "#F7F4EF",
      accent: "#FF4D00",
      motif: "schedule",
    },
    status: {
      en: "Live · Works offline",
      ar: "مباشر · يعمل أوفلاين",
    },
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
          "أغلب المنظمات بتفترض إن المستخدم هيبني الهيكل من الصفر. Tarteeb كان لازم يقدم افتراضي مفيد من غير ما يبقى جامد — وكان لازم يشتغل أوفلاين، لأن اللحظات اللي محتاج فيها خطة مش دايمًا فيها نت.",
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
    index: "05",
    name: "Yost",
    year: "2025",
    featured: true,
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
    },
    status: {
      en: "Live preview · Local-first",
      ar: "معاينة مباشرة · محلي أولًا",
    },
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
