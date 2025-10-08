export const BREAKPOINTS = {
  mobile: 0,
  tablet: 744,
  pc: 1280,
};

// s: [캐러셀 컴포넌트] swiper 옵션 설정
/**
 * 각 브레이크포인트 별로 설정할 수 있는 옵션
 * @author yeonsu
 * @property slidesPerView : 한 화면에 보여질 슬라이드 개수
 * @property spaceBetween : 슬라이드 간 간격 (px)
 * @property scrollbar : 스크롤바 옵션
 * @property draggable : 스크롤바 드래그 가능 여부
 * @property navigation : 네비게이션(이전/다음 버튼) 옵션
 * CAROUSEL_BREAKPOINTS : 브레이크포인트 별 옵션 설정 객체 (기본값: default)
 *
 * @example : '이번 달 추천 와인' 슬라이더의 브레이크포인트 별 옵션 설정 시
 * <Carousel breakpoints={CAROUSEL_BREAKPOINTS.recommendWine} />
 */

export interface BreakpointSettings {
  slidesPerView: number;
  spaceBetween?: number;
  scrollbar?: boolean | { draggable: boolean };
  navigation?:
    | boolean
    | { prevEl: string; nextEl: string }
    | { enabled: boolean };
}

export type Breakpoints = Record<number, BreakpointSettings>;

export const CAROUSEL_BREAKPOINTS: Record<string, Breakpoints> = {
  default: {
    [BREAKPOINTS.mobile]: {
      slidesPerView: 1,
      scrollbar: { draggable: true },
      navigation: {
        enabled: false,
      },
    },
    [BREAKPOINTS.tablet]: {
      slidesPerView: 2,
      scrollbar: { draggable: false },
      navigation: {
        enabled: true,
      },
    },
    [BREAKPOINTS.pc]: {
      slidesPerView: 3,
      scrollbar: { draggable: false },
      navigation: {
        enabled: true,
      },
    },
  },
  recommendWine: {
    [BREAKPOINTS.mobile]: {
      slidesPerView: 2,
      spaceBetween: 32,
      scrollbar: { draggable: true },
      navigation: {
        enabled: false,
      },
    },
    [BREAKPOINTS.tablet]: {
      slidesPerView: 3,
      spaceBetween: 4,
      scrollbar: { draggable: false },
      navigation: {
        enabled: true,
      },
    },
    [BREAKPOINTS.pc]: {
      slidesPerView: 4,
      spaceBetween: 74,
      scrollbar: { draggable: false },
      navigation: {
        enabled: true,
      },
    },
  },
};
// e: [캐러셀 컴포넌트] swiper 옵션 설정
