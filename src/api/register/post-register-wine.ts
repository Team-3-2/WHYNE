import instance from "@/lib/axios";
import { WineFormData } from "@/types/wine";

const postRegisterWine = async (wineFormData: WineFormData) => {
  try {
    const response = await instance.post("/wines", wineFormData);

    if (!response) throw new Error("데이터 전송에 실패했습니다.");

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default postRegisterWine;
