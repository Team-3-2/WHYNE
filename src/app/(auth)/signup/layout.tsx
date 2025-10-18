import { ReactNode } from "react";
import { createPageInfoMetadata } from "@/constants/metadata";

export function generateMetadata() {
  return createPageInfoMetadata(
    "회원가입",
    "서비스 이용을 위한 회원가입 페이지입니다."
  );
}

export default function SignupLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
