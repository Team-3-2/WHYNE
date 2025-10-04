interface RatingBarProps {
  showRating: number;
  reviewCount: number;
  totalCount: number;
}

const RatingBar = ({ showRating, reviewCount, totalCount }: RatingBarProps) => {
  const percent = totalCount === 0 ? 0 : (reviewCount / totalCount) * 100;

  return (
    <div className="grid grid-cols-[40px_auto] items-center">
      <span className="text-body-md text-secondary">{showRating}점</span>
      <div
        role="progressbar"
        aria-label={`${showRating}점을 받은 리뷰 수는 ${reviewCount}개입니다.`}
        className="relative h-[6px] flex-1 overflow-hidden rounded-full bg-gray-200"
      >
        <span
          className="absolute left-0 top-0 h-full rounded-full bg-primary"
          style={{ width: `${percent}%` }}
        ></span>
      </div>
    </div>
  );
};

export default RatingBar;
