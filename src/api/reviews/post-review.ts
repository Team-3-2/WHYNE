import instance from "@/lib/axios";
import { ReviewFormData } from "@/app/wines/[id]/_types";

export default async function postReview(data: ReviewFormData) {
  const response = await instance.post(
    `${process.env.NEXT_PUBLIC_API_URL}/reviews`,
    data
  );
  return response.data;
}
