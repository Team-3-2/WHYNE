"use client";

import { ReactNode, useId } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import {
  CAROUSEL_BREAKPOINTS,
  BreakpointSettings,
} from "@/constants/responsive";
import CarouselNavButton from "@/components/button/carousel-nav-button";

interface CarouselProps {
  children: ReactNode[];
  breakpoints?: Record<number, BreakpointSettings>;
  className?: string;
  navigationEnabled?: boolean;
  draggableScrollbar?: boolean;
}

const Carousel = ({
  children,
  breakpoints = CAROUSEL_BREAKPOINTS.default,
  className,
  navigationEnabled = true,
  draggableScrollbar = true,
}: CarouselProps) => {
  const id = useId();
  const prevId = `carousel-prev-${id}`;
  const nextId = `carousel-next-${id}`;
  const scrollbarId = `carousel-scrollbar-${id}`;

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Scrollbar]}
        autoHeight={true}
        breakpoints={breakpoints}
        navigation={
          navigationEnabled
            ? {
                prevEl: `#${prevId}`,
                nextEl: `#${nextId}`,
              }
            : false
        }
        scrollbar={
          draggableScrollbar
            ? {
                el: `#${scrollbarId}`,
                draggable: true,
              }
            : false
        }
        observer
        observeParents
        className={`tablet:max-w-[calc(100%_-_57px_*_2)] pc:max-w-[calc(100%_-_57px_*_2)] ${className}`}
      >
        {children.map((child, idx) => (
          <SwiperSlide key={idx}>{child}</SwiperSlide>
        ))}
      </Swiper>

      {navigationEnabled && (
        <>
          <CarouselNavButton
            id={prevId}
            slide="prev"
            iconColor="gray800"
            iconClassName="group-active:text-white"
          />
          <CarouselNavButton
            id={nextId}
            slide="next"
            iconColor="gray800"
            iconClassName="group-active:text-white"
          />
        </>
      )}

      {draggableScrollbar !== false && (
        <div id={scrollbarId} className="swiper-scrollbar mt-2" />
      )}
    </div>
  );
};

export default Carousel;
