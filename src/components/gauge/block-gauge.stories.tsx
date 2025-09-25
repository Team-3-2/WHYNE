import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import BlockGauge from "./block-gauge";

const meta: Meta = {
  title: "Components/BlockGauge",
  component: BlockGauge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "와인의 맛 강도를 시각적으로 표현하는 블록 게이지 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: { type: "number", min: 0, max: 6 },
      description: "게이지 레벨 (0-6)",
      defaultValue: 3,
    },
    maxBlocks: {
      control: { type: "number", min: 1, max: 10 },
      description: "전체 블록 수",
      defaultValue: 6,
    },
  },
  decorators: [
    (Story) => (
      <div className="p-4" style={{ width: "343px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ClickTest: Story = {
  render: () => {
    const [level, setLevel] = useState(3);

    return (
      <div>
        <BlockGauge level={level} onChange={setLevel} />
      </div>
    );
  },
};
