"use client";

import { Button, Icon } from "@/components";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PriceOption, RatingOption, TypeOption } from "../wine-options";
import { useState } from "react";

const WineSearchOption = ({
  setSearch,
}: {
  setSearch: (search: string) => void;
}) => {
  const router = useRouter();
  const breakpoint = useBreakpoint();
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
          <Link
            href="/"
            aria-label="옵션 열기"
            className="flex-center h-[42px] w-[42px] rounded-[8px] border border-gray-300 bg-white tablet:h-12 tablet:w-12"
          >
            <Icon icon="FilterIcon" className="text-secondary" />
          </Link>
          <Button
            label="와인 등록하기"
            className="w-[160px] tablet:w-[220px]"
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
