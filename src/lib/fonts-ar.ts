import { Alexandria, IBM_Plex_Sans_Arabic } from "next/font/google";

export const alexandria = Alexandria({
  subsets: ["arabic"],
  display: "swap",
  preload: false,
  variable: "--font-alexandria",
  fallback: ["system-ui", "sans-serif"],
});

export const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: false,
  variable: "--font-ibm-plex-arabic",
  fallback: ["system-ui", "sans-serif"],
});
