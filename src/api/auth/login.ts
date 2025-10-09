import instance from "@/lib/axios";
import { User } from "@/types/user-type";

interface LoginData {
  user: User;
  accessToken: string;
  refreshToken: string;
}

const login = async (data: any): Promise<LoginData | undefined> => {
  try {
    const response = await instance.post("/auth/signIn", data);

    if (!response) throw new Error("데이터를 불러오는데 실패했습니다.");

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default login;
