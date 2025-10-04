// app/wines/[id]/_components/reviews/wine-review-rating.tsx
import StarRating from "@/components/star-rating/star-rating";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface WineReviewRatingProps {
  rating: number;
  createdAt: string;
  user: {
    nickname: string;
    image: string | null;
  };
}

export default function WineReviewRating({
  rating,
  createdAt,
  user,
}: WineReviewRatingProps) {
  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInDays > 0) return `${diffInDays}일 전`;
    if (diffInHours > 0) return `${diffInHours}시간 전`;
    return "방금 전";
  };

  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-4">
        {/* 프로필 이미지 */}
        <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-gray-200">
          {user.image ? (
            <Image
              src={user.image}
              alt={user.nickname}
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex-center h-full w-full text-gray-400">👤</div>
          )}
        </div>

        {/* 닉네임 + 별점 + 시간 */}
        <div className="flex flex-col gap-1">
          <span className="text-body-md font-bold text-gray-900">
            {user.nickname}
          </span>
          <div className="flex items-center gap-2">
            <StarRating rating={rating} size="sm" maxRating={5} />
            <span className="text-body-sm text-gray-500">
              {getTimeAgo(createdAt)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
