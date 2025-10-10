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
  BREAKPOINTS,
} from "@/constants/responsive";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import CarouselNavButton from "@/components/button/carousel-nav-button";

/**
 * 캐러셀 컴포넌트 - swiper.js 기반
 * @author yeonsu
 * @param children : 캐러셀에 표시할 요소들 (ReactNode 배열)
 * @param breakpoints : 반응형 설정 객체 (기본값: CAROUSEL_BREAKPOINTS.default)
 * @param className : 캐러셀 컨테이너에 추가할 클래스명
 * @param navigationEnabled : 네비게이션 버튼 표시 여부 (기본값: true, 모바일 제외)
 * @param draggableScrollbar : 드래그 가능한 스크롤바 표시 여부 (기본값: true, 모바일에서만 표시)
 */

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

  const currentBreakpoint = useBreakpoint();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const showNavigation = navigationEnabled && currentBreakpoint !== "mobile";
  const showScrollbar = draggableScrollbar && currentBreakpoint === "mobile";

  if (!isClient) {
    return (
      <div className={`flex-center w-full text-body-md`}>불러 오는 중...</div>
    );
  }

  return (
    <div className={`relative w-full overflow-hidden mobile:pb-[34px]`}>
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

      {showScrollbar && <div id={scrollbarId} className="swiper-scrollbar" />}
    </div>
  );
};

export default Carousel;
