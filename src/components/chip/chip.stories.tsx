import { Meta, StoryObj } from "@storybook/nextjs";
import Chip from "./chip";

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
