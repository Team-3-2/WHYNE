import instance from "@/lib/axios";
import { WineFormData } from "@/types/wine";

const patchRegisteredWine = async (wineFormData: WineFormData, id: number) => {
  try {
    const response = await instance.patch(`/wines/${id}`, wineFormData);

    if (!response) throw new Error("데이터 수정에 실패했습니다.");
  } catch (error) {
    throw new Error("데이터 수정에 실패했습니다.");
  }
};

export default patchRegisteredWine;
