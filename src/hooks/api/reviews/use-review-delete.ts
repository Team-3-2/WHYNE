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
      queryClient.invalidateQueries({ queryKey: ["reviews", wineId] });
      queryClient.invalidateQueries({ queryKey: ["wine", wineId] });
      queryClient.invalidateQueries({ queryKey: ["review", reviewId] });
    },
    onError: (error: unknown) => {
      console.error("리뷰 삭제 실패:", error);
    },
  });
};

export default useReviewDelete;
