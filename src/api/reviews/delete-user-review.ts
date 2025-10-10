import instance from "@/lib/axios";

async function deleteReview({ id }: { id: number }) {
  const response = await instance.delete(`/reviews/${id}`);
  return response.data;
}

export default deleteReview;
