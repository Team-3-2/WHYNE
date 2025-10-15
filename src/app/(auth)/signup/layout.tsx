import { ReactNode } from "react";
import { METADATA } from "@/constants/metadata";

export function generateMetadata() {
  return {
    ...METADATA,
    title: `회원가입`,
    description: `${METADATA.title.default} 회원가입`,
  };
}

export default function SignupLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
