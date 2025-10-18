import React from "react";
import { createPageInfoMetadata } from "@/constants/metadata";

export function generateMetadata() {
  return createPageInfoMetadata("리뷰 작성", "리뷰 작성 페이지");
}

export default function WriteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
