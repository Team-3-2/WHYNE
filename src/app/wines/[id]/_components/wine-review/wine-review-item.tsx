"use client";

import { cn } from "@/lib/utils";
import { useState, useRef } from "react";
import WineTaste from "@/components/wine-taste";
import { getTasteDescription } from "@/components/wine-taste";
import { TasteData } from "@/components/wine-taste/_types";
import { aromaMap } from "@/components/flavor/aroma-map";
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

function getAromaIconName(aroma: AromaKey): string {
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
}

export default function WineReviewItem({
  review,
  isFirst = false,
  currentUserId,
}: WineReviewItemProps) {
  const initialIsLiked =
    typeof review.isLiked === "boolean" ? review.isLiked : false;
  const [isLike, setIsLike] = useState(initialIsLiked);
  const [isTasteOpen, setIsTasteOpen] = useState(false); // 맛 평가 토글 상태
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

  // 옵션 메뉴 컴포넌트
  const OptionMenu = () => {
    if (!isMyReview) return null;

    return (
      <div className="relative" ref={menuRef}>
        <button aria-label="옵션 메뉴" onClick={toggleMenu} className="p-1">
          <Icon icon="HamburgerIcon" size="md" />
        </button>

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
        "flex w-full flex-col items-center gap-6 py-8",
        "tablet:items-start tablet:gap-8 tablet:px-4 tablet:py-10",
        "pc:items-start pc:gap-6 pc:px-4 pc:py-8",
        !isFirst && "border-t border-gray-300"
      )}
    >
      {/* 모든 요소를 감싸는 컨테이너 */}
      <div
        className={cn(
          "flex w-[343px] flex-col gap-6",
          "tablet:w-full tablet:gap-8",
          "pc:w-full pc:gap-6"
        )}
      >
        {/* 1. 모바일/태블릿: 별점 + 옵션 메뉴 (상단) */}
        <div className={cn("flex items-center justify-between", "pc:hidden")}>
          <Rating rating={review.rating} size="sm" />
          <OptionMenu />
        </div>

        {/* 2. 모바일/태블릿: 프로필 + 시간 */}
        <div className={cn("block", "pc:hidden")}>
          <WineReviewRating createdAt={review.createdAt} user={review.user} />
        </div>

        {/* 3. PC: 프로필 + 별점 + 옵션 메뉴 (한 줄) */}
        <div className={cn("hidden items-center justify-between", "pc:flex")}>
          <div className="flex items-center gap-4">
            <WineReviewRating createdAt={review.createdAt} user={review.user} />
            <Rating rating={review.rating} size="sm" />
          </div>
          <OptionMenu />
        </div>

        {/* 4. 향 정보 */}
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

        {/* 5. 리뷰 내용 */}
        <p className="text-body-md leading-relaxed tracking-[-0.02em] text-gray-900">
          {review.content}
        </p>

        {/* 6. 맛 평가 토글 버튼 + 내용 */}
        <div className="flex flex-col gap-4">
          {/* 맛 평가 내용 (토글) - 부드러운 슬라이드 애니메이션 */}
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
                <WineTaste type="review" tastes={tastes} />
              </div>
            </div>
          </div>

          {/* 토글 버튼 - 중앙 배치 */}
          <div className="flex w-full justify-center">
            <button
              onClick={() => setIsTasteOpen(!isTasteOpen)}
              className="rounded-full p-2 transition-colors hover:bg-gray-100 active:bg-gray-200"
              aria-expanded={isTasteOpen}
              aria-label={isTasteOpen ? "맛 평가 숨기기" : "맛 평가 보기"}
            >
              <Icon
                icon="ArrowDownIcon"
                size="md"
                className={cn(
                  "text-gray-600 transition-transform duration-300 ease-in-out",
                  isTasteOpen && "rotate-180"
                )}
              />
            </button>
          </div>
        </div>

        {/* 7. 좋아요 버튼 */}
        <LikeButton
          count={likeCount}
          isLike={isLike}
          onClick={() => setIsLike(!isLike)}
        />
      </div>
    </div>
  );
}
