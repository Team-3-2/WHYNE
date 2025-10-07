export const BREAKPOINTS = {
  mobile: 0,
  tablet: 744,
  pc: 1280,
};

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
