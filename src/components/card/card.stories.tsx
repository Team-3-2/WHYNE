import type { Meta, StoryObj } from "@storybook/nextjs";
import Card from "./card";
import { recommendwinemock } from "@/mock";

const DATA = recommendwinemock;

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 내가 등록한 와인
export const CardActionMenu: Story = {
  render: () => (
    <div className="p-6">
      <h3 className="mb-[10px] text-body-lg">내가 등록한 와인</h3>
      <div className="grid max-w-[800px] grid-cols-2">
        <Card
          key={DATA[3].id}
          image={DATA[2].image}
          name={DATA[3].name}
          region={DATA[3].region}
          price={DATA[3].price}
          actionMenuItems={[
            { label: "수정하기", onClick: () => console.log("edit") },
            { label: "삭제하기", onClick: () => console.log("delete") },
          ]}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "내가 등록한 와인 목록",
      },
    },
  },
};

// 와인 목록 페이지
export const CardReview: Story = {
  render: () => (
    <div className="p-6">
      <h3 className="mb-[10px] text-body-lg">와인 목록 페이지</h3>
      <div className="grid max-w-[800px] grid-cols-2">
        <Card
          key={DATA[4].id}
          image={DATA[1].image}
          avgRating={DATA[4].avgRating}
          reviewCount={DATA[4].reviewCount}
          name={DATA[4].name}
          region={DATA[4].region}
          recentReview={DATA[4].recentReview}
          href={`/detail/${DATA[4].id}`}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "와인 목록 페이지",
      },
    },
  },
};
