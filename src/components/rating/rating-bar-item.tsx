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
      <meter
        min={0}
        max={100}
        value={percent}
        aria-label={`${showRating}점을 받은 리뷰 수는 ${reviewCount}개입니다.`}
      ></meter>
    </div>
  );
};

export default RatingBar;
