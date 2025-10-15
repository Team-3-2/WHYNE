import { Suspense } from "react";
import { METADATA } from "@/constants/metadata";
import WineRecommended from "@/app/wines/_components/wine-recommended/wine-recommended";
import Loader from "@/components/loader/loader";
import WineListSection from "./_components/wine-list-section/wine-list-section";

/**
 * 와인 목록 페이지
 */

export async function generateMetadata({
  searchParams,
}: {
  searchParams:
    | { [key: string]: string | undefined }
    | Promise<{ [key: string]: string | undefined }>;
}) {
  const params = await searchParams;
  const name = params.name ?? "";

  const PAGE_TITLE = name ? `${name} 검색 결과` : "맞춤 와인 찾기";
  const DESCRIPTION =
    "매달 새롭게 만나는 와인 추천 콘텐츠와 다양한 필터로 나만의 와인을 찾아보세요.";

  return {
    ...METADATA,
    title: PAGE_TITLE,
    description: DESCRIPTION,
    openGraph: {
      ...METADATA.openGraph,
      title: PAGE_TITLE,
      description: DESCRIPTION,
    },
    twitter: {
      ...METADATA.twitter,
      title: PAGE_TITLE,
      description: DESCRIPTION,
    },
  };
}

const WineListPage = async () => {
  return (
    <Suspense fallback={<Loader />}>
      <WineRecommended />
      <WineListSection />
    </Suspense>
  );
};

export default WineListPage;
