export type Locale = "en" | "ar";

export type Localized<T> = Record<Locale, T>;

export type ProjectMotif =
  | "playlist"
  | "video"
  | "wordbank"
  | "schedule"
  | "feed"
  | "corporate";

export type ProjectCover = {
  bg: string;
  fg: string;
  accent: string;
  motif: ProjectMotif;
  image?: string;
  domain?: string;
};

export type ProjectLinks = {
  repo?: string;
  live?: string;
};

export type ProjectShot = {
  src: string;
  alt: Localized<string>;
  caption?: Localized<string>;
};

export type ProjectCopy = {
  tagline: string;
  summary: string;
  overview: string;
  challenge: string;
  approach: string;
  features: string[];
  technical: string[];
  outcome: string;
  seoTitle: string;
  seoDescription: string;
};

export type Project = {
  slug: string;
  index: string;
  name: string;
  year: string;
  featured: boolean;
  stack: string[];
  links: ProjectLinks;
  cover: ProjectCover;
  status: Localized<string>;
  kind?: "software" | "website";
  gallery?: ProjectShot[];
  copy: Localized<ProjectCopy>;
};

export type SkillGroup = {
  id: string;
  label: Localized<string>;
  note: Localized<string>;
  skills: string[];
};

export type TimelineItem = {
  period: Localized<string>;
  title: Localized<string>;
  org: Localized<string>;
  description: Localized<string>;
  kind: "education" | "work" | "project";
};

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "code"; lang: string; code: string }
  | { type: "callout"; title: string; text: string };

export type Article = {
  slug: string;
  locale: Locale;
  title: string;
  seoTitle?: string;
  description: string;
  excerpt: string;
  category: string;
  date: string;
  updated?: string;
  readingTime: number;
  tags: string[];
  featured?: boolean;
  blocks: ArticleBlock[];
};
