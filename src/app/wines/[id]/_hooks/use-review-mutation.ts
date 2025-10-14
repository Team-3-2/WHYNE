"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import postReview from "@/api/reviews/post-review";
import patchReview from "@/api/reviews/patch-review";
import type { ReviewBase } from "@/types/wine";

interface ReviewMutationOptions {
  mode: "create" | "edit";
  reviewId?: number; // edit일 때만 필요
}

const useReviewMutation = ({ mode, reviewId }: ReviewMutationOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ReviewBase) => {
      if (mode === "edit" && reviewId) {
        const { wineId, ...patchData } = data;
        return patchReview(reviewId, patchData);
      }
      return postReview(data);
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["reviews", variables.wineId],
      });
      queryClient.invalidateQueries({ queryKey: ["wine", variables.wineId] });
      if (mode === "edit" && reviewId) {
        queryClient.invalidateQueries({ queryKey: ["review", reviewId] });
      }
    },
    onError: (error: unknown) => {
      console.error(
        mode === "edit" ? "리뷰 수정 실패:" : "리뷰 등록 실패:",
        error
      );
    },
  });
};

export default useReviewMutation;
