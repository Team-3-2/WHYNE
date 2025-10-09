"use client";

import { LikeButton, WineTaste } from "@/components";
import { cn } from "@/lib/utils";
import { useState } from "react";
import ReviewRating from "./review-rating";
import ReviewInfo from "./review-info";
import { TasteData } from "@/components/wine-taste";
import { GaugeLevel } from "@/components/gauge/block-gauge";
import { ReviewItemType } from "../../_types/review-type";

const ReviewItem = ({ review }: { review: ReviewItemType }) => {
  const [optionMenu, setOptionMenu] = useState(false);
  const [isLike, setIsLike] = useState(false);

  const initialTastes: TasteData[] = [
    { type: "바디감", data: 4 as GaugeLevel, taste: "진해요" },
    { type: "탄닌", data: 3 as GaugeLevel, taste: "부드러워요" },
    { type: "당도", data: 2 as GaugeLevel, taste: "달아요" },
    { type: "산미", data: 1 as GaugeLevel, taste: "많이셔요" },
  ];

  return (
    <div
      className={cn(
        "flex flex-col gap-[51px] border-t border-gray-300 py-[16px] pb-[28px] pt-[39px]",
        "tablet:gap-[54px]",
        "pc:gap-[50px] pc:py-[80px]"
      )}
    >
      <div className="flex w-full flex-col items-start justify-center gap-8 px-[14px]">
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <div className="flex w-full flex-col items-start gap-5">
            <ReviewRating
              setOptionMenu={setOptionMenu}
              optionMenu={optionMenu}
              createdAt={review.createdAt}
              rating={review.rating}
            />
            <ReviewInfo info={review.wine} />
          </div>
          <p className="w-full text-start text-body-md tracking-[-0.02em] text-gray-900">
            {review.content}
          </p>
        </div>
        {/* TODO(지권): 타입 정의 수정필요 */}
        <WineTaste type="review" tastes={initialTastes} />
      </div>
      <LikeButton
        count={24}
        isLike={isLike}
        onClick={() => setIsLike(!isLike)}
      />
    </div>
  );
};

export default ReviewItem;
