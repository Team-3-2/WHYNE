// app/@modal/(.)reviews/[reviewId]/edit/page.tsx
import PageModal from "@/components/modal/page-modal";
import ReviewFormClient from "@/app/wines/[id]/_components/wine-review-form/review-form-client";

interface EditModalPageProps {
  params: Promise<{ reviewId: string }>;
}

/**
 * 리뷰 수정 모달 페이지 (인터셉팅)
 * - 클라이언트 네비게이션으로 접근 시 모달로 표시
 */
async function EditModalPage({ params }: EditModalPageProps) {
  const { reviewId } = await params;

  return (
    <PageModal title="리뷰 수정">
      <ReviewFormClient reviewId={Number(reviewId)} mode="edit" />
    </PageModal>
  );
}

export default EditModalPage;
