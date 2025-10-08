import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 스크롤바를 숨겨 스크롤 방지
 */
export const lockingScroll = () => {
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = `${scrollbarWidth}px`;
};

/**
 * 스크롤바를 다시 표출하여 스크롤 동작
 */
export const allowScroll = () => {
  document.body.style.overflow = "auto";
  document.body.style.paddingRight = "0px";
};

/** 숫자 표기 포맷을 변경한다.
 * 1000 -> "1천개"
 * 12000 -> "1.2만개"
 * @author hwitae
 * @param count
 * @returns string
 */
export const formatCount = (count: number): string => {
  // ~천
  if (count > 1000 && count < 10000) {
    const formatted = (count / 1000).toFixed(1);

    return (
      (formatted.endsWith(".0") ? formatted.slice(0, -2) : formatted) + "천"
    );
    // ~만
  } else if (count > 10000 && count < 100000) {
    const formatted = (count / 10000).toFixed(1);

    return (
      (formatted.endsWith(".0") ? formatted.slice(0, -2) : formatted) + "만"
    );
    // ~십만
  } else if (count > 100000 && count < 1000000) {
    const formatted = (count / 10000).toFixed(0);

    return (
      (formatted.endsWith(".0") ? formatted.slice(0, -2) : formatted) + "만"
    );
  } else {
    return count.toString();
  }
};

/**
 * 이미지 경로가 next/image에서 허용하는 형태인지 검사
 * @author junyeol
 * @param src : 검사할 이미지 경로 (null / undefined 허용)
 * @returns : 허용된 프로토콜(http/https) 또는 루트 경로(/)라면 true
 */
export const isValidImageSrc = (src?: string | null): src is string => {
  if (typeof src !== "string") return false;
  if (!src.trim()) return false; // 빈 문자열 방지
  return (
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("/")
  );
};
