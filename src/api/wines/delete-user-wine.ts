import instance from "@/lib/axios";

interface deleteWineData {
  id: number;
}

const deleteWine = async ({ id }: deleteWineData) => {
  const res = await instance.delete(`/wines/${id}`);
  return res.data;
};

export default deleteWine;
