import instance from "@/lib/axios";
import { WineFormData } from "@/types/wine";

const patchRegisteredWine = async (wineFormData: WineFormData, id: string) => {
  const imgUrl = wineFormData.image;
  const data = {};

  try {
    const response = await instance.patch(`/wines/${id}`);

    if (!response) throw new Error("데이터 수정에 실패했습니다.");
  } catch (error) {
    console.error(error);
  }
};
