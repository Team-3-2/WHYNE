import React from "react";
import { METADATA } from "@/constants/metadata";

export function generateMetadata() {
  const TITLE = "리뷰 등록";
  const DESCRIPTION = `${METADATA.title.default} 리뷰 등록 페이지`;
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

export default function WriteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
