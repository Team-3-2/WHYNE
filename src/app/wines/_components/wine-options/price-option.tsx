"use client";

import { useEffect, useMemo, useState } from "react";
import debounce from "lodash/debounce";
import { useUpdateQuery } from "../../_utils/use-update-query";

const MAX_PRICE = 100000;

const PriceOption = () => {
  const { setQuery, searchParams } = useUpdateQuery();

  const initial = Number(searchParams.get("maxPrice") ?? MAX_PRICE);
  const [price, setPrice] = useState(
    Number.isNaN(initial) ? MAX_PRICE : initial
  );

  const updateUrl = useMemo(
    () =>
      debounce((value: number) => {
        setQuery((params) => {
          if (value === MAX_PRICE) params.delete("maxPrice");
          else params.set("maxPrice", String(value));
        });
      }, 400),
    [setQuery]
  );

  useEffect(() => {
    return () => updateUrl.cancel();
  }, [updateUrl]);

  // 가격 선택 핸들러
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setPrice(value);
    updateUrl(value);
  };

  return (
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
          max={MAX_PRICE}
          step={1000}
          aria-label="최대 가격"
          className="w-full"
          value={price}
          onChange={handlePriceChange}
        />
      </div>
    </fieldset>
  );
};

export default PriceOption;
