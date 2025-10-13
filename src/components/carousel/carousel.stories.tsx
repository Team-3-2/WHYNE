import type { Meta, StoryObj } from "@storybook/nextjs";
import { CAROUSEL_BREAKPOINTS } from "@/constants/responsive";
import Carousel from "./carousel";
import RecommendCard from "@/app/wines/_components/wine-recommended/recommend-card";
import { recommendwinemock } from "@/mock";

const wines = recommendwinemock;

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    navigationEnabled: {
      control: "boolean",
      description: "네비게이션 버튼 표시 여부",
    },
    draggableScrollbar: {
      control: "boolean",
      description: "드래그 가능한 스크롤바 표시 여부",
    },
    className: {
      control: "text",
      description: "캐러셀 컨테이너에 추가할 클래스명",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BreakpointsDefault: Story = {
  args: {
    navigationEnabled: true,
    draggableScrollbar: true,
  },
  render: (args) => (
    <div className="p-6">
      <h3 className="mb-4 text-xl font-bold">기본 샘플 (테스트용)</h3>
      <Carousel breakpoints={CAROUSEL_BREAKPOINTS.default}>
        {wines.map((wine) => (
          <RecommendCard key={wine.id} wine={wine} />
        ))}
      </Carousel>
    </div>
  ),
};

export const BreakpointsRecommendWine: Story = {
  args: {
    navigationEnabled: true,
    draggableScrollbar: true,
  },
  render: (args) => (
    <div className="p-6">
      <h3 className="mb-2 text-xl font-bold">이 달의 추천 와인</h3>
      <Carousel breakpoints={CAROUSEL_BREAKPOINTS.recommendWine}>
        {wines.map((wine) => (
          <RecommendCard key={wine.id} wine={wine} />
        ))}
      </Carousel>
    </div>
  ),
};
