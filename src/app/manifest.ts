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
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
