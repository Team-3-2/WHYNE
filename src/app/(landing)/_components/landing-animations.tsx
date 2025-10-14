"use client";

import { useLayoutEffect, useRef } from "react";
import { LandingSectionData } from "../_types";
import LandingSection from "./landing-section";
import { cn } from "@/lib/utils";

type GSAPInstance = (typeof import("gsap"))["gsap"];
type GSAPContext = ReturnType<GSAPInstance["context"]>;

let gsapRegistration: Promise<GSAPInstance> | null = null;

const ensureGsapWithScrollTrigger = async () => {
  if (typeof window === "undefined") return null;

  if (!gsapRegistration) {
    gsapRegistration = (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      gsap.registerPlugin(ScrollTrigger);
      return gsap;
    })();
  }

  return gsapRegistration;
};

interface LandingSectionsProps {
  sections: readonly LandingSectionData[];
}

const LandingSections = ({ sections }: LandingSectionsProps) => {
  const containerRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container || sections.length === 0) return;

    let ctx: GSAPContext | undefined;
    let isCancelled = false;

    const animate = async () => {
      const gsap = await ensureGsapWithScrollTrigger();
      if (!gsap || isCancelled) return;

      const prefersReducedMotion =
        window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ??
        false;

      const sectionElements = Array.from(
        container.querySelectorAll<HTMLElement>("[data-landing-section]")
      );

      if (sectionElements.length === 0) return;

      if (prefersReducedMotion) {
        sectionElements.forEach((section) => {
          section
            .querySelectorAll<HTMLElement>(
              "[data-landing-section-text],[data-landing-section-image]"
            )
            .forEach((el) => {
              el.style.opacity = "1";
              el.style.transform = "translate3d(0,0,0)";
            });
        });
        return;
      }

      ctx = gsap.context(() => {
        sectionElements.forEach((section) => {
          const layout = section.dataset.landingSectionLayout ?? "default";
          const text = section.querySelector<HTMLElement>(
            "[data-landing-section-text]"
          );
          const image = section.querySelector<HTMLElement>(
            "[data-landing-section-image]"
          );
          if (!text || !image) return;

          const textFromX = layout === "reverse" ? 80 : -80;
          const imageFromX = layout === "reverse" ? -80 : 80;

          gsap.set(text, { opacity: 0, x: textFromX });
          gsap.set(image, { opacity: 0, x: imageFromX });
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top 75%",
            end: "bottom 60%",
            toggleActions: "play none none reset",
          },
        });

        sectionElements.forEach((section, index) => {
          const text = section.querySelector<HTMLElement>(
            "[data-landing-section-text]"
          );
          const image = section.querySelector<HTMLElement>(
            "[data-landing-section-image]"
          );
          if (!text || !image) return;

          timeline
            .to(
              text,
              {
                x: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power3.inOut",
              },
              index * 0.7
            )
            .to(
              image,
              {
                x: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power3.inOut",
              },
              index * 0.7 + 0.2
            );
        });
      }, container);
    };

    void animate();

    return () => {
      isCancelled = true;
      ctx?.revert();
    };
  }, [sections]);

  return (
    <main
      ref={containerRef}
      className={cn("flex flex-col items-center pt-16", "gap-12 pc:gap-24")}
    >
      {sections.map((section, index) => (
        <LandingSection key={index} {...section} />
      ))}
    </main>
  );
};

export default LandingSections;
