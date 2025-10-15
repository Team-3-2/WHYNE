import { ReactNode } from "react";
import { METADATA } from "@/constants/metadata";

export function generateMetadata() {
  const TITLE = "회원가입";
  const DESCRIPTION = `${METADATA.title.default} 회원가입`;
  return {
    ...METADATA,
    title: TITLE,
    description: DESCRIPTION,
    openGraph: {
      ...METADATA.openGraph,
      title: TITLE,
      description: DESCRIPTION,
    },
    twitter: {
      ...METADATA.twitter,
      title: TITLE,
      description: DESCRIPTION,
    },
  };
}

export default function SignupLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
