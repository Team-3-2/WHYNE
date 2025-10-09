"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";
import PageModal from "@/components/modal/page-modal";
import ReviewFormClient from "@/app/wines/[id]/_components/wine-review-form/review-form-client";

export default function EditPage() {
  const router = useRouter();
  const params = useParams();
  const reviewId = Number(params?.reviewId);

  useEffect(() => {
    if (!reviewId) {
      router.replace("/wines");
    }
  }, [reviewId, router]);

  if (!reviewId) return null;

  return (
    <PageModal title="리뷰 수정하기">
      <ReviewFormClient reviewId={reviewId} mode="edit" />
    </PageModal>
  );
}
