"use client";

import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { LandingBannerData } from "../_types";
import IconButton from "@/components/button/icon-button";
import useLandingBannerAnimation from "../_hooks/use-landing-banner-animation";

const LANDING_SECTIONS_ID = "landing-sections";

const scrollToSections = () => {
  const target = document.getElementById(LANDING_SECTIONS_ID);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
};

const LandingBanner = ({ title, imgSrc, imgAlt }: LandingBannerData) => {
  const logoRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useLandingBannerAnimation({
    logoRef,
    underlineRef,
    ctaRef,
  });

  return (
    <section
      className={cn(
        "relative flex w-full justify-center overflow-hidden",
        "min-h-[100vh] supports-[height:100dvh]:min-h-[100dvh]",
        "tablet:min-h-[100vh] tablet:pt-[70px]",
        "pt-[60px] pc:min-h-[100vh] pc:pt-[70px]",
        "bg-[#171A21]"
      )}
    >
      {/* 배너 이미지 */}
      <Image
        src={imgSrc}
        alt={imgAlt}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover"
      />
      <div className="z-5 absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

      <div
        className={cn(
          "absolute inset-0 z-20",
          "flex-center flex-col gap-6 tablet:gap-8 pc:gap-8",
          "px-8"
        )}
      >
        {/* 배너 메인 텍스트 */}
        <h1
          className={cn(
            "flex select-none flex-col text-center leading-tight text-white",
            "text-[32px] tablet:text-[40px] pc:text-[48px]",
            "font-bold drop-shadow-lg"
          )}
        >
          {title.map((line, lineIndex) => (
            <span
              key={lineIndex}
              className="mx-auto flex w-fit flex-wrap text-center"
            >
              {line.map((segment, segmentIndex) => (
                <span
                  key={segmentIndex}
                  className={cn("whitespace-pre-wrap", segment.className)}
                >
                  {segment.text}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <div className="flex flex-col items-center gap-4">
          {/* 로고 */}
          <div
            ref={logoRef}
            className={cn(
              "flex-center",
              "font-bold tracking-wider text-white drop-shadow-2xl",
              "text-[60px] tablet:text-[100px] pc:mb-10 pc:text-[130px]",
              "select-none"
            )}
            style={{ fontFamily: "'Georgia', serif" }}
          >
            <span>W</span>
            <span>H</span>
            <span>Y</span>
            <span>N</span>
            <span>E</span>
          </div>

          {/* 언더라인 */}
          <div className="relative h-[2px] w-full max-w-[400px] overflow-hidden bg-white/20">
            <div
              ref={underlineRef}
              className="absolute left-0 top-0 h-full bg-white"
              style={{ width: "0%" }}
            />
          </div>
        </div>

        {/* 하단 정보 */}
        <div className="mt-2 flex items-center gap-4">
          <div className="h-[1px] w-12 bg-white/50" />
          <span className="select-none text-sm text-white/70 tablet:text-base">
            Codeit. 2025
          </span>
          <div className="h-[1px] w-12 bg-white/50" />
        </div>
      </div>

      <div
        ref={ctaRef}
        className={cn(
          "pointer-events-auto absolute bottom-8 left-1/2 z-30 -translate-x-1/2 opacity-0",
          "tablet:bottom-12"
        )}
      >
        {/* 하단 플로팅 버튼 */}
        <IconButton
          icon="ArrowDownIcon"
          iconColor="white"
          iconSize="lg"
          aria-label="다음 섹션으로 이동"
          onClick={scrollToSections}
          className={cn(
            "origin-center scale-x-[2.5]",
            "h-auto w-auto bg-transparent shadow-none",
            "border-none hover:bg-transparent focus-visible:outline-none"
          )}
        />
      </div>
    </section>
  );
};

export default LandingBanner;
