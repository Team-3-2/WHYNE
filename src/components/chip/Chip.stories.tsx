import { Meta, StoryObj } from "@storybook/nextjs";
import Chip from "./Chip";

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  parameters: {
    layout: "centered",
  },
  component: Chip,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[66px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "후추",
  },
};

export const WithImage: Story = {
  args: {
    label: "후추",
    img: "/images/test/test_chip.jpg",
  },
  decorators: [
    (Story) => (
      <div className="w-[100px]">
        <Story />
      </div>
    ),
  ],
};
