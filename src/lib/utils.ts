import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 스크롤을 방지하고 현재 위치를 반환한다.
 * @returns 현재 스크롤 위치
 */
export const lockingScroll = () => {
  const currentScrollY = window.scrollY;
  document.body.style.position = "fixed";
  document.body.style.width = "100%";
  document.body.style.top = `-${currentScrollY}px`; // 현재 스크롤 위치
  document.body.style.overflowY = "scroll";
};

/**
 * 스크롤을 허용하고, 스크롤 방지 함수에서 반환된 위치로 이동한다.
 * @param prevScrollY 스크롤 방지 함수에서 반환된 스크롤 위치
 */
export const allowScroll = (prevScrollY: number) => {
  document.body.style.position = "";
  document.body.style.width = "";
  document.body.style.top = "";
  document.body.style.overflowY = "";
  window.scrollTo(0, prevScrollY);
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
