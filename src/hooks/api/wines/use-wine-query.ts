"use client";

import { useQuery } from "@tanstack/react-query";
import getWine from "@/api/wines/get-wine";

const WINE_STALE_TIME = 1000 * 60 * 5; // 5분

const useWineQuery = (wineId?: number) => {
  return useQuery({
    queryKey: ["wine", wineId],
    queryFn: () => getWine(wineId!),
    enabled: !!wineId,
    staleTime: WINE_STALE_TIME,
    gcTime: WINE_STALE_TIME * 2,
    retry: 1,
  });
};

export default useWineQuery;
