import type { Meta, StoryObj } from "@storybook/nextjs";
import Loader from "./loader";

const meta: Meta<typeof Loader> = {
  title: "Components/Loader",
  component: Loader,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {};
