import type { Article } from "./types";

const enArticles: Article[] = [
  {
    slug: "bilingual-portfolio-nextjs-typescript",
    locale: "en",
    title: "How I Built a Bilingual Portfolio with Next.js and TypeScript",
    description:
      "A practical walkthrough of the architecture behind nagdista.com: route groups, two root layouts, static export, bilingual SEO, and a design system that works in Arabic and English.",
    excerpt:
      "The decisions behind a fast, bilingual portfolio: two root layouts, a localized content model, static export, and SEO that works in both directions.",
    category: "Next.js",
    date: "2026-11-05",
    readingTime: 9,
    tags: ["Next.js", "TypeScript", "SEO", "Arabic", "Architecture"],
    featured: true,
    blocks: [
      {
        type: "p",
        text: "A portfolio is a strange project. It has to be small enough to stay fast, but complete enough to show how you think. It has to work in two languages without feeling like two separate sites. And it has to be easy to update, because the work it describes will keep changing.",
      },
      {
        type: "p",
        text: "This site is the result of those constraints. It is a static Next.js export with English at `/` and Arabic at `/ar`, two root layouts, a typed content model, and a design system built around one accent color. Here is how the pieces fit together.",
      },
      { type: "h2", text: "Start with the constraint, not the stack" },
      {
        type: "p",
        text: "The first decision was not “which framework?” It was “what must be true when this is finished?” The answers were simple: both languages must be first-class, the site must load quickly on a phone, search engines must be able to read every page, and deployment must not require a server.",
      },
      {
        type: "p",
        text: "That ruled out a client-rendered single-page app for the public pages. It also ruled out any architecture where Arabic was an afterthought added through a translation layer. The language needed to be part of the routing and the layout from the beginning.",
      },
      { type: "h2", text: "Two root layouts, one codebase" },
      {
        type: "p",
        text: "Next.js route groups let you organize routes without adding a segment to the URL. I used two groups, `(en)` and `(ar)`, each with its own root layout. The English group owns `/`, `/about`, `/projects`, and `/blog`. The Arabic group owns `/ar` and everything below it.",
      },
      {
        type: "code",
        lang: "text",
        code: `src/app/
  (en)/
    layout.tsx        // <html lang="en" dir="ltr">
    page.tsx          // /
    about/page.tsx    // /about
    projects/page.tsx // /projects
  (ar)/
    layout.tsx        // <html lang="ar" dir="rtl">
    ar/
      page.tsx        // /ar
      about/page.tsx  // /ar/about
      projects/page.tsx`,
      },
      {
        type: "p",
        text: "Each root layout loads its own fonts, sets its own `lang` and `dir`, and renders the shared header and footer with a locale prop. The duplicated layout is a feature, not a bug: it makes the language boundary explicit and prevents a stray English font or LTR assumption from leaking into the Arabic pages.",
      },
      {
        type: "p",
        text: "One caveat: navigating between routes that use different root layouts triggers a full page load. For a portfolio, that is fine. For an app with frequent language switching, a single `[locale]` root layout might be a better fit.",
      },
      { type: "h2", text: "A content model that expects two languages" },
      {
        type: "p",
        text: "Every piece of content has the same shape in both languages. Instead of scattering conditionals through the UI, I defined a small generic type:",
      },
      {
        type: "code",
        lang: "ts",
        code: `type Locale = "en" | "ar";
type Localized<T> = Record<Locale, T>;

type Project = {
  slug: string;
  stack: string[];
  copy: Localized<{
    tagline: string;
    summary: string;
    overview: string;
    features: string[];
  }>;
};`,
      },
      {
        type: "p",
        text: "The compiler now refuses to ship a project that has an English case study but no Arabic one. That is a small thing, but it changes the way you work: translation stops being a cleanup task and becomes part of the definition of done.",
      },
      { type: "h2", text: "Typography is part of the architecture" },
      {
        type: "p",
        text: "Arabic and English do not share the same rhythm. English display type can be tight and uppercase. Arabic needs more line height, different letter spacing, and a font that respects the script. I used Space Grotesk and Inter for English, and Alexandria and IBM Plex Sans Arabic for Arabic.",
      },
      {
        type: "p",
        text: "The fonts are loaded through `next/font`, which self-hosts them and removes the external request. A locale class on the `html` element swaps two CSS variables, so every component can use `font-sans` and `font-display` without knowing which language is active.",
      },
      {
        type: "code",
        lang: "css",
        code: `.locale-en {
  --font-body: var(--font-inter), system-ui, sans-serif;
  --font-heading: var(--font-space-grotesk), system-ui, sans-serif;
}

.locale-ar {
  --font-body: var(--font-ibm-plex-arabic), system-ui, sans-serif;
  --font-heading: var(--font-alexandria), system-ui, sans-serif;
}`,
      },
      { type: "h2", text: "SEO beyond the title tag" },
      {
        type: "p",
        text: "A bilingual site needs more than translated titles. Each page declares a canonical URL and `hreflang` alternates for the other language. The home page, about page, and project pages link to their counterparts; the blog articles do not, because the Arabic and English articles are different pieces of writing, not translations.",
      },
      {
        type: "code",
        lang: "ts",
        code: `export const metadata = {
  alternates: {
    canonical: "https://nagdista.com/about/",
    languages: {
      en: "https://nagdista.com/about/",
      ar: "https://nagdista.com/ar/about/",
      "x-default": "https://nagdista.com/about/",
    },
  },
};`,
      },
      {
        type: "p",
        text: "On top of the metadata, the site emits a sitemap, a robots file, an RSS feed, `llms.txt` for AI assistants, and JSON-LD for the person, the website, projects, and articles. None of these guarantees rankings, but they remove ambiguity. Search engines should never have to guess which page is the canonical one or who wrote it.",
      },
      { type: "h2", text: "Keep the client bundle small" },
      {
        type: "p",
        text: "Most of the site is server components. The client bundle is limited to the mobile menu, the language switch, the contact form, the GitHub repository filter, and a tiny scroll-reveal observer. Animations are CSS transitions, not a motion library.",
      },
      {
        type: "p",
        text: "That choice matters more than it sounds. Every client component is JavaScript the browser has to download, parse, and execute before the page feels alive. For a content site, the best interaction is often the one that happens in CSS.",
      },
      { type: "h2", text: "What I would do differently" },
      {
        type: "ul",
        items: [
          "Write the Arabic copy earlier. Translating after the layout is finished exposes spacing problems too late.",
          "Generate the Open Graph images from one source of truth. Hand-made images drift as the content changes.",
          "Test the site with JavaScript disabled. Static HTML should still be readable, navigable, and complete.",
          "Keep the number of type scales small. A portfolio does not need twelve heading sizes.",
        ],
      },
      { type: "h2", text: "The result" },
      {
        type: "p",
        text: "The final site is a static export: no server, no database, no runtime secrets. It can live on any static host. The trade-off is that the GitHub project list is fetched at build time, not on every request. For a portfolio, that is the right trade: the content changes when I deploy, and visitors get HTML instead of a loading spinner.",
      },
      {
        type: "callout",
        title: "The short version",
        text: "Use route groups for language boundaries, a typed localized content model, self-hosted fonts per locale, static export for speed, and metadata that is as deliberate as the design.",
      },
    ],
  },
  {
    slug: "mern-vs-nextjs",
    locale: "en",
    title: "MERN vs Next.js: Choosing the Right Stack",
    description:
      "A practical comparison of MERN and Next.js without the hype: rendering, SEO, architecture, deployment, and the cases where each one is the better tool.",
    excerpt:
      "MERN and Next.js are not opposites. One is a stack, the other is a framework. Here is how to choose based on the product, not the trend.",
    category: "Architecture",
    date: "2026-10-24",
    readingTime: 8,
    tags: ["MERN", "Next.js", "React", "Architecture", "Backend"],
    featured: true,
    blocks: [
      {
        type: "p",
        text: "“MERN or Next.js?” is a common question, and it is slightly malformed. MERN is a stack: MongoDB, Express, React, and Node.js. Next.js is a React framework. You can use Next.js inside a MERN-style architecture, and you can build a MERN app without Next.js. The real question is where rendering, routing, and data fetching should live.",
      },
      { type: "h2", text: "The short answer" },
      {
        type: "p",
        text: "If the product is a content-heavy public website, a marketing surface, or an application where SEO and first-load performance matter, start with Next.js. If the product is a highly interactive dashboard behind a login, with a separate API and a team that already knows Express, a classic MERN SPA is still a perfectly good choice.",
      },
      {
        type: "p",
        text: "Most real projects end up hybrid: Next.js for the public surface and the parts that benefit from server rendering, plus a dedicated API for business logic, background jobs, and integrations. That is not a compromise. It is usually the cleanest boundary.",
      },
      { type: "h2", text: "What MERN actually means" },
      {
        type: "p",
        text: "MERN describes four technologies that fit together comfortably: MongoDB for documents, Express for HTTP routing, React for the interface, and Node.js as the runtime. The classic shape is a single-page React app that talks to an Express API over JSON.",
      },
      {
        type: "p",
        text: "That architecture is easy to reason about. The front end and back end are separate deployables. The API can serve a web app, a mobile app, and internal tools. The team can work on each side independently. The cost is that the browser receives an empty HTML shell and does most of the rendering work.",
      },
      { type: "h2", text: "What Next.js adds" },
      {
        type: "p",
        text: "Next.js gives React a routing layer, server rendering, static generation, server components, route handlers, image optimization, and a set of conventions for metadata. It can replace parts of the Express layer for simple applications, or sit in front of an existing API.",
      },
      {
        type: "p",
        text: "The important shift is that rendering can happen at build time or request time on the server, not only in the browser. For a public page, that means search engines and social previews get real HTML. For a logged-in dashboard, it means you can still choose client-side rendering where it makes sense.",
      },
      { type: "h2", text: "Compare on the things that matter" },
      { type: "h3", text: "Rendering and SEO" },
      {
        type: "p",
        text: "Next.js wins by default. Static generation and server rendering produce complete HTML, which is easier for crawlers and faster for the first paint. A MERN SPA can be optimized with prerendering or a service like Prerender, but you are adding a layer that Next.js gives you natively.",
      },
      { type: "h3", text: "Architecture and team boundaries" },
      {
        type: "p",
        text: "MERN wins when the API is a product of its own, consumed by several clients. The separation is explicit, and the back end can evolve without touching the React app. Next.js can also call a separate API, but its built-in route handlers make it tempting to grow a second back end inside the front-end repository. That is fine for small projects and painful for large ones if the boundary is not deliberate.",
      },
      { type: "h3", text: "Deployment and cost" },
      {
        type: "p",
        text: "A static Next.js export can be hosted almost anywhere, often for free. A server-rendered Next.js app needs a Node.js host or a platform that supports it. A MERN app needs two deployables: the static front end and the API. The cost difference is usually small, but the operational surface is not. Fewer moving parts is a feature.",
      },
      { type: "h3", text: "Learning curve" },
      {
        type: "p",
        text: "If you already know React and Express, MERN is conceptually simple: a client, a server, and a database. Next.js introduces new concepts — server components, caching, route handlers, static versus dynamic rendering — and those concepts are worth learning before you rely on them in production.",
      },
      { type: "h3", text: "Real-time and background work" },
      {
        type: "p",
        text: "A dedicated Node.js service is often a better home for WebSockets, queues, cron jobs, and long-running tasks. Next.js route handlers are convenient for request/response work, but they are not a replacement for a worker process. If the product depends on real-time collaboration or heavy background processing, keep that logic in a service designed for it.",
      },
      { type: "h2", text: "When MERN is the better fit" },
      {
        type: "ul",
        items: [
          "The app is behind a login and SEO is irrelevant for most screens.",
          "The API already exists or must serve mobile and web clients.",
          "The team is organized around separate front-end and back-end ownership.",
          "You need WebSockets, queues, or background workers as first-class concerns.",
          "The front end is highly interactive and can tolerate a client-rendered shell.",
        ],
      },
      { type: "h2", text: "When Next.js is the better fit" },
      {
        type: "ul",
        items: [
          "Public pages need to rank, preview well, and load fast.",
          "The content is mostly static or changes on a predictable schedule.",
          "You want one deployable for the UI and light server logic.",
          "You are building a portfolio, marketing site, blog, or documentation.",
          "You want to use React server components and streaming where they help.",
        ],
      },
      { type: "h2", text: "The hybrid most teams actually use" },
      {
        type: "p",
        text: "A strong default is Next.js for the public surface and a separate API for the domain. The Next.js app handles rendering, routing, metadata, and light orchestration. The API owns authentication, business rules, payments, and integrations. The boundary is clear, and each side can be deployed and scaled independently.",
      },
      {
        type: "p",
        text: "You can even keep MongoDB. Next.js does not care which database you use. The framework question and the database question are separate, and treating them as one decision usually leads to a worse architecture.",
      },
      { type: "h2", text: "A decision checklist" },
      {
        type: "ol",
        items: [
          "Does the public surface need SEO or fast first paint? If yes, lean Next.js.",
          "Will more than one client consume the API? If yes, keep a dedicated API.",
          "Do you need long-running jobs or real-time transport? If yes, plan a separate service.",
          "Is the team small and the product mostly content? Next.js will remove a deployable.",
          "Is the product a complex dashboard with an existing API? MERN is still reasonable.",
        ],
      },
      {
        type: "callout",
        title: "The honest answer",
        text: "Choose the architecture that matches your product's rendering and team boundaries. “MERN vs Next.js” is not a religious war; it is a question about where HTML is produced and who owns the API.",
      },
    ],
  },
  {
    slug: "sql-vs-mongodb",
    locale: "en",
    title: "SQL vs MongoDB: A Practical Guide for Full-Stack Developers",
    description:
      "A developer-friendly comparison of relational databases and document stores: data shape, relationships, transactions, scaling, and a checklist for choosing.",
    excerpt:
      "The database question is not about which one is better. It is about which one fits the shape of your data and the way you need to query it.",
    category: "Databases",
    date: "2026-10-12",
    readingTime: 9,
    tags: ["SQL", "MongoDB", "Databases", "Backend", "Architecture"],
    blocks: [
      {
        type: "p",
        text: "SQL versus MongoDB is one of those debates that produces more heat than light. Both are mature, both can power serious products, and both can be misused. The useful question is not “which is better?” It is “which model fits the data and the access patterns I actually have?”",
      },
      { type: "h2", text: "How the two models think" },
      {
        type: "p",
        text: "A relational database stores data in tables with rows and columns. Relationships are expressed with foreign keys, and joins assemble the shape you need at query time. The schema is defined up front, and the database enforces it.",
      },
      {
        type: "p",
        text: "A document database stores data as documents, usually JSON-like, inside collections. Related data can be embedded in the same document, which makes reads simple and keeps a single entity together. The schema is flexible at the database level, which means the application owns more of the consistency work.",
      },
      { type: "h2", text: "Where SQL shines" },
      {
        type: "ul",
        items: [
          "Data with clear relationships: users, orders, payments, invoices, permissions.",
          "Transactions that must be atomic across multiple records.",
          "Reporting and aggregation that depends on joins and grouping.",
          "Constraints that should be enforced by the database, not only by the application.",
          "Teams that benefit from a shared, explicit schema.",
        ],
      },
      {
        type: "p",
        text: "SQL is not “old.” It is a mature interface for asking precise questions about structured data. The fact that the same query language works across PostgreSQL, MySQL, SQLite, and SQL Server is a real advantage when you change infrastructure or hire engineers.",
      },
      { type: "h2", text: "Where MongoDB shines" },
      {
        type: "ul",
        items: [
          "Documents that are naturally self-contained, such as a content page with nested blocks.",
          "Rapid iteration where the shape of the data is still changing.",
          "Read-heavy feeds where one query should return the whole object.",
          "Horizontal scaling across many nodes with a flexible schema.",
          "Applications where the front end and the data model are both JSON-shaped.",
        ],
      },
      {
        type: "p",
        text: "MongoDB is not “schemaless” in practice. The schema lives in the application, in validation rules, and in the shape of the documents you write. If you do not design it, you get inconsistency with better marketing.",
      },
      { type: "h2", text: "A practical example: users and orders" },
      {
        type: "p",
        text: "Imagine an e-commerce application. Users place orders. Orders contain line items. Payments reference orders. Refunds reference payments. This is a graph of relationships with money attached, and the cost of inconsistency is high.",
      },
      {
        type: "p",
        text: "A relational model expresses this naturally. A simplified SQL schema might look like this:",
      },
      {
        type: "code",
        lang: "sql",
        code: `CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id),
  status TEXT NOT NULL,
  total_cents INTEGER NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_items (
  id INTEGER PRIMARY KEY,
  order_id INTEGER NOT NULL REFERENCES orders(id),
  product_id INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  unit_price_cents INTEGER NOT NULL
);`,
      },
      {
        type: "p",
        text: "Now imagine a content platform. An article has a title, a body made of blocks, tags, an author snapshot, and a cover image. The article is almost always read as one object. Embedding the blocks and tags in a single document is a natural fit:",
      },
      {
        type: "code",
        lang: "js",
        code: `{
  slug: "sql-vs-mongodb",
  title: "SQL vs MongoDB",
  author: { name: "Mahmoud Elnagdy", handle: "nagdista" },
  tags: ["sql", "mongodb", "databases"],
  blocks: [
    { type: "p", text: "..." },
    { type: "h2", text: "Where SQL shines" },
    { type: "p", text: "..." }
  ],
  publishedAt: "2026-10-12"
}`,
      },
      {
        type: "p",
        text: "Neither model is universally better. The first example is about relationships and money. The second is about a document that is read as a unit. Pick the model that matches the question you ask most often.",
      },
      { type: "h2", text: "Transactions and consistency" },
      {
        type: "p",
        text: "Relational databases have decades of tooling around transactions, isolation levels, and constraints. MongoDB supports multi-document transactions, but the default design advice is still to embed related data so you do not need them as often. If your domain needs strict multi-record guarantees, SQL is usually the simpler starting point.",
      },
      { type: "h2", text: "Scaling myths" },
      {
        type: "p",
        text: "“SQL does not scale” is not true. Plenty of the largest systems in the world run on relational databases. What is true is that scaling writes across many machines is easier with a document store designed for horizontal distribution. But most applications never reach that point, and premature sharding is a great way to add complexity before you have users.",
      },
      {
        type: "p",
        text: "Start with a single well-indexed database. Measure. Optimize the queries. Add caching. Only then consider distribution. The bottleneck is usually the query, not the database engine.",
      },
      { type: "h2", text: "A decision checklist" },
      {
        type: "ol",
        items: [
          "Is the data naturally relational, with many joins and constraints? Choose SQL.",
          "Is the data a self-contained document that is read as a unit? A document store may fit.",
          "Do you need atomic multi-record transactions? Lean SQL.",
          "Is the schema still changing weekly and the data mostly independent? MongoDB can move faster.",
          "Do you need reporting, aggregations, and ad-hoc queries? SQL is usually more comfortable.",
          "Do you have a team that already knows one model well? That matters more than benchmarks.",
        ],
      },
      { type: "h2", text: "What I use" },
      {
        type: "p",
        text: "In my own projects, the choice follows the data. LocalTube stores watch history, progress, and tasks in SQLite because the relationships are simple and the queries are predictable. A MERN-style project often uses MongoDB because the documents map cleanly to the UI. For structured business data, I reach for SQL without hesitation.",
      },
      {
        type: "callout",
        title: "The rule I keep coming back to",
        text: "Model the access patterns first. The database is a tool for answering questions, not a personality test.",
      },
    ],
  },
];

