// src/components/WineTaste/WineTaste.stories.tsx
import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState, useEffect } from "react";
import WineTaste from "./wine-taste"; // 파일명 일치 확인
import { TasteData } from "./_types";
import { GaugeLevel } from "../gauge/block-gauge"; // 파일명 일치 확인
import { getTasteDescription } from "./_utils/tasteUtils";

const meta: Meta<typeof WineTaste> = {
  title: "Components/WineTaste",
  component: WineTaste,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "와인의 맛 특성과 강도를 표시하는 통합 컴포넌트입니다. detail 타입과 review 타입으로 나뉩니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "radio" }, // 명시적으로 radio 타입 지정
      options: ["detail", "review"],
      description: "컴포넌트 타입 (detail 또는 review)",
    },
    tastes: {
      control: { type: "object" }, // 객체 컨트롤 추가
      description: "와인 맛 데이터 배열",
    },
    onChange: {
      action: "changed", // 액션 로깅 추가
      description: "맛 강도 변경 시 호출되는 콜백 함수",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// 초기 데이터
const initialTastes: TasteData[] = [
  { type: "바디감", data: 4 as GaugeLevel, taste: "진해요" },
  { type: "탄닌", data: 2 as GaugeLevel, taste: "부드러움" },
  { type: "당도", data: 1 as GaugeLevel, taste: "약간 단맛" },
  { type: "산미", data: 3 as GaugeLevel, taste: "적당함" },
];

export const DetailView: Story = {
  render: () => {
    const [tastes, setTastes] = useState<TasteData[]>([...initialTastes]);

    const handleChange = (index: number, newLevel: GaugeLevel) => {
      const newTastes = [...tastes];
      newTastes[index].data = newLevel;
      newTastes[index].taste = getTasteDescription(
        newTastes[index].type,
        newLevel
      );
      setTastes(newTastes);
    };

    return (
      <div className="space-y-4">
        <h3 className="mb-4 text-lg font-semibold">
          Detail 타입 (세로 레이아웃)
        </h3>
        <WineTaste type="detail" tastes={tastes} onChange={handleChange} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Detail 타입은 항상 세로로 배치됩니다. 게이지를 클릭하면 맛 강도가 변경됩니다.",
      },
    },
  },
};

export const ReviewView: Story = {
  render: () => {
    const [tastes, setTastes] = useState<TasteData[]>([...initialTastes]);

    const handleChange = (index: number, newLevel: GaugeLevel) => {
      const newTastes = [...tastes];
      newTastes[index].data = newLevel;
      newTastes[index].taste = getTasteDescription(
        newTastes[index].type,
        newLevel
      );
      setTastes(newTastes);
    };

    return (
      <div className="space-y-4">
        <h3 className="mb-4 text-lg font-semibold">
          Review 타입 (모바일: 세로, 태블릿/PC: 2x2 그리드)
        </h3>
        <div className="w-[800px] rounded-lg border border-gray-200 p-4">
          <WineTaste type="review" tastes={tastes} onChange={handleChange} />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Review 타입은 모바일에서는 세로로, 태블릿/PC에서는 2x2 그리드로 배치됩니다.",
      },
    },
  },
};
