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
      queryClient.setQueryData(["wine", wineId], (old: any) => ({
        ...old,
        reviews: old.reviews.filter((r: any) => r.id !== reviewId),
      }));

      queryClient.setQueryData(["reviews", wineId], (old: any) =>
        old?.filter((r: any) => r.id !== reviewId)
      );
    },
  });
};

export default useReviewDelete;
