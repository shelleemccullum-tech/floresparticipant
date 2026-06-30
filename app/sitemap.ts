import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.flores247.com";

  // Homepage only - all sub-pages blocked in robots.ts
  return [
    {
      url: `${baseUrl.replace(/\/$/, "")}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}