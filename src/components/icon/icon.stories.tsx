import type { Meta, StoryObj } from "@storybook/nextjs";
import Icon from "./icon";
import ICON_MAP from "./icon-map";
import STATIC_ICON_MAP from "./static-icon-map";

const unifiedIconMap = {
  ...STATIC_ICON_MAP,
  ...ICON_MAP,
};

const meta = {
  title: "아이콘/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: "select",
      options: Object.keys(unifiedIconMap),
      description: "표시할 아이콘 이름",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "md2", "lg", "xl", "2xl"],
      description: "아이콘 크기",
    },
    color: {
      control: "select",
      options: [
        "default",
        "primary",
        "gray800",
        "gray600",
        "gray300",
        "gray100",
        "red100",
        "red200",
        "red300",
        "red400",
        "white",
      ],
      description: "아이콘 색상",
    },
    className: {
      control: "text",
      description: "추가 CSS 클래스",
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "AppleIcon",
  },
};

export const IconChart: Story = {
  args: {
    icon: "AppleIcon",
  },
  render: () => {
    const iconNames = Object.keys(unifiedIconMap);

    return (
      <div className="p-4">
        <h3 className="mb-4 text-center text-xl font-bold">아이콘 차트</h3>
        <div className="mx-auto grid max-w-6xl grid-cols-6 gap-4">
          {iconNames.map((iconName) => (
            <div
              key={iconName}
              className="flex flex-col items-center rounded-lg border border-gray-200 p-3 transition-shadow hover:shadow-md"
            >
              <Icon
                icon={iconName as keyof typeof unifiedIconMap}
                size="lg"
                className="mb-2"
              />
              <span className="break-words text-center text-xs text-gray-600">
                {iconName}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story: "아이콘 차트",
      },
    },
  },
};
