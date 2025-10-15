import { ReactNode } from "react";
import { METADATA } from "@/constants/metadata";

export function generateMetadata() {
  const TITLE = "로그인";
  const DESCRIPTION = `${METADATA.title.default} 로그인`;
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

export default function LoginLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
