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
      ([entry]) => setIsFooterVisible(entry.isIntersecting),
      { threshold: 0.25 }
    );

    observer.observe(footerElement);

    return () => observer.disconnect();
  }, [footerId]);

  const isVisible = footerId
    ? isPastThreshold && !isFooterVisible
    : isPastThreshold;

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        "pointer-events-auto fixed inset-x-0 bottom-6 z-50 px-4 transition-all duration-300",
        "flex-center animate-in fade-in slide-in-from-bottom-4 duration-300",
        "pc:bottom-10 pc:justify-center pc:px-10"
      )}
    >
      <LinkButton
        href="/wines"
        label="와인 보러가기"
        scroll={true}
        className={cn(
          "h-[54px] w-[260px] select-none px-8",
          "tablet:w-[320px]",
          "pc:h-[60px] pc:w-[260px]"
        )}
      />
    </div>
  );
};

export default LandingFloatingCTA;
