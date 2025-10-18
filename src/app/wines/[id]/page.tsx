import { Suspense } from "react";
import { createPageInfoMetadata } from "@/constants/metadata";
import type { Metadata, ResolvingMetadata } from "next";
import { cookies } from "next/headers";
import WineDetailContent from "@/app/wines/[id]/_components/wine-detail/wine-detail-content";
import Loader from "@/components/loader/loader";

type Props = {
  params: Promise<{ id: string }>;
};
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value || null;
  const { id } = await params;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/wines/${Number(id)}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        method: "GET",
      }
    );

    if (!response.ok) {
      return createPageInfoMetadata(
        "와인 상세 정보",
        "와인 정보를 불러오는 데 실패했습니다."
      );
    }
    const wine = await response.json();

    const PAGE_TITLE = `${wine.name} 와인 상세 정보`;
    const DESCRIPTION = "와인 상세 정보 페이지입니다.";

    return createPageInfoMetadata(PAGE_TITLE, DESCRIPTION);
  } catch (error) {
    console.error(error);
    return createPageInfoMetadata(
      "와인 상세 정보",
      "와인 정보를 불러오는 데 실패했습니다."
    );
  }
}

const WineDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return (
    <Suspense fallback={<Loader />}>
      <WineDetailContent wineId={Number(id)} />
    </Suspense>
  );
};

export default WineDetailPage;
