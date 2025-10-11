import instance from "@/lib/axios";

export interface GetWineListParams {
  limit?: number;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  name?: string;
  type?: string;
}

async function getWineList(params: GetWineListParams) {
  const { data } = await instance.get(`/wines`, { params });
  return data;
}

export default getWineList;
