"use client";

import { Icon, LikeButton, WineTaste } from "@/components";
import { cn } from "@/lib/utils";
import { useState } from "react";
import ReviewRating from "./review-rating";
import ReviewInfo from "./review-info";
import { TasteData } from "@/components/wine-taste";
import { GaugeLevel } from "@/components/gauge/block-gauge";

type ItemType = {
  img: string;
  name: string;
  subName: string;
  description: string;
};

interface ReviewItemProps {
  Rate: string;
  ReviewDate: string;
  Item: ItemType[];
  LikeCount: string;
}

const ReviewItem = () => {
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
        "pc:gap-[50px] pc:py-[40px]"
      )}
    >
      <div className="flex w-full flex-col items-start justify-center gap-8 px-[14px]">
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <div className="flex w-full flex-col items-start gap-5">
            <ReviewRating
              setOptionMenu={setOptionMenu}
              optionMenu={optionMenu}
            />
            <ReviewInfo />
          </div>
          <p className="text-body-md tracking-[-0.02em] text-gray-900">
            첫 모금에서 느껴지는 진한 블랙베리와 블랙커런트의 깊은 풍미가
            인상적이었어요. 입 안을 가득 채우는 묵직한 바디감과 함께, 오크
            숙성에서 오는 바닐라, 스파이스, 은은한 토스트 향이 균형 있게
            어우러집니다. 시간이 지날수록 다크 초콜릿과 가죽 같은 성숙한 노트가
            올라오면서, 여운이 길고도 부드럽게 이어져요. 타닌은 뚜렷하지만
            과하지 않고, 단단한 구조감 덕분에 고기 요리나 숙성 치즈와 특히 잘
            어울리는 와인이었습니다.
          </p>
        </div>
        <div className="w-full">
          <WineTaste type="review" tastes={initialTastes} />
        </div>
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
