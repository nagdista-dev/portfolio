import type { Locale } from "./types";

export type WordPressPageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  heroNote: string;
  primaryCta: string;
  secondaryCta: string;
  workLabel: string;
  workTitle: string;
  workIntro: string;
  servicesLabel: string;
  servicesTitle: string;
  servicesIntro: string;
  services: { title: string; text: string }[];
  whyLabel: string;
  whyTitle: string;
  whyIntro: string;
  why: { title: string; text: string }[];
  processLabel: string;
  processTitle: string;
  processIntro: string;
  process: { step: string; title: string; text: string }[];
  stackTitle: string;
  stack: string[];
  faqLabel: string;
  faqTitle: string;
  faq: { question: string; answer: string }[];
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
  ctaSecondary: string;
};

export const WORDPRESS_PAGE: Record<Locale, WordPressPageContent> = {
  en: {
    eyebrow: "WordPress",
    title: "Corporate WordPress websites that look custom — and stay editable.",
    intro:
      "I build WordPress sites for companies that need to look credible, explain what they do, and let their own team update the site without calling a developer every week.",
    heroNote:
      "Based in Cairo. Working with clients across Egypt, the Gulf, and remotely.",
    primaryCta: "Start a WordPress project",
    secondaryCta: "See the Bunyan case study",
    workLabel: "Selected WordPress work",
    workTitle: "A corporate site built end to end.",
    workIntro:
      "Bunyan Contracting is a complete corporate build: seven pages, six project case studies, a services structure, team, insights, and an enquiry flow. It shows how I approach any business that needs a website with a point of view.",
    servicesLabel: "What I build",
    servicesTitle: "The pages a company actually needs.",
    servicesIntro:
      "Not a theme with text poured in. A structure built around how your customers decide.",
    services: [
      {
        title: "Corporate websites",
        text: "Home, about, services, projects, team, insights, and contact — written and structured so a first-time visitor understands the business quickly.",
      },
      {
        title: "Service & sector pages",
        text: "One page per service or sector, with the questions, proof, and next step a buyer needs before they make contact.",
      },
      {
        title: "Project & case-study pages",
        text: "Structured project pages with facts, scope, images, and outcomes — not a gallery with no context.",
      },
      {
        title: "Arabic & English",
        text: "Bilingual layouts, RTL typography, and content models that work in both directions from the start, not as an afterthought.",
      },
      {
        title: "SEO foundations",
        text: "Clean titles, descriptions, headings, internal links, schema, sitemaps, and redirects. Built to be indexed, not just published.",
      },
      {
        title: "Speed, care & handover",
        text: "Local fonts, compressed images, caching, updates, backups, and a handover your team can actually use. WooCommerce and migrations when needed.",
      },
    ],
    whyLabel: "Why WordPress",
    whyTitle: "A CMS your team can own.",
    whyIntro:
      "WordPress is not the compromise people make it sound like. It is a mature platform that becomes a serious corporate tool when the structure and the design system are done properly.",
    why: [
      {
        title: "You own the site",
        text: "No proprietary platform and no lock-in. Your content, your domain, your hosting, and a codebase you can move whenever you want.",
      },
      {
        title: "Your team can edit",
        text: "A clear admin experience, reusable sections, and a short handover video. Changing a paragraph should not require a developer.",
      },
      {
        title: "The ecosystem is mature",
        text: "Forms, SEO, caching, backups, and commerce are solved problems — when they are configured with care instead of stacked as plugins.",
      },
      {
        title: "It can still feel custom",
        text: "A restrained design system and a disciplined layout beat a premium theme with no structure. The browser does not know it is WordPress.",
      },
    ],
    processLabel: "The process",
    processTitle: "From brief to handover, without the fog.",
    processIntro:
      "A clear sequence, a written scope, and a site you can run after launch.",
    process: [
      {
        step: "01",
        title: "Brief & structure",
        text: "We agree on the pages, the audience, and the one action every page should drive. I map the site before designing a single section.",
      },
      {
        step: "02",
        title: "Content model",
        text: "Services, projects, team, FAQs, and the proof that makes the business credible. The writing and the structure move together.",
      },
      {
        step: "03",
        title: "Design system",
        text: "Type, colour, spacing, components, and reusable sections in Elementor or Gutenberg — built to stay consistent as the site grows.",
      },
      {
        step: "04",
        title: "Build & QA",
        text: "Responsive pages, forms, menus, redirects, and a staging check. Cross-browser, accessibility, and performance checks before launch.",
      },
      {
        step: "05",
        title: "SEO & handover",
        text: "Titles, descriptions, schema, sitemap, and internal links. Then admin training, a short guide, and support so the site does not stall.",
      },
    ],
    stackTitle: "Tools I use",
    stack: [
      "WordPress",
      "Elementor",
      "Gutenberg",
      "WooCommerce",
      "PHP",
      "MySQL",
      "Rank Math SEO",
      "Fluent Forms",
      "Cloudflare",
      "Git",
    ],
    faqLabel: "FAQ",
    faqTitle: "Questions clients ask before starting.",
    faq: [
      {
        question: "How long does a corporate WordPress site take?",
        answer:
          "A focused 5–7 page site usually takes 2–4 weeks once the content and brand assets are ready. Larger structures, bilingual content, or WooCommerce take longer. I give a timeline after the brief.",
      },
      {
        question: "How much does it cost?",
        answer:
          "Pricing depends on the number of pages, whether the content needs writing, and whether there is a shop or migration. Tell me the scope and I will send a clear quote — no hourly surprises.",
      },
      {
        question: "Can I edit the site myself?",
        answer:
          "Yes. I build with reusable sections and hand over a short guide and a walkthrough. You can change text, images, projects, and most page content from the WordPress admin.",
      },
      {
        question: "Do you work in Arabic and English?",
        answer:
          "Yes. I design and build both directions, including RTL typography and bilingual navigation. I can also structure the content so both versions stay in sync.",
      },
      {
        question: "Can you migrate or fix an existing site?",
        answer:
          "Yes. I can move a site to new hosting, rebuild a broken page, fix SEO issues, or rescue a page-builder mess while keeping the content and URLs.",
      },
      {
        question: "Do you offer maintenance?",
        answer:
          "Yes — updates, backups, security checks, and small content changes on a monthly retainer, or a one-off support block if you prefer.",
      },
      {
        question: "Will the site rank on Google?",
        answer:
          "I build the technical and on-page foundation: clean structure, metadata, schema, speed, and internal links. Ranking also depends on content, competition, and ongoing work; I will tell you honestly what the site can and cannot promise.",
      },
    ],
    ctaTitle: "Tell me what your company does. I'll tell you what the site needs.",
    ctaBody:
      "Send the pages you have in mind, the competitors you like, and the one thing the current site gets wrong. I will reply with a clear scope and a realistic timeline.",
    ctaButton: "Start a conversation",
    ctaSecondary: "See all projects",
  },
  ar: {
    eyebrow: "وردبريس",
    title: "مواقع Corporate على وردبريس بشكل مخصص — ولسه قابلة للتعديل.",
    intro:
      "ببني مواقع وردبريس لشركات محتاجة تبان موثوقة، وتشرح شغلها بوضوح، وتقدر تعدل الموقع بنفسها من غير ما تنده مطور كل أسبوع.",
    heroNote: "من القاهرة. بشتغل مع عملاء في مصر والخليج وعن بُعد.",
    primaryCta: "ابدأ مشروع وردبريس",
    secondaryCta: "شوف دراسة حالة Bunyan",
    workLabel: "شغل وردبريس مختار",
    workTitle: "موقع Corporate مبني من الألف للياء.",
    workIntro:
      "Bunyan Contracting بناء Corporate كامل: سبع صفحات، وست دراسات مشاريع، وهيكل خدمات، وفريق، ومقالات، ونموذج تواصل. بيوضح طريقة تعاملي مع أي بيزنس محتاج موقع له وجهة نظر.",
    servicesLabel: "ببني إيه",
    servicesTitle: "الصفحات اللي الشركة محتاجاها فعلًا.",
    servicesIntro:
      "مش ثيم ونص اتصب فيه. هيكل مبني على طريقة اتخاذ عميلك للقرار.",
    services: [
      {
        title: "مواقع الشركات",
        text: "الرئيسية، عن الشركة، الخدمات، المشاريع، الفريق، المقالات، والتواصل — مكتوبة ومهيكلة بحيث الزائر يفهم البيزنس بسرعة.",
      },
      {
        title: "صفحات الخدمات والقطاعات",
        text: "صفحة لكل خدمة أو قطاع، فيها الأسئلة والإثبات والخطوة الجاية اللي العميل محتاجها قبل ما يتواصل.",
      },
      {
        title: "صفحات المشاريع ودراسات الحالة",
        text: "صفحات مشاريع مهيكلة بحقائق ونطاق وصور ونتائج — مش جاليري من غير سياق.",
      },
      {
        title: "عربي وإنجليزي",
        text: "تخطيطات ثنائية اللغة، وتايبوجرافي RTL، وموديل محتوى يشتغل في الاتجاهين من البداية، مش حاجة تتضاف في الآخر.",
      },
      {
        title: "أساس SEO",
        text: "عناوين وأوصاف وهيدنجز ولينكات داخلية وschema وsitemaps وredirects. مبني يتفهرس، مش يتنشر وبس.",
      },
      {
        title: "سرعة وعناية وتسليم",
        text: "خطوط محلية، صور مضغوطة، caching، تحديثات، باك أب، وتسليم فريقك يقدر يستخدمه. WooCommerce والترحيل لما يحتاج.",
      },
    ],
    whyLabel: "ليه وردبريس",
    whyTitle: "نظام محتوى فريقك يقدر يملكه.",
    whyIntro:
      "وردبريس مش الحل الوسط اللي الناس بتتكلم عنه. دي منصة ناضجة بتتحول لأداة Corporate جدية لما الهيكل والـ design system يتعملوا صح.",
    why: [
      {
        title: "الموقع ملكك",
        text: "مفيش منصة مقفولة ولا قفل على مزود. المحتوى والدومين والاستضافة والكود باسمك، وتقدر تنقلهم وقت ما تحب.",
      },
      {
        title: "فريقك يقدر يعدل",
        text: "لوحة إدارة واضحة، وأقسام قابلة لإعادة الاستخدام، وفيديو تسليم قصير. تغيير فقرة مش لازم يحتاج مطور.",
      },
      {
        title: "النظام ناضج",
        text: "الفورمز والـ SEO والـ caching والـ backups والتجارة مشاكل محلولة — لما تتظبط بعناية بدل ما تتكدس كـ plugins.",
      },
      {
        title: "وممكن يبان مخصص",
        text: "Design system هادي وتخطيط منضبط أحسن من ثيم غالي من غير هيكل. المتصفح مش عارف إنه وردبريس.",
      },
    ],
    processLabel: "الطريقة",
    processTitle: "من البريف للتسليم، من غير ضباب.",
    processIntro: "تسلسل واضح، ونطاق مكتوب، وموقع تقدر تديره بعد الإطلاق.",
    process: [
      {
        step: "01",
        title: "البريف والهيكل",
        text: "نتفق على الصفحات والجمهور والإجراء الواحد اللي كل صفحة لازم تدفع له. برسم خريطة الموقع قبل ما أصمم أي قسم.",
      },
      {
        step: "02",
        title: "موديل المحتوى",
        text: "الخدمات والمشاريع والفريق والأسئلة الشائعة والإثبات اللي بيخلي البيزنس موثوق. الكتابة والهيكل بيتحركوا مع بعض.",
      },
      {
        step: "03",
        title: "Design system",
        text: "خطوط وألوان ومسافات ومكونات وأقسام قابلة لإعادة الاستخدام في Elementor أو Gutenberg — مبنية تفضل متسقة مع نمو الموقع.",
      },
      {
        step: "04",
        title: "البناء والمراجعة",
        text: "صفحات متجاوبة وفورمز وقوائم وredirects ومراجعة staging. فحص المتصفحات والإتاحة والأداء قبل الإطلاق.",
      },
      {
        step: "05",
        title: "SEO والتسليم",
        text: "عناوين وأوصاف وschema وsitemap ولينكات داخلية. وبعدها تدريب على لوحة الإدارة ودليل قصير ودعم عشان الموقع ما يقفش.",
      },
    ],
    stackTitle: "الأدوات اللي بستخدمها",
    stack: [
      "وردبريس",
      "Elementor",
      "Gutenberg",
      "WooCommerce",
      "PHP",
      "MySQL",
      "Rank Math SEO",
      "Fluent Forms",
      "Cloudflare",
      "Git",
    ],
    faqLabel: "أسئلة شائعة",
    faqTitle: "أسئلة العملاء قبل ما نبدأ.",
    faq: [
      {
        question: "موقع Corporate على وردبريس بياخد وقت قد إيه؟",
        answer:
          "موقع مركز من 5–7 صفحات بياخد عادةً 2–4 أسابيع بعد ما المحتوى وأصول البراند يبقوا جاهزين. الهياكل الأكبر أو المحتوى ثنائي اللغة أو WooCommerce بياخدوا وقت أطول. بديك جدول زمني بعد البريف.",
      },
      {
        question: "التكلفة قد إيه؟",
        answer:
          "السعر بيعتمد على عدد الصفحات، وهل المحتوى محتاج كتابة، وهل فيه متجر أو ترحيل. قول لي النطاق وأنا أبعت عرض واضح — من غير مفاجآت بالساعة.",
      },
      {
        question: "أقدر أعدل الموقع بنفسي؟",
        answer:
          "أيوه. ببني بأقسام قابلة لإعادة الاستخدام وبسلم دليل قصير وشرح عملي. تقدر تغير النص والصور والمشاريع ومعظم محتوى الصفحات من لوحة وردبريس.",
      },
      {
        question: "بتشتغل عربي وإنجليزي؟",
        answer:
          "أيوه. بصمم وأبني الاتجاهين، بما فيهم تايبوجرافي RTL وملاحة ثنائية اللغة. وكمان بهيكل المحتوى بحيث النسختين يفضلوا متزامنين.",
      },
      {
        question: "تقدر ترحل أو تصلح موقع موجود؟",
        answer:
          "أيوه. أقدر أنقل موقع لاستضافة جديدة، أو أعيد بناء صفحة مكسورة، أو أصلح مشاكل SEO، أو أنقذ صفحة بناها page builder بايظ مع الحفاظ على المحتوى والروابط.",
      },
      {
        question: "بتقدم صيانة؟",
        answer:
          "أيوه — تحديثات وباك أب وفحص أمان وتغييرات محتوى صغيرة على retainer شهري، أو بلوك دعم لمرة واحدة لو تحب.",
      },
      {
        question: "الموقع هيظهر على جوجل؟",
        answer:
          "ببني الأساس التقني والـ on-page: هيكل نضيف، وميتاداتا، وschema، وسرعة، ولينكات داخلية. الترتيب كمان بيعتمد على المحتوى والمنافسة والشغل المستمر؛ وهقولك بصراحة الموقع يقدر يوعد بإيه وما يقدرش.",
      },
    ],
    ctaTitle: "قول لي شركتك بتعمل إيه. وأنا أقولك الموقع محتاج إيه.",
    ctaBody:
      "ابعت الصفحات اللي في دماغك، والمنافسين اللي عاجبينك، والحاجة الواحدة اللي الموقع الحالي بيغلط فيها. هرد عليك بنطاق واضح وجدول زمني واقعي.",
    ctaButton: "ابدأ الكلام",
    ctaSecondary: "شوف كل المشاريع",
  },
};
