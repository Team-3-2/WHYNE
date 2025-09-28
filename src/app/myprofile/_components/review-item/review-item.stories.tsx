import { Meta, StoryObj } from "@storybook/nextjs";
import ReviewItem from "./review-item";

const meta: Meta<typeof ReviewItem> = {
  title: "MY-PROFILE/ReviewItem",
  component: ReviewItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[550px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Mobile: Story = {
  render: () => <ReviewItem />,
};

export const Tablet: Story = {
  render: () => (
    <div className="w-[700px]">
      <ReviewItem />
    </div>
  ),
};

export const Desktop: Story = {
  render: () => (
    <div className="w-[900px]">
      <ReviewItem />
    </div>
  ),
};
