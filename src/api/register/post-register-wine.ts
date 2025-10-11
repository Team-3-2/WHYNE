import instance from "@/lib/axios";
import { WineFormData } from "@/types/wine";
import postImage from "../image/post-image";

interface ImageData {
  url: File;
}

const postRegisterWine = async (
  wineFormData: WineFormData,
  uploadImg: ImageData
) => {
  try {
    const response = await postImage(uploadImg);

    if (!response) throw new Error("이미지 전송에 실패했습니다.");

    wineFormData.image = response.url;
  } catch (error) {
    console.error(error);
  }

  try {
    const response = await instance.post("/wines", wineFormData);

    if (!response) throw new Error("데이터 전송에 실패했습니다.");

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default postRegisterWine;
