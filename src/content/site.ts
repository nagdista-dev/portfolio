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
  linkedin: "https://linkedin.com/in/nagdista",
  x: "https://x.com/nagdista",
  topmate: "https://topmate.io/nagdista",
  cvUrl: process.env.NEXT_PUBLIC_CV_URL ?? "",
  web3formsKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "",
  launchYear: 2026,
} as const;

export const SOCIAL_LINKS = [
  { label: "GitHub", href: SITE.github, handle: "@nagdista-dev" },
  { label: "LinkedIn", href: SITE.linkedin, handle: "/in/nagdista" },
  { label: "X", href: SITE.x, handle: "@nagdista" },
  { label: "Topmate", href: SITE.topmate, handle: "/nagdista" },
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
