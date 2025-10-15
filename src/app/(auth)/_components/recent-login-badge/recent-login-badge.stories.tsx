import { Meta, StoryObj } from "@storybook/nextjs";
import RecentLoginBadge from "./recent-login-badge";

const meta: Meta<typeof RecentLoginBadge> = {
  title: "페이지/로그인/RecentLoginBadge",
  component: RecentLoginBadge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const RecentLoginBadgeStory: Story = {
  render: () => <RecentLoginBadge />,
};
