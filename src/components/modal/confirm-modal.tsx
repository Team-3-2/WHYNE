"use client";

import { createPortal } from "react-dom";
import Button from "../button/basic-button";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  msg: {
    text?: string;
    cancelMsg?: string;
    confirmMsg?: string;
  };
  onClose?: () => void;
  onConfirm?: () => void;
}

const ConfirmModal = ({
  isOpen = false,
  msg,
  onClose,
  onConfirm,
}: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!dialogRef.current?.open && isOpen) {
      dialogRef.current?.showModal();
    }
  }, [dialogRef, isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <dialog
      className={cn(
        "flex-col-center gap-6 bg-white",
        "px-4 pb-6 pt-8",
        "rounded-2xl border border-gray-200",
        ""
      )}
      ref={dialogRef}
      onCancel={onClose}
    >
      <p className="text-heading-sm font-semibold">
        {msg.text || "모달 텍스트를 입력해주세요"}
      </p>
      <div className="flex gap-2">
        <Button
          appearance="outline"
          className="w-[136px]"
          onClick={onClose}
          label={msg.cancelMsg || "취소"}
        ></Button>
        <Button
          className="w-[136px]"
          onClick={onConfirm}
          label={msg.confirmMsg || "삭제하기"}
        ></Button>
      </div>
    </dialog>,
    document.body
  );
};

export default ConfirmModal;
