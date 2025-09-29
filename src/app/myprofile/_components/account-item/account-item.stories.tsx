import { Meta, StoryObj } from "@storybook/nextjs";
import AccountItem from "./account-item";

const meta: Meta<typeof AccountItem> = {
  title: "My-profile/AccountItem",
  component: AccountItem,
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
