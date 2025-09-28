import { cn } from "@/lib/utils";
import Icon from "../icon/icon";

interface WineImgProps {
  isError?: boolean;
  errorMsg?: string;
}

const WineImg = () => {
  return (
    <div>
      <label htmlFor="wine-img" className="flex flex-col gap-2">
        <p>와인 사진</p>
        <div
          className={cn(
            "h-[140px] w-[140px]",
            "rounded-[4px] border border-gray-300",
            "relative"
          )}
        >
          <Icon
            icon="CameraIcon"
            size={"lg"}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>
      </label>
      <input id="wine-img" type="file" accept="image/*" className="hidden" />
    </div>
  );
};

export default WineImg;
