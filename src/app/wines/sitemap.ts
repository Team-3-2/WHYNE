import type { MetadataRoute } from "next";
import getWineList from "@/api/wines/get-wine-list";
import type { Wine } from "@/types/wine";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;

async function fetchAllWines(
  limit = 100,
  cursor?: number,
  allWines: Wine[] = []
): Promise<Wine[]> {
  const res = await getWineList({ limit, cursor });
  allWines.push(...res.list);

  if (res.nextCursor) {
    return fetchAllWines(limit, res.nextCursor, allWines);
  }
  return allWines;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allWines = await fetchAllWines();

  return allWines.map((wine) => ({
    url: `${SITE_URL}/wines/${wine.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));
}
