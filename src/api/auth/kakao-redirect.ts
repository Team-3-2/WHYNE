import instance from "@/lib/axios";
import { LoginData } from "@/types/user-type";

const kakaoRedirect = async (code: string): Promise<LoginData | undefined> => {
  const body = {
    state: "login",
    redirectUri: `${window.location.origin}/redirect`,
    token: code,
  };

  try {
    const response = await instance.post("/auth/signIn/KAKAO", body);

    if (!response) throw new Error("Kakao login failed");

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default kakaoRedirect;
