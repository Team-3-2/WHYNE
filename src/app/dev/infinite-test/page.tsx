"use client";

import { useMemo, useState } from "react";
import { useInfiniteScroll } from "@/hooks/use-infinite-scroll";
import getWineList from "@/api/wines/get-wine-list";
import WineList from "@/app/wines/_components/wine-list/wine-list";
import { cn } from "@/lib/utils";

const LIMIT = 4;

export default function InfiniteTestPage() {
  const [filters] = useState({
    type: undefined,
    rating: undefined,
    minPrice: undefined,
    maxPrice: undefined,
    name: "",
  });

  const queryKey = useMemo(() => ["dev-wine-list", filters], [filters]);

  const {
    allItems: wines,
    observerRef,
    isLoading,
    isFetchingNextPage,
  } = useInfiniteScroll({
    queryKey,
    fetchFn: (cursor) =>
      getWineList({
        limit: LIMIT,
        cursor,
        ...filters,
      }),
  });

  const isInitialLoading = isLoading && wines.length === 0;

  return (
    <main className="container py-16">
      <h1 className="mb-10 text-2xl font-semibold">Infinite Scroll Test</h1>

      <section
        className={cn(
          wines.length === 0 ? "pc:float-right" : "grid pc:left-[60px]",
          "relative order-3 gap-y-[48px]",
          "tablet:grid-cols-2 tablet:gap-x-[16px]",
          "pc:top-[64px] pc:order-3 pc:w-[calc(100%-284px-60px)] pc:grid-cols-2 pc:gap-x-[61px] pc:gap-y-[64px]"
        )}
      >
        <WineList wine={wines} isLoading={isInitialLoading} />
        <div ref={observerRef} className="mt-40 h-1 w-full" />
        {(isFetchingNextPage || (!isInitialLoading && wines.length === 0)) && (
          <p className="col-span-2 text-center text-sm text-gray-500">
            Loading…
          </p>
        )}
      </section>
    </main>
  );
}
