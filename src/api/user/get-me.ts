import { cookies } from "next/headers";

/**
 * refresh token을 사용하여 access token을 재발급한다.
 *
 * @author hwitae
 * @param cookieStore next/headers cookies()
 */
const authRefreshToken = async () => {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("refreshToken")?.value;

  if (!refreshToken) return;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken }),
      }
    );

    if (!response.ok) throw new Error("토큰 재인증에서 오류가 발생했습니다.");

    const newAccessToken = await response.json();

    return newAccessToken.accessToken;
  } catch (error) {
    console.error(error);
  }
};

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

      if (!response.ok) throw new Error("재로그인이 필요합니다.");

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
