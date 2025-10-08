"use client";

import { Button, TextInput } from "@/components";
import { ChangeEvent, useState } from "react";
import Logo from "@/../public/logo.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FormWrapper from "../_components/form-wrapper";
import AuthRedirect from "../_components/auth-redirect";
import useUserStore from "@/store/user-store";
import login from "@/api/auth/login";

interface FormData {
  email: string;
  password: string;
}

const Page = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const router = useRouter();
  const { user, setUser } = useUserStore((state) => state);

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

  return (
    <FormWrapper>
      <Link href={"/"}>
        <Logo className="mb-10 h-[30px] w-[104px] text-gray-1100 tablet:mb-[64px] pc:mb-[64px]" />
      </Link>
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
        <Button label="로그인" className="mobile:font-medium" />
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
    </FormWrapper>
  );
};

export default Page;
