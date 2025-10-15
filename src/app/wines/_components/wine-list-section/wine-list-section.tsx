"use client";

import { useMemo, useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import Searchbar from "@/components/searchbar/searchbar";
import WineList from "../wine-list/wine-list";
import CardSkeleton from "@/components/card/card-skeleton";
import { useInfiniteScroll } from "@/hooks/use-infinite-scroll";
import getWineList from "@/api/wines/get-wine-list";
import { useSearchParams } from "next/navigation";
import WineSearchOption from "../wine-search-option/wine-search-option";

import debounce from "lodash/debounce";
import { parseQueryParams } from "../../_utils/parse-query-params";

const limit = 4;

const WineListSection = () => {
  const params = useSearchParams();
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const { type, rating, maxPrice, minPrice } = parseQueryParams(params);

  const debouncedSetSearch = useMemo(
    () =>
      debounce((value: string) => {
        setDebouncedSearch(value);
      }, 400),
    []
  );

  useEffect(() => {
    return () => {
      debouncedSetSearch.cancel();
    };
  }, [debouncedSetSearch]);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearch(value);
      debouncedSetSearch(value);
    },
    [debouncedSetSearch]
  );

  const filters = useMemo(
    () => ({
      limit,
      type,
      rating,
      maxPrice,
      minPrice,
      name: debouncedSearch,
    }),
    [type, rating, maxPrice, minPrice, debouncedSearch]
  );

  const queryKey = useMemo(() => ["wine-list", filters], [filters]);

  const {
    data,
    allItems: wines,
    observerRef,
    isLoading,
    isFetchingNextPage,
  } = useInfiniteScroll({
    queryKey,
    fetchFn: (cursor) =>
      getWineList({
        cursor,
        ...filters,
      }),
    staleTime: 1000 * 60 * 5,
  });

  const wineList = wines;

  const isInitialLoading = isLoading && wines.length === 0;

  return (
    <section
      aria-labelledby="browse-title"
      className={cn(
        "container relative mt-[27px] w-full pb-[75px]",
        "tablet:mt-[33px]",
        "pc:flex-end pc:mt-[45px] pc:pb-[150px]"
      )}
    >
      {/* 검색바 */}
      <Searchbar
        className={cn(
          "order-1 mb-[24px]",
          "tablet:mb-[40px]",
          "pc:order-2 pc:float-right pc:mb-0 pc:w-[calc(100%-284px-60px)]"
        )}
        value={search}
        onChange={handleSearchChange}
      />

      {/* 검색 옵션 */}
      <div
        className={cn(
          "order-2 mb-[20px]",
          "pc:z-5 pc:sticky pc:top-[100px] pc:order-1 pc:float-left pc:w-[284px]"
        )}
      >
        <WineSearchOption setSearch={setSearch} />
      </div>

      {/* 와인 목록 */}
      <div
        className={cn(
          wineList.length === 0 ? "pc:float-right" : "grid pc:left-[60px]",
          "relative order-3",
          "pc:top-[64px] pc:w-[calc(100%-284px-60px)]"
        )}
      >
        <WineList wine={wineList} isLoading={isInitialLoading} />
        <div ref={observerRef} className="mt-[20px] h-1 w-full" />
        {isFetchingNextPage && (
          <div
            className={cn(
              "grid w-full gap-y-[48px] mt-4",
              "tablet:grid-cols-2 tablet:gap-x-[16px]",
              "pc:grid-cols-2 pc:gap-x-[61px] pc:gap-y-[64px]"
            )}
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <CardSkeleton key={i} showReview />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default WineListSection;
