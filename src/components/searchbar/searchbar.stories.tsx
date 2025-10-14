import { Meta, StoryObj } from "@storybook/nextjs";
import Searchbar from "./searchbar";

const meta: Meta<typeof Searchbar> = {
  title: "공통 컴포넌트/Searchbar",
  component: Searchbar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "검색창 컴포넌트 입니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Searchbar>;

export const DefaultSearchbar: Story = {
  args: {},
};

export const ListSearchbar: Story = {
  render: () => {
    return (
      <div className="w-[800px]">
        <Searchbar />
      </div>
    );
  },
};
