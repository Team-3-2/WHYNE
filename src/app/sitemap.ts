import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${SITE_URL}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/wines`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/myprofile`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/login`,
      lastModified: new Date().toISOString(),
      changeFrequency: "never",
      priority: 0.1,
    },
    {
      url: `${SITE_URL}/signup`,
      lastModified: new Date().toISOString(),
      changeFrequency: "never",
      priority: 0.1,
    },
  ];
}
