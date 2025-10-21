"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import WineTaste, { buildTasteData } from "@/components/wine-taste";
import { IconButton } from "@/components";
import type { Review } from "@/types/wine";

interface ReviewItemFooterProps {
  review: Review;
}

const ReviewItemFooter = ({ review }: ReviewItemFooterProps) => {
  const [isTasteOpen, setIsTasteOpen] = useState(false);

  const tastes = useMemo(
    () =>
      buildTasteData({
        lightBold: review.lightBold,
        smoothTannic: review.smoothTannic,
        drySweet: review.drySweet,
        softAcidic: review.softAcidic,
      }),
    [review.lightBold, review.smoothTannic, review.drySweet, review.softAcidic]
  );

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div
        id={`taste-${review.id}`}
        className={cn(
          "grid w-full transition-all duration-300 ease-in-out",
          isTasteOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        )}
        role="region"
        aria-label="맛 평가"
        aria-hidden={!isTasteOpen}
      >
        <div className="overflow-hidden">
          <div className="pb-2">
            <WineTaste type="review" tastes={tastes} />
          </div>
        </div>
      </div>

      <IconButton
        icon="ArrowUpIcon"
        aria-label={isTasteOpen ? "맛 평가 숨기기" : "맛 평가 보기"}
        aria-expanded={isTasteOpen}
        aria-controls={`taste-${review.id}`}
        onClick={() => setIsTasteOpen((prev) => !prev)}
        className={cn(
          "h-auto w-auto p-2",
          "!border-none !bg-transparent hover:!bg-transparent active:!bg-transparent",
          "text-gray-600 transition-transform duration-300 ease-in-out",
          isTasteOpen && "rotate-180"
        )}
      />
    </div>
  );
};

export default ReviewItemFooter;
