import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const FormWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex-center">
      <div
        className={cn(
          "flex-col-center h-[689px] rounded-2xl bg-white px-5",
          "drop-shadow-[0_2px_20px_rgba(0,0,0,0.04)]",
          "tablet:h-[761px]",
          "pc:h-[761px]"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default FormWrapper;
