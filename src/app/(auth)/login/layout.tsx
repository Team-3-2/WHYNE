import { ReactNode } from "react";
import { METADATA } from "@/constants/metadata";

export function generateMetadata() {
  return {
    ...METADATA,
    title: `로그인`,
    description: `${METADATA.title.default} 로그인`,
  };
}

export default function LoginLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
