"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import getWine from "@/api/wines/get-wine";
import getReview from "@/api/reviews/get-review";
import useReviewMutation from "../../_hooks/use-review-mutation";
import ReviewForm from "./review-form";
import Loader from "@/components/loader/loader";
import type { ReviewBase } from "@/types/wine";
import ReviewFormErrorState from "../wine-state/review-error-state";

interface ReviewFormClientProps {
  wineId?: number; // optional
  reviewId?: number;
  mode?: "create" | "edit";
}

const ReviewFormClient = ({
  wineId,
  reviewId,
  mode = "create",
}: ReviewFormClientProps) => {
  const router = useRouter();

  const reviewMutation = useReviewMutation({ mode, reviewId });
  const { mutate, isPending } = reviewMutation;

  const {
    data: review,
    isLoading: reviewLoading,
    isError: reviewError,
  } = useQuery({
    queryKey: ["review", reviewId],
    queryFn: () => getReview(reviewId!),
    enabled: mode === "edit" && !!reviewId,
  });

  const actualWineId = wineId ?? review?.wineId;

  const {
    data: wine,
    isLoading: wineLoading,
    isError: wineError,
  } = useQuery({
    queryKey: ["wine", actualWineId],
    queryFn: () => getWine(actualWineId!),
    retry: 1,
    enabled: !!actualWineId,
  });

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
      wine={wine}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      isSubmitting={isPending}
      initialData={review ?? undefined}
    />
  );
};

export default ReviewFormClient;
