import { Suspense } from "react";
import WineRecommended from "@/app/wines/_components/wine-recommended/wine-recommended";
import Loader from "@/components/loader/loader";
import WineListSection from "./_components/wine-list-section/wine-list-section";

/**
 * 와인 목록 페이지
 */

const WineListPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <WineRecommended />
      <WineListSection />
    </Suspense>
  );
};

export default WineListPage;
