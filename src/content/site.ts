import type { Locale } from "./types";

export const SITE = {
  url: "https://nagdista.com",
  name: "Mahmoud Elnagdy",
  nameAr: "محمود النجدي",
  brand: "Nagdista",
  brandAr: "نجديستا",
  email: "nagdista@gmail.com",
  phone: "+20 114 304 4699",
  phoneHref: "+201143044699",
  location: {
    en: "Cairo, Egypt",
    ar: "القاهرة، مصر",
  },
  github: "https://github.com/nagdista-dev",
  linkedin: "https://www.linkedin.com/in/nagdista/",
  x: "https://x.com/nagdista",
  khamsat: "https://khamsat.com/user/nagdista",
  egyptInnovate: "https://egyptinnovate.com/users/01m52bryces025g7y7k9s7nzpb",
  aiNewsletter:
    "https://www.linkedin.com/newsletters/ai-in-brief-7492152374984376320",
  cvUrl:
    process.env.NEXT_PUBLIC_CV_URL ||
    "https://drive.google.com/drive/folders/1xuzUdvOWqmx60x_ko177zhRMjT_q_1MJ",
  contactEndpoint:
    process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ||
    "https://send.webforms.to/wft_wre9j7f3mpa8xemt3ypq",
  googleVerification: "BxGIGgYgIAEDpfUP1RiTUpCBy_e0Reas2aukQHyE3bI",
  launchYear: 2026,
} as const;

export const SOCIAL_LINKS = [
  { label: "GitHub", href: SITE.github, handle: "@nagdista-dev" },
  { label: "LinkedIn", href: SITE.linkedin, handle: "/in/nagdista" },
  { label: "X", href: SITE.x, handle: "@nagdista" },
] as const;

export const HOME_PATH = "/";
export const AR_HOME_PATH = "/ar/";

export function localePath(locale: Locale, path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === "ar") {
    return clean === "/" ? "/ar/" : `/ar${clean}`;
  }
  return clean;
}

export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE.url).toString();
}

export const NAME_VARIANTS = [
  "Mahmoud Elnagdy",
  "Mahmoud Alnagdy",
  "Elnagdy",
  "Nagdista",
  "محمود النجدي",
  "النجدي",
  "نجديستا",
];
