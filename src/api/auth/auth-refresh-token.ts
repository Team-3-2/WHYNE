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

export default authRefreshToken;
