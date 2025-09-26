import { Meta, StoryObj } from "@storybook/nextjs";
import ProfileTabs from "./ProfileTabs";

const meta: Meta<typeof ProfileTabs> = {
  title: "My-profile/ProfileTabs",
  component: ProfileTabs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tab: "review",
    setTab: () => {},
  },
};

export const Registered: Story = {
  args: {
    tab: "registered",
    setTab: () => {},
  },
};
