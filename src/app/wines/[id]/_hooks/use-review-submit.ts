"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import postReview from "@/api/reviews/post-review";
import type { ReviewFormData } from "@/types/wine";

/**
 * 리뷰 제출을 처리하는 TanStack Query Mutation 훅
 * @author junyeol
 * @returns {Object} mutation 객체
 * @returns {Function} mutation.mutate - 리뷰 제출 함수 (콜백 방식)
 * @returns {Function} mutation.mutateAsync - 리뷰 제출 함수 (Promise 방식)
 * @returns {boolean} mutation.isPending - 제출 중 상태
 * @returns {boolean} mutation.isSuccess - 제출 성공 여부
 * @returns {boolean} mutation.isError - 에러 발생 여부
 * @returns {Error | null} mutation.error - 에러 객체
 *
 * @example
 * const { mutate, isPending } = useReviewSubmit();
 *
 * mutate(reviewData, {
 *   onSuccess: () => alert('성공!'),
 *   onError: (err) => alert('실패!')
 * });
 */

export const useReviewSubmit = () => {
  const queryClient = useQueryClient();

  const { mutate, mutateAsync, isPending, isSuccess, isError, error } =
    useMutation({
      mutationFn: (data: ReviewFormData) => postReview(data),

      onSuccess: (responseData, variables) => {
        queryClient.invalidateQueries({
          queryKey: ["reviews", variables.wineId],
        });

        queryClient.invalidateQueries({
          queryKey: ["wine", variables.wineId],
        });
      },

      onError: (error: any) => {
        console.error("리뷰 등록 실패:", error);
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
