"use client";

import Link from "next/link";
import FormWrapper from "../_components/form-wrapper";
import Logo from "@/../public/logo.svg";
import { Button, ConfirmModal, TextInput } from "@/components";
import AuthRedirect from "../_components/auth-redirect";
import { useForm } from "react-hook-form";
import REGEX from "@/constants/regex";
import { useActionState } from "react";
import signup from "@/api/auth/signup-action";
import { useRouter } from "next/navigation";

interface SignupFormData {
  email: string;
  password: string;
  nickname: string;
  pwCheck: string;
}

const Page = () => {
  const {
    register,
    getValues,
    formState: { errors, isValid },
  } = useForm<SignupFormData>({ mode: "onBlur" });
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(signup, null);

  return (
    <>
      <FormWrapper>
        <Link href={"/"}>
          <Logo className="mb-10 h-[30px] w-[104px] text-gray-1100 tablet:mb-[64px] pc:mb-[64px]" />
        </Link>
        <form
          action={formAction}
          className="flex-col-center mb-10 gap-4 tablet:gap-8 pc:gap-8"
        >
          <div className="flex w-[303px] flex-col gap-3 tablet:w-[400px] pc:w-[400px]">
            <TextInput
              id="email"
              type="text"
              title="이메일"
              placeholder="whyne@gmail.com"
              className="h-[100px]"
              isError={errors.email ? true : false}
              errorMsg={errors.email && errors.email.message}
              {...register("email", {
                required: "이메일을 입력해주세요",
                pattern: {
                  value: REGEX.email,
                  message: "이메일 형식으로 작성해주세요",
                },
              })}
            />
            <TextInput
              id="nickname"
              type="text"
              title="닉네임"
              placeholder="닉네임을 입력해주세요"
              className="h-[100px]"
              isError={errors.nickname ? true : false}
              errorMsg={errors.nickname && errors.nickname.message}
              {...register("nickname", {
                required: "닉네임은 필수 입력입니다.",
                minLength: {
                  value: 2,
                  message: "닉네임은 최소 2자 이상 입력해야 합니다",
                },
                maxLength: {
                  value: 20,
                  message: "닉네임은 최대 20자까지 가능합니다.",
                },
              })}
            />
            <TextInput
              id="pw"
              type="password"
              title="비밀번호"
              placeholder="영문, 숫자, 특수문자(!@#$%^&*) 제한"
              className="h-[100px]"
              isError={errors.password ? true : false}
              errorMsg={errors.password && errors.password.message}
              {...register("password", {
                required: "비밀번호는 필수 입력입니다.",
                minLength: {
                  value: 8,
                  message: "비밀번호는 최소 8자 이상입니다.",
                },
                pattern: {
                  value: REGEX.pw,
                  message: "비밀번호는 숫자, 영문, 특수문자로만 가능합니다.",
                },
              })}
            />
            <TextInput
              id="pwCheck"
              type="password"
              title="비밀번호 확인"
              placeholder="비밀번호 확인"
              className="h-[100px]"
              isError={errors.pwCheck ? true : false}
              errorMsg={errors.pwCheck && "비밀번호가 일치하지 않습니다."}
              {...register("pwCheck", {
                required: true,
                validate: () => getValues("password") === getValues("pwCheck"),
              })}
            />
          </div>
          <Button label="가입하기" disabled={isValid ? false : true} />
        </form>
        <AuthRedirect
          text="계정이 이미 있으신가요?"
          redirectText="로그인하기"
          url="/login"
        />
      </FormWrapper>

      <ConfirmModal
        isOpen={state !== null && !state?.isError}
        msg={{ text: <>{state?.message}</>, confirmMsg: "확인" }}
        onConfirm={() => router.replace("/")}
        onClose={() => router.back()}
      />
    </>
  );
};

export default Page;
