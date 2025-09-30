import { cn } from "@/lib/utils";
import { forwardRef, ReactNode } from "react";
import { createPortal } from "react-dom";

interface DefaultModalHandles {
  onCancel?: () => void;
  children: ReactNode;
  className?: string;
}

/**
 * 모달 공통 디자인. ref를 받기 위해 forwardRef()로 작성
 * @author hwitae
 */
const DefaultModal = forwardRef<HTMLDialogElement, DefaultModalHandles>(
  function DefaultModal(props, ref) {
    const { onCancel, children, className } = props;
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
  }
);

export default DefaultModal;
