import React from "react";
import { createPageInfoMetadata } from "@/constants/metadata";

export function generateMetadata() {
  return createPageInfoMetadata("리뷰 수정", "리뷰 수정 페이지");
}
export default function EditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
