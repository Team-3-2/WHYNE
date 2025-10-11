import instance from "@/lib/axios";
import type { Review } from "@/types/wine";

/**
 * 리뷰 단건 조회
 * @author junyeol
 * @param reviewId 리뷰 ID
 * @returns 리뷰 정보
 */
const getReview = async (reviewId: number): Promise<Review> => {
  const response = await instance.get<Review>(`/reviews/${reviewId}`);
  return response.data;
};

export default getReview;
