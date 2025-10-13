import { Meta, StoryObj } from "@storybook/nextjs";
import Flavor from "./flavor";
import { AromaKey } from "@/types/aroma-type";

const meta: Meta<typeof Flavor> = {
  title: "Components/Flavor",
  component: Flavor,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    count: { control: "number", description: "참여 인원 수 표시" },
    items: {
      control: "object",
      description: "향 아이템 키 목록 (AromaKey[])",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Flavor>;

const ITEMS: AromaKey[] = ["CHERRY", "PEPPER", "EMPTY"];

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
