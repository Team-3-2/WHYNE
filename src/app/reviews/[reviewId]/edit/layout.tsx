import React from "react";

export const metadata = {
  title: "리뷰 수정",
  description: "내 와인 리뷰 수정 페이지",
};

export default function EditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
