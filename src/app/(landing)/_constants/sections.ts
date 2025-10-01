import { LandingSectionData, LandingBannerData } from "../_types";

export const LANDING_BANNER: LandingBannerData = {
  title: ["한 곳에서 관리하는", "나만의 와인창고"],
  imgSrc: "/images/landing/landing-banner.jpg",
  imgAlt: "와인 추천 서비스 메인 배너",
} as const;

export const LANDING_SECTIONS: readonly LandingSectionData[] = [
  {
    title: ["매달 새롭게 만나는", "와인 추천 콘텐츠"],
    subtitle: ["매달 다양한 인기 와인을 만나보세요."],
    imgSrc: "/images/landing/landing-section-1.jpg",
    imgAlt: "월간 와인 추천 콘텐츠 이미지",
    layout: "default",
  },
  {
    title: ["다양한 필터로 찾는", "내 맞춤 와인"],
    subtitle: [
      "와인 타입, 가격, 평점으로",
      "나에게 맞는 와인을 쉽게 검색해요.",
    ],
    imgSrc: "/images/landing/landing-section-2.jpg",
    imgAlt: "와인 필터 및 검색 기능 이미지",
    layout: "reverse",
  },
  {
    title: ["직관적인", "리뷰 시스템"],
    subtitle: [
      "더 구체화된 리뷰 시스템으로",
      "쉽고 빠르게 와인 리뷰를 살펴보세요.",
    ],
    imgSrc: "/images/landing/landing-section-3.jpg",
    imgAlt: "와인 리뷰 시스템 이미지",
    layout: "default",
  },
] as const;
