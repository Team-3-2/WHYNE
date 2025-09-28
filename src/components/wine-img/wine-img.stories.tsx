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
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof WineImg>;

export const UploadWineImg: Story = {
  args: {},
};
