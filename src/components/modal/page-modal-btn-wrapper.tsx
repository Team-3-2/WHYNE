import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const PageModalBtnWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={cn(
        "bottom-0 left-0 flex h-[185px] px-5 pb-8",
        "w-full flex-col justify-end",
        "bg-gradient-to-t from-white from-80%",
        "mobile:fixed tablet:sticky tablet:from-70% pc:sticky pc:from-70%"
      )}
    >
      <div className="pointer-events-auto">{children}</div>
    </div>
  );
};

export default PageModalBtnWrapper;
