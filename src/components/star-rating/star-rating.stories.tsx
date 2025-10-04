import type { Meta, StoryObj } from "@storybook/nextjs";
import StarRating from "./star-rating";
import RatingBreakdown from "./rating-breakdown";

const meta: Meta<typeof StarRating> = {
  title: "Components/StarRating",
  component: StarRating,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "별점을 표시하는 컴포넌트입니다. 다양한 크기와 옵션을 제공합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    rating: {
      control: { type: "number", min: 0, max: 5, step: 0.1 },
      description: "평점 값 (0-5)",
    },
    maxRating: {
      control: { type: "number", min: 1, max: 10 },
      description: "최대 평점",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "md2", "lg", "xl", "2xl"],
      description: "별의 크기",
    },
    showRating: {
      control: "boolean",
      description: "점수 표시 여부",
    },
    showRatingRatio: {
      control: "boolean",
      description: "총점 표시 여부 (점수/총점 형식)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rating: 4.2,
    size: "md",
  },
};

export const WithRating: Story = {
  args: {
    rating: 4.5,
    size: "md",
    showRating: true,
  },
  parameters: {
    docs: {
      description: {
        story: "점수를 함께 표시하는 별점입니다.",
      },
    },
  },
};

export const WithRatingRatio: Story = {
  args: {
    rating: 3.8,
    size: "lg",
    showRatingRatio: true,
  },
  parameters: {
    docs: {
      description: {
        story: "총점과 함께 표시하는 큰 크기의 별점입니다.",
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">
          Extra Small (xs)
        </h3>
        <StarRating rating={4.0} size="xs" showRating />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Small (sm)</h3>
        <StarRating rating={4.2} size="sm" showRating />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Medium (md)</h3>
        <StarRating rating={4.5} size="md" showRating />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Medium 2 (md2)</h3>
        <StarRating rating={3.8} size="md2" showRating />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Large (lg)</h3>
        <StarRating rating={4.7} size="lg" showRating />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">
          Extra Large (xl)
        </h3>
        <StarRating rating={5.0} size="xl" showRating />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">2XL (2xl)</h3>
        <StarRating rating={4.3} size="2xl" showRating />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "다양한 크기의 별점을 보여줍니다.",
      },
    },
  },
};

export const MaxRatingVariations: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">
          5점 만점(기본값)
        </h3>
        <StarRating rating={4.2} showRating />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">10점 만점</h3>
        <StarRating rating={8.5} maxRating={10} showRating />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">3점 만점</h3>
        <StarRating rating={2.1} maxRating={3} showRating />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "다양한 최대 평점 설정을 보여줍니다.",
      },
    },
  },
};

export const RatingBreakdownResponsive: Story = {
  render: () => (
    <div className="mx-auto grid gap-8 p-6">
      <div>
        <div className="grid gap-10">
          <h3 className="mb-5 text-lg font-semibold text-gray-700">
            반응형 (확인 가능)
          </h3>
          <div className="pc:max-w-[280px]">
            <div className="mb-5 text-sm text-gray-600">
              pc / tablet / mobile
            </div>
            <RatingBreakdown
              average={4.2}
              distribution={{
                5: 150,
                4: 80,
                3: 30,
                2: 10,
                1: 5,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story: "반응형",
      },
    },
  },
};
