/**
 * 카드 최신 후기 컴포넌트
 * @param content : 후기 내용
 */

interface CardReviewProps {
  content: string;
}

const CardReview = ({ content }: CardReviewProps) => {
  return (
    <div className="border-t border-gray-300 py-[12px]">
      <div className="text-body-md font-semibold text-gray-900">최신 후기</div>
      <div className="mt-[8px] line-clamp-2 text-body-sm font-normal text-gray-500">
        {content}
      </div>
    </div>
  );
};

export default CardReview;
