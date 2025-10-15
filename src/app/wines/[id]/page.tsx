import { Suspense } from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { METADATA } from "@/constants/metadata";
import { cookies } from "next/headers";
import WineDetailContent from "@/app/wines/[id]/_components/wine-detail/wine-detail-content";
import Loader from "@/components/loader/loader";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = await params;
  const cookieStore = await cookies();
  const cookieString = cookieStore.toString();
  const wine = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/wines/${id}`
  ).then((res) => res.json());
  const PAGE_TITLE = `${wine.name ?? ""} 와인 상세 정보`;
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
