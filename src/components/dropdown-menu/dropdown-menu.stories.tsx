import type { Meta, StoryObj } from "@storybook/nextjs";
import DropdownMenu from "./dropdown-menu";

const meta = {
  title: "공통 컴포넌트/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    items: { control: "object" },
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: "마이페이지", href: "/my-page" },
      { label: "로그아웃", onClick: () => console.log("로그아웃") },
    ],
  },
};

export const EditDelete: Story = {
  parameters: { nextjs: { navigation: { pathname: "/write" } } },
  args: {
    items: [
      { label: "수정하기", onClick: () => console.log("수정하기") },
      { label: "삭제하기", onClick: () => console.log("삭제하기") },
    ],
  },
};
