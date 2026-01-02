// app/sitemap.ts
import type { MetadataRoute } from "next";

const base = "https://rootlabsengg.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // For now it’s one page. Later, add more routes here as you create them.
  const routes = [""];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
