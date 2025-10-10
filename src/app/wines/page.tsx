import { Suspense } from "react";
import WineRecommended from "@/app/wines/_components/wine-recommended/wine-recommended";
import Loader from "@/components/loader/loader";
import WineSearchOption from "@/app/wines/_components/wine-search-option/wine-search-option";
import WineList from "@/app/wines/_components/wine-list/wine-list";
import { cn } from "@/lib/utils";
import { Searchbar } from "@/components";

/**
 * 와인 목록 페이지
 */

const WineListPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <WineRecommended />
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
    </Suspense>
  );
};

export default WineListPage;
