// app/reviews/[reviewId]/edit/page.tsx
import ReviewFormClient from "@/app/wines/[id]/_components/wine-review-form/review-form-client";

interface EditPageProps {
  params: Promise<{ reviewId: string }>;
}

/**
 * 리뷰 수정 페이지 (직접 접근용)
 */
async function EditPage({ params }: EditPageProps) {
  const { reviewId } = await params;

  return (
    <div className="container py-10">
      <h1 className="mb-6 text-2xl font-bold">리뷰 수정</h1>
      <ReviewFormClient reviewId={Number(reviewId)} mode="edit" />
    </div>
  );
}

export default EditPage;
