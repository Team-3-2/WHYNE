"use server";

import { User } from "@/types/user-type";

interface LoginData {
  user: User;
  accessToken: string;
  refreshToken: string;
}

const login = async (prevState: any, formData: FormData) => {
  console.log(formData);
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password)
    return { isError: true, message: "이메일 또는 비밀번호를 입력하세요." };

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

    const data = await response.json();

    return { isError: false, data: data };
  } catch (error) {
    console.error(error);
  }
};

export default login;
