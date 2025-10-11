"use client";

import { useEffect, useMemo, useState } from "react";
import debounce from "lodash/debounce";
import { useUpdateQuery } from "../../_utils/use-update-query";
import { cn } from "@/lib/utils";
import { RANGE_BASE_STYLE } from "../../_constants/range-base-style";

const MIN_PRICE = 0;
const MAX_PRICE = 100000;

const PriceOption = () => {
  const { setQuery, searchParams } = useUpdateQuery();

  const initialMin = Number(searchParams.get("minPrice") ?? MIN_PRICE);
  const initialMax = Number(searchParams.get("maxPrice") ?? MAX_PRICE);

  const [minPrice, setMinPrice] = useState(
    Number.isNaN(initialMin) ? MIN_PRICE : initialMin
  );
  const [maxPrice, setMaxPrice] = useState(
    Number.isNaN(initialMax) ? MAX_PRICE : initialMax
  );

  const updateUrl = useMemo(
    () =>
      debounce((min: number, max: number) => {
        setQuery((params) => {
          if (min <= MIN_PRICE) params.delete("minPrice");
          else params.set("minPrice", String(min));

          if (max >= MAX_PRICE) params.delete("maxPrice");
          else params.set("maxPrice", String(max));
        });
      }, 400),
    [setQuery]
  );

  useEffect(() => {
    return () => updateUrl.cancel();
  }, [updateUrl]);

  // 최소 가격 핸들러
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value <= maxPrice) {
      setMinPrice(value);
      updateUrl(value, maxPrice);
    }
  };

  // 최대 가격 핸들러
  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= minPrice) {
      setMaxPrice(value);
      updateUrl(minPrice, value);
    }
  };

  return (
    <fieldset className="mt-6">
      <legend className="text-heading-xs mb-3 block text-body-lg text-default">
        가격
      </legend>
      <div className="flex flex-col gap-2">
        <div className="flex w-full items-center justify-between text-sm">
          <span aria-live="polite" className="text-body-md">
            ₩ {minPrice.toLocaleString()}
          </span>
          <span aria-live="polite" className="text-body-md">
            ₩ {maxPrice.toLocaleString()}
          </span>
        </div>

        <div className="relative h-5 w-full">
          <input
            type="range"
            min={MIN_PRICE}
            max={MAX_PRICE}
            step={1000}
            value={minPrice}
            onChange={handleMinChange}
            aria-label="최소 가격"
            className={cn(
              RANGE_BASE_STYLE,
              "pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto"
            )}
          />

          <input
            type="range"
            min={MIN_PRICE}
            max={MAX_PRICE}
            step={1000}
            value={maxPrice}
            onChange={handleMaxChange}
            aria-label="최대 가격"
            className={cn(
              RANGE_BASE_STYLE,
              "pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto"
            )}
          />

          <div className="absolute top-1/2 h-1 w-full -translate-y-1/2 rounded bg-gray-200" />

          <div
            className="absolute h-1 rounded bg-black"
            style={{
              left: `${(minPrice / MAX_PRICE) * 100}%`,
              right: `${100 - (maxPrice / MAX_PRICE) * 100}%`,
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default PriceOption;
