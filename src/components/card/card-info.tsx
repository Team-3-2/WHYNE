import Rating from "@/components/rating/rating";

/**
 * 카드 정보 컴포넌트
 * @param name : 이름
 * @param region : 지역
 * @param price : 가격
 * @param avgRating : 평균 별점
 * @param reviewCount : 후기 개수
 */

interface CardInfoProps {
  name: string;
  region?: string;
  price?: number;
  avgRating?: number;
  reviewCount?: number;
}

const CardInfo = ({
  name,
  region,
  price,
  avgRating,
  reviewCount,
}: CardInfoProps) => {
  return (
    <div className="pb-[24px] pr-[26px]">
      {typeof avgRating === "number" && (
        <div className="mb-[12px] flex items-center gap-[14px]">
          <Rating rating={avgRating} />
          <span className="relative text-body-sm font-normal text-gray-500">
            {reviewCount}개의 후기
          </span>
        </div>
      )}
      <div className="max-w-[280px]">
        <div className="line-clamp-2 text-heading-lg">{name}</div>
        <div className="mt-[6px] text-body-sm font-normal text-gray-500">
          {region}
        </div>
      </div>
      {typeof price === "number" && (
        <div className="mt-[20px] text-heading-lg font-bold pc:mt-[24px]">
          {price.toLocaleString()}원
        </div>
      )}
    </div>
  );
};

export default CardInfo;
