import { Meta, StoryObj } from "@storybook/nextjs";
import AlertModal from "./alert-modal";

const meta: Meta<typeof AlertModal> = {
  title: "Components/AlertModal",
  component: AlertModal,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "확인 모달 컴포넌트 입니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof AlertModal>;

export const Alert: Story = {
  args: {},
};
