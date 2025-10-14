import { Meta, StoryObj } from "@storybook/nextjs";
import ConfirmModal from "./confirm-modal";
import { useState } from "react";

const meta: Meta<typeof ConfirmModal> = {
  title: "공통 컴포넌트/Modal",
  component: ConfirmModal,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "확인 모달 컴포넌트 입니다. ESC를 누르면 모달이 닫힙니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: { type: "boolean" },
    msg: { control: "object", description: "모달에 들어갈 텍스트 입력하는 곳" },
    onClose: () => {},
    onConfirm: () => {},
  },
};

export default meta;

type Story = StoryObj<typeof ConfirmModal>;

export const Alert: Story = {
  args: {
    isOpen: false,
    msg: { text: <>정말 삭제하시겠습니까?</>, confirmMsg: "확인" },
    onClose: () => {},
    onConfirm: () => {},
  },
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <ConfirmModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={() => {
          alert("삭제되었습니다.");
          setOpen(false);
        }}
        msg={{ text: <>정말 삭제하시겠습니까?</>, confirmMsg: "확인" }}
      />
    );
  },
};
