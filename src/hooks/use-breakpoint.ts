import { useEffect, useState } from "react";
import throttle from "lodash/throttle";
import { BREAKPOINTS } from "@/constants/responsive";

/**
 * 현재 뷰포트의 브레이크포인트를 반환하는 커스텀 훅
 */

type Breakpoint = "mobile" | "tablet" | "pc";

export const useBreakpoint = (): Breakpoint => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("pc");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < BREAKPOINTS.tablet) setBreakpoint("mobile");
      else if (width < BREAKPOINTS.pc) setBreakpoint("tablet");
      else setBreakpoint("pc");
    };

    const throttledResize = throttle(handleResize, 50);

    handleResize();
    window.addEventListener("resize", throttledResize);

    return () => {
      window.removeEventListener("resize", throttledResize);
      throttledResize.cancel();
    };
  }, []);

  return breakpoint;
};
