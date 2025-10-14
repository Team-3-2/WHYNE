"use client";

import { WineTaste } from "@/components";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { buildTasteData } from "@/components/wine-taste";
import { ReviewItemType } from "../../_types/review-type";
import { ReviewInfo, ReviewRating } from ".";
import FlavorIconList from "@/components/flavor-icon-list/flavor-icon-list";

const ReviewItem = ({ review }: { review: ReviewItemType }) => {
  const [optionMenu, setOptionMenu] = useState(false);

  const tastes = buildTasteData({
    lightBold: review.lightBold,
    smoothTannic: review.smoothTannic,
    drySweet: review.drySweet,
    softAcidic: review.softAcidic,
  });

  return (
    <div
      className={cn(
        "flex flex-col gap-[51px] border-b border-gray-300 py-[16px] pb-[28px] pt-[39px]",
        "tablet:gap-[54px]",
        "pc:gap-[50px] pc:py-[80px]"
      )}
    >
      <div className="flex w-full flex-col items-start justify-center gap-8 px-[14px]">
        <div className="flex w-full flex-col items-center justify-center gap-[26px]">
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

          <div className="h-auto w-full flex-shrink-0">
            <FlavorIconList aroma={review.aroma} size="md" />
          </div>

          <p className="w-full text-start text-body-md tracking-[-0.02em] text-gray-900">
            {review.content}
          </p>
        </div>

        <WineTaste type="review" tastes={tastes} />
      </div>
    </div>
  );
};

export default ReviewItem;
