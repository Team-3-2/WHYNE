import { Suspense } from "react";
import WineDetailContent from "@/app/wines/[id]/_components/wine-detail/wine-detail-content";
import Loader from "@/components/loader/loader";

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
