import { METADATA } from "@/constants/metadata";
import { sfPro } from "./fonts";
import "./globals.css";
import { Gnb, FloatingActions } from "@/components";
import QueryProvider from "@/providers/query-provider";
import getMe from "@/api/user/get-me";
import KaKaoInitializer from "@/lib/kakao-initializer";
import ToastProvider from "@/providers/toast/toast-provider";
import { ToastContainer } from "react-toastify";

export function generateMetadata() {
  return METADATA;
}

export default async function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  const userInfo = await getMe();

  return (
    <html lang="ko" className={sfPro.variable}>
      <body className="scrollbar-hide">
        <QueryProvider>
          <Gnb user={userInfo} />
          {children}
          {modal}
          <FloatingActions />
          <ToastProvider />
        </QueryProvider>
        <KaKaoInitializer />
        <ToastContainer position="top-right" autoClose={1500} />
      </body>
    </html>
  );
}
