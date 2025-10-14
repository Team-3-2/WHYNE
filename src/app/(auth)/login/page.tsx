"use client";

import { Button, TextInput } from "@/components";
import { useActionState, useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import Logo from "@/../public/logo.svg";
import Link from "next/link";
import FormWrapper from "../_components/form-wrapper";
import AuthRedirect from "../_components/auth-redirect";
import login from "@/api/auth/login";
import REGEX from "@/constants/regex";
import RememberId from "../_components/remember-id";
import { useToast } from "@/hooks/use-toast";
import { useRememberId } from "../_hooks/use-remember-id";
import { setCookie } from "cookies-next";

interface LoginFormData {
  email: string;
  password: string;
}

const Page = () => {
  const {
    register,
    formState: { errors, isValid },
    setValue,
    watch,
  } = useForm<LoginFormData>();

  const { loginError } = useToast();
  const [state, formAction, isPending] = useActionState(login, null);

  const { checked, setChecked, initialId, opts } = useRememberId();

  const email = watch("email");

  useEffect(() => {
    if (initialId) setValue("email", initialId, { shouldValidate: true });
  }, [initialId, setValue]);

  useEffect(() => {
    if (checked && email?.trim()) {
      setCookie("saved_id", email, opts);
    }
  }, [checked, email, opts]);

  const kakaoLogin = () => {
    const domain = window.location.origin;

    window.Kakao.Auth.authorize({
      redirectUri: `${domain}/redirect`,
    });
  };

  useEffect(() => {
    if (state && !state.isError) {
      window.location.href = "/";
    } else if (state && state.isError) {
      loginError();
    }
  }, [state, loginError]);

  return (
    <FormWrapper>
      <Link href={"/"}>
        <Logo className="mb-10 h-[30px] w-[104px] text-gray-1100 tablet:mb-[64px] pc:mb-[64px]" />
      </Link>
      <form
        action={formAction}
        className="flex-col-center mb-4 gap-10 tablet:gap-8 pc:gap-8"
      >
        <div className="flex w-[303px] flex-col gap-3 tablet:w-[400px] tablet:gap-[14px] pc:w-[400px] pc:gap-[14px]">
          <TextInput
            id="email"
            type="text"
            title="이메일"
            placeholder="이메일을 입력해주세요"
            className="h-[100px]"
            isError={state?.isError}
            errorMsg={state?.message}
            {...register("email", {
              required: "이메일은 필수 입력입니다.",
              pattern: {
                value: REGEX.email,
                message: "이메일 형식으로 작성해주세요",
              },
            })}
          />
          <TextInput
            type="password"
            id="password"
            title="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            className="h-[100px]"
            isError={errors.password ? true : false}
            errorMsg={errors.password && errors.password.message}
            {...register("password", {
              required: "비밀번호는 필수 입력입니다.",
              minLength: {
                value: 8,
                message: "비밀번호는 최소 8자 이상입니다.",
              },
            })}
          />
          <RememberId checked={checked} setChecked={setChecked} />
        </div>
        <Button
          label="로그인"
          className="mobile:font-medium"
          disabled={isValid ? false : true}
        />
      </form>

      <div className="flex-col-center w-full gap-8">
        <div className="flex-col-center w-full gap-4">
          <Button
            icon="KakaoIcon"
            variant="outline"
            type="button"
            label="kakao로 시작하기"
            onClick={kakaoLogin}
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
