import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.flores247.com";

  const pages = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/register", changeFrequency: "monthly", priority: 0.8 },
    { path: "/tfa", changeFrequency: "monthly", priority: 0.6 },
    { path: "/verify", changeFrequency: "monthly", priority: 0.6 },
    { path: "/verify-identity", changeFrequency: "monthly", priority: 0.6 },
    { path: "/verify-choice", changeFrequency: "monthly", priority: 0.7 },
  ];

  return pages.map((p) => ({
    url: `${baseUrl.replace(/\/$/, "")}${p.path}`,
    lastModified: new Date(),
    changeFrequency:
      p.changeFrequency as MetadataRoute.Sitemap["0"]["changeFrequency"],
    priority: p.priority,
  }));
}
