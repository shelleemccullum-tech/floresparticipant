import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const site = (
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.flores247.com"
  ).replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "Slurp",
          "DuckDuckBot",
          "Baiduspider",
          "YandexBot",
        ],
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: [
          "MJ12bot",
          "AhrefsBot",
          "SemrushBot",
          "DotBot",
          "MicroPoster",
          "Scraper",
        ],
        disallow: "/",
      },
      {
        userAgent: "*",
        disallow: ["/api/", "/admin/"],
        crawlDelay: 2,
      },
    ],
    sitemap: `${site}/sitemap.xml`,
  };
}
