import { useQuery } from "@tanstack/react-query";
import getRecommendedWines from "@/api/wines/get-recommended";

export const useGetRecommendedWines = () => {
  return useQuery({
    queryKey: ["recommended-wines"],
    queryFn: () => getRecommendedWines(10),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};
