import { Suspense } from "react";
import { METADATA } from "@/constants/metadata";
import type { Metadata, ResolvingMetadata } from "next";
import { cookies } from "next/headers";
import WineDetailContent from "@/app/wines/[id]/_components/wine-detail/wine-detail-content";
import Loader from "@/components/loader/loader";

type Props = {
  params: { id: string };
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
      return {
        title: "와인 상세 정보",
        description: "와인 정보를 불러오는 데 실패했습니다.",
      };
    }
    const wine = await response.json();

    const PAGE_TITLE = `${wine.name} 와인 상세 정보`;
    const DESCRIPTION = "와인 상세 정보 페이지입니다.";

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
  } catch (error) {
    console.error(error);
    return {
      title: "와인 상세 정보",
      description: "와인 정보를 불러오는 데 실패했습니다.",
    };
  }
}

const WineDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <Suspense fallback={<Loader />}>
      <WineDetailContent wineId={Number(id)} />
    </Suspense>
  );
};

export default WineDetailPage;
