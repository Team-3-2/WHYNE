import instance from "@/lib/axios";
import { WineFormData } from "@/types/wine";
import postImage from "../image/post-image";

const patchRegisteredWine = async (
  wineFormData: WineFormData,
  uploadImg: { url: File },
  id: number
) => {
  try {
    const response = await postImage(uploadImg);

    if (!response) throw new Error("이미지 전송에 실패했습니다.");

    wineFormData.image = response.url;
    console.log(wineFormData);
  } catch (error) {
    console.error(error);
  }

  try {
    const response = await instance.patch(`/wines/${id}`, wineFormData);

    if (!response) throw new Error("데이터 수정에 실패했습니다.");

    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export default patchRegisteredWine;
