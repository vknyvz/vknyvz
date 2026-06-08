import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.vknyvz.com",
      lastModified: "2026-06-07",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
