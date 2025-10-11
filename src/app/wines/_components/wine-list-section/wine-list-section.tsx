"use client";

import { cn } from "@/lib/utils";
import Searchbar from "@/components/searchbar/searchbar";
import WineList from "../wine-list/wine-list";
import useGetWineList from "@/hooks/api/wines/use-get-wine-list";
import { useSearchParams } from "next/navigation";
import WineSearchOption from "../wine-search-option/wine-search-option";
import { useState, useCallback } from "react";
import debounce from "lodash/debounce";
import { parseQueryParams } from "../../_utils/parse-query-params";

const limit = 10;

const WineListSection = () => {
  const params = useSearchParams();
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const { type, rating, maxPrice, minPrice } = parseQueryParams(params);

  const debouncedSetSearch = debounce((value: string) => {
    setDebouncedSearch(value);
  }, 400);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearch(value);
      debouncedSetSearch(value);
    },
    [debouncedSetSearch]
  );

  const { data } = useGetWineList({
    limit,
    type,
    rating,
    maxPrice,
    minPrice,
    name: debouncedSearch,
  });

  console.log(data);

  return (
    <section
      aria-labelledby="browse-title"
      className={cn(
        "container flex w-full flex-col gap-[24px]",
        "tablet:gap-[40px]",
        "pc:mt-[45px] pc:flex-row pc:items-start pc:gap-[60px]"
      )}
    >
      {/* 검색 옵션 */}
      <WineSearchOption />

      {/* 검색바 */}
      <Searchbar
        className="order-1 flex-1 pc:order-2"
        value={search}
        onChange={handleSearchChange}
      />

      {/* 와인 목록 */}
      <WineList />
    </section>
  );
};

export default WineListSection;
