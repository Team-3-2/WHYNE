import { cn } from "@/lib/utils";
import Star from "./star";

const TOTAL_SCORE_STYLES = "mobile:grid tablet:grid pc:flex";

interface StarRatingProps {
  rating: number; //받은 별점
  maxRating?: number;
  score?: boolean; //기본 점수 표시 여부 (점수)
  totalScore?: boolean; // 총점 표시 여부 (점수/총점)
  fillPercent?: number;
  size?: "xs" | "sm" | "md" | "md2" | "lg" | "xl" | "2xl";
}

const StarRating = ({
  rating,
  maxRating = 5,
  score = false,
  totalScore = false,
  size = "sm",
}: StarRatingProps) => {
  const starFills = Array.from({ length: maxRating }, (_, i) => {
    const fillPercent = rating - i;
    if (fillPercent >= 1) return 100;
    if (fillPercent > 0) return fillPercent * 100;
    return 0;
  });
  const ratingValue = Number.isInteger(rating)
    ? rating.toString()
    : rating.toFixed(1);
  const maxRatingValue = maxRating.toFixed(1);

  return (
    <div
      className={cn(
        `flex items-center gap-x-[8px] gap-y-[12px] ${totalScore && TOTAL_SCORE_STYLES}`
      )}
    >
      <div className="flex">
        {starFills.map((fill, i) => (
          <Star key={i} fill={fill} size={size} />
        ))}
      </div>
      {/* score 타입 */}
      {score && (
        <span className="mt-[2px] text-body-lg text-default">
          {ratingValue}
        </span>
      )}
      {/* totalScore 타입 */}
      {totalScore && (
        <div className="text-[28px] font-bold leading-[32px] tracking-[-0.3px] pc:mt-[2px]">
          {ratingValue}
          <span className="text-gray-400"> / {maxRatingValue}</span>
        </div>
      )}
    </div>
  );
};

export default StarRating;
