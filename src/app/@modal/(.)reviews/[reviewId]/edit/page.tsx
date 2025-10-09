"use client";

import { useParams } from "next/navigation";
import PageModal from "@/components/modal/page-modal";
import ReviewFormClient from "@/app/wines/[id]/_components/wine-review-form/review-form-client";

export default function EditModalPage() {
  const params = useParams();
  const reviewId = Number(params.reviewId);

  return (
    <PageModal title="리뷰 수정">
      <ReviewFormClient reviewId={reviewId} mode="edit" />
    </PageModal>
  );
}
