"use client";

import { cn } from "@/lib/utils";
import Searchbar from "@/components/searchbar/searchbar";
import WineList from "../wine-list/wine-list";
import WineSearchOption from "../wine-search-option/wine-search-option";
import useGetWineList from "@/hooks/api/wines/use-get-wine-list";

const WineListSection = () => {
  const limit = 10;
  const { data } = useGetWineList({ limit });
  const wineList = data?.list ?? [];
  console.log(data);

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
          "pc:order-2 pc:float-right pc:w-[calc(100%-284px-60px)]"
        )}
      />

      {/* 검색 옵션 */}
      <div
        className={cn(
          "order-2 mb-[20px]",
          "pc:z-5 pc:sticky pc:top-[100px] pc:order-1 pc:float-left pc:w-[284px]"
        )}
      >
        <WineSearchOption />
      </div>

      {/* 와인 목록 */}
      <div
        className={cn(
          "relative order-3 grid gap-y-[48px]",
          "tablet:grid-cols-2 tablet:gap-x-[16px]",
          "pc:left-[60px] pc:top-[64px] pc:order-3 pc:w-[calc(100%-284px-60px)] pc:grid-cols-2 pc:gap-x-[61px] pc:gap-y-[64px]"
        )}
      >
        <WineList wine={wineList} />
      </div>
    </section>
  );
};

export default WineListSection;
