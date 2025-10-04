"use client";

import { cn } from "@/lib/utils";

const style = {
  bgColor: "bg-black/60",
  innerColor: "rgb(139, 0, 0)",
};

export default function Loader() {
  return (
    <div
      className={cn(
        "flex h-screen w-screen items-center justify-center",
        style.bgColor
      )}
    >
      <div className="relative">
        <span
          className="absolute left-1/2 top-1/2 text-[38px] tracking-[5px] text-white"
          style={{
            transform: "translate(-50%, -50%)",
            color: "transparent",
            WebkitTextStroke: `0.3px ${style.innerColor}`,
          }}
        >
          whyne
        </span>
        <span
          className="absolute left-1/2 top-1/2 text-[38px] tracking-[5px]"
          style={{
            transform: "translate(-50%, -50%)",
            color: style.innerColor,
            WebkitTextStroke: `1px ${style.innerColor}`,
            animation: "whyne723 2s ease-in-out infinite",
          }}
        >
          whyne
        </span>
      </div>

      {/* keyframes 정의 */}
      <style jsx>{`
        @keyframes whyne723 {
          0%,
          100% {
            clip-path: polygon(
              0% 45%,
              15% 44%,
              32% 50%,
              54% 60%,
              70% 61%,
              84% 59%,
              100% 52%,
              100% 100%,
              0% 100%
            );
          }
          50% {
            clip-path: polygon(
              0% 60%,
              16% 65%,
              34% 66%,
              51% 62%,
              67% 50%,
              84% 45%,
              100% 46%,
              100% 100%,
              0% 100%
            );
          }
        }
      `}</style>
    </div>
  );
}
