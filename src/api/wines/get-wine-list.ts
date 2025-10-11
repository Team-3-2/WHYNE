import instance from "@/lib/axios";
import { Wine } from "@/types/wine";
import type { InfiniteScrollResponse } from "@/hooks/use-infinite-scroll";

export interface GetWineListParams {
  limit?: number;
  cursor?: number;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  name?: string;
  type?: string;
}

async function getWineList(
  params: GetWineListParams
): Promise<InfiniteScrollResponse<Wine>> {
  const { data } = await instance.get(`/wines`, { params });
  return data;
}

export default getWineList;
