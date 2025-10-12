"use client";

import { useEffect } from "react";

/**
 * 외부 클릭 감지 훅
 * @param ref - 감지할 영역 ref
 * @param onOutsideClick - 외부 클릭 시 실행할 함수
 * @param active - 이벤트 감지를 활성화할 조건 (예: 메뉴 열림 여부)
 */
export function useOutsideClick<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  onOutsideClick: () => void,
  active = true
) {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) {
        onOutsideClick();
      }
    };

    if (active) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onOutsideClick, active]);
}
