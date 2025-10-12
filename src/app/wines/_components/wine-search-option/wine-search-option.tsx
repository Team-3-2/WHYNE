"use client";

import { Button, Icon } from "@/components";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { cn, allowScroll, lockingScroll } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { PriceOption, RatingOption, TypeOption } from "../wine-options";
import { useEffect, useRef, useState } from "react";

interface ModalProps {
  open: number;
  setModalOpen: (open: number) => void;
  resetSignal: number;
  resetFn: () => void;
}

const Modal = ({ open, setModalOpen, resetSignal, resetFn }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!dialogRef.current?.open && open) {
      dialogRef.current?.showModal();
      lockingScroll();
    } else {
      dialogRef.current?.close();
    }

    return () => {
      allowScroll();
    };
  }, [open]);

  if (!open) return null;

  return (
    <dialog
      ref={dialogRef}
      className="z-50 border-0 bg-transparent p-0 [&::backdrop]:bg-black/50"
      onClick={() => setModalOpen(0)}
    >
      <div
        className="mx-auto my-0 flex w-[375px] flex-col items-start overflow-hidden rounded-[16px] bg-white p-[24px] shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-y-[32px]">
          <div className="flex w-full items-center justify-between">
            <h2 className="text-heading-md">필터</h2>
            <button onClick={() => setModalOpen(0)} aria-label="검색 필터 닫기">
              <Icon icon="XIcon" size="lg" className="select-none" />
            </button>
          </div>
          <div className="flex flex-col gap-[16px]">
            <TypeOption />
            <hr />
            <PriceOption resetSignal={resetSignal} />
            <hr />
            <RatingOption />
          </div>
        </div>
        <div className="mt-10 flex w-full items-center justify-between gap-[8px]">
          <Button
            className="h-[54px] w-[1/3]"
            variant="outline"
            onClick={resetFn}
            label="초기화"
          />
          <Button
            className="h-[54px] flex-1"
            onClick={() => setModalOpen(0)}
            label="필터 적용하기"
          />
        </div>
      </div>
    </dialog>
  );
};

const WineSearchOption = ({
  setSearch,
}: {
  setSearch: (search: string) => void;
}) => {
  const router = useRouter();
  const breakpoint = useBreakpoint();
  const [modalOpen, setModalOpen] = useState(0);
  const [resetSignal, setResetSignal] = useState(0);
  const isMobileOrTablet = breakpoint === "mobile" || breakpoint === "tablet";

  const handleResetClick = () => {
    router.replace("/wines", { scroll: false });
    setSearch("");
    setResetSignal((prev) => prev + 1);
  };

  return (
    <>
      {isMobileOrTablet ? (
        <div className="order-2 flex justify-between">
          <button
            aria-label="옵션 열기"
            className="flex-center h-[42px] w-[42px] rounded-[8px] border border-gray-300 bg-white tablet:h-12 tablet:w-12"
            onClick={() => setModalOpen((prev) => prev + 1)}
          >
            <Icon icon="FilterIcon" className="select-none text-secondary" />
          </button>
          <Button
            label="와인 등록하기"
            className="w-[160px] tablet:w-[220px]"
          />
          <Modal
            open={modalOpen}
            setModalOpen={setModalOpen}
            resetFn={handleResetClick}
            resetSignal={resetSignal}
          />
        </div>
      ) : (
        <>
          <aside
            className={cn(
              isMobileOrTablet ? "w-full" : "w-[284px]",
              "order-1 flex flex-col gap-12"
            )}
            aria-label="필터"
          >
            <form aria-describedby="filter-help">
              <p id="filter-help" className="sr-only">
                타입, 가격, 평점으로 결과를 필터링합니다.
              </p>

              {/* 타입 선택 필터 */}
              <TypeOption />

              {/* 가격 선택 필터 */}
              <PriceOption resetSignal={resetSignal} />

              {/* 평점 선택 필터 */}
              <RatingOption />
            </form>
            <div className="flex w-full flex-col gap-3">
              <Button
                label="초기화"
                variant="outline"
                onClick={handleResetClick}
              />
              <Button
                label="와인 등록하기"
                onClick={() => router.push("/register/new")}
              />
            </div>
          </aside>
        </>
      )}
    </>
  );
};

export default WineSearchOption;
