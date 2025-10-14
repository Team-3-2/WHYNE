"use client";

import { useRouter } from "next/navigation";
import useReviewMutation from "../../_hooks/use-review-mutation";
import useWineQuery from "../../../../../hooks/api/wines/use-wine-query";
import useReviewQuery from "../../../../../hooks/api/reviews/use-review-query";
import ReviewForm from "./review-form";
import Loader from "@/components/loader/loader";
import { useToast } from "@/hooks/use-toast";
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
  const {
    reviewCreateSuccess,
    reviewCreateError,
    reviewUpdateSuccess,
    reviewUpdateError,
  } = useToast();

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
        if (mode === "edit") {
          reviewUpdateSuccess();
        } else {
          reviewCreateSuccess();
        }
        router.back();
      },
      onError: () => {
        if (mode === "edit") {
          reviewUpdateError();
        } else {
          reviewCreateError();
        }
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
