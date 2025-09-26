import type { Meta, StoryObj } from "@storybook/nextjs";
import Icon from "./Icon";
import ICON_MAP from "./icon-map";

const meta = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: "select",
      options: Object.keys(ICON_MAP),
      description: "표시할 아이콘 이름",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
      description: "아이콘 크기",
    },
    color: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "danger100",
        "danger200",
        "gray",
        "white",
        "black",
      ],
      description: "아이콘 색상",
    },
    className: {
      control: "text",
      description: "추가 CSS 클래스",
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "AppleIcon",
  },
};
