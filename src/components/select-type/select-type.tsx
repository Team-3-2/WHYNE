import { cn } from "@/lib/utils";
import Image from "next/image";

const SelectType = ({ isError }: { isError: boolean }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <p className="text-body-sm tracking-[-0.02em] text-default">타입</p>
        {isError && (
          <p className="text-component-notes-md tracking-[-0.02em] text-danger">
            와인 타입은 필수 입력이에요
          </p>
        )}
      </div>
      <div className="flex gap-[10px]">
        <div
          className={cn(
            "px-2 py-[7px]",
            "rounded-full border border-border-secondary",
            "flex items-center gap-[6px]",
            "bg-white"
          )}
        >
          <input type="radio" id="red" value={"RED"} className="hidden" />
          <div className="h-6 w-6 bg-black"></div>
          <label
            htmlFor="red"
            className={cn(
              "inline-block text-body-sm tracking-[-0.02em] text-default"
            )}
          >
            Red
          </label>
        </div>
      </div>
    </div>
  );
};

export default SelectType;
