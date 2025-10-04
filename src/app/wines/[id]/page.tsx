// app/wines/[id]/page.tsx
import { Suspense } from "react";
import WineDetailContent from "@/app/wines/[id]/_components/wine-detail/wine-detail-content";
import WineDetailSkeleton from "@/app/wines/[id]/_components/wine-detail/wine-detail-skeleton";

export default async function WineDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <Suspense fallback={<WineDetailSkeleton />}>
      <WineDetailContent wineId={Number(id)} />
    </Suspense>
  );
}
