"use client";

import { deleteCookie } from "@/lib/utils";

export function useLogout() {
  return () => {
    deleteCookie("accessToken");
    deleteCookie("refreshToken");
    window.location.href = "/login";
  };
}
