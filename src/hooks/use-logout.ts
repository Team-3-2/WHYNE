"use client";

import { useRouter } from "next/navigation";

export function useLogout() {
  const router = useRouter();

  return () => {
    localStorage.removeItem("refreshToken");
    sessionStorage.removeItem("accessToken");
    router.push("/login");
  };
}
