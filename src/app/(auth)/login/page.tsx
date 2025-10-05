"use client";

import { Button, TextInput } from "@/components";
import instance from "@/lib/axios";
import { ChangeEvent, useState } from "react";
import Logo from "@/../public/logo.svg";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FormWrapper from "../_components/form-wrapper";
import AuthRedirect from "../_components/auth-redirect";

interface User {
  id: number;
  nickname: string;
  teamId: string;
  createdAt: string;
  updatedAt: string;
  image: string;
  email: string;
}

interface LoginData {
  user: User;
  accessToken: string;
  refreshToken: string;
}

interface FormData {
  email: string;
  password: string;
}

const login = async (data: any): Promise<LoginData | undefined> => {
  try {
    const response = await instance.post("/auth/signIn", data);
    console.log(response);

    if (!response) throw new Error("데이터를 불러오는데 실패했습니다.");

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const Page = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [user, setUser] = useState<User>();
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({ ...prevData, [e.target.id]: e.target.value }));
  };

  const onSubmit = async () => {
    const response = await login(formData);

    if (!response) throw new Error("로그인에 실패했습니다.");

    setUser(response.user);

    sessionStorage.setItem("accessToken", response?.accessToken);
    localStorage.setItem("refreshToken", response?.refreshToken);

    router.push("/");
  };

  // /users/me API 테스트를 위한 함수
  const getMe = async () => {
    try {
      const response = await instance.get("/users/me");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormWrapper>
      <Logo className="mb-10 h-[30px] w-[104px] text-gray-1100" />
      <form action={onSubmit} className="flex-col-center mb-4 gap-[60px]">
        <div className="flex flex-col gap-8">
          <TextInput
            id="email"
            type="text"
            name="email"
            title="이메일"
            placeholder="이메일을 입력해주세요"
            onChange={handleChange}
          />
          <TextInput
            type="password"
            id="password"
            name="password"
            title="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            onChange={handleChange}
          />
        </div>
        <Button label="로그인" type="submit" className="mobile:font-medium" />
      </form>

      <div className="flex-col-center w-full gap-8">
        <div className="flex-col-center w-full gap-4">
          <Button
            icon="KakaoIcon"
            variant="outline"
            type="button"
            label="kakao로 시작하기"
          />
        </div>
        <AuthRedirect
          text="계정이 없으신가요?"
          redirectText="회원가입하기"
          url="/signup"
        />
      </div>
      {/* <Button label="내 정보" onClick={getMe} /> */}

      {user && (
        <div>
          <p>{user?.id}</p>
          <p>{user?.email}</p>
          <p>{user?.nickname}</p>
          <p>{user?.createdAt}</p>
          <p>{user?.updatedAt}</p>
        </div>
      )}
    </FormWrapper>
  );
};

export default Page;
