import Image from "next/image";
import DefaultProfile from "../../../public/images/profile/default-profile.svg";
import { cn } from "@/lib/utils";
import Icon from "../icon/Icon";

interface ProfileProps {
  url?: string;
}

const Profile = ({ url }: ProfileProps) => {
  return (
    <div className="group relative">
      <div
        className={cn(
          "rounded-full bg-white",
          "hover:border hover:border-gray-300 hover:bg-gray-300"
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
          />
          <Icon
            icon="CameraIcon"
            size={"2xl"}
            className="absolute left-1/2 right-4 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 group-hover:block"
          />
        </label>
      </div>
    </div>
  );
};

export default Profile;
