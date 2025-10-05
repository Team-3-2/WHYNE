import Image from "next/image";
import Rating from "@/components/rating/rating";
import type { WineDetail } from "@/types/wine";

interface WineHeaderProps {
  wine: WineDetail;
}

const typeImages = {
  RED: "/images/wine-type/red.jpg",
  WHITE: "/images/wine-type/white.jpg",
  SPARKLING: "/images/wine-type/sparkling.jpg",
};

export default function WineHeader({ wine }: WineHeaderProps) {
  const thumbnailImage = typeImages[wine.type];

  return (
    <div className="mx-auto flex gap-6 px-4 py-8 tablet:gap-8 tablet:px-8 pc:max-w-7xl pc:px-16">
      {/* 와인 이미지 */}
      <div className="flex-center relative mx-auto h-[240px] w-[160px] flex-shrink-0 rounded-lg bg-gray-100 tablet:mx-0 tablet:h-[320px] tablet:w-[213px] pc:h-[360px] pc:w-[240px]">
        {wine.image ? (
          <Image
            src={wine.image}
            alt={wine.name}
            fill
            unoptimized
            className="object-contain p-3"
          />
        ) : (
          <div className="flex-col-center gap-2 text-gray-400">
            <span className="text-xs">이미지 없음</span>
          </div>
        )}
      </div>

      {/* 와인 정보 */}
      <div className="flex flex-1 flex-col gap-3 tablet:gap-4">
        {/* 평점 + 후기 */}
        <div className="flex items-center gap-2 tablet:gap-3">
          <Rating rating={wine.avgRating} maxRating={5} size="sm" />
          <span className="text-body-sm text-gray-500">
            {wine.reviewCount}개의 후기
          </span>
        </div>

        {/* 와인명 */}
        <h1 className="text-xl font-bold leading-tight text-gray-900 tablet:text-2xl pc:text-title-page-sm">
          {wine.name}
        </h1>

        {/* 지역 */}
        <p className="text-sm text-gray-600 tablet:text-body-md">
          {wine.region}
        </p>

        {/* 가격 */}
        <div className="text-2xl font-bold text-gray-900 tablet:text-3xl pc:text-heading-lg">
          {wine.price.toLocaleString()}원
        </div>
      </div>
    </div>
  );
}
