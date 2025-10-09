import instance from "@/lib/axios";

interface GetReviewData {
  limit: number;
}

export default async function getUserReview({ limit }: GetReviewData) {
  const res = await instance.get(`/users/me/reviews?limit=${limit}`);

  return {
    ...res.data,
    list: [...res.data.list].reverse(),
  };
}
