import Link from "next/link";
import FormWrapper from "../_components/form-wrapper";
import Logo from "@/../public/logo.svg";
import { Button, TextInput } from "@/components";
import AuthRedirect from "../_components/auth-redirect";

const Page = () => {
  return (
    <FormWrapper>
      <Link href={"/"}>
        <Logo className="mb-10 h-[30px] w-[104px] text-gray-1100 tablet:mb-[64px] pc:mb-[64px]" />
      </Link>
      <form className="flex-col-center mb-10 gap-4 tablet:gap-8">
        <div className="flex flex-col gap-3">
          <TextInput
            id="email"
            type="text"
            name="email"
            title="이메일"
            placeholder="whyne@gmail.com"
            className="h-[100px]"
          />
          <TextInput
            id="nickname"
            type="text"
            name="nickname"
            title="닉네임"
            placeholder="닉네임을 입력해주세요"
            isError={true}
            errorMsg="닉네임은 최대 20자까지 가능합니다"
            className="h-[100px]"
          />
          <TextInput
            id="pw"
            type="password"
            name="pw"
            title="비밀번호"
            placeholder="영문, 숫자, 특수문자(!@#$%^&*) 제한"
            isError={true}
            errorMsg="닉네임은 최대 20자까지 가능합니다"
            className="h-[100px]"
          />
          <TextInput
            id="pwCheck"
            type="password"
            name="pwCheck"
            title="비밀번호 확인"
            placeholder="비밀번호 확인"
            isError={true}
            errorMsg="닉네임은 최대 20자까지 가능합니다"
            className="h-[100px]"
          />
        </div>
        <Button label="가입하기" />
      </form>
      <AuthRedirect
        text="계정이 이미 있으신가요?"
        redirectText="로그인하기"
        url="/login"
      />
    </FormWrapper>
  );
};

export default Page;
