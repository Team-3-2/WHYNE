import { Meta, StoryObj } from "@storybook/nextjs";
import SelectType from "./select-type";

const registerMock = (): any => {
  return (name: string) => ({
    name,
    onChange: () => {},
    onBlur: () => {},
    ref: () => {},
  });
};

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
  args: {
    register: registerMock(),
    isError: false,
  },
};

export const WineTypeSelectError: Story = {
  args: {
    register: registerMock(),
    isError: true,
  },
};
