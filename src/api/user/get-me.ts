import { cookies } from "next/headers";
import authRefreshToken from "../auth/auth-refresh-token";

/**
 * 유저 정보를 쿠키에 저장된 토큰을 사용하여 불러온다.
 *
 * @author hwitae
 * @returns User
 */
const getMe = async () => {
  const cookieStore = await cookies();
  let accessToken = cookieStore.get("accessToken")?.value;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/me`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        method: "GET",
      }
    );

    if (response.status === 401) {
      const newAccessToken = await authRefreshToken();

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/users/me`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${newAccessToken}`,
          },
          method: "GET",
          cache: "force-cache",
        }
      );

      if (!response.ok) return;

      return await response.json();
    }

    if (!response.ok) throw new Error("데이터 불러오기 실패");

    return await response.json();
  } catch (error) {
    console.log(error);

    return;
  }
};

export default getMe;
