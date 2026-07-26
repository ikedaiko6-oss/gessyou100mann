import type { MetadataRoute } from "next";
import { getAllArticles } from "@/app/lib/articles";

const SITE_URL = "https://car-repair-calc.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles();

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/estima-hybrid`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/articles`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date("2026-07-26"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    ...articles.map((a) => ({
      url: `${SITE_URL}/articles/${a.slug}`,
      lastModified: new Date(a.updatedDate ?? a.publishedDate),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
