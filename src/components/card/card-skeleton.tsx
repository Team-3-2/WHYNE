import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface CardSkeletonProps {
  showReview?: boolean;
}

const CardSkeleton = ({ showReview = false }: CardSkeletonProps) => {
  return (
    <div className="group relative w-full">
      {/* 이미지 영역 */}
      <Skeleton
        width="100%"
        style={{ aspectRatio: "1 / 1", borderRadius: 12 }}
      />
      <div className="relative pt-[24px]">
        {/* 정보 */}
        <Skeleton width="70%" height={20} style={{ marginBottom: 8 }} />
        <Skeleton width="40%" height={16} style={{ marginBottom: 8 }} />
        <Skeleton width="25%" height={16} style={{ marginBottom: 16 }} />
        {/* 최근리뷰 */}
        {showReview && (
          <>
            <Skeleton width="100%" height={16} style={{ marginBottom: 8 }} />
            <Skeleton width="83%" height={16} />
          </>
        )}
      </div>
    </div>
  );
};

export default CardSkeleton;
