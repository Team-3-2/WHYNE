"use client";

import kakaoRedirect from "@/api/auth/kakao-redirect";
import Loader from "@/components/loader/loader";
import instance from "@/lib/axios";
import { deleteCookie } from "@/lib/utils";
import { headers } from "next/headers";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const code = useSearchParams().get("code") || "";
  const router = useRouter();

  const socialLogin = async (code: string) => {
    const response = await kakaoRedirect(code);
    console.log(response);

    if (!response) return;

    deleteCookie("accessToken");
    deleteCookie("refreshToken");

    document.cookie = `accessToken=${response?.accessToken}`;
    document.cookie = `refreshToken=${response?.refreshToken}`;

    window.location.href = "/";
  };

  useEffect(() => {
    if (code) socialLogin(code);
  }, []);

  return <Loader />;
};

export default Page;
