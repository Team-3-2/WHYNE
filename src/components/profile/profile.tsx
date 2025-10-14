import Image from "next/image";
import DefaultProfile from "../../../public/images/profile/default-profile.svg";
import { cn } from "@/lib/utils";
import Icon from "../icon/icon";
import { ChangeEvent, ComponentProps } from "react";

interface ProfileProps extends ComponentProps<"input"> {
  url?: string;
  isEditing?: boolean;
  className?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * 프로필 컴포넌트
 * @author hwitae
 * @param url 이미지 경로
 * @param isEditing 이미지 업로드 기능 활성화 여부
 * @param className 스타일
 * @param handleChange 이미지 업로드 시 호출되는 함수
 * @returns input
 */
const Profile = ({
  url,
  isEditing = true,
  className,
  handleChange,
  ...props
}: ProfileProps) => {
  return (
    <div className="group relative">
      <div
        className={cn(
          "relative cursor-pointer overflow-hidden rounded-full border border-transparent bg-white",
          isEditing && "hover:border-gray-300 hover:bg-gray-300",
          className
        )}
      >
        <label
          className={cn(
            "after:absolute after:left-0 after:top-0 after:z-[2] after:h-full after:w-full after:rounded-[4px] after:bg-[rgba(233,233,233,0.7)] after:opacity-0 after:duration-100 after:[backdrop-filter:blur(4px)]",
            "hover:cursor-pointer hover:after:opacity-100"
          )}
        >
          {url ? (
            <Image
              src={url}
              width={164}
              height={164}
              alt="프로필 이미지"
              className="h-[164px] w-[164px] rounded-full object-cover"
              draggable={false}
              priority
            />
          ) : (
            <DefaultProfile width="164px" height="164px" />
          )}
          <input
            id="uploadImg"
            type="file"
            accept="image/*"
            className="hidden"
            disabled={!isEditing}
            onChange={(e) => {
              handleChange?.(e);
            }}
            {...props}
          />
          {isEditing && (
            <Icon
              icon="CameraIcon"
              size={"2xl"}
              className="absolute left-1/2 right-4 top-1/2 z-[3] hidden -translate-x-1/2 -translate-y-1/2 duration-100 group-hover:block"
            />
          )}
        </label>
      </div>
    </div>
  );
};

export default Profile;
