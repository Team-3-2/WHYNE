import { Meta, StoryObj } from "@storybook/nextjs";
import Gnb from "./gnb";

const meta = {
  title: "Components/Gnb",
  component: Gnb,
  parameters: {
    layout: "centered",
  },
  args: {
    user: {
      image: "",
      updatedAt: "2025-10-10T07:32:10.485Z",
      createdAt: "2025-10-10T07:32:10.485Z",
      teamId: "18-2",
      nickname: "닉네임",
      id: 1,
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Gnb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Gnb
      user={{
        image: "",
        updatedAt: "2025-10-10T07:32:10.485Z",
        createdAt: "2025-10-10T07:32:10.485Z",
        teamId: "18-2",
        nickname: "닉네임",
        id: 1,
      }}
    />
  ),
};
