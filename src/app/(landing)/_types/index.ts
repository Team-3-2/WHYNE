/**
 * 랜딩 페이지 섹션 레이아웃 타입
 * @author junyeol
 * @param default : 텍스트 / 이미지
 * @param reverse : 이미지 / 텍스트
 */
export type LandingLayoutType = "default" | "reverse";

/**
 * 랜딩 페이지 섹션 데이터
 * @author junyeol
 * @param title : 섹션 제목
 * @param subtitle : 섹션 부제목
 * @param imgSrc : 섹션 이미지
 * @param imgAlt : 섹션 이미지 alt
 * @param layout : 섹션 레이아웃
 */
export interface LandingSectionData {
  title: string[];
  subtitle: string[];
  imgSrc: string;
  imgAlt: string;
  layout: LandingLayoutType;
}

/**
 * 랜딩 페이지 메인 배너 데이터
 * @author junyeol
 * @param title : 배너 제목
 * @param imgSrc : 배너 이미지
 * @param imgAlt : 배너 이미지 alt
 */
export interface LandingBannerData {
  title: string[];
  imgSrc: string;
  imgAlt: string;
}
