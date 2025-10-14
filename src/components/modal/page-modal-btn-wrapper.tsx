import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const PageModalBtnWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "bottom-0 left-0 flex px-5 pb-8",
        "w-full flex-col justify-end",
        "bg-gradient-to-t from-white from-80%",
        "mobile:fixed mobile:bg-white",
        "after:absolute after:block after:bg-gradient-to-t after:content-['']",
        "after:bottom-full after:left-0 after:h-[80px] after:w-full",
        "after:pointer-events-none after:from-white after:from-40%",
        "tablet:sticky tablet:from-70% pc:sticky pc:from-70%",
        className
      )}
    >
      <div className="pointer-events-auto">{children}</div>
    </div>
  );
};

export default PageModalBtnWrapper;
