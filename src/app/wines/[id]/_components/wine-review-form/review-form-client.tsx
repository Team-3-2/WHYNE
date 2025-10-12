"use client";

import { useRouter } from "next/navigation";
import useReviewMutation from "../../_hooks/use-review-mutation";
import useWineQuery from "../../../../../hooks/api/wines/use-wine-query";
import useReviewQuery from "../../../../../hooks/api/reviews/use-review-query";
import ReviewForm from "./review-form";
import Loader from "@/components/loader/loader";
import type { ReviewBase } from "@/types/wine";
import ReviewFormErrorState from "../wine-state/review-error-state";

interface ReviewFormClientProps {
  wineId?: number;
  reviewId?: number;
  mode?: "create" | "edit";
  className?: string;
}

const ReviewFormClient = ({
  wineId,
  reviewId,
  mode = "create",
  className,
}: ReviewFormClientProps) => {
  const router = useRouter();

  const reviewMutation = useReviewMutation({ mode, reviewId });
  const { mutate, isPending } = reviewMutation;

  const {
    data: review,
    isLoading: reviewLoading,
    isError: reviewError,
  } = useReviewQuery(reviewId, mode === "edit");

  const actualWineId = wineId ?? review?.wineId;

  const {
    data: wine,
    isLoading: wineLoading,
    isError: wineError,
  } = useWineQuery(actualWineId);

  const handleSubmit = (data: ReviewBase) => {
    mutate(data, {
      onSuccess: () => {
        alert(
          mode === "edit" ? "리뷰가 수정되었습니다!" : "리뷰가 등록되었습니다!"
        );
        router.back();
      },
      onError: () => {
        alert(
          mode === "edit"
            ? "리뷰 수정에 실패했습니다. 다시 시도해주세요."
            : "리뷰 등록에 실패했습니다. 다시 시도해주세요."
        );
      },
    });
  };

  const handleCancel = () => {
    router.back();
  };

  if (wineLoading || reviewLoading) {
    return (
      <div className="flex-center min-h-[400px]">
        <Loader />
      </div>
    );
  }

  if (wineError || !wine || (mode === "edit" && (reviewError || !review))) {
    return <ReviewFormErrorState onRetry={handleCancel} />;
  }

  return (
    <ReviewForm
      className={className}
      wine={wine}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      isSubmitting={isPending}
      initialData={review ?? undefined}
    />
  );
};

export default ReviewFormClient;
