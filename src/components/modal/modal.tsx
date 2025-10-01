"use client";

import { cn } from "@/lib/utils";
import { ReactNode, Ref } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  ref: Ref<HTMLDialogElement>;
  className?: string;
  onCancel?: () => void;
  children?: ReactNode;
}

/**
 * 공통 모달
 * @author hwitae
 * @param isOpen 모달의 열림, 닫힘 상태
 * @param onCancel 취소 버튼 핸들러 함수
 * @returns <dialog>
 */

const Modal = ({ ref, className, onCancel, children }: ModalProps) => {
  return createPortal(
    <dialog
      className={cn(
        "flex-col-center gap-6 bg-white",
        "rounded-2xl border border-gray-200",
        "shadow-[0_16px_32px_-4px_rgba(12,12,13,0.1)]",
        className
      )}
      ref={ref}
      onCancel={onCancel}
    >
      {children}
    </dialog>,
    document.body
  );
};

export default Modal;
