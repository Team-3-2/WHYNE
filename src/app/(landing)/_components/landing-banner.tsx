"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { LandingBannerData } from "../_types";

type GSAPInstance = (typeof import("gsap"))["gsap"];
type GSAPTimeline = ReturnType<GSAPInstance["timeline"]>;

const LandingBanner = ({ title, imgSrc, imgAlt }: LandingBannerData) => {
  const logoRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isCancelled = false;
    let timeline: GSAPTimeline | null = null;

    const animate = async () => {
      if (!logoRef.current || !underlineRef.current) return;

      const { gsap } = await import("gsap");
      if (!gsap || isCancelled) return;

      const letters = logoRef.current.children;

      timeline = gsap.timeline();

      timeline.fromTo(
        letters,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.15,
        }
      );

      timeline.fromTo(
        underlineRef.current,
        {
          width: "0%",
        },
        {
          width: "100%",
          duration: 0.8,
          ease: "power2.inOut",
        },
        "-=0.3"
      );

      timeline.to(letters, {
        textShadow: "0 0 15px rgba(255, 255, 255, 0.5)",
        duration: 0.5,
        ease: "power2.inOut",
      });
    };

    void animate();

    return () => {
      isCancelled = true;
      timeline?.kill();
    };
  }, []);

  return (
    <section
      className={cn(
        "relative flex w-full justify-center overflow-hidden",
        "h-[400px] tablet:h-[550px] pc:h-[650px]",
        "mt-[60px] tablet:mt-[70px] pc:mt-[70px]"
      )}
    >
      <Image
        src={imgSrc}
        alt={imgAlt}
        fill
        priority
        fetchPriority="high"
        className="object-cover"
      />
      <div className="z-5 absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

      <div
        className={cn(
          "absolute inset-0 z-20",
          "flex flex-col items-center justify-center gap-8 tablet:gap-12 pc:gap-16",
          "px-8"
        )}
      >
        <h1
          className={cn(
            "flex flex-col text-center leading-tight text-white",
            "text-[20px] tablet:text-[28px] pc:text-[32px]",
            "font-medium drop-shadow-lg"
          )}
        >
          {title.map((line, index) => (
            <span key={index}>{line}</span>
          ))}
        </h1>

        <div className="flex flex-col items-center gap-4">
          {/* 로고 */}
          <div
            ref={logoRef}
            className={cn(
              "flex items-center justify-center",
              "text-[60px] tablet:text-[90px] pc:text-[130px]",
              "font-bold tracking-wider text-white drop-shadow-2xl",
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

        <div className="flex items-center gap-4">
          <div className="h-[1px] w-12 bg-white/50" />
          <span className="text-sm text-white/70 tablet:text-base">
            Codeit. 2025
          </span>
          <div className="h-[1px] w-12 bg-white/50" />
        </div>
      </div>
    </section>
  );
};

export default LandingBanner;
