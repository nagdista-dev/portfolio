import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mahmoud Elnagdy",
    short_name: "Nagdista",
    description:
      "The portfolio of Mahmoud Elnagdy, a full-stack developer in Cairo, Egypt.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f4ef",
    theme_color: "#f7f4ef",
    lang: "en",
    dir: "ltr",
    icons: [
      {
        src: "/icons/nagdista-48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/icons/nagdista-96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/icons/nagdista-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/nagdista-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/nagdista-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
