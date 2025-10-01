import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 숫자 표기 포맷을 변경한다.
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
