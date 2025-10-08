import Image from "next/image";
import PlaceholderImgWine from "@/../public/images/placeholder/img-wine.svg";
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
    <div className="container py-8 tablet:py-10 pc:py-12">
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
            {isValidImageSrc(wine.image) ? (
              <Image
                src={wine.image}
                alt={wine.name}
                width={240}
                height={320}
                unoptimized
                className="h-full w-auto object-contain"
              />
            ) : (
              <PlaceholderImgWine
                className="h-full w-auto object-contain"
                role="img"
                aria-label={`${wine.name} 이미지 불러오기 실패`}
              />
            )}
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-6">
          <div className="flex flex-col gap-3 pc:max-w-[520px]">
            <div className="flex items-center gap-2 text-gray-500">
              <Rating rating={wine.avgRating} maxRating={5} size="sm" />
              <span className="text-body-sm tablet:text-body-md">
                {reviewLabel(wine.reviewCount)}
              </span>
            </div>

            <h1 className="text-title-page-md text-gray-900 tablet:text-title-page-md pc:text-title-page-md">
              {wine.name}
            </h1>
            <p className="text-body-sm text-gray-600 tablet:text-body-md">
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
