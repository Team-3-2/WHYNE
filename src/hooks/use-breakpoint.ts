import { useEffect, useState } from "react";
import { BREAKPOINTS } from "@/constants/responsive";

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

    handleResize(); // 초기 세팅
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
};
