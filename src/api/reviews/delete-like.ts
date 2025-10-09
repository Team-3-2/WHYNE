import instance from "@/lib/axios";

const deleteLike = async (reviewId: number) => {
  const response = await instance.delete(`/reviews/${reviewId}/like`);
  return response.data;
};

export default deleteLike;
