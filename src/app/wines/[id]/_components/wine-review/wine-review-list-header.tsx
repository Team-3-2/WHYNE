interface ReviewListHeaderProps {
  totalCount: number;
}
const ReviewListHeader = ({ totalCount }: ReviewListHeaderProps) => (
  <div className="mb-4 flex items-center gap-3 tablet:mb-6 pc:mb-6">
    <h2 className="text-heading-lg text-gray-900">리뷰 목록</h2>
    <span className="text-body-md text-gray-500">
      {totalCount.toLocaleString()}개
    </span>
  </div>
);
export default ReviewListHeader;
