import Image from "next/image";
import DefaultImage from "@/../public/images/profile/default-profile.svg";
import { isValidImageSrc, getTimeAgo } from "@/lib/utils";

interface WineReviewRatingProps {
  createdAt: string;
  user: {
    nickname: string;
    image?: string | null;
  };
}

const WineReviewRating = ({ createdAt, user }: WineReviewRatingProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
        {isValidImageSrc(user.image) ? (
          <Image
            src={user.image}
            alt={user.nickname}
            width={48}
            height={48}
            className="h-full w-full object-cover"
            draggable={false}
          />
        ) : (
          <DefaultImage
            className="h-full w-full object-cover"
            role="img"
            aria-label={`${user.nickname} 이미지 불러오기 실패`}
          />
        )}
      </div>

      <div className="flex flex-col">
        <span className="text-body-lg font-bold text-gray-900">
          {user.nickname}
        </span>
        <span className="text-body-sm text-gray-500">
          {getTimeAgo(createdAt)}
        </span>
      </div>
    </div>
  );
};

export default WineReviewRating;
