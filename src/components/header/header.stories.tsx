import type { Meta, StoryObj } from "@storybook/nextjs";
import Header from "./header";

const meta: Meta<typeof Header> = {
  title: "Components/header",
  component: Header,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    review: { control: { type: "text" } },
    title: { control: { type: "text" } },
    description: { control: { type: "text" } },
    price: { control: { type: "text" } },
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    review: "128",
    title: "샤또 마고 2015",
    description: "블랙커런트와 바이올렛 아로마, 벨벳 같은 타닌",
    price: "64,990",
  },
};

export const ManyReviews: Story = {
  name: "Many Reviews ",
  args: {
    review: "12,345",
    title: "도멘 드 라 로마네 콩티",
    description: "풍부한 베리 계열 향과 깊은 여운",
    price: "1,200,000",
  },
};

export const LongText: Story = {
  name: "Long Text ",
  args: {
    review: "87",
    title:
      "긴 이름의 와인이 들어갔을 때 줄바꿈과 레이아웃이 자연스러운지 확인합니다",
    description:
      "설명도 길어질 때 두 줄 이상이 되었을 때 라인하이트와 간격이 의도대로 나오는지 테스트합니다",
    price: "199,000",
  },
};
