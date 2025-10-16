import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";

const RecommendCardSkeleton = () => {
  return (
    <div>
      {/* 이미지 영역 */}
      <div className="relative aspect-[1/1.13] w-full">
        <Image
          src="/images/placeholder/img-wine.svg"
          alt="추천 와인"
          fill
          className="fill-red-100 object-contain p-[20px]"
        />
      </div>
      {/* 정보 */}
      <div className="mt-[12px] text-center tablet:mt-[16px] pc:mt-[16px]">
        <Skeleton
          width="100%"
          height={16}
          style={{ margin: "0 auto 5px auto" }}
        />
        <Skeleton
          width="100%"
          height={14}
          style={{ margin: "0 auto 5px auto" }}
        />
        <Skeleton width="80%" height={16} style={{ margin: "0 auto" }} />
      </div>
    </div>
  );
};

export default RecommendCardSkeleton;
