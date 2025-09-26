import { Meta, StoryObj } from "@storybook/nextjs";
import TextInput from "./text-input";

const meta: Meta<typeof TextInput> = {
  title: "Components/text-input",
  component: TextInput,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "공통으로 사용되는 Input 컴포넌트 입니다",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: { type: "text" } },
    placeholder: { control: { type: "text" } },
  },
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const NoContent: Story = {
  args: {
    title: "",
    placeholder: "",
  },
};

export const InputError: Story = {
  args: {
    title: "",
    placeholder: "",
    errorMsg: "에러가 발생했습니다",
  },
};

export const LongText: Story = {
  args: {
    title:
      "여긴 긴 제목이 들어가는 곳 입니다. 여긴 긴 제목이 들어가는 곳 입니다. 여긴 긴 제목이 들어가는 곳 입니다.",
    placeholder:
      "긴 placeholder를 입력해주세요 긴 placeholder를 입력해주세요 긴 placeholder를 입력해주세요",
  },
};

export const ModalInputError: Story = {
  args: {
    title: "",
    placeholder: "",
    errorMsg: "에러가 발생했습니다",
    variant: "modal",
  },
};
