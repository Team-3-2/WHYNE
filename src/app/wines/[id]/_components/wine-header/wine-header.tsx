import Image from "next/image";
import Rating from "@/components/rating/rating";
import type { WineDetail } from "@/types/wine";
import { cn, isValidImageSrc } from "@/lib/utils";

interface WineHeaderProps {
  wine: WineDetail;
}

const reviewLabel = (count: number) =>
  count > 0 ? `${count.toLocaleString()}개의 후기` : "아직 후기가 없어요";

const WineHeader = ({ wine }: WineHeaderProps) => {
  return (
    <div className="container relative select-none py-8 tablet:py-10 pc:py-12">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/wines/bg-recommended.png"
          alt="와인 배경"
          fill
          className="object-cover"
          quality={60}
          draggable={false}
        />
      </div>

      <div
        className={cn(
          "flex w-full flex-col gap-8 overflow-hidden rounded-2xl bg-white px-6 py-8 shadow-sm",
          "tablet:flex-row tablet:items-center tablet:gap-10 tablet:px-8 tablet:py-10",
          "pc:flex-row pc:items-center pc:gap-16 pc:px-12 pc:py-12"
        )}
      >
        <div
          className={cn(
            "relative flex w-full justify-center",
            "tablet:w-[280px] tablet:flex-shrink-0",
            "pc:w-[320px]"
          )}
        >
          <div
            className={cn(
              "flex-center h-[260px] w-full max-w-[220px] rounded-2xl bg-gray-100",
              "tablet:h-[300px] tablet:max-w-none tablet:rounded-3xl",
              "pc:h-[320px] pc:w-[320px] pc:max-w-none"
            )}
          >
            <div className="relative h-full w-full">
              {isValidImageSrc(wine.image) ? (
                <Image
                  src={wine.image}
                  alt={wine.name}
                  fill
                  priority
                  fetchPriority="high"
                  quality={75}
                  sizes="(max-width: 743px) 220px, (max-width: 1279px) 280px, 320px"
                  className="object-contain"
                  draggable={false}
                />
              ) : (
                <Image
                  src={"/images/placeholder/img-wine.svg"}
                  fill
                  sizes="(max-width: 743px) 220px, (max-width: 1279px) 280px, 320px"
                  className="object-contain"
                  alt={`${name} 이미지 불러오기 실패`}
                  draggable={false}
                />
              )}
            </div>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-6 pc:max-w-[496px]">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-gray-500">
              <Rating rating={wine.avgRating} size="md2" />
              <span className="text-body-sm tablet:text-body-md">
                {reviewLabel(wine.reviewCount)}
              </span>
            </div>
            <h2
              title={wine.name}
              className="text-title-page-xs text-gray-900 tablet:text-title-page-sm pc:text-title-page-md"
            >
              {wine.name}
            </h2>
            <p
              title={wine.region}
              className="truncate text-body-sm text-gray-600 tablet:text-body-md"
            >
              {wine.region}
            </p>
          </div>

          <div className="text-right text-heading-lg text-gray-900">
            {wine.price.toLocaleString()}원
          </div>
        </div>
      </div>
    </div>
  );
};

export default WineHeader;
