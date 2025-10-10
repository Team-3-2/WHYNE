"use client";

import { deleteCookie } from "@/lib/utils";
import { useRouter } from "next/navigation";

export function useLogout() {
  const router = useRouter();

  return () => {
    // localStorage.removeItem("refreshToken");
    // sessionStorage.removeItem("accessToken");

    deleteCookie("accessToken");
    deleteCookie("refreshToken");
    router.push("/login");
  };
}
