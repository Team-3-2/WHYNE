import { cookies } from "next/headers";
import authRefreshToken from "../auth/auth-refresh-token";
import { redirect } from "next/navigation";
import { WineFormData } from "@/types/wine";

/**
 * 등록된 와인의 정보를 요청한다.
 * @author hwitae
 * @param id 와인 상세 정보 ID
 * @returns WineFormData
 */
const getRegisterWine = async (
  id: string
): Promise<WineFormData | undefined> => {
  const cookieStore = await cookies();
  let accessToken = cookieStore.get("accessToken")?.value;
  let wineData = null;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/wines/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (response.status === 401) {
      const newAccessToken = await authRefreshToken();

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/wines/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${newAccessToken}`,
          },
          method: "GET",
          cache: "force-cache",
        }
      );

      if (!response.ok) redirect("/login");

      return await response.json();
    }

    if (!response.ok) redirect("/login");

    const wineDetailData = await response.json();

    wineData = {
      name: wineDetailData.name,
      region: wineDetailData.region,
      image: wineDetailData.image,
      price: wineDetailData.price,
      type: wineDetailData.type,
    };

    return wineData;
  } catch (error) {
    console.log(error);
  }
};

export default getRegisterWine;
