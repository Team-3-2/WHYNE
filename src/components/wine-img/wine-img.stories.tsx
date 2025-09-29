import { Meta, StoryObj } from "@storybook/nextjs";
import WineImg from "./wine-img";

const meta: Meta<typeof WineImg> = {
  title: "Components/WineImg",
  component: WineImg,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "와인 등록 시 사용되는 이미지 업로드 컴포넌트 입니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    isError: { control: { type: "boolean" } },
    errorMsg: { control: { type: "text" } },
  },
};

export default meta;

type Story = StoryObj<typeof WineImg>;

export const UploadWineImg: Story = {
  args: {},
};

export const ErrorWineImg: Story = {
  args: { isError: true, errorMsg: "와인 사진은 필수 입력이에요" },
};
