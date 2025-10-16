"use client";

import { RefObject, useEffect } from "react";

type GSAPInstance = (typeof import("gsap"))["gsap"];
type GSAPTimeline = ReturnType<GSAPInstance["timeline"]>;
type GSAPTween = ReturnType<GSAPInstance["to"]>;

type DivRef = RefObject<HTMLDivElement | null>;

interface UseLandingBannerAnimationParams {
  logoRef: DivRef;
  underlineRef: DivRef;
  ctaRef: DivRef;
}

const useLandingBannerAnimation = ({
  logoRef,
  underlineRef,
  ctaRef,
}: UseLandingBannerAnimationParams) => {
  useEffect(() => {
    let isCancelled = false;
    let timeline: GSAPTimeline | null = null;
    let floatingTween: GSAPTween | null = null;

    const animate = async () => {
      if (!logoRef.current || !underlineRef.current || !ctaRef.current) return;

      const { gsap } = await import("gsap");
      if (!gsap || isCancelled) return;

      const letters = logoRef.current.children;

      timeline = gsap.timeline();

      timeline.fromTo(
        letters,
        { opacity: 0, y: 20 },
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
        { width: "0%" },
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

      floatingTween = gsap.to(ctaRef.current, {
        y: "-=10",
        duration: 1.0,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        paused: true,
      });

      timeline
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: -24 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
          "+=0.2"
        )
        .call(() => {
          floatingTween?.play();
        });
    };

    void animate();

    return () => {
      isCancelled = true;
      timeline?.kill();
      floatingTween?.kill();
    };
  }, [logoRef, underlineRef, ctaRef]);
};

export default useLandingBannerAnimation;
