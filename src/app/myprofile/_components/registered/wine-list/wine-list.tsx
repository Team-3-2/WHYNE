"use client";

import { cn } from "@/lib/utils";
import { useInfiniteScroll } from "@/hooks/use-infinite-scroll";
import getUserWines from "@/api/user/get-user-wines";
import { WineType } from "@/app/myprofile/_types/review-type";
import WineItem from "../wine-item/wine-item";

const WineList = () => {
  const {
    allItems: wines,
    observerRef,
    isFetchingNextPage,
  } = useInfiniteScroll<WineType>({
    queryKey: ["user-wine-infinite"],
    fetchFn: (cursor) =>
      getUserWines({
        cursor,
        limit: 6,
      }),
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div
      className={cn(
        "grid gap-y-[16px] pt-[24px]",
        "pc:grid-cols-3 pc:gap-x-[15px] pc:gap-y-[40px] pc:pt-[40px]",
        "tablet:grid-cols-2 tablet:gap-x-[16px] tablet:gap-y-[32px]"
      )}
    >
      {wines.map((wine) => (
        <WineItem key={wine.id} wine={wine} />
      ))}
      <div ref={observerRef} className="h-1 w-full" />
      {isFetchingNextPage && (
        <p className="text-center text-sm text-gray-400">Loading...</p>
      )}
    </div>
  );
};

export default WineList;
