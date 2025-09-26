import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import Taste from "./Taste";
import { cn } from "@/lib/utils";
import { GaugeLevel } from "../gauge/block-gauge";

const meta: Meta = {
  title: "Components/Taste",
  component: Taste,
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
    type: {
      control: "text",
      description: "와인 맛의 종류",
      defaultValue: "바디감",
    },
    data: {
      control: { type: "number", min: 0, max: 6 },
      description: "맛 강도 데이터 (0-6)",
      defaultValue: 3,
    },
    taste: {
      control: "text",
      description: "맛의 특징",
      defaultValue: "진해요",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const ResponsiveTasteWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-start",
        "w-[343px] md:w-[480px] lg:w-[480px]",
        "gap-3 md:gap-4 lg:gap-4"
      )}
    >
      {children}
    </div>
  );
};

export const InteractiveWineProfile: Story = {
  render: () => {
    const [bodyLevel, setBodyLevel] = useState<GaugeLevel>(4);
    const [tanninLevel, setTanninLevel] = useState<GaugeLevel>(2);
    const [sweetnessLevel, setSweetnessLevel] = useState<GaugeLevel>(1);
    const [acidityLevel, setAcidityLevel] = useState<GaugeLevel>(3);

    return (
      <div>
        <div className="space-y-4">
          <ResponsiveTasteWrapper>
            <Taste
              type="바디감"
              data={bodyLevel}
              taste={
                bodyLevel === 0
                  ? "없음"
                  : bodyLevel <= 2
                    ? "가벼움"
                    : bodyLevel <= 4
                      ? "중간"
                      : "진해요"
              }
              onChange={setBodyLevel}
            />
          </ResponsiveTasteWrapper>

          <ResponsiveTasteWrapper>
            <Taste
              type="탄닌"
              data={tanninLevel}
              taste={
                tanninLevel === 0
                  ? "없음"
                  : tanninLevel <= 2
                    ? "부드러움"
                    : tanninLevel <= 4
                      ? "적당함"
                      : "떫어요"
              }
              onChange={setTanninLevel}
            />
          </ResponsiveTasteWrapper>

          <ResponsiveTasteWrapper>
            <Taste
              type="당도"
              data={sweetnessLevel}
              taste={
                sweetnessLevel === 0
                  ? "없음"
                  : sweetnessLevel <= 2
                    ? "약간 단맛"
                    : sweetnessLevel <= 4
                      ? "중간 단맛"
                      : "달아요"
              }
              onChange={setSweetnessLevel}
            />
          </ResponsiveTasteWrapper>

          <ResponsiveTasteWrapper>
            <Taste
              type="산미"
              data={acidityLevel}
              taste={
                acidityLevel === 0
                  ? "없음"
                  : acidityLevel <= 2
                    ? "부족함"
                    : acidityLevel <= 4
                      ? "적당함"
                      : "많이셔요"
              }
              onChange={setAcidityLevel}
            />
          </ResponsiveTasteWrapper>
        </div>
      </div>
    );
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story:
          "블럭을 마우스로 클릭하면 게이지가 차오릅니다. 또한 어느 블럭이든 두 번 클릭하면 게이지가 0으로 됩니다.",
      },
    },
  },
};
