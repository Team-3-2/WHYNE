import LinkButton from "@/components/button/link-button";

interface ReviewEmptyStateProps {
  wineId: number;
}
const ReviewEmptyState = ({ wineId }: ReviewEmptyStateProps) => (
  <div className="flex-col-center py-16 tablet:py-20">
    <div className="flex-center mb-4 h-20 w-20 rounded-full bg-gray-200 tablet:mb-6 tablet:h-24 tablet:w-24">
      <span className="text-title-page-sm text-gray-500 tablet:text-title-page-md">
        !
      </span>
    </div>
    <p className="mb-4 text-body-lg text-gray-500 tablet:mb-6">
      작성된 리뷰가 없어요
    </p>
    <LinkButton
      href={`/reviews/${wineId}/write`}
      scroll={false}
      label="리뷰 남기기"
      className="h-[42px] w-[240px] tablet:h-[50px] tablet:w-[283px]"
    />
  </div>
);
export default ReviewEmptyState;
