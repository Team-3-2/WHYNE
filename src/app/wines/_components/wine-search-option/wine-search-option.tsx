"use client";

import { Button, Icon } from "@/components";
import { TypeInput } from "@/components/select-type/select-type";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { WINE_FIELDSET } from "../../_constants/wine-fieldset";
import debounce from "lodash/debounce";

const WineSearchOption = () => {
  const router = useRouter();
  const breakpoint = useBreakpoint();
  const isMobileOrTablet = breakpoint === "mobile" || breakpoint === "tablet";
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [price, setPrice] = useState(100000);

  const type = ["RED", "WHITE", "SPARKLING"];

  // 타입 선택 핸들러
  const handleTypeClick = (type: string) => {
    router.replace(`/wines?&type=${type}`, {
      scroll: false,
    });
  };

  const updateUrl = debounce((value: number) => {
    const params = new URLSearchParams(searchParams);
    if (value === 100000) {
      params.delete("maxPrice");
    } else {
      params.set("maxPrice", value.toString());
    }

    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }, 400);

  // 가격 선택 핸들러
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setPrice(value);
    updateUrl(value);
  };

  // 평점 선택 핸들러
  const handleRatingClick = (rating: string) => {
    const params = new URLSearchParams(searchParams);
    if (rating === "전체") {
      params.delete("rating");
    } else {
      params.set("rating", rating);
    }

    const qs = params.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  // 초기화 핸들러
  const handleResetClick = () => {
    router.replace("/wines", { scroll: false });
  };

  return (
    <>
      {isMobileOrTablet ? (
        <div className="order-2 mb-4 flex justify-between">
          <Link
            href="/"
            aria-label="옵션 열기"
            className="flex-center h-12 w-12 rounded-[8px] border border-gray-300 bg-white"
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
              <div className="flex flex-col gap-5">
                <h2 className="text-body-lg">타입</h2>
                <div className="flex flex-col gap-2">
                  {type.map((item) => (
                    <TypeInput
                      key={item}
                      name={item as "SPARKLING" | "WHITE" | "RED"}
                      onClick={() => handleTypeClick(item)}
                    />
                  ))}
                </div>
              </div>

              {/* 가격 선택 필터 */}
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
                      ₩ {price}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100000}
                    step={1000}
                    aria-label="최대 가격"
                    className="w-full"
                    value={price}
                    onChange={handlePriceChange}
                  />
                </div>
              </fieldset>

              {/* 평점 선택 필터 */}
              <fieldset className="mt-6">
                <legend className="text-heading-xs mb-3 block text-body-lg text-default">
                  평점
                </legend>

                {WINE_FIELDSET.map((fieldset) => (
                  <div className="flex items-center gap-3" key={fieldset.id}>
                    <input
                      type="radio"
                      name="rating"
                      id={fieldset.id}
                      className="h-5 w-5 border border-gray-300 bg-white"
                      onClick={() => handleRatingClick(fieldset.id)}
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
            <div className="flex w-full flex-col gap-3">
              <Button
                label="초기화"
                variant="outline"
                onClick={handleResetClick}
              />
              <Button label="와인 등록하기" />
            </div>
          </aside>
        </>
      )}
    </>
  );
};

export default WineSearchOption;
