"use server";

import instance from "@/lib/axios";
import { User } from "@/types/user-type";
import { cookies } from "next/headers";

interface LoginData {
  user: User;
  accessToken: string;
  refreshToken: string;
}

// const login = async (data: any): Promise<LoginData | undefined> => {
//   try {
//     const response = await instance.post("/auth/signIn", data);

//     if (!response) throw new Error("데이터를 불러오는데 실패했습니다.");

//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

const login = async (prevState: any, formData: FormData) => {
  console.log(formData);
  const email = formData.get("email");
  const password = formData.get("password");

  if (!(email || password))
    return { isError: true, message: "이메일또는 비밀번호를 입력하세요." };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/signIn`,
      {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({ email, password }),
      }
    );

    if (!response.ok)
      return { isError: true, message: "이메일 혹은 비밀번호를 확인해주세요." };
    // sessionStorage.setItem("accessToken", response?.accessToken);
    //   localStorage.setItem("refreshToken", response?.refreshToken);
    const cookieStore = await cookies();
    cookieStore.set("name", "test");

    const userInfo = await response.json();

    return { isError: false, data: userInfo?.user };
  } catch (error) {
    console.error(error);
  }
};

export default login;
