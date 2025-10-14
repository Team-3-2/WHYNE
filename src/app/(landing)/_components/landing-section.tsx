"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { LandingSectionData } from "../_types";

type GSAPInstance = (typeof import("gsap"))["gsap"];
type GSAPContext = ReturnType<GSAPInstance["context"]>;

let scrollTriggerRegistration: Promise<GSAPInstance> | null = null;

const ensureScrollTrigger = async () => {
  if (typeof window === "undefined") return null;

  if (!scrollTriggerRegistration) {
    scrollTriggerRegistration = (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      gsap.registerPlugin(ScrollTrigger);
      return gsap;
    })();
  }

  return scrollTriggerRegistration;
};

/**
 * 랜딩 페이지 기능 소개 섹션
 * @author junyeol
 * @param title : 섹션 제목
 * @param subtitle : 섹션 부제목
 * @param imgSrc : 섹션 이미지
 * @param imgAlt : 섹션 이미지 alt
 * @param layout : 섹션 레이아웃
 */
const LandingSection = ({
  title,
  subtitle,
  imgSrc,
  imgAlt,
  layout = "default",
}: LandingSectionData) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const sectionElement = sectionRef.current;
    const textElement = textRef.current;
    const imageElement = imageRef.current;
    if (!sectionElement || !textElement || !imageElement) return;

    let isCancelled = false;
    let ctx: GSAPContext | undefined;

    const animate = async () => {
      const gsap = await ensureScrollTrigger();
      if (!gsap || isCancelled) return;

      const prefersReducedMotion =
        window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ??
        false;

      const textFromX = layout === "reverse" ? 80 : -80;
      const imageFromX = layout === "reverse" ? -80 : 80;

      ctx = gsap.context(() => {
        if (prefersReducedMotion) {
          gsap.set([textElement, imageElement], { opacity: 1, x: 0 });
          return;
        }

        gsap.set(textElement, { opacity: 0, x: textFromX });
        gsap.set(imageElement, { opacity: 0, x: imageFromX });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionElement,
              start: "top 75%",
              end: "top 60%",
              toggleActions: "play none none reverse",
            },
          })
          .to(textElement, {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          })
          .to(
            imageElement,
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.4"
          );
      }, sectionElement);
    };

    void animate();

    return () => {
      isCancelled = true;
      ctx?.revert();
    };
  }, [layout]);

  return (
    <section
      ref={sectionRef}
      className={cn(
        "flex w-full max-w-6xl flex-col items-start gap-8",
        layout === "reverse"
          ? "pc:flex-row-reverse pc:items-center pc:gap-36"
          : "pc:flex-row pc:items-center pc:gap-36"
      )}
    >
      {/* 텍스트 영역 */}
      <div
        ref={textRef}
        className={cn(
          "flex flex-col gap-4 text-left pc:flex-1",
          "pl-4 pr-8",
          "pc:px-0 pc:pl-4 pc:pr-8",
          "tablet:pl-8 tablet:pr-8"
        )}
      >
        <h2
          className={cn("flex flex-col", "text-heading-lg pc:text-heading-lg")}
        >
          {title.map((line, index) => (
            <span key={index}>{line}</span>
          ))}
        </h2>
        <div className="flex flex-col text-gray-600">
          {subtitle.map((line, index) => (
            <span key={index}>{line}</span>
          ))}
        </div>
      </div>

      {/* 이미지 영역 */}
      <div
        ref={imageRef}
        className={cn(
          "w-full pc:w-[680px]",
          layout === "default" ? "pl-4 tablet:pl-8" : "pr-4 tablet:pr-8",
          "pc:px-0"
        )}
      >
        <div className="relative aspect-[145/94] w-full overflow-hidden">
          <Image
            src={imgSrc}
            alt={imgAlt}
            fill
            priority
            sizes="(min-width: 1024px) 725px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
