import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import ReviewTaste, { type TasteData } from "./review-taste";
import { type GaugeLevel } from "../gauge/block-gauge";

const meta: Meta<typeof ReviewTaste> = {
  title: "Components/ReviewTaste",
  component: ReviewTaste,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "상세페이지 리뷰섹션에서 사용하는 컴포넌트 입니다. 모바일에서는 detail-taste의 모바일 컴포넌트와 동일한 모양으로, 태블릿/PC에서는 2x2 그리드로 배치됩니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    tastes: {
      description: "와인 맛 데이터 배열",
    },
    onChange: {
      description: "맛 강도 변경 시 호출되는 콜백 함수",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const mockWineProfile: TasteData[] = [
  { type: "바디감", data: 4 as GaugeLevel, taste: "진해요" },
  { type: "탄닌", data: 5 as GaugeLevel, taste: "부드러워요" },
  { type: "당도", data: 3 as GaugeLevel, taste: "달아요" },
  { type: "산미", data: 4 as GaugeLevel, taste: "많이셔요" },
];

export const ReviewTasteExample: Story = {
  render: () => {
    const [tastes, setTastes] = useState<TasteData[]>(mockWineProfile);

    const handleChange = (index: number, newLevel: GaugeLevel) => {
      const newTastes = [...tastes];
      newTastes[index].data = newLevel;

      if (newTastes[index].type === "바디감") {
        newTastes[index].taste =
          newLevel === 0
            ? "없음"
            : newLevel <= 2
              ? "가벼움"
              : newLevel <= 4
                ? "중간"
                : "진해요";
      } else if (newTastes[index].type === "탄닌") {
        newTastes[index].taste =
          newLevel === 0
            ? "없음"
            : newLevel <= 2
              ? "부드러움"
              : newLevel <= 4
                ? "적당함"
                : "떫어요";
      } else if (newTastes[index].type === "당도") {
        newTastes[index].taste =
          newLevel === 0
            ? "없음"
            : newLevel <= 2
              ? "약간 단맛"
              : newLevel <= 4
                ? "중간 단맛"
                : "달아요";
      } else if (newTastes[index].type === "산미") {
        newTastes[index].taste =
          newLevel === 0
            ? "없음"
            : newLevel <= 2
              ? "부족함"
              : newLevel <= 4
                ? "적당함"
                : "많이셔요";
      }

      setTastes(newTastes);
    };

    return (
      <div className="space-y-4">
        <div>
          <h3 className="mb-4 text-lg font-semibold">
            태블릿/PC 레이아웃 (2x2 그리드) / 모바일 레이아웃 세로로 고정
          </h3>
          <div className="w-[800px] rounded-lg border border-gray-200 p-4">
            <ReviewTaste tastes={tastes} onChange={handleChange} />
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "모바일과 태블릿/PC 레이아웃을 비교할 수 있는 예시입니다. 게이지를 클릭하면 맛 강도가 변경됩니다.",
      },
    },
  },
};
