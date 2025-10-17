"use client";

import { ReactNode, useEffect, useLayoutEffect, useRef } from "react";
import Modal from "./modal";
import { useRouter } from "next/navigation";
import { allowScroll, cn, lockingScroll } from "@/lib/utils";
import IconButton from "../button/icon-button";

interface PageModalProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const PageModal = ({
  title = "등록 하기",
  children,
  className,
}: PageModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  const handleCancel = (e: Event) => {
    e.preventDefault();
  };

  const handleCancelEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      router.back();
      e.preventDefault();
    }
  };

  useLayoutEffect(() => {
    const currentScrollY = window.scrollY;
    lockingScroll(currentScrollY);

    return () => {
      allowScroll(currentScrollY);
    };
  }, []);

  useEffect(() => {
    if (!modalRef.current?.open) modalRef.current?.showModal();

    if (modalRef.current) {
      modalRef.current.addEventListener("cancel", handleCancel);
      modalRef.current.addEventListener("keydown", handleCancelEsc);
    }

    return () => {
      modalRef.current?.removeEventListener("cancel", handleCancel);
      modalRef.current?.removeEventListener("keydown", handleCancelEsc);
    };
  }, [modalRef]);

  return (
    <Modal
      ref={modalRef}
      className={cn(
        "h-[738px] border-none px-6 tablet:relative pc:relative",
        "mobile:bottom-0 mobile:left-0 mobile:right-0 mobile:mb-0 mobile:w-full mobile:max-w-full",
        "mobile:rounded-none mobile:rounded-t-2xl",
        "tablet:h-[1010px]",
        "pc:h-[1010px]",
        className
      )}
    >
      {/* 모달 상단 영역 */}
      <div className="sticky top-0 z-10 flex w-full items-center justify-between bg-white pt-8">
        <p
          className={cn(
            "text-default mobile:text-heading-md",
            "tablet:text-heading-lg",
            "pc:text-heading-lg"
          )}
        >
          {title}
        </p>
        <IconButton
          icon="XIcon"
          iconSize={"lg"}
          iconColor="gray300"
          aria-label="모달 닫기"
          className="h-6 w-6 border-none focus:outline-none"
          onClick={() => router.back()}
          autoFocus={false}
        />
      </div>
      <div className="mobile:h-[526px] tablet:h-[764px] pc:h-[764px]">
        {children}
      </div>
    </Modal>
  );
};

export default PageModal;
