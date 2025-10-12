import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Review } from "@/types/wine";
import type { AromaKey } from "@/types/AromaType";

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

/**
 * 리뷰 배열을 받아 맛 지표별 평균(0~6)을 0.5 반올림으로 계산해 돌려준다.
 * 리뷰가 없으면 전부 0으로 초기화된 평균을 반환한다.
 * @author junyeol
 * @param reviews 평균을 계산할 리뷰 목록
 * @returns 각 맛 지표의 평균 값
 */
export const calculateAverageTastes = (reviews: Review[]) => {
  if (reviews.length === 0) {
    return {
      avgLightBold: 0,
      avgSmoothTannic: 0,
      avgDrySweet: 0,
      avgSoftAcidic: 0,
    };
  }

  const sum = reviews.reduce(
    (acc, review) => ({
      lightBold: acc.lightBold + review.lightBold,
      smoothTannic: acc.smoothTannic + review.smoothTannic,
      drySweet: acc.drySweet + review.drySweet,
      softAcidic: acc.softAcidic + review.softAcidic,
    }),
    { lightBold: 0, smoothTannic: 0, drySweet: 0, softAcidic: 0 }
  );

  const count = reviews.length;

  return {
    avgLightBold: Math.round(sum.lightBold / count),
    avgSmoothTannic: Math.round(sum.smoothTannic / count),
    avgDrySweet: Math.round(sum.drySweet / count),
    avgSoftAcidic: Math.round(sum.softAcidic / count),
  };
};

/**
 * 현재 시간을 기준으로 글이 작성 시간 계산 로직
 * @author junyeol
 * @param dateString : 리뷰 작성 시간
 * @returns : 작성 시간 텍스트
 */
export const getTimeAgo = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInDays > 0) return `${diffInDays}일 전`;
  if (diffInHours > 0) return `${diffInHours}시간 전`;
  return "방금 전";
};

/**
 * 와인 향(Aroma) 타입에 해당하는 아이콘 이름을 반환합니다.
 *
 * @author junyeol
 * @param {AromaKey} aroma - 와인 향 타입 (예: "CHERRY", "BERRY", "OAK" 등)
 * @returns {string} 해당하는 아이콘 컴포넌트 이름 (예: "CherryIcon", "BerryIcon")
 *
 * @example
 * ```typescript
 * const iconName = getAromaIconName("CHERRY");
 * // "CherryIcon" 반환
 *
 * const icon = getAromaIconName("EMPTY");
 * // "WineIcon" 반환 (기본값)
 * ```
 *
 * @remarks
 * - 매핑되지 않은 향 타입은 기본값 "WineIcon"을 반환합니다.
 *
 * @see {@link AromaKey} - 사용 가능한 향 타입 목록
 */
export const getAromaIconName = (aroma: AromaKey): string => {
  const iconMap: Record<AromaKey, string> = {
    CHERRY: "CherryIcon",
    BERRY: "BerryIcon",
    OAK: "OakIcon",
    VANILLA: "VanillaIcon",
    PEPPER: "PepperIcon",
    BAKING: "BakingIcon",
    GRASS: "GrassIcon",
    APPLE: "AppleIcon",
    PEACH: "PeachIcon",
    CITRUS: "CitrusIcon",
    TROPICAL: "TropicalIcon",
    MINERAL: "MineralIcon",
    FLOWER: "FlowerIcon",
    TOBACCO: "TobaccoIcon",
    EARTH: "EarthIcon",
    CHOCOLATE: "ChocolateIcon",
    SPICE: "SpiceIcon",
    CARAMEL: "CaramelIcon",
    LEATHER: "LeatherIcon",
    EMPTY: "WineIcon",
  };
  return iconMap[aroma] || "WineIcon";
};

/**
 * 쿠키의 값을 가져옵니다.
 *
 * @author hwitae
 * @param cookieName 쿠키 이름
 * @returns 쿠키 문자열
 */
export const getCookie = (cookieName: string) => {
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();

    if (cookie.startsWith(cookieName + "=")) {
      return cookie.slice(cookieName.length + 1);
    }
  }
  return undefined;
};

/**
 * 해당하는 이름의 쿠키를 삭제합니다.
 *
 * @author hwitae
 * @param cookieName 쿠키 이름
 */
export const deleteCookie = (cookieName: string) => {
  document.cookie = `${cookieName}=""; max-age=0; path=/;`;
};
