"use client";

import { cn } from "@/lib/utils";
import { useState, useRef } from "react";
import WineTaste, {
  getTasteDescription,
  type TasteData,
} from "@/components/wine-taste";
import { aromaMap } from "@/components/flavor/aroma-map";
import IconButton from "@/components/button/icon-button";
import LikeButton from "@/components/button/like-button";
import Icon from "@/components/icon/icon";
import DropdownMenu from "@/components/dropdown-menu/dropdown-menu";
import useToggle from "@/hooks/use-toggle";
import useClickOutside from "@/hooks/use-click-outside";
import WineReviewRating from "./wine-review-rating";
import Rating from "@/components/rating/rating";
import type { GaugeLevel } from "@/components/gauge/block-gauge";
import type { Review } from "@/types/wine";
import type { AromaKey } from "@/types/AromaType";

interface WineReviewItemProps {
  review: Review;
  isFirst?: boolean;
  currentUserId?: number;
}

const getAromaIconName = (aroma: AromaKey): string => {
  const iconMap: Record<AromaKey, string> = {
    CHERRY: "CherryIcon",
    BERRY: "BerryIcon",
    OAK: "OakIcon",
    VANILLA: "VanillaIcon",
    PEPPER: "PepperIcon",
    BAKING: "BakingIcon",
    GRASS: "GrassIcon",
    APPLE: "AppleIcon",
    PEACH: "PeachIcon",
    CITRUS: "CitrusIcon",
    TROPICAL: "TropicalIcon",
    MINERAL: "MineralIcon",
    FLOWER: "FlowerIcon",
    TOBACCO: "TobaccoIcon",
    EARTH: "EarthIcon",
    CHOCOLATE: "ChocolateIcon",
    SPICE: "SpiceIcon",
    CARAMEL: "CaramelIcon",
    LEATHER: "LeatherIcon",
    EMPTY: "WineIcon",
  };
  return iconMap[aroma] || "WineIcon";
};

const WineReviewItem = ({
  review,
  isFirst = false,
  currentUserId,
}: WineReviewItemProps) => {
  const initialIsLiked =
    typeof review.isLiked === "boolean" ? review.isLiked : false;
  const [isLike, setIsLike] = useState(initialIsLiked);
  const [isTasteOpen, setIsTasteOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const {
    isOn: isMenuOpen,
    toggle: toggleMenu,
    setOff: closeMenu,
  } = useToggle(false);

  useClickOutside(menuRef, closeMenu);

  const isMyReview = currentUserId && currentUserId === review.user.id;

  const tastes: TasteData[] = [
    {
      type: "바디감",
      data: review.lightBold as GaugeLevel,
      taste: getTasteDescription("바디감", review.lightBold as GaugeLevel),
    },
    {
      type: "탄닌",
      data: review.smoothTannic as GaugeLevel,
      taste: getTasteDescription("탄닌", review.smoothTannic as GaugeLevel),
    },
    {
      type: "당도",
      data: review.drySweet as GaugeLevel,
      taste: getTasteDescription("당도", review.drySweet as GaugeLevel),
    },
    {
      type: "산미",
      data: review.softAcidic as GaugeLevel,
      taste: getTasteDescription("산미", review.softAcidic as GaugeLevel),
    },
  ];

  const likeCount = 24;

  const handleEdit = () => {
    closeMenu();
    alert("리뷰 수정 기능은 준비 중입니다.");
  };

  const handleDelete = () => {
    closeMenu();
    if (confirm("정말 삭제하시겠습니까?")) {
      alert("리뷰 삭제 기능은 준비 중입니다.");
    }
  };

  const OptionMenu = () => {
    if (!isMyReview) return null;

    return (
      <div className="relative" ref={menuRef}>
        <IconButton
          icon="HamburgerIcon"
          aria-label="옵션 메뉴"
          className="p-1"
          onClick={toggleMenu}
        />
        {isMenuOpen && (
          <div className="absolute right-0 top-full z-50 mt-2">
            <DropdownMenu
              items={[
                { label: "수정하기", onClick: handleEdit },
                { label: "삭제하기", onClick: handleDelete },
              ]}
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={cn(
        "flex w-full flex-col items-center gap-6 px-4 py-8",
        "tablet:items-start tablet:gap-8 tablet:px-6 tablet:py-10",
        "pc:items-start pc:gap-6 pc:px-4 pc:py-8",
        !isFirst && "border-t border-gray-300"
      )}
    >
      <div
        className={cn(
          "flex w-full max-w-[420px] flex-col gap-6",
          "tablet:max-w-none tablet:gap-8",
          "pc:max-w-[720px] pc:gap-6"
        )}
      >
        {/* 1. 별점 */}
        <div className="flex items-center justify-between">
          <Rating rating={review.rating} size="sm" />
        </div>

        {/* 2. 프로필 + 시간 */}
        <div className="flex items-center justify-between">
          <WineReviewRating createdAt={review.createdAt} user={review.user} />
          <OptionMenu />
        </div>

        {/* 3. 향 정보 */}
        {review.aroma && review.aroma.length > 0 && (
          <div className="flex flex-wrap items-center gap-1">
            {review.aroma.map((aroma, index) => {
              const aromaInfo = aromaMap[aroma];
              if (!aromaInfo) return null;

              return (
                <div key={aroma} className="flex items-center">
                  <div className="flex items-center gap-3 px-1">
                    <Icon
                      icon={getAromaIconName(aroma) as any}
                      size="sm"
                      className="text-gray-700"
                    />
                    <span className="text-body-sm text-gray-500">
                      {aromaInfo.label}
                    </span>
                  </div>
                  {index < review.aroma.length - 1 && (
                    <span className="text-gray-300">•</span>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* 4. 리뷰 내용 */}
        <p className="text-body-md leading-relaxed tracking-[-0.02em] text-gray-900">
          {review.content}
        </p>

        {/* 5. 맛 평가 토글 */}
        <div className="flex flex-col gap-4">
          <div
            className={cn(
              "grid transition-all duration-300 ease-in-out",
              isTasteOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            )}
          >
            <div className="overflow-hidden">
              <div className="pb-2">
                <div className="mx-auto w-full max-w-none">
                  <WineTaste type="review" tastes={tastes} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6. 토글 & 좋아요 */}
        <div className="flex w-full items-center gap-4">
          <LikeButton
            count={likeCount}
            isLike={isLike}
            onClick={() => setIsLike(!isLike)}
          />

          <div className="flex flex-1 justify-center">
            <IconButton
              icon="ArrowUpIcon"
              aria-label={isTasteOpen ? "맛 평가 숨기기" : "맛 평가 보기"}
              aria-expanded={isTasteOpen}
              onClick={() => setIsTasteOpen(!isTasteOpen)}
              className={cn(
                "h-auto w-auto p-2",
                "!border-none !bg-transparent hover:!bg-transparent active:!bg-transparent",
                "text-gray-600 transition-transform duration-300 ease-in-out",
                isTasteOpen && "rotate-180"
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WineReviewItem;
