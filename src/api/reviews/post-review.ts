import instance from "@/lib/axios";
import { ReviewFormData } from "@/app/wines/[id]/_types";
import { Review } from "@/types/wine";

/**
 * 리뷰 등록
 * @author junyeol
 * @param data 리뷰 폼 데이터
 * @returns 등록된 리뷰 정보
 */
async function postReview(data: ReviewFormData): Promise<Review> {
  const response = await instance.post<Review>("/reviews", data);
  return response.data;
}

export default postReview;
