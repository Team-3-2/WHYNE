"use client";

import { WineTaste } from "@/components";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { TasteData } from "@/components/wine-taste";
import { GaugeLevel } from "@/components/gauge/block-gauge";
import { ReviewItemType } from "../../_types/review-type";
import { ReviewInfo, ReviewRating } from ".";

const ReviewItem = ({ review }: { review: ReviewItemType }) => {
  const [optionMenu, setOptionMenu] = useState(false);

  const initialTastes: TasteData[] = [
    { type: "바디감", data: review?.lightBold as GaugeLevel, taste: "진해요" },
    {
      type: "탄닌",
      data: review?.smoothTannic as GaugeLevel,
      taste: "부드러워요",
    },
    { type: "당도", data: review?.drySweet as GaugeLevel, taste: "달아요" },
    { type: "산미", data: review?.softAcidic as GaugeLevel, taste: "많이셔요" },
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
              id={review.id}
            />
            <ReviewInfo info={review.wine} />
          </div>
          <p className="w-full text-start text-body-md tracking-[-0.02em] text-gray-900">
            {review.content}
          </p>
        </div>

        <WineTaste type="review" tastes={initialTastes} />
      </div>
    </div>
  );
};

export default ReviewItem;
