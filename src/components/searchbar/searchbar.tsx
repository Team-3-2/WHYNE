import { cn } from "@/lib/utils";
import Icon from "../icon/icon";
import { ComponentProps } from "react";

/**
 * 검색바 컴포넌트
 * @author hwitae
 */
const Searchbar = ({ className, ...props }: ComponentProps<"input">) => {
  return (
    <label
      htmlFor="searchbar"
      className={cn(
        "bg-white px-[14px] py-[9px]",
        "flex items-center gap-2",
        "rounded-[4px] border border-gray-300",
        "tablet:px-[20px] tablet:py-[12px]",
        "pc:px-[20px] pc:py-[12px]",
        className
      )}
    >
      <Icon icon="SearchIcon" size={"sm"} className="shrink-0 text-gray-900" />
      <input
        id="searchbar"
        type="text"
        placeholder="와인을 검색해 보세요"
        className={cn(
          "h-5 min-w-0 flex-1 text-body-sm font-semibold tracking-[-0.02em] text-gray-900",
          "placeholder:font-semibold placeholder:text-gray-400",
          "focus:font-semibold focus:outline-none"
        )}
        {...props}
      />
    </label>
  );
};

export default Searchbar;
