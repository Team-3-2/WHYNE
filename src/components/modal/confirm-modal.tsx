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
