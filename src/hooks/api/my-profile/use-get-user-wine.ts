"use client";

import getUserWines from "@/api/user/get-user-wines";
import { useQuery } from "@tanstack/react-query";
//임시
import { recommendwinemock } from "@/mock";
import { WineType } from "@/app/myprofile/_types/review-type";

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
