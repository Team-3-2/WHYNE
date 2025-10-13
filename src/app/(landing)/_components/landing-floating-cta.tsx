"use client";

import { useEffect, useState } from "react";
import LinkButton from "@/components/button/link-button";
import { cn } from "@/lib/utils";

const SHOW_AFTER_SCROLL = 400;

interface LandingFloatingCTAProps {
  footerId?: string;
}

const LandingFloatingCTA = ({ footerId }: LandingFloatingCTAProps) => {
  const [isPastThreshold, setIsPastThreshold] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setIsPastThreshold(window.scrollY > SHOW_AFTER_SCROLL);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !footerId) return;

    const footerElement = document.getElementById(footerId);
    if (!footerElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    observer.observe(footerElement);

    return () => {
      observer.disconnect();
    };
  }, [footerId]);

  const isVisible = footerId
    ? isPastThreshold && !isFooterVisible
    : isPastThreshold;

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4 transition-all duration-300",
        isVisible
          ? "pointer-events-auto opacity-100"
          : "translate-y-4 opacity-0",
        "pc:bottom-10 pc:justify-center pc:px-10"
      )}
      aria-hidden={!isVisible}
    >
      <LinkButton
        href="/wines"
        label="와인 보러가기"
        className="h-[50px] w-[283px]"
      />
    </div>
  );
};

export default LandingFloatingCTA;
