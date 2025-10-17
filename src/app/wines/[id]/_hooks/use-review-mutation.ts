"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import postReview from "@/api/reviews/post-review";
import patchReview from "@/api/reviews/patch-review";
import type { ReviewBase, Review } from "@/types/wine";

interface ReviewMutationOptions {
  mode: "create" | "edit";
  reviewId?: number;
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
    onSuccess: (response, variables) => {
      const { wineId } = variables;
      queryClient.setQueryData(["wine", wineId], (old: any) => {
        if (!old) return old;

        if (mode === "create") {
          return {
            ...old,
            reviews: [response, ...old.reviews],
          };
        } else if (mode === "edit") {
          return {
            ...old,
            reviews: old.reviews.map((r: Review) =>
              r.id === reviewId ? response : r
            ),
          };
        }
        return old;
      });

      queryClient.setQueryData(
        ["reviews", wineId],
        (old: Review[] | undefined) => {
          if (!old) return old;

          if (mode === "create") {
            return [response, ...old];
          } else if (mode === "edit") {
            return old.map((r) => (r.id === reviewId ? response : r));
          }
          return old;
        }
      );

      if (mode === "edit" && reviewId) {
        queryClient.setQueryData(["review", reviewId], response);
      }

      queryClient.invalidateQueries({ queryKey: ["user-review"] });
    },
  });
};

export default useReviewMutation;
