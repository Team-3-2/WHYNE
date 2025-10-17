"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteReview from "@/api/reviews/delete-user-review";

interface UseReviewDeleteOptions {
  wineId: number;
  reviewId: number;
}

const useReviewDelete = ({ wineId, reviewId }: UseReviewDeleteOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteReview({ id: reviewId }),
    onSuccess: () => {
      queryClient.setQueryData(["wine", wineId], (old: any) => {
        if (!old) return old;
        return {
          ...old,
          reviews: old.reviews.filter((r: any) => r.id !== reviewId),
          reviewCount: Math.max((old.reviewCount || 1) - 1, 0),
        };
      });

      queryClient.invalidateQueries({ queryKey: ["review", reviewId] });
      queryClient.invalidateQueries({ queryKey: ["user-review"] });
    },
  });
};

export default useReviewDelete;
