import type { Meta, StoryObj } from "@storybook/nextjs";
import DropdownMenu from "./DropdownMenu";

const meta: Meta<typeof DropdownMenu> = {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["small", "large"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof DropdownMenu>;

export const Large: Story = {
  args: {
    size: "large",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const ActiveLargeMyPage: Story = {
  name: "Large — Active",
  args: {
    size: "large",
  },
};

export const ActiveSmallMyPage: Story = {
  name: "Small — Active",
  args: {
    size: "small",
  },
};
