"use client";
import { useEffect, useState } from "react";
import throttle from "lodash/throttle";

/**
 * 특정 스크롤 위치에 도달하면 true를 반환하는 훅
 * @author yeonsu
 * @param options : threshold 스크롤 위치 (기본값: 0)
 */

interface UseScrollVisibilityOptions {
  threshold?: number;
}

const useScrollVisibility = (options: UseScrollVisibilityOptions = {}) => {
  const { threshold = 0 } = options;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const shouldBeVisible = window.scrollY > threshold;
      setIsVisible((prev) =>
        prev !== shouldBeVisible ? shouldBeVisible : prev
      );
    }, 100);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel();
    };
  }, [threshold]);

  return isVisible;
};

export default useScrollVisibility;
