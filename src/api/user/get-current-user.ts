import instance from "@/lib/axios";

export interface CurrentUserResponse {
  image: string | null;
  updatedAt: string;
  createdAt: string;
  teamId: string;
  nickname: string;
  id: number;
}

const getCurrentUser = async (): Promise<CurrentUserResponse | undefined> => {
  try {
    const { data } = await instance.get("/users/me");
    if (!data) throw new Error("사용자 정보를 불러오는데 실패했습니다.");
    return data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export default getCurrentUser;
