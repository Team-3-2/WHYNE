"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { getWine } from "@/api/wines/get-wine";
import { useReviewSubmit } from "../../_hooks/use-review-submit";
import ReviewForm from "./review-form";
import Loader from "@/components/loader/loader";
import type { ReviewFormData } from "../../_types";

interface ReviewFormClientProps {
  wineId: number;
}

/**
 * 리뷰 작성 폼 클라이언트 래퍼
 * @author junyrol
 * @param wineId
 * @returns
 * - 와인 정보 페칭
 * - 리뷰 제출 처리
 * - 로딩/에러 상태 관리
 */
export default function ReviewFormClient({ wineId }: ReviewFormClientProps) {
  const router = useRouter();
  const { mutate, isPending } = useReviewSubmit();

  // 와인 정보 페칭
  const {
    data: wine,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["wine", wineId],
    queryFn: () => getWine(wineId),
    retry: 1,
  });

  const handleSubmit = (data: ReviewFormData) => {
    mutate(data, {
      onSuccess: () => {
        alert("리뷰가 등록되었습니다!");
        router.back(); // 모달 닫기
      },
      onError: (error) => {
        alert("리뷰 등록에 실패했습니다. 다시 시도해주세요.");
      },
    });
  };

  const handleCancel = () => {
    router.back();
  };

  if (isLoading) {
    return (
      <div className="flex-center min-h-[400px]">
        <Loader />
      </div>
    );
  }

  if (isError || !wine) {
    return (
      <div className="flex-center min-h-[400px] flex-col gap-4">
        <p className="text-body-lg text-gray-500">
          와인 정보를 불러올 수 없습니다.
        </p>
        <button
          onClick={handleCancel}
          className="text-body-md text-primary underline"
        >
          돌아가기
        </button>
      </div>
    );
  }

  return (
    <ReviewForm
      wineId={wine.id}
      wineName={wine.name}
      wineRegion={wine.region}
      wineImage={wine.image}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      isSubmitting={isPending}
    />
  );
}
