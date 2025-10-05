"use client";

import { cn } from "@/lib/utils";
import { useState, useRef } from "react";
import LikeButton from "@/components/button/like-button";
import WineTaste from "@/components/wine-taste/wine-taste";
import Icon from "@/components/icon/icon";
import DropdownMenu from "@/components/dropdown-menu/dropdown-menu";
import { getTasteDescription } from "@/components/wine-taste";
import { aromaMap } from "@/components/flavor/aroma-map";
import useToggle from "@/hooks/use-toggle";
import useClickOutside from "@/hooks/use-click-outside";
import type { TasteData } from "@/components/wine-taste";
import type { GaugeLevel } from "@/components/gauge/block-gauge";
import type { Review } from "@/types/wine";
import type { AromaKey } from "@/types/AromaType";
import WineReviewRating from "./wine-review-rating";
import Rating from "@/components/rating/rating";

interface WineReviewItemProps {
  review: Review;
  isFirst?: boolean;
  currentUserId?: number; // ✅ 추가
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
  currentUserId, // ✅ 받기
}: WineReviewItemProps) {
  const initialIsLiked =
    typeof review.isLiked === "boolean" ? review.isLiked : false;
  const [isLike, setIsLike] = useState(initialIsLiked);
  const menuRef = useRef<HTMLDivElement>(null);
  const {
    isOn: isMenuOpen,
    toggle: toggleMenu,
    setOff: closeMenu,
  } = useToggle(false);

  useClickOutside(menuRef, closeMenu);

  // ✅ 내가 쓴 리뷰인지 확인
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

  // ✅ 수정 핸들러
  const handleEdit = () => {
    closeMenu();
    console.log("리뷰 수정:", review.id);
    // TODO: 나중에 모달 열기
    alert("리뷰 수정 기능은 준비 중입니다.");
  };

  // ✅ 삭제 핸들러
  const handleDelete = () => {
    closeMenu();
    if (confirm("정말 삭제하시겠습니까?")) {
      console.log("리뷰 삭제:", review.id);
      // TODO: 삭제 API 호출
      alert("리뷰 삭제 기능은 준비 중입니다.");
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-6 px-4 py-8",
        "tablet:gap-8 tablet:py-10",
        "pc:gap-6 pc:py-8",
        !isFirst && "border-t border-gray-300"
      )}
    >
      {/* 1. 별점 + 옵션 메뉴 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Rating rating={review.rating} size="sm" />
        </div>

        {/* ✅ 내가 쓴 리뷰일 때만 햄버거 버튼 표시 */}
        {isMyReview && (
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
        )}
      </div>

      {/* 2. 프로필 + 닉네임 + 시간 */}
      <WineReviewRating createdAt={review.createdAt} user={review.user} />

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

      {/* 5. 맛 평가 */}
      <WineTaste type="review" tastes={tastes} />

      {/* 6. 좋아요 버튼 */}
      <LikeButton
        count={likeCount}
        isLike={isLike}
        onClick={() => setIsLike(!isLike)}
      />
    </div>
  );
}
