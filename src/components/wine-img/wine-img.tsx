import { cn } from "@/lib/utils";
import Icon from "../icon/icon";
import { ComponentProps } from "react";
import { REGISTER_STYLES } from "./style";

interface WineImgProps extends ComponentProps<"input"> {
  isError?: boolean;
  errorMsg?: string;
}

/**
 * 와인 이미지 등록 컴포넌트
 * @author hwitae
 * @param isError 오류 여부
 * @param errorMsg 표시할 에러 메시지
 * @returns
 */
const WineImg = ({ isError, errorMsg, ...props }: WineImgProps) => {
  return (
    <div className="flex items-end gap-2">
      <label htmlFor="wine-img" className="flex flex-col gap-2">
        <p className="text-body-sm tracking-[-0.02em]">와인 사진</p>
        <div
          className={cn(
            REGISTER_STYLES.label,
            isError && "border-2 border-red-400"
          )}
        >
          <Icon
            icon="CameraIcon"
            size={"lg"}
            className={REGISTER_STYLES.icon}
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
