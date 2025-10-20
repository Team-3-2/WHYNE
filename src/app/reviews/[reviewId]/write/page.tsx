"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";
import ReviewFormClient from "@/app/wines/[id]/_components/wine-review-form/review-form-client";
import { cn } from "@/lib/utils";

export default function WritePage() {
  const router = useRouter();
  const params = useParams();
  const reviewId = Number(params?.reviewId);

  useEffect(() => {
    if (!reviewId) router.replace("/wines");
  }, [reviewId, router]);

  if (!reviewId) return null;

  return (
    <main
      className={cn(
        "flex-center min-h-screen bg-gray-200 bg-[url('/images/common/bg-main.png')] bg-cover bg-no-repeat py-[35px]",
        "tablet:py-[70px]",
        "pc:py-[70px]"
      )}
    >
      <section
        className={cn(
          "container mt-[60px] flex flex-col gap-10 rounded-2xl bg-white px-[16px] py-8",
          "tablet:max-w-[480px]",
          "pc:max-w-[480px]"
        )}
      >
        <h1 className="px-5 text-heading-lg">리뷰 작성</h1>
        <ReviewFormClient
          wineId={Number(reviewId)}
          mode="create"
          className="max-w-none px-5 pb-[140px] tablet:pb-0 pc:pb-0"
        />
      </section>
    </main>
  );
}
