"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";
import ReviewFormClient from "@/app/wines/[id]/_components/wine-review-form/review-form-client";

export default function EditPage() {
  const router = useRouter();
  const params = useParams();
  const reviewId = Number(params?.reviewId);

  useEffect(() => {
    if (!reviewId) router.replace("/wines");
  }, [reviewId, router]);

  if (!reviewId) return null;

  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto flex max-w-[460px] flex-col gap-10 py-12 pt-24 tablet:max-w-[740px] pc:max-w-[1020px]">
        <h1 className="text-heading-lg">리뷰 수정</h1>
        <ReviewFormClient
          reviewId={reviewId}
          mode="edit"
          className="max-w-none pb-[140px] tablet:pb-0 pc:pb-0"
        />
      </section>
    </main>
  );
}
