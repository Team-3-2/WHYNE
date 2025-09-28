import Image from "next/image";
import DefaultProfile from "../../../public/images/profile/default-profile.svg";
import { cn } from "@/lib/utils";
import Icon from "../icon/icon";
import { ComponentProps } from "react";

interface ProfileProps extends ComponentProps<"input"> {
  url?: string;
  isEditing?: boolean;
  className?: string;
}

const Profile = ({
  url,
  isEditing = true,
  className,
  ...props
}: ProfileProps) => {
  return (
    <div className="group relative">
      <div
        className={cn(
          "rounded-full bg-white",
          isEditing && "hover:border hover:border-gray-300 hover:bg-gray-300",
          className
        )}
      >
        <label className="hover:cursor-pointer">
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
            {...props}
          />
          {isEditing && (
            <Icon
              icon="CameraIcon"
              size={"2xl"}
              className="absolute left-1/2 right-4 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 group-hover:block"
            />
          )}
        </label>
      </div>
    </div>
  );
};

export default Profile;
