import { Meta, StoryObj } from "@storybook/nextjs";
import Flavor from "./Flavor";

const meta: Meta<typeof Flavor> = {
  title: "Components/Flavor",
  component: Flavor,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    count: { control: "number", description: "참여 인원 수 표시" },
    items: { control: "object", description: "향 아이템 목록 (label, img)" },
  },
};

export default meta;
type Story = StoryObj<typeof Flavor>;

const ITEMS = [
  { label: "체리", img: "/images/test_flavor.jpg" },
  { label: "체리", img: "/images/test_flavor.jpg" },
  { label: "체리", img: "/images/test_flavor.jpg" },
];

export const Default: Story = {
  args: {
    count: 12,
    items: ITEMS.slice(0, 1),
  },
};

export const ThreeItems: Story = {
  args: {
    count: 3,
    items: ITEMS,
  },
};

export const Empty: Story = {
  args: {
    count: 0,
    items: [],
  },
};
