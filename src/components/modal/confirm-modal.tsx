"use client";

import Button from "../button/basic-button";
import { useEffect, useRef } from "react";
import DefaultModal from "./default-modal";

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

  return (
    <DefaultModal ref={dialogRef} onCancel={onClose} className="px-4 pb-6 pt-8">
      <p className="text-heading-sm font-semibold text-gray-950">
        {msg.text || "모달 텍스트를 입력해주세요"}
      </p>
      <div className="flex gap-2">
        <Button
          appearance="outline"
          className="w-[136px]"
          onClick={onClose}
          label={msg.cancelMsg || "취소"}
        />
        <Button
          className="w-[136px]"
          onClick={onConfirm}
          label={msg.confirmMsg || "삭제하기"}
        />
      </div>
    </DefaultModal>
  );
};

export default ConfirmModal;
