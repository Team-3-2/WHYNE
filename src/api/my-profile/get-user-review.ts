import instance from "@/lib/axios";

export interface GetReviewData {
  limit: number;
  cursor?: number | null;
}

export default async function getUserReview({
  limit,
  cursor,
}: {
  limit: number;
  cursor?: number | null;
}) {
  const params = new URLSearchParams();
  params.set("limit", String(limit));

  if (cursor !== undefined && cursor !== null && cursor !== 0) {
    params.set("cursor", String(cursor));
  }

  const url = `/users/me/reviews?${params.toString()}`;
  const res = await instance.get(url);
  return {
    ...res.data,
    list: [...res.data.list].reverse(),
  };
}
