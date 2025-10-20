"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const opts = {
  maxAge: 60 * 60 * 24 * 30,
  path: "/",
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
};

const login = async (prevState: any, formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectUrl = formData.get("redirect");

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

    const cookieStore = await cookies();
    cookieStore.set("accessToken", `${data.accessToken}`);
    cookieStore.set("refreshToken", `${data.refreshToken}`);
    cookieStore.set("login_type", "basic", opts);

    redirect(redirectUrl as string);
  } catch (error) {
    throw error;
  }
};

export default login;
