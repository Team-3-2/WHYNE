"use client";

import { setCookie, getCookie, deleteCookie } from "cookies-next";
import { useEffect, useState } from "react";

const opts = {
  maxAge: 60 * 60 * 24 * 30,
  path: "/",
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
};

export const useRememberId = () => {
  const [checked, setChecked] = useState(false);
  const [initialId, setInitialId] = useState("");

  // 체크박스, 이메일 초기값 로드
  useEffect(() => {
    const savedCheck = getCookie("remember_id") === "true";
    setChecked(savedCheck);
    if (savedCheck) {
      const savedId = getCookie("saved_id");
      if (savedId) setInitialId(String(savedId));
    }
  }, []);

  // 체크/아이디 변화에 따라 동기화
  useEffect(() => {
    if (checked) {
      setCookie("remember_id", "true", opts);
    } else {
      setCookie("remember_id", "false", opts);
      deleteCookie("saved_id", opts);
    }
  }, [checked]);

  return { checked, setChecked, initialId, opts };
};
