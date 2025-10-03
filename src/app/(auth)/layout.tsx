import { ReactNode } from "react";

const Layout = ({ children }: { children: Readonly<ReactNode> }) => {
  return <div className="flex-center h-screen bg-gray-200">{children}</div>;
};

export default Layout;
