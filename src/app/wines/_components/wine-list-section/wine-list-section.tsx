"use client";

import { cn } from "@/lib/utils";
import Searchbar from "@/components/searchbar/searchbar";
import WineList from "../wine-list/wine-list";
import WineSearchOption from "../wine-search-option/wine-search-option";
import useGetWineList from "@/hooks/api/wines/use-get-wine-list";
import { useSearchParams } from "next/navigation";

const WineListSection = () => {
  const params = useSearchParams();

  const typeParam = params.get("type");
  const type = typeParam ? typeParam.toUpperCase() : undefined;

  const ratingParam = params.get("rating");
  const rating = ratingParam ? parseFloat(ratingParam) : undefined;

  const limit = 10;

  const { data } = useGetWineList({ limit, type, rating });
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
      <Searchbar className="order-1 flex-1 pc:order-2" />

      {/* 와인 목록 */}
      <WineList />
    </section>
  );
};

export default WineListSection;
