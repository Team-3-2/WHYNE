import instance from "@/lib/axios";

/**
 * 와인 삭제
 * @author yeonsu
 * @param id 와인 ID
 */

interface deleteWineData {
  id: number;
}

const deleteWine = async ({ id }: deleteWineData) => {
  const res = await instance.delete(`/wines/${id}`);
  return res.data;
};

export default deleteWine;
