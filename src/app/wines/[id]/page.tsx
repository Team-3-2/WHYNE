import { Suspense } from "react";
import instance from "@/lib/axios";
import { METADATA } from "@/constants/metadata";
import type { Metadata, ResolvingMetadata } from "next";
import { cookies } from "next/headers";
import WineDetailContent from "@/app/wines/[id]/_components/wine-detail/wine-detail-content";
import Loader from "@/components/loader/loader";

// type Props = {
//   params: { id: string };
//   searchParams: { [key: string]: string | string[] | undefined };
// };

// export async function fetchWineDetail(id: string) {
//   const cookieHeader = cookies().toString();
//   const res = await instance.get(`/wines/${id}`, {
//     method: "GET",
//     headers: {
//       Cookie: cookieHeader,
//     },
//   });
//   return res.data;
// }

// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   const wine = await fetchWineDetail(params.id);

//   const PAGE_TITLE = `${wine.name} 와인 상세 정보`;
//   const DESCRIPTION = "와인 상세 정보 페이지입니다.";

//   return {
//     ...METADATA,
//     title: PAGE_TITLE,
//     description: DESCRIPTION,
//     openGraph: {
//       ...METADATA.openGraph,
//       title: PAGE_TITLE,
//       description: DESCRIPTION,
//     },
//     twitter: {
//       ...METADATA.twitter,
//       title: PAGE_TITLE,
//       description: DESCRIPTION,
//     },
//   };
// }

const WineDetailPage = async ({ params }: { params: { id: string } }) => {
  //const wine = await fetchWineDetail(params.id);
  return (
    <Suspense fallback={<Loader />}>
      <WineDetailContent wineId={Number(params.id)} />
    </Suspense>
  );
};

export default WineDetailPage;
