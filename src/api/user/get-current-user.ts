import instance from "@/lib/axios";

export interface CurrentUserResponse {
  image: string | null;
  updatedAt: string;
  createdAt: string;
  teamId: string | null;
  nickname: string;
  id: number;
}

export const getCurrentUser = async (): Promise<CurrentUserResponse | null> => {
  try {
    const { data } = await instance.get<CurrentUserResponse>("/users/me");
    return data;
  } catch (error) {
    return null;
  }
};
