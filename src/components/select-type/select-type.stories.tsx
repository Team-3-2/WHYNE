import { Meta, StoryObj } from "@storybook/nextjs";
import SelectType from "./select-type";

const meta: Meta<typeof SelectType> = {
  title: "공통 컴포넌트/SelectType",
  component: SelectType,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof SelectType>;

export const WineTypeSelect: Story = {
  args: {},
};

export const WineTypeSelectError: Story = {
  args: {
    isError: true,
  },
};
