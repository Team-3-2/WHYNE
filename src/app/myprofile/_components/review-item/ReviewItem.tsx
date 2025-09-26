"use client";

import { DropdownMenu, Icon } from "@/components";
import Image from "next/image";
import { useState } from "react";

const ReviewItem = () => {
  const [optionMenu, setOptionMenu] = useState(false);

  return (
    <div className="flex flex-col gap-[51px] border-t border-gray-300 py-[16px] pb-[28px] pt-[39px]">
      <div className="flex w-full flex-col items-start justify-center gap-8 px-[14px]">
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <div className="flex w-full flex-col items-start gap-6">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-2">
                  ⭐️⭐️⭐️⭐️⭐️
                  <span className="text-body-lg font-bold tracking-[-0.02em] text-gray-900">
                    5
                  </span>
                </span>
                <span className="text-body-md tracking-[-0.02em] text-gray-500">
                  10시간 전
                </span>
              </div>
              <div className="relative inline-flex">
                <button
                  aria-label="옵션 메뉴"
                  onClick={() => setOptionMenu((v) => !v)}
                  className="p-1"
                >
                  <Icon icon="HamburgerIcon" size="md" />
                </button>

                {optionMenu && (
                  <div
                    id="post-option-menu"
                    role="menu"
                    className="absolute right-0 top-full z-50 mt-2"
                  >
                    <DropdownMenu
                      items={[
                        { label: "수정하기", onClick: () => {} },
                        { label: "삭제하기", onClick: () => {} },
                      ]}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="flex w-full items-center gap-2">
              <Image
                src="/images/test/test_wine.png"
                alt=""
                width={100}
                height={100}
                className="h-[60px] w-[46px]"
              />
              <div className="flex flex-col items-start">
                <h2 className="text-body-md font-bold tracking-[-0.02em] text-gray-900">
                  Sentinel Carbernet Sauvignon 2016
                </h2>
                <p className="text-body-sm tracking-[-0.02em] text-gray-500">
                  Western Cape, South Africa
                </p>
              </div>
            </div>
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
        <div className="min-h-[114px] w-full bg-black"></div>
      </div>
      <button className="flex items-center gap-2 self-start rounded-[8px] border border-gray-300 py-[6px] pl-3 pr-[14px]">
        {/* TODO(지권): 좋아요 활성화 아이콘 <Icon icon="LikeOnIcon" /> */}
        <Icon icon="LikeOffIcon" size="sm" />
        <span>24</span>
      </button>
    </div>
  );
};

export default ReviewItem;
