import { Meta, StoryObj } from "@storybook/nextjs";
import SelectType from "./select-type";

const meta: Meta<typeof SelectType> = {
  title: "Components/type-select",
  component: SelectType,
  parameters: {
    layout: "centered",
  },
  argTypes: { register: () => {} },
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
