import Image from "next/image";
import Rating from "@/components/rating/rating";
import type { WineDetail } from "@/types/wine";
import { cn } from "@/lib/utils";

interface WineHeaderProps {
  wine: WineDetail;
}

export default function WineHeader({ wine }: WineHeaderProps) {
  const containerClass = cn(
    "flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm",
    "tablet:flex-row tablet:items-center tablet:gap-8 tablet:p-8",
    "pc:flex-row pc:items-start pc:gap-14 pc:p-12"
  );

  const imageWrapperClass = cn(
    "flex-center h-[260px] w-full rounded-2xl bg-white",
    "tablet:h-[280px] tablet:w-[320px] tablet:flex-shrink-0",
    "pc:h-[360px] pc:w-[300px] pc:rounded-lg"
  );

  const infoWrapperClass = cn(
    "flex flex-1 flex-col gap-6 px-6 pb-6 pt-6",
    "tablet:h-full tablet:justify-between tablet:gap-8 tablet:px-0 tablet:pt-0",
    "pc:flex-col pc:items-start pc:justify-start pc:gap-6 pc:px-12 pc:pb-4 pc:pt-6"
  );

  const titleClass = cn(
    "!text-title-page-sm !leading-tight text-gray-900",
    "tablet:text-title-page-md",
    "pc:text-title-page-md"
  );

  const regionClass = cn(
    "!text-body-lg text-gray-600",
    "tablet:text-body-md",
    "pc:text-body-md"
  );

  const priceClass = cn(
    "ml-auto mt-auto !text-heading-md text-gray-900",
    "tablet:text-heading-lg",
    "pc:self-start pc:text-heading-lg pc:mt-6"
  );

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 tablet:px-8 pc:px-16">
      <div className={containerClass}>
        <div className={imageWrapperClass}>
          {wine.image ? (
            <Image
              src={wine.image}
              alt={wine.name}
              width={220}
              height={320}
              unoptimized
              className="h-full w-auto object-contain"
            />
          ) : (
            <div className="flex-col-center gap-2 text-gray-400">
              <span className="text-xs">이미지 없음</span>
            </div>
          )}
        </div>

        <div className={infoWrapperClass}>
          <div className="flex flex-col gap-3 pc:w-full pc:flex-1 pc:gap-4">
            <div className="flex flex-wrap items-center gap-2 text-gray-500">
              <Rating rating={wine.avgRating} maxRating={5} size="sm" />
              <span className="text-body-sm text-gray-500">
                {wine.reviewCount}개의 후기
              </span>
            </div>

            <h1 className={titleClass}>{wine.name}</h1>
            <p className={regionClass}>{wine.region}</p>
          </div>

          <div className={priceClass}>{wine.price.toLocaleString()}원</div>
        </div>
      </div>
    </div>
  );
}
