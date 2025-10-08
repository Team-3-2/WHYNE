"use client";

import getUserReview from "@/api/myprofile/get-user-review";
import { useQuery } from "@tanstack/react-query";

const useGetUserReview = () => {
  return useQuery({
    queryKey: ["user-review"],
    queryFn: () => getUserReview({ limit: 5 }),
    refetchOnWindowFocus: false,
  });
};

export default useGetUserReview;
