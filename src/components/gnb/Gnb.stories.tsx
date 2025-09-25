import { Meta, StoryObj } from "@storybook/nextjs";
import Gnb from "./Gnb";

const meta = {
  title: "Components/Gnb",
  component: Gnb,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Gnb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => <Gnb />,
};
