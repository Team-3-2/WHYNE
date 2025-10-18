"use client";

import { ReactNode } from "react";

const Layout = ({ children }: { children: Readonly<ReactNode> }) => {
  return (
    <main
      aria-labelledby="회원가입 영역"
      className="bg-gray-200 bg-[url('/images/common/bg-main.png')] bg-cover bg-no-repeat"
    >
      <div className="flex-center min-h-screen py-[50px]">{children}</div>
    </main>
  );
};

export default Layout;
