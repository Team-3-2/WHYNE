import Image from "next/image";

interface WineReviewRatingProps {
  createdAt: string;
  user: {
    nickname: string;
    image: string | null;
  };
}

const WineReviewRating = ({ createdAt, user }: WineReviewRatingProps) => {
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
    <div className="flex items-center gap-3">
      {/* 프로필 이미지 */}
      <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-gray-200">
        {user.image ? (
          <Image
            src={user.image}
            alt={user.nickname}
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex-center h-full w-full text-2xl text-gray-400">
            👤
          </div>
        )}
      </div>

      {/* 닉네임 + 시간 */}
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
