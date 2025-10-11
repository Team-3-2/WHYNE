"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import postLike from "@/api/reviews/post-like";
import deleteLike from "@/api/reviews/delete-like";

const useReviewLike = (reviewId: number, wineId: number, isLiked: boolean) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => (isLiked ? deleteLike(reviewId) : postLike(reviewId)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviews", wineId] });
      queryClient.invalidateQueries({ queryKey: ["wine", wineId] });
      queryClient.invalidateQueries({ queryKey: ["review", reviewId] });
    },
  });
};

export default useReviewLike;
