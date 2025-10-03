"use client";

import { useState, use, useEffect, useRef } from "react";
import Button from "@/components/button/basic-button";
import Modal from "@/components/modal/modal";
import ReviewForm from "./_components/review-form";
import { useReviewSubmit } from "./_hooks/use-review-submit";
import { lockingScroll, allowScroll } from "@/lib/utils";

/**
 * 와인 상세 페이지
 * @author junyeol
 */
export default function WineDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const wineId = Number(id);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { mutate, isPending } = useReviewSubmit();

  useEffect(() => {
    if (!dialogRef.current) return;

    if (isModalOpen && !dialogRef.current.open) {
      dialogRef.current.showModal();
      lockingScroll();
    } else if (!isModalOpen && dialogRef.current.open) {
      dialogRef.current.close();
      allowScroll();
    }
  }, [isModalOpen]);

  const handleSubmit = (reviewData: any) => {
    mutate(reviewData, {
      onSuccess: () => {
        alert("리뷰가 성공적으로 등록되었습니다!");
        setIsModalOpen(false);
      },
      onError: (error: any) => {
        alert(`리뷰 등록 실패: ${error.message || "알 수 없는 오류"}`);
      },
    });
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8 rounded-lg bg-white p-6 shadow">
          <h1 className="mb-2 text-title-hero">와인 이름 (ID: {wineId})</h1>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <div className="mb-6 flex items-center justify-between">
            <Button
              onClick={() => setIsModalOpen(true)}
              label="리뷰 작성하기"
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal
          ref={dialogRef}
          onCancel={handleClose}
          className="!flex max-h-[90vh] max-w-[520px] !flex-col !items-start !justify-start overflow-y-auto px-8 py-8"
        >
          <ReviewForm
            wineId={wineId}
            wineName="Sentinel Carbernet Sauvignon 2016"
            wineRegion="Western Cape, South Africa"
            wineImage=""
            onSubmit={handleSubmit}
            onCancel={handleClose}
            isSubmitting={isPending}
          />
        </Modal>
      )}
    </div>
  );
}
