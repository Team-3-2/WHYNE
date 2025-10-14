"use client";

import { useQuery } from "@tanstack/react-query";
import getReview from "@/api/reviews/get-review";

const REVIEW_STALE_TIME = 1000 * 60 * 5;

/**
 * 리뷰 단건 정보를 가져오는 훅
 * @author junyeol
 * @param reviewId : 조회 할 리뷰 ID
 * @param enabled : enabled true일 때만 쿼리 샐행 (기본값 : true)
 * @returns 리뷰 단건 정보
 */
const useReviewQuery = (reviewId?: number, enabled = true) => {
  return useQuery({
    queryKey: ["review", reviewId],
    queryFn: () => getReview(reviewId!),
    enabled: enabled && !!reviewId,
    staleTime: REVIEW_STALE_TIME,
    gcTime: REVIEW_STALE_TIME * 2,
    retry: 1,
  });
};

export default useReviewQuery;
