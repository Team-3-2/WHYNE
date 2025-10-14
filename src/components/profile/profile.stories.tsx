import { Meta, StoryObj } from "@storybook/nextjs";
import Profile from "./profile";

const meta: Meta<typeof Profile> = {
  title: "공통 컴포넌트/Profile",
  component: Profile,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "프로필 이미지 컴포넌트 입니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    url: { control: { type: "text" } },
    isEditing: { control: { type: "text" } },
    className: { control: { type: "text" } },
  },
};

export default meta;

type Story = StoryObj<typeof Profile>;

export const DefaultProfile: Story = {
  args: {},
};

export const ImgProfile: Story = {
  args: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Synthetic_Production_of_Penicillin_TR1468.jpg/120px-Synthetic_Production_of_Penicillin_TR1468.jpg",
  },
};

export const NotEditingProfile: Story = {
  args: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Synthetic_Production_of_Penicillin_TR1468.jpg/120px-Synthetic_Production_of_Penicillin_TR1468.jpg",
    isEditing: false,
  },
};

export const StyledProfile: Story = {
  args: {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Synthetic_Production_of_Penicillin_TR1468.jpg/120px-Synthetic_Production_of_Penicillin_TR1468.jpg",
    isEditing: false,
    className: "border border-gray-800",
  },
};
