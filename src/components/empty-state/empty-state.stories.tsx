import type { Meta, StoryObj } from "@storybook/nextjs";
import { EmptyState } from "@/components";

const meta: Meta<typeof EmptyState> = {
  title: "공통 컴포넌트/EmptyState",
  component: EmptyState,
  parameters: {
    docs: {
      description: {
        component: "페이지 상태를 안내하는 컴포넌트입니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      description: "아이콘 이름 (UnifiedIconName)",
      control: { type: "text" },
      table: {
        type: { summary: "UnifiedIconName" },
        defaultValue: { summary: '"EmptyStateIcon"' },
      },
    },
    iconClassName: {
      description: "아이콘에 적용할 추가 클래스명",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
      },
    },
    title: {
      description: "상태를 설명하는 제목 텍스트",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
      },
    },
    description: {
      description: "상세 설명 문구",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
      },
    },
    actionLabel: {
      description: "버튼 라벨 (선택)",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
      },
    },
    actionHref: {
      description: "버튼 클릭 시 이동할 링크 (선택)",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
      },
    },
    actionClassName: {
      description: "버튼에 적용할 추가 클래스명 (선택)",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
      },
    },
    variant: {
      description: "버튼 스타일 (default, outline)",
      control: { type: "text" },
      table: {
        type: { summary: "ButtonState" },
        defaultValue: { summary: '"default"' },
      },
    },
    className: {
      description: "컨테이너에 적용할 추가 클래스명 (선택)",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    icon: "EmptyStateIcon",
    title: "아직 아무도 모르는 와인이네요!",
    description: "지금 등록해서 다른 사람들에게 첫 번째로 소개해보세요",
  },
};

export const WithAction: Story = {
  args: {
    icon: "EmptyStateIcon",
    title: "등록된 데이터가 없습니다.",
    description: "새로운 데이터를 추가해보세요!",
    actionLabel: "등록하러 가기",
    actionHref: "/add",
    variant: "default",
  },
};
