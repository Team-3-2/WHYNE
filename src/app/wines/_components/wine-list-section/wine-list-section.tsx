"use client";

import { useMemo, useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import Searchbar from "@/components/searchbar/searchbar";
import WineList from "../wine-list/wine-list";
import CardSkeleton from "@/components/card/card-skeleton";
import { useInfiniteScroll } from "@/hooks/use-infinite-scroll";
import getWineList from "@/api/wines/get-wine-list";
import { useSearchParams, useRouter } from "next/navigation";
import WineSearchOption from "../wine-search-option/wine-search-option";

import debounce from "lodash/debounce";
import { parseQueryParams } from "../../_utils/parse-query-params";

const limit = 4;

const WineListSection = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const { type, rating, maxPrice, minPrice } = parseQueryParams(params);

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

  const debouncedSetSearch = useMemo(
    () =>
      debounce((value: string) => {
        setDebouncedSearch(value);
      }, 200),
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
      const trimmedValue = value.trim();

      setSearch(value);

      if (trimmedValue === "") {
        setDebouncedSearch("");
        return;
      }

      if (wineList.length === 0) return;

      debouncedSetSearch(trimmedValue);
    },
    [debouncedSetSearch, wineList.length]
  );

  useEffect(() => {
    const q = new URLSearchParams(Array.from(params.entries()));
    if (debouncedSearch) {
      q.set("name", debouncedSearch);
    } else {
      q.delete("name");
    }
    router.push(`?${q.toString()}`, { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  useEffect(() => {
    if (typeof window !== "undefined" && params.get("name")) {
      router.replace("?", { scroll: false });
    }
  }, []);

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
              "grid w-full gap-y-[48px]",
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
