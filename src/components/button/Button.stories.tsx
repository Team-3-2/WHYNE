import type { Meta, StoryObj } from "@storybook/nextjs";
import {
  Button,
  IconButton,
  CarouselNavButton,
  LikeButton,
} from "@/components";
import ICON_MAP from "@/components/icon/icon-map";
import STATIC_ICON_MAP from "@/components/icon/static-icon-map";

const unifiedIconMap = {
  ...STATIC_ICON_MAP,
  ...ICON_MAP,
};

const meta: Meta<typeof Button> = {
  title: "공통 컴포넌트/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "공통으로 사용되는 버튼 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["default", "outline", "secondary"],
      description: "버튼 상태",
    },
    icon: {
      control: "select",
      options: Object.keys(unifiedIconMap),
      description: "버튼 아이콘",
    },

    className: {
      control: "text",
      description: "추가 CSS 클래스",
    },
    shape: {
      control: "text",
      description: "-",
      table: {
        category: "X",
      },
    },
    label: {
      control: "text",
      description: "버튼에 들어가는 텍스트",
    },
    disabled: {
      control: "boolean",
      description: "비활성화 여부",
      table: {
        category: "X",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    label: "버튼 이름을 입력해보세요",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    label: "버튼 이름을 입력해보세요",
  },
};

export const Icon: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <IconButton icon="FilterIcon" aria-label="필터 버튼" />
      <IconButton icon="HamburgerIcon" aria-label="햄버거 버튼" />
      <IconButton icon="LikeOnIcon" aria-label="찜 버튼" />
    </div>
  ),
};

export const CarouselNav: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      <CarouselNavButton slide="prev" />
      <CarouselNavButton slide="next" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    variant: "default",
    label: "비활성 버튼",
    disabled: true,
  },
};

export const Variations: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      <h3 className="text-lg font-bold">대표 버튼</h3>

      <div className="grid gap-4">
        <Button label="기본" />
        <Button variant="outline" label="아웃라인" />
      </div>

      <h3 className="text-lg font-bold">아이콘이 들어간 버튼</h3>
      <div className="grid gap-4">
        <Button variant="outline" label="카카오 로그인" icon="KakaoIcon" />
        <Button variant="outline" label="구글 로그인" icon="GoogleIcon" />
        <div className="flex flex-wrap gap-4">
          <IconButton icon="FilterIcon" aria-label="필터 버튼" />
          <IconButton icon="HamburgerIcon" aria-label="햄버거 버튼" />
          <IconButton icon="LikeOnIcon" aria-label="찜 버튼" />
          <CarouselNavButton slide="prev" />
          <CarouselNavButton slide="next" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};

export const DefaultLike: Story = {
  render: () => {
    return <LikeButton count={24} />;
  },
};

export const Liked: Story = {
  render: () => {
    return <LikeButton count={24} isLike={true} />;
  },
};
