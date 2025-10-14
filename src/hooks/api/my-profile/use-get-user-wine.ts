"use client";

import { useQuery } from "@tanstack/react-query";
import getUserWines from "@/api/user/get-user-wines";

const useGetUserWine = () => {
  return useQuery({
    queryKey: ["user-wine"],
    queryFn: () => getUserWines({ limit: 12 }),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
  });
};

export default useGetUserWine;
