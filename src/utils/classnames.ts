import clsx from "clsx";
import { BREAKPOINTS, CAROUSEL_BREAKPOINTS } from "@/constants/responsive";

export const getCarouselResponsiveClasses = (
  variant: keyof typeof CAROUSEL_BREAKPOINTS
) => {
  const config = CAROUSEL_BREAKPOINTS[variant];

  return clsx(
    config[BREAKPOINTS.mobile]?.slidesPerView &&
      `grid-cols-${config[BREAKPOINTS.mobile].slidesPerView}`,
    config[BREAKPOINTS.tablet]?.slidesPerView &&
      `tablet:grid-cols-${config[BREAKPOINTS.tablet].slidesPerView}`,
    config[BREAKPOINTS.pc]?.slidesPerView &&
      `pc:grid-cols-${config[BREAKPOINTS.pc].slidesPerView}`
  );
};
