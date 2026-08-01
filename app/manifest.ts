// app/manifest.ts — served at /manifest.webmanifest (PWA + richer mobile SEO)
import type { MetadataRoute } from "next";
import { siteConfig } from "./site.config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: siteConfig.shortTitle,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#facc15",
    icons: [
      { src: "/icon.svg", type: "image/svg+xml", sizes: "any" },
      { src: "/apple-icon.svg", type: "image/svg+xml", sizes: "any" },
    ],
  };
}
