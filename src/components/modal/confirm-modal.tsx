"use client";

import { ReactNode, useEffect, useLayoutEffect, useRef } from "react";
import Button from "../button/basic-button";
import Modal from "./modal";
import { allowScroll, cn, lockingScroll } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  msg: {
    text: ReactNode;
    cancelMsg?: string;
    confirmMsg: string;
  };
  className?: string;
  onClose?: () => void;
  onConfirm?: () => void;
}

/**
 * 확인 모달창을 표출하는 컴포넌트
 * @author hwitae
 * @param isOpen 모달의 열림, 닫힘 상태
 * @param msg 모달의 메인 문구와 각 버튼에 표출할 문구를 받는 객체
 * @param onClose 취소 버튼 핸들러 함수
 * @param onConfirm 확인 버튼 핸들러 함수
 * @returns <dialog>
 */
const ConfirmModal = ({
  isOpen = false,
  msg,
  className,
  onClose = () => {},
  onConfirm = () => {},
}: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useLayoutEffect(() => {
    const currentScrollY = window.scrollY;

    if (isOpen) lockingScroll(currentScrollY);

    return () => {
      allowScroll(currentScrollY);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!dialogRef.current?.open && isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Modal
      ref={dialogRef}
      onCancel={onClose}
      className={cn("px-4 pb-6 pt-8 tablet:gap-8 pc:gap-8", className)}
    >
      <p
        className={cn(
          "text-heading-sm font-semibold tracking-[-0.02em] text-gray-950",
          "whitespace-pre-wrap text-center",
          "tablet:text-heading-md",
          "pc:text-heading-md"
        )}
      >
        {msg.text}
      </p>
      <div className={cn("flex gap-2")}>
        <Button
          variant="outline"
          className={cn(
            "h-[42px] w-[136px]",
            "tablet:h-[50px] tablet:w-[156px]",
            "pc:h-[50px] pc:w-[156px]"
          )}
          onClick={onClose}
          label={msg.cancelMsg || "취소"}
        />
        <Button
          className={cn(
            "w-[136px]",
            "mobile:h-[42px]",
            "tablet:h-[50px] tablet:w-[156px]",
            "pc:h-[50px] pc:w-[156px]"
          )}
          onClick={onConfirm}
          label={msg.confirmMsg}
        />
      </div>
    </Modal>
  );
};

export default ConfirmModal;
