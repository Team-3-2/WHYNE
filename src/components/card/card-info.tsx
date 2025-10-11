import Rating from "@/components/rating/rating";

/**
 * 카드 정보 컴포넌트
 * @param name : 이름
 * @param region : 지역
 * @param price : 가격
 * @param avgRating : 평균 별점
 * @param reviewCount : 후기 개수
 * @param ratingWrapperClassName : 별점 래퍼 클래스명
 * @param reviewCountClassName : 후기 개수 클래스명
 * @param nameClassName : 이름 클래스명
 * @param regionClassName : 지역 클래스명
 * @param priceClassName : 가격 클래스명
 */

interface CardInfoProps {
  name: string;
  region?: string;
  price?: number;
  avgRating?: number;
  reviewCount?: number;
  className?: string;
  ratingWrapperClassName?: string;
  reviewCountClassName?: string;
  nameClassName?: string;
  regionClassName?: string;
  priceClassName?: string;
}

const CardInfo = ({
  name,
  region,
  price,
  avgRating,
  reviewCount = 0,
  className,
  ratingWrapperClassName,
  reviewCountClassName,
  nameClassName,
  regionClassName,
  priceClassName,
}: CardInfoProps) => {
  return (
    <div className={`pb-[24px] pr-[26px] ${className}`}>
      {typeof avgRating === "number" && (
        <div
          className={`mb-[12px] flex items-center gap-[14px] ${ratingWrapperClassName}`}
        >
          <Rating rating={avgRating} />
          <span
            className={`relative text-body-sm font-normal text-gray-500 ${reviewCountClassName}`}
          >
            {reviewCount > 0
              ? `${reviewCount.toLocaleString()}개의 후기`
              : "아직 후기가 없어요"}
          </span>
        </div>
      )}
      <div>
        <div className={`line-clamp-2 text-heading-lg ${nameClassName}`}>
          {name}
        </div>
        <div
          className={`mt-[6px] line-clamp-2 text-body-sm font-normal text-gray-500 ${regionClassName}`}
        >
          {region}
        </div>
      </div>
      {typeof price === "number" && (
        <div
          className={`mt-[20px] text-heading-lg font-bold pc:mt-[24px] ${priceClassName}`}
        >
          {price.toLocaleString()}원
        </div>
      )}
    </div>
  );
};

export default CardInfo;
