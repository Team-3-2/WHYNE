import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import DetailTaste, { TasteData } from "./detail-taste";
import { GaugeLevel } from "../gauge/block-gauge";

const meta: Meta<typeof DetailTaste> = {
  title: "Components/DetailTaste",
  component: DetailTaste,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "와인의 맛 특성과 강도를 표시하는 컴포넌트입니다. 모바일 : 343px, 태블릿과 PC : 480px",
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

type Story = StoryObj<typeof DetailTaste>;

const getTasteDescription = (type: string, level: GaugeLevel): string => {
  if (level === 0) return "없음";

  switch (type) {
    case "바디감":
      return level <= 2 ? "가벼움" : level <= 4 ? "중간" : "진해요";
    case "탄닌":
      return level <= 2 ? "부드러움" : level <= 4 ? "적당함" : "떫어요";
    case "당도":
      return level <= 2 ? "약간 단맛" : level <= 4 ? "중간 단맛" : "달아요";
    case "산미":
      return level <= 2 ? "부족함" : level <= 4 ? "적당함" : "많이셔요";
    default:
      return "";
  }
};

export const Default: Story = {
  render: () => {
    // 초기 데이터
    const initialTastes: TasteData[] = [
      { type: "바디감", data: 4 as GaugeLevel, taste: "진해요" },
      { type: "탄닌", data: 2 as GaugeLevel, taste: "부드러움" },
      { type: "당도", data: 1 as GaugeLevel, taste: "약간 단맛" },
      { type: "산미", data: 3 as GaugeLevel, taste: "적당함" },
    ];

    const [tastes, setTastes] = useState<TasteData[]>(initialTastes);

    const handleChange = (index: number, newLevel: GaugeLevel) => {
      const newTastes = [...tastes];
      newTastes[index].data = newLevel;
      // 맛 설명 업데이트
      newTastes[index].taste = getTasteDescription(
        newTastes[index].type,
        newLevel
      );
      setTastes(newTastes);
    };

    return (
      <div className="space-y-4">
        <DetailTaste tastes={tastes} onChange={handleChange} />
      </div>
    );
  },
};
