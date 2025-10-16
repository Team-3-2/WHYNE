"use client";

import kakaoRedirect from "@/api/auth/kakao-redirect";
import Loader from "@/components/loader/loader";
import { useToast } from "@/hooks/use-toast";
import { deleteCookie } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const code = useSearchParams().get("code") || "";
  const { loginError } = useToast();

  const socialLogin = async (code: string) => {
    const response = await kakaoRedirect(code);

    if (!response) {
      window.location.href = "/login";
      loginError();
    }

    deleteCookie("accessToken");
    deleteCookie("refreshToken");

    document.cookie = `accessToken=${response?.accessToken}`;
    document.cookie = `refreshToken=${response?.refreshToken}`;

    window.location.href = "/";
  };

  useEffect(() => {
    if (code) socialLogin(code);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Loader />;
};

export default Page;
