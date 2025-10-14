import { cn } from "@/lib/utils";
import FillShape from "./fill-shape";
import { RATING_RATIO_STYLES } from "./style";
import type { UnifiedIconName } from "@/components/icon/icon";

/**
 * 별점 컴포넌트
 * @param icon 별점 아이콘 (기본값: StarIcon)
 * @param rating 받은 별점
 * @param maxRating 최대 별점 (기본값: 5)
 * @param showRating 기본 점수 표시 여부 (점수)
 * @param showRatingRatio 총점 표시 여부 (점수/총점)
 * @param size 별 크기 (기본값: sm)
 */

interface RatingProps {
  icon?: UnifiedIconName;
  rating: number; //받은 별점
  maxRating?: number; //최대 별점 (기본값: 5)
  showRating?: boolean; //기본 점수 표시 여부 (점수)
  showRatingRatio?: boolean; // 총점 표시 여부 (점수/총점)
  fillPercent?: number;
  size?: "xs" | "sm" | "md" | "md2" | "lg" | "xl" | "2xl";
}

const Rating = ({
  icon = "StarIcon",
  rating,
  maxRating = 5,
  showRating = false,
  showRatingRatio = false,
  size = "sm",
}: RatingProps) => {
  const RaitingFills = Array.from({ length: maxRating }, (_, i) => {
    const fillPercent = rating - i;
    if (fillPercent >= 1) return 100;
    if (fillPercent > 0) return fillPercent * 100;
    return 0;
  });
  const ratingValue = rating.toFixed(1);
  const maxRatingValue = maxRating.toFixed(1);

  return (
    <div
      className={cn(
        `flex items-center gap-x-[8px] gap-y-[12px] ${showRatingRatio && RATING_RATIO_STYLES}`
      )}
    >
      <div className="flex">
        {RaitingFills.map((fill, i) => (
          <FillShape icon={icon} key={i} fill={fill} size={size} />
        ))}
      </div>
      {/* showRating */}
      {showRating && (
        <span className="relative top-[1px] text-body-lg text-default">
          {ratingValue}
        </span>
      )}
      {/* showRatingRatio */}
      {showRatingRatio && (
        <div className="text-[28px] font-bold leading-[32px] tracking-[-0.3px] pc:relative">
          {ratingValue}
          <span className="text-gray-400"> / {maxRatingValue}</span>
        </div>
      )}
    </div>
  );
};

export default Rating;
