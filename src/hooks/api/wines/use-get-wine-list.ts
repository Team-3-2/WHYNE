"use client";

import getWineList, { GetWineListParams } from "@/api/wines/get-wine-list";
import { useQuery } from "@tanstack/react-query";

const useGetWineList = (params: GetWineListParams = {}) => {
  return useQuery({
    queryKey: ["wine-list", params],
    queryFn: () => getWineList(params),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
  });
};
export default useGetWineList;
