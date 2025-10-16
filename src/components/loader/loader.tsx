"use client";

import { cn } from "@/lib/utils";

const TITLE = "WHYNE";

const TITLE_STYLES = {
  fontStyle: "text-[50px] font-semibold",
  baseStyle: "text-gray-100",
  stroke: "[-webkit-text-stroke-width:.8px] [-webkit-text-stroke-color:#aaa]",
};

const Loader = () => {
  return (
    <div className="flex-center fixed left-0 top-0 z-[10000] h-screen w-screen bg-gray-100 bg-[url('/images/common/bg-main.png')] bg-cover bg-no-repeat">
      <div className="container text-center">
        <h2 className="relative m-auto inline-block leading-none">
          <span
            className={cn(
              TITLE_STYLES.fontStyle,
              TITLE_STYLES.baseStyle,
              TITLE_STYLES.stroke
            )}
          >
            {TITLE}
          </span>
          <span
            className={cn(
              "absolute left-0 top-0 animate-wave-mask",
              TITLE_STYLES.fontStyle
            )}
          >
            {TITLE}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Loader;
