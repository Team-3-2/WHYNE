"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import patchReview from "@/api/reviews/patch-review";
import type { ReviewFormData } from "@/types/wine";

/**
 * 리뷰 수정을 처리하는 TanStack Query Mutation 훅
 * @author junyeol
 * @param reviewId 수정할 리뷰 ID
 */
export const useReviewUpdate = (reviewId: number) => {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending, isSuccess, isError, error } =
    useMutation({
      mutationFn: (data: ReviewFormData) => patchReview(reviewId, data),

      onSuccess: (responseData, variables) => {
        queryClient.invalidateQueries({
          queryKey: ["reviews", variables.wineId],
        });

        queryClient.invalidateQueries({
          queryKey: ["wine", variables.wineId],
        });

        queryClient.invalidateQueries({
          queryKey: ["review", reviewId],
        });
      },

      onError: (error: any) => {
        console.error("리뷰 수정 실패:", error);
      },
    });

  return {
    mutate,
    mutateAsync,
    isPending,
    isSuccess,
    isError,
    error,
  };
};
