import { cn } from "@/lib/utils";
import Icon from "../icon/icon";
import { ComponentProps } from "react";

interface WineImgProps extends ComponentProps<"input"> {
  isError?: boolean;
  errorMsg?: string;
}

const WineImg = ({ isError, errorMsg, ...props }: WineImgProps) => {
  return (
    <div className="flex items-end gap-2">
      <label htmlFor="wine-img" className="flex flex-col gap-2">
        <p className="text-body-sm tracking-[-0.02em]">와인 사진</p>
        <div
          className={cn(
            "relative h-[140px] w-[140px]",
            "cursor-pointer rounded-[4px] border border-gray-300",
            "hover:bg-gray-100 active:bg-gray-200",
            isError && "border-2 border-red-400"
          )}
        >
          <Icon
            icon="CameraIcon"
            size={"lg"}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>
      </label>
      {isError && (
        <p className="text-component-notes-md tracking-[-0.02em] text-red-400">
          {errorMsg}
        </p>
      )}
      <input
        id="wine-img"
        type="file"
        accept="image/*"
        className="hidden"
        {...props}
      />
    </div>
  );
};

export default WineImg;
