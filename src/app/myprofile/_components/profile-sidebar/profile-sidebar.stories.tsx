import { Meta, StoryObj } from "@storybook/nextjs";
import ProfileSidebar from "./profile-sidebar";

const meta: Meta<typeof ProfileSidebar> = {
  title: "My-profile/ProfileSidebar",
  component: ProfileSidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
