import axios from "axios";
import { ReviewFormData } from "@/app/wines/[id]/_types";

export default async function postReview(data: ReviewFormData) {
  const token = process.env.NEXT_PUBLIC_TEST_TOKEN;

  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/reviews`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}
