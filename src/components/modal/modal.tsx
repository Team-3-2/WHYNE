"use client";

import { allowScroll, cn, lockingScroll } from "@/lib/utils";
import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface CommonModalProps {
  isOpen?: boolean;
  className?: string;
  onCancel?: () => void;
  children?: ReactNode;
}

/**
 * 공통 모달
 * @author hwitae
 * @param isOpen 모달의 열림, 닫힘 상태
 * @param onClose 취소 버튼 핸들러 함수
 * @returns <dialog>
 */
const Modal = ({
  isOpen = false,
  onCancel,
  className,
  children,
}: CommonModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    let prevScrollY = window.scrollY;

    if (!dialogRef.current?.open && isOpen) {
      dialogRef.current?.showModal();
      lockingScroll();
    } else {
      dialogRef.current?.close();
    }

    return () => {
      allowScroll(prevScrollY);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <dialog
      className={cn(
        "flex-col-center gap-6 bg-white",
        "rounded-2xl border border-gray-200",
        "shadow-[0_16px_32px_-4px_rgba(12,12,13,0.1)]",
        className
      )}
      ref={dialogRef}
      onCancel={onCancel}
    >
      {children}
    </dialog>,
    document.body
  );
};

export default Modal;
