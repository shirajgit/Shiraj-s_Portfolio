// app/sitemap.ts — served at /sitemap.xml
import type { MetadataRoute } from "next";
import { siteConfig } from "./site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  // Single-page portfolio: the home route plus its in-page anchor sections.
  const sections = [
    "",
    "#about",
    "#services",
    "#skills",
    "#projects",
    "#experience",
    "#contact",
  ];

  return sections.map((section) => ({
    url: `${siteConfig.url}/${section}`,
    changeFrequency: "monthly",
    priority: section === "" ? 1 : 0.7,
  }));
}