const arArticles: Article[] = [
  {
    slug: "build-portfolio-nextjs-typescript-ar",
    locale: "ar",
    title: "إزاي تبني بورتفوليو احترافي بـ Next.js وTypeScript",
    description:
      "دليل عملي لبناء بورتفوليو سريع وثنائي اللغة: التخطيط، التصميم، Next.js App Router، التصدير الثابت، الـ SEO، والأداء.",
    excerpt:
      "من الفكرة للنشر: قرارات عملية تبني بها بورتفوليو يشتغل بالعربي والإنجليزي، ويحمّل بسرعة، ويفهمه جوجل.",
    category: "Next.js",
    date: "2026-11-03",
    readingTime: 9,
    tags: ["Next.js", "TypeScript", "SEO", "بورتفوليو", "تصميم"],
    featured: true,
    blocks: [
      {
        type: "p",
        text: "البورتفوليو مش مجرد صفحة بتعرض شغلك. هو أول انطباع، وأحيانًا الفرصة الوحيدة اللي حد هياخدها عنك. عشان كده لازم يكون سريع، واضح، وسهل التحديث — مش مجرد شكل حلو.",
      },
      {
        type: "p",
        text: "في المقال ده هشرح القرارات اللي بنيت بيها الموقع ده: من التخطيط والتصميم، لـ Next.js وTypeScript، للتصدير الثابت والـ SEO. مش هقول لك “استخدم التقنية دي” وبس، لكن هقول لك ليه، وإمتى يكون الاختيار غلط.",
      },
      { type: "h2", text: "ابدأ بالهدف قبل الستاك" },
      {
        type: "p",
        text: "قبل ما تفتح أي أداة، اسأل نفسك: الموقع ده هيخدم مين؟ لو بتقدم شغل للعملاء، فالأهم إن الزائر يفهم بسرعة إنت بتعمل إيه، ويشوف دليل حقيقي، ويعرف يتواصل معاك. لو بتقدم لنفسك كوظيفة، فالأهم إن الـ recruiter يوصل للسيرة والمشاريع في أقل عدد كليكات.",
      },
      {
        type: "p",
        text: "القرارات اللي طلعت من الأسئلة دي كانت بسيطة: عربي وإنجليزي من أول يوم، تحميل سريع على الموبايل، صفحات مفهومة لمحركات البحث، ونشر من غير سيرفر. أي ستاك يحقق الأربع نقاط دول يبقى مرشح كويس.",
      },
      { type: "h2", text: "ليه Next.js؟" },
      {
        type: "p",
        text: "Next.js بيديك React مع routing وrendering وmetadata في إطار واحد. للبورتفوليو، أهم ميزة عندي كانت إن الصفحات بتتولد HTML كامل وقت البناء. يعني جوجل والزائر بيشوفوا المحتوى فورًا، مش shell فاضي بيستنى JavaScript.",
      },
      {
        type: "p",
        text: "كمان التصدير الثابت (`output: 'export'`) بيحوّل الموقع لملفات HTML وCSS وJS عادية. مفيش سيرفر، مفيش قاعدة بيانات، ومفيش أسرار runtime. الموقع ينفع يتنشر على أي استضافة ثابتة، والتكلفة غالبًا صفر.",
      },
      {
        type: "callout",
        title: "متى ما تختارش Next.js؟",
        text: "لو المشروع تطبيق وراء تسجيل دخول، فيه تفاعل لحظي كتير، أو محتاج سيرفر دائم لمعالجة مهام طويلة — فصل الـ API أو استخدام ستاك تقليدي ممكن يكون أوضح. Next.js مش لازم يكون الإجابة لكل حاجة.",
      },
      { type: "h2", text: "التصميم قبل الكود" },
      {
        type: "p",
        text: "أسهل طريقة تخلي البورتفوليو شبه أي بورتفوليو تاني هي إنك تبدأ من template. الأحسن تبدأ من قرار: إيه الإحساس اللي عايز الزائر يحسه؟ أنا اخترت إحساس ورقي تحريري: خلفية فاتحة، حبر داكن، ولون برتقالي واحد بيشتغل كإشارة مش كديكور.",
      },
      {
        type: "p",
        text: "حددت نظام بسيط: لونين أساسيين، لون إشارة، خطين للعرض والنص، ومقياس أحجام صغير. بعدها كل قرار في الصفحة بيرجع للنظام ده. لما تحس إنك محتاج لون خامس أو حجم خط سادس، غالبًا المشكلة في التخطيط مش في النظام.",
      },
      {
        type: "p",
        text: "في Next.js، التصميم بيتنفذ بـ Tailwind CSS v4 مع CSS variables. الميزة إن الـ tokens بتعيش في مكان واحد، والمكونات بتستخدمها من غير ما تكرر القيم. والـ dark mode؟ مش شرط. الموقع هنا light فقط، وده قرار تصميمي مش نقص.",
      },
      { type: "h2", text: "الثنائية اللغوية من أول يوم" },
      {
        type: "p",
        text: "لو هتضيف العربي بعدين، هتكتشف مشاكل المسافات والاتجاه في كل صفحة. الحل إنك تعتبر اللغة جزء من الـ routing والـ layout من البداية. استخدمت route groups: `(en)` للصفحات الإنجليزية و`(ar)` للعربية، وكل واحدة ليها root layout بيحدد `lang` و`dir` والخطوط.",
      },
      {
        type: "code",
        lang: "text",
        code: `src/app/
  (en)/
    layout.tsx      // lang="en" dir="ltr"
    page.tsx        // /
  (ar)/
    layout.tsx      // lang="ar" dir="rtl"
    ar/
      page.tsx      // /ar`,
      },
      {
        type: "p",
        text: "نفس الفكرة في المحتوى: كل نص ليه نسخة إنجليزية ونسخة عربية في نفس الـ type. لو نسيت الترجمة، TypeScript هيرفض يبني. ده بيخلي الترجمة جزء من تعريف الشغل، مش حاجة بتتضاف في الآخر.",
      },
      { type: "h2", text: "SEO مش بس meta tags" },
      {
        type: "p",
        text: "الـ SEO الجيد بيبدأ من محتوى واضح وهيكل صفحات مفهوم. بعدها تجي التقنيات: عنوان ووصف لكل صفحة، canonical، وhreflang بين النسختين. الصفحة الإنجليزية بتشاور على العربية، والعكس، و`x-default` بيحدد النسخة الافتراضية.",
      },
      {
        type: "p",
        text: "كمان أضفت sitemap وrobots وRSS، وJSON-LD بيوصف الشخص والموقع والمشاريع والمقالات. مش لأن ده هيضمن المركز الأول، لكن لأن البحث بقى أذكى: لما تحدد هويتك وروابطك بوضوح، بتقلل الاحتمالات الغلط.",
      },
      {
        type: "p",
        text: "حاجة مهمة: المقالات العربية والإنجليزية هنا مش ترجمات لبعض. كل مقال مكتوب لجمهور مختلف، فمش صح تربطهم بـ hreflang كنسختين لنفس المحتوى. اربط الصفحات اللي فعلًا ليها نسخة مقابلة، وسيب المقالات مستقلة.",
      },
      { type: "h2", text: "الأداء قرار معماري" },
      {
        type: "p",
        text: "أغلب الصفحة مكونات سيرفر. الـ JavaScript اللي بيوصل للمتصفح محدود: قائمة الموبايل، تبديل اللغة، فورم التواصل، فلتر المشاريع، ومراقب صغير للـ reveal. الأنيميشن كله CSS، مش مكتبة حركة.",
      },
      {
        type: "p",
        text: "السبب بسيط: كل client component تكلفة. المستخدم لازم ينزّل الكود، يفهمه المتصفح، وينفذه قبل ما الصفحة تحس إنها حية. لموقع محتوى، أحسن تفاعل غالبًا هو اللي بيحصل في CSS من غير JS.",
      },
      {
        type: "ul",
        items: [
          "استخدم خطوط self-hosted عبر next/font بدل طلبات خارجية.",
          "اضغط الصور واستخدم أحجام مناسبة، أو استغنى عنها لو التصميم مش محتاجها.",
          "اختبر الصفحة بـ JavaScript متوقف. المحتوى لازم يفضل مقروء.",
          "قلل مكتبات الحركة. CSS transitions بتعمل 90% من اللي محتاجه.",
        ],
      },
      { type: "h2", text: "النشر" },
      {
        type: "p",
        text: "مع التصدير الثابت، النشر بيبقى نسخ ملفات `out` على أي استضافة. لا سيرفر، لا cold starts، لا تكاليف تشغيل. تقدر تربط الدومين وتضيف HTTPS من لوحة الاستضافة. ولو احتجت لاحقًا لدوال سيرفر، تقدر تنقل جزء من الموقع لمنصة تدعمها من غير ما تعيد بناء كل حاجة.",
      },
      { type: "h2", text: "خلاصة" },
      {
        type: "p",
        text: "البورتفوليو الناجح مش أكتر واحد فيه تأثيرات. هو الأوضح، والأسرع، والأصدق. ابدأ بالهدف، اختار ستاك يخدمه، صمم نظام بسيط، واختبر العربي والإنجليزي من أول يوم. الباقي تفاصيل — مهمة، لكنها تفاصيل.",
      },
    ],
  },
  {
    slug: "react-vs-nextjs-ar",
    locale: "ar",
    title: "React vs Next.js: امتى تختار كل واحد؟",
    description:
      "مقارنة عملية بين React وNext.js: الفرق الحقيقي، الرندر والـ SEO، المعمارية، النشر، ومتى يكون كل اختيار هو الصح.",
    excerpt:
      "React مكتبة وNext.js framework. السؤال مش أنهي أحسن، السؤال هو فين المفروض يتولد الـ HTML ومين المسؤول عن الـ routing.",
    category: "React",
    date: "2026-10-22",
    readingTime: 8,
    tags: ["React", "Next.js", "Frontend", "Architecture"],
    blocks: [
      {
        type: "p",
        text: "سؤال React ولا Next.js بيتكرر كتير، وغالبًا بيبدأ من مقارنة مش دقيقة. React مكتبة لبناء الواجهات، وNext.js framework مبني فوق React بيضيف routing وrendering وmetadata وطبقة سيرفر. يعني الاختيار بينهم مش زي الاختيار بين React وVue.",
      },
      { type: "h2", text: "الفرق في جملة" },
      {
        type: "p",
        text: "لو بتديك تطبيق تفاعلي جوه المتصفح ومش محتاج SEO قوي، React لوحده ممكن يكون كافي. لو بتديك موقع عام، محتوى، أو تطبيق محتاج أول تحميل سريع وظهور كويس في البحث، Next.js غالبًا هيكون أسهل.",
      },
      { type: "h2", text: "React library مش framework" },
      {
        type: "p",
        text: "React بيديك طريقة تبني بيها الواجهة من مكونات، ويدير الحالة والتفاعل. لكنه مش بيقول لك إزاي تعمل routing، ولا إزاي تجيب البيانات، ولا إزاي تعمل SSR. الاختيارات دي بتتاخد من مكتبات تانية أو من إطار زي Next.js.",
      },
      {
        type: "p",
        text: "لو استخدمت Vite مع React، هتاخد أداة بناء سريعة وخفيفة. هتضيف React Router للـ routing، وربما TanStack Query للبيانات. ده ستاك مرن جدًا، وكتير من الفرق بتحبه لأنه واضح ومفصول.",
      },
      { type: "h2", text: "Next.js بيضيف إيه" },
      {
        type: "p",
        text: "Next.js بيضيف App Router، وServer Components، وطرق رندر مختلفة: static وdynamic وstreaming. وبيضيف route handlers للـ API، ودعم metadata، وتحسين الصور، وconventions للمشاريع. الأهم إنه بيخليك تختار مكان توليد الـ HTML: وقت البناء، وقت الطلب، أو في المتصفح.",
      },
      {
        type: "code",
        lang: "tsx",
        code: `// Server Component by default
export default async function Page() {
  const projects = await getProjects();
  return <ProjectList projects={projects} />;
}`,
      },
      {
        type: "p",
        text: "الكود ده بيشتغل على السيرفر وقت البناء أو الطلب، والمستخدم بيستلم HTML جاهز. مفيش حاجة اسمها loading spinner في أول تحميل لو الصفحة static. ده فرق كبير في الإحساس بالسرعة.",
      },
      { type: "h2", text: "المقارنة على الحاجات اللي بتفرق" },
      { type: "h3", text: "الرندر والـ SEO" },
      {
        type: "p",
        text: "Next.js بيكسب افتراضيًا. الصفحات بتتولد HTML كامل، وده أسهل لمحركات البحث وأسرع لأول رسم. React SPA ممكن تتحسن بـ prerendering أو خدمات خارجية، لكنك بتضيف طبقة Next.js بيديهالك أصلًا.",
      },
      { type: "h3", text: "المعمارية وحدود الفريق" },
      {
        type: "p",
        text: "React + API منفصل بيكسب لما الـ API يكون منتج مستقل بيخدم ويب وموبايل وأدوات داخلية. الفصل واضح، وكل جزء بيتطور لوحده. Next.js يقدر يعمل نفس الحاجة، لكن route handlers بتخلي من السهل إنك تبني باك إند تاني جوه الريبو من غير ما تقصد.",
      },
      { type: "h3", text: "النشر والتكلفة" },
      {
        type: "p",
        text: "Next.js static export بيتنشر على أي استضافة ثابتة، وغالبًا مجانًا. Next.js مع SSR محتاج Node.js أو منصة بتدعمه. React + API محتاج نشرين: الواجهة والـ API. الفرق في التكلفة مش دايمًا كبير، لكن عدد الأجزاء اللي بتديرها بيفرق.",
      },
      { type: "h3", text: "منحنى التعلم" },
      {
        type: "p",
        text: "لو تعرف React وExpress، فـ React + API مفهوم مباشر: عميل، سيرفر، وقاعدة بيانات. Next.js بيقدم مفاهيم جديدة: Server Components، caching، static vs dynamic، route handlers. المفاهيم دي تستاهل التعلم قبل ما تعتمد عليها في الإنتاج.",
      },
      { type: "h3", text: "الوقت الحقيقي والمهام الخلفية" },
      {
        type: "p",
        text: "لو المشروع محتاج WebSockets أو queues أو cron jobs، خدمة Node.js منفصلة غالبًا هتكون بيت أنسب. route handlers في Next.js كويسة لطلب/رد، لكنها مش بديل عن worker process. الفصل هنا مش تعقيد زيادة، ده تصميم صح.",
      },
      { type: "h2", text: "امتى React لوحده؟" },
      {
        type: "ul",
        items: [
          "التطبيق وراء تسجيل دخول والـ SEO مش أولوية لمعظم الشاشات.",
          "عندك API موجود بالفعل وبيخدم أكتر من عميل.",
          "الفريق مقسم لواجهة وباك إند بشكل واضح.",
          "محتاج WebSockets أو مهام خلفية كجزء أساسي.",
          "الواجهة تفاعلية جدًا وتقدر تتحمل shell بيتحمل في المتصفح.",
        ],
      },
      { type: "h2", text: "امتى Next.js؟" },
      {
        type: "ul",
        items: [
          "الصفحات العامة محتاجة تترتب في البحث وتظهر كويس في المشاركة.",
          "المحتوى ثابت أو بيتغير بجدول متوقع.",
          "عايز نشر واحد للواجهة ومنطق سيرفر خفيف.",
          "بتبني بورتفوليو أو مدونة أو موقع تسويق أو توثيق.",
          "عايز تستخدم Server Components وstreaming لما يفيدوا.",
        ],
      },
      { type: "h2", text: "الخيار الهجين" },
      {
        type: "p",
        text: "كتير من الفرق بتختار Next.js للسطح العام، وAPI منفصل للدومين. Next.js بيعمل الرندر والـ routing والـ metadata، والـ API بيملك المصادقة وقواعد العمل والمدفوعات والتكاملات. الحدود واضحة، وكل جزء بيتنشر ويتوسع لوحده.",
      },
      {
        type: "callout",
        title: "نصيحة عملية",
        text: "متعاملش قرار الإطار وقرار قاعدة البيانات كأنهم قرار واحد. Next.js مش بيفرض MongoDB أو SQL. اختار كل طبقة حسب احتياجها.",
      },
      { type: "h2", text: "Checklist سريع" },
      {
        type: "ol",
        items: [
          "السطح العام محتاج SEO أو أول تحميل سريع؟ جرّب Next.js.",
          "أكتر من عميل هيستخدم الـ API؟ خليك محتفظ بـ API منفصل.",
          "محتاج مهام طويلة أو real-time؟ خطط لخدمة منفصلة.",
          "الفريق صغير والمحتوى أغلب الموقع؟ Next.js هيقلل عدد الأجزاء.",
          "تطبيق معقد وراء تسجيل دخول وعندك API جاهز؟ React + API قرار معقول.",
        ],
      },
    ],
  },
  {
    slug: "typescript-best-practices-react-ar",
    locale: "ar",
    title: "أفضل ممارسات TypeScript في مشاريع React",
    description:
      "قواعد عملية لكتابة TypeScript أنظف في React: strict mode، أنواع الـ props، discriminated unions، generics، أنواع الـ API، وsatisfies.",
    excerpt:
      "TypeScript مش مجرد إضافة أنواع. لما تستخدمه صح، بيقلل الأخطاء، بيوضح النية، وبيخلي إعادة الهيكلة أسهل.",
    category: "TypeScript",
    date: "2026-10-10",
    readingTime: 9,
    tags: ["TypeScript", "React", "Best Practices", "Frontend"],
    blocks: [
      {
        type: "p",
        text: "أغلب مشاريع React بتوصل لـ TypeScript في مرحلة معينة، وبعدها بفترة بيبدأ الكود يتحول لـ `any` و`as` و`@ts-ignore`. المشكلة مش في TypeScript، المشكلة إنه اتضاف كطبقة فوق كود مش مصمم للأنواع.",
      },
      {
        type: "p",
        text: "القواعد اللي جاية مش قوانين مقدسة، لكنها اشتغلت معايا وبتقلل الاحتكاك اليومي.",
      },
      { type: "h2", text: "1. فعّل strict mode من أول يوم" },
      {
        type: "p",
        text: "ملف `tsconfig.json` لازم يبدأ بـ `strict: true`. بعد كده فعّل `noUncheckedIndexedAccess` لو تقدر، لأنه بيجبرك تتعامل مع احتمال إن العنصر مش موجود. الألم في البداية أقل بكتير من الألم بعد ست شهور.",
      },
      {
        type: "code",
        lang: "json",
        code: `{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true
  }
}`,
      },
      { type: "h2", text: "2. عرّف أنواع الـ props بوضوح" },
      {
        type: "p",
        text: "استخدم `type` أو `interface` للـ props، وابعد عن `React.FC` إلا لو محتاج تفاصيل معينة. النوع الصريح بيوضح shape المكون وبيخلي الـ error messages أوضح.",
      },
      {
        type: "code",
        lang: "tsx",
        code: `type ProjectCardProps = {
  title: string;
  description: string;
  stack: readonly string[];
  href: string;
  featured?: boolean;
};

export function ProjectCard({
  title,
  description,
  stack,
  href,
  featured = false,
}: ProjectCardProps) {
  return (
    <article data-featured={featured}>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <a href={href}>View project</a>
    </article>
  );
}`,
      },
      {
        type: "p",
        text: "لو المكون بيمرر عناصر HTML، استخدم `ComponentProps` بدل ما تعيد تعريف `className` و`children` و`onClick` بنفسك:",
      },
      {
        type: "code",
        lang: "tsx",
        code: `type ButtonProps = React.ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
};

export function Button({ variant = "primary", ...props }: ButtonProps) {
  return <button data-variant={variant} {...props} />;
}`,
      },
      { type: "h2", text: "3. بلاش any — استخدم unknown لو مش عارف" },
      {
        type: "p",
        text: "`any` بيوقف التحقق ويكسر الغرض من TypeScript. لو النوع مش معروف فعلًا، استخدم `unknown` وبعدين ضيّق النوع بـ type guard. ده بيجبرك تتعامل مع الحالات اللي ممكن تفشل.",
      },
      {
        type: "code",
        lang: "ts",
        code: `function isProject(value: unknown): value is Project {
  return (
    typeof value === "object" &&
    value !== null &&
    "slug" in value &&
    typeof (value as { slug: unknown }).slug === "string"
  );
}`,
      },
      { type: "h2", text: "4. استخدم discriminated unions للحالات" },
      {
        type: "p",
        text: "أي حالة ليها variants — loading وsuccess وerror — لازم تكون union مفصولة، مش كائن فيه flags اختيارية. ده بيمنع حالات مستحيلة زي `isLoading && data`.",
      },
      {
        type: "code",
        lang: "ts",
        code: `type State<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; message: string };

function render(state: State<Project[]>) {
  switch (state.status) {
    case "idle":
      return null;
    case "loading":
      return <Spinner />;
    case "success":
      return <ProjectList projects={state.data} />;
    case "error":
      return <ErrorMessage message={state.message} />;
  }
}`,
      },
      { type: "h2", text: "5. Generics لما العلاقة بين الأنواع مهمة" },
      {
        type: "p",
        text: "Generics مفيدة لما نوع المخرج مرتبط بنوع المدخل. متستخدمهاش لمجرد إنها “متقدمة”. المثال الكلاسيكي هو دالة fetch أو hook بيرجع نفس نوع البيانات اللي بيدخله.",
      },
      {
        type: "code",
        lang: "ts",
        code: `async function getJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Request failed: " + response.status);
  }
  return (await response.json()) as T;
}

const projects = await getJson<Project[]>("/api/projects");`,
      },
      {
        type: "p",
        text: "ملاحظة: `as T` هنا مش تحقق حقيقي من البيانات. في الحدود الخارجية، استخدم schema validation زي Zod أو تحقق يدوي. TypeScript بيوصف الشكل، مش بيتحقق منه وقت التشغيل.",
      },
      { type: "h2", text: "6. اعتبر الـ API حدود غير موثوقة" },
      {
        type: "p",
        text: "أي بيانات جاية من API أو localStorage أو form لازم تتحقق. النوع اللي بتكتبه مش ضمان إن السيرفر هيبعت نفس الشكل. عرّف نوع الاستجابة، وتحقق منه، وتعامل مع الأخطاء.",
      },
      {
        type: "code",
        lang: "ts",
        code: `type ApiProject = {
  slug: string;
  name: string;
  stack: string[];
};

function parseProject(value: unknown): ApiProject | null {
  if (typeof value !== "object" || value === null) return null;
  const candidate = value as Record<string, unknown>;
  if (typeof candidate.slug !== "string") return null;
  if (typeof candidate.name !== "string") return null;
  if (!Array.isArray(candidate.stack)) return null;
  if (!candidate.stack.every((item) => typeof item === "string")) return null;
  return {
    slug: candidate.slug,
    name: candidate.name,
    stack: candidate.stack,
  };
}`,
      },
      { type: "h2", text: "7. استخدم satisfies و as const بذكاء" },
      {
        type: "p",
        text: "`satisfies` بيتحقق إن القيمة مطابقة لنوع معين من غير ما يوسّع نوعها. ده مفيد في كائنات الإعدادات والخرائط. `as const` بيثبت القيم الحرفية ويخلي المصفوفات readonly.",
      },
      {
        type: "code",
        lang: "ts",
        code: `const nav = [
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
] as const satisfies ReadonlyArray<{ label: string; href: string }>;

type NavHref = (typeof nav)[number]["href"];`,
      },
      { type: "h2", text: "8. خلي أنواع الفورم قريبة من الفورم" },
      {
        type: "p",
        text: "لو الفورم صغير، نوع واحد للقيم وحالة للتحقق كفاية. لو الفورم كبير، استخدم schema validation وderive النوع منه. الأهم إن الأخطاء تكون مربوطة بالحقول، وإن الحالة تكون واضحة.",
      },
      {
        type: "code",
        lang: "tsx",
        code: `type ContactValues = {
  name: string;
  email: string;
  message: string;
};

type ContactErrors = Partial<Record<keyof ContactValues, string>>;

function validate(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  if (!values.name.trim()) errors.name = "Name is required";
  if (!values.email.includes("@")) errors.email = "Enter a valid email";
  if (values.message.trim().length < 10) {
    errors.message = "Tell me a little more";
  }
  return errors;
}`,
      },
      { type: "h2", text: "خلاصة" },
      {
        type: "p",
        text: "TypeScript مش هدف في حد ذاته. الهدف إن الكود يوضح نيته، وإن الأخطاء تظهر بدري، وإن إعادة الهيكلة تبقى آمنة. ابدأ بـ strict، استخدم أنواع واضحة، اضغط على الحدود الخارجية، وابعد عن any. الباقي تفاصيل بتتحسن مع الوقت.",
      },
      {
        type: "callout",
        title: "قاعدة واحدة لو هتاخد حاجة",
        text: "خلي الأنواع تصف الواقع، مش تتمنى الواقع. لو حاجة ممكن تكون null أو تفشل، قول ده في النوع.",
      },
    ],
  },
];

export const ARTICLES: Article[] = [...enArticles, ...arArticles].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export function getArticles(locale: Article["locale"]): Article[] {
  return ARTICLES.filter((article) => article.locale === locale);
}

export function getArticle(
  locale: Article["locale"],
  slug: string,
): Article | undefined {
  return ARTICLES.find(
    (article) => article.locale === locale && article.slug === slug,
  );
}

export function getRelatedArticles(
  article: Article,
  limit = 2,
): Article[] {
  return getArticles(article.locale)
    .filter((item) => item.slug !== article.slug)
    .slice(0, limit);
}
