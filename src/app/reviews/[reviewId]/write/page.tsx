"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";
import ReviewFormClient from "@/app/wines/[id]/_components/wine-review-form/review-form-client";

export default function WritePage() {
  const router = useRouter();
  const params = useParams();
  const reviewId = Number(params?.reviewId);

  useEffect(() => {
    if (!reviewId) router.replace("/wines");
  }, [reviewId, router]);

  if (!reviewId) return null;

  return (
    <main className="min-h-screen bg-gray-100 bg-[url('/images/common/bg-main.png')] bg-cover bg-no-repeat">
      <section className="container mx-auto flex max-w-[460px] flex-col gap-10 bg-white py-12 pt-24 tablet:max-w-[740px] pc:max-w-[1020px]">
        <h1 className="text-heading-lg">리뷰 작성</h1>
        <ReviewFormClient
          wineId={Number(reviewId)}
          mode="create"
          className="max-w-none px-5 pb-[140px] tablet:pb-0 pc:pb-0"
        />
      </section>
    </main>
  );
}
