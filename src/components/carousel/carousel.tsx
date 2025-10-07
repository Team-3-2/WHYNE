"use client";
import { ReactNode, useId, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import {
  CAROUSEL_BREAKPOINTS,
  BreakpointSettings,
} from "@/constants/responsive";
import { useBreakpoint } from "@/hooks/use-breakpoint";
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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 0);
  }, []);

  const id = useId();
  const prevId = `carousel-prev-${id}`;
  const nextId = `carousel-next-${id}`;
  const scrollbarId = `carousel-scrollbar-${id}`;

  const currentBreakpoint = useBreakpoint();
  const showNavigation = navigationEnabled && currentBreakpoint !== "mobile";
  const showScrollbar = draggableScrollbar && currentBreakpoint === "mobile";

  return (
    <div
      className={`relative w-full overflow-hidden ${loading ? "opacity-0" : ""}`}
    >
      <Swiper
        modules={[Navigation, Scrollbar]}
        autoHeight={true}
        breakpoints={breakpoints}
        navigation={
          showNavigation
            ? {
                prevEl: `#${prevId}`,
                nextEl: `#${nextId}`,
              }
            : false
        }
        scrollbar={
          showScrollbar
            ? {
                el: `#${scrollbarId}`,
                draggable: true,
              }
            : false
        }
        observer={true}
        observeParents={true}
        resizeObserver={true}
        className={`w-full overflow-hidden tablet:max-w-[calc(100%_-_57px_*_2)] pc:max-w-[calc(100%_-_57px_*_2)] ${className}`}
      >
        {children.map((child, idx) => (
          <SwiperSlide key={idx}>{child}</SwiperSlide>
        ))}
      </Swiper>

      {showNavigation && (
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

      {showScrollbar && (
        <div id={scrollbarId} className="swiper-scrollbar mt-2" />
      )}
    </div>
  );
};

export default Carousel;
