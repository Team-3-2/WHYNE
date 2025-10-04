"use client";

import { ReactNode, useEffect, useRef } from "react";
import Modal from "./modal";
import { useRouter } from "next/navigation";
import { allowScroll, lockingScroll } from "@/lib/utils";
import IconButton from "../button/icon-button";

interface PageModalProps {
  title: string;
  children: ReactNode;
}

const PageModal = ({ title = "등록 하기", children }: PageModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!modalRef.current?.open) modalRef.current?.showModal();
    lockingScroll();

    return () => {
      allowScroll();
    };
  });

  return (
    // TODO: 모바일 반응형 스타일 작성
    <Modal
      ref={modalRef}
      className="relative tablet:px-6 tablet:py-8 pc:px-6 pc:pb-8"
      onCancel={() => router.back()}
    >
      {/* 모달 상단 영역 */}
      <div className="sticky top-0 flex w-full items-center justify-between bg-white pt-8">
        <p className="text-heading-lg text-default">{title}</p>
        <IconButton
          icon="XIcon"
          iconSize={"lg"}
          iconColor={"gray300"}
          aria-label="모달 닫기"
          className="border-none pc:h-8 pc:w-8"
          onClick={() => router.back()}
        />
      </div>
      {children}
    </Modal>
  );
};

export default PageModal;
