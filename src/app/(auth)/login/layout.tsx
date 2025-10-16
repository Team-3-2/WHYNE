import { ReactNode } from "react";
import { createPageInfoMetadata } from "@/constants/metadata";

export function generateMetadata() {
  return createPageInfoMetadata(
    "로그인",
    "서비스를 이용하려면 로그인이 필요합니다."
  );
}

export default function LoginLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
