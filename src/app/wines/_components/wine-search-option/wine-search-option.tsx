"use client";

import { Button, Icon, SelectType } from "@/components";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { cn } from "@/lib/utils";
import Link from "next/link";

const WINE_FIELDSET = [
  {
    id: "rating-all",
    label: "전체",
  },
  {
    id: "rating-45-50",
    label: "4.5 - 5.0",
  },
  {
    id: "rating-40-45",
    label: "4.0 - 4.5",
  },
  {
    id: "rating-35-40",
    label: "3.5 - 4.0",
  },
  {
    id: "rating-30-35",
    label: "3.0 - 3.5",
  },
];

const WineSearchOption = () => {
  const breakpoint = useBreakpoint();
  const isMobileOrTablet = breakpoint === "mobile" || breakpoint === "tablet";
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

              <SelectType isError={false} className="flex-col" />

              <fieldset className="mt-6">
                <legend className="text-heading-xs mb-3 block text-body-lg text-default">
                  가격
                </legend>
                <div className="flex flex-col gap-2">
                  <div className="flex w-full items-center justify-between text-sm">
                    <span aria-live="polite" className="text-body-md">
                      ₩ 0
                    </span>
                    <span aria-live="polite" className="text-body-md">
                      ₩ 74,000
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={74000}
                    step={1000}
                    aria-label="최대 가격"
                    className="w-full"
                  />
                </div>
              </fieldset>

              <fieldset className="mt-6">
                <legend className="text-heading-xs mb-3 block text-body-lg text-default">
                  평점
                </legend>

                {WINE_FIELDSET.map((fieldset) => (
                  <div className="flex items-center gap-3" key={fieldset.id}>
                    <input
                      type="checkbox"
                      id={fieldset.id}
                      className="h-5 w-5 border border-gray300 bg-white"
                    />
                    <label
                      className="select-none text-body-md text-default"
                      htmlFor={fieldset.id}
                    >
                      {fieldset.label}
                    </label>
                  </div>
                ))}
              </fieldset>
            </form>
            <div className="flex w-full flex-col gap-4">
              <div className="flex w-full gap-2">
                <Button label="초기화" variant="outline" />
                <Button label="검색" />
              </div>
              <Button label="와인 등록하기" />
            </div>
          </aside>
        </>
      )}
    </>
  );
};

export default WineSearchOption;
