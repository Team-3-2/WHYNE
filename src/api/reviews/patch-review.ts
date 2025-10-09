import instance from "@/lib/axios";
import type { ReviewFormData, Review } from "@/types/wine";

/**
 * 리뷰 수정
 * @author junyeol
 * @param reviewId 리뷰 ID
 * @param data 리뷰 폼 데이터
 * @returns 수정된 리뷰 정보
 */
const patchReview = async (
  reviewId: number,
  data: ReviewFormData
): Promise<Review> => {
  const response = await instance.patch<Review>(`/reviews/${reviewId}`, data);
  return response.data;
};

export default patchReview;
