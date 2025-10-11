import instance from "@/lib/axios";

const postLike = async (reviewId: number) => {
  const response = await instance.post(`/reviews/${reviewId}/like`);
  return response.data;
};

export default postLike;
