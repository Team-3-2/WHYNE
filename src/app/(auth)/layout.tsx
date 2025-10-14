"use client";

import { ReactNode } from "react";

const Layout = ({ children }: { children: Readonly<ReactNode> }) => {
  return (
    <main aria-labelledby="회원가입 영역">
      <div className="flex-center h-screen bg-gray-200">{children}</div>
    </main>
  );
};

export default Layout;
