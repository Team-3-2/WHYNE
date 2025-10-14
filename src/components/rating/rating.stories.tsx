import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import Rating from "./rating";
import RatingInput from "./rating-input";

const meta: Meta<typeof Rating> = {
  title: "공통 컴포넌트/Rating",
  component: Rating,
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
    size: "sm",
  },
};

export const WithRating: Story = {
  args: {
    rating: 4.5,
    size: "sm",
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
    size: "sm",
    showRatingRatio: true,
  },
  parameters: {
    docs: {
      description: {
        story: "총점과 함께 표시하는 별점입니다.",
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
        <Rating rating={4.0} size="xs" showRating />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Small (sm)</h3>
        <Rating rating={4.2} size="sm" showRating />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Medium (md)</h3>
        <Rating rating={4.5} size="md" showRating />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Medium 2 (md2)</h3>
        <Rating rating={3.8} size="md2" showRating />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">Large (lg)</h3>
        <Rating rating={4.7} size="lg" showRating />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">
          Extra Large (xl)
        </h3>
        <Rating rating={5.0} size="xl" showRating />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">2XL (2xl)</h3>
        <Rating rating={4.3} size="2xl" showRating />
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

export const CustomRatings: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">하트 별점</h3>
        <Rating icon="LikeOnIcon" rating={3.5} size="md" showRating />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">애플 별점</h3>
        <Rating icon="AppleIcon" rating={2.3} size="2xl" showRatingRatio />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700">베리 별점</h3>
        <Rating icon="BerryIcon" rating={2.7} size="2xl" showRatingRatio />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "별점 모양을 커스텀할 수 있습니다.",
      },
    },
  },
};

export const RatingInputTest: Story = {
  render: () => {
    const [rating, setRating] = useState(0);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = () => {
      if (rating === 0) {
        setError("별점은 필수 선택이에요");
        return;
      }
      setError(null);
      alert(`${rating}점 등록!`);
    };

    const handleRatingChange = (newRating: number) => {
      setRating(newRating);
      if (error && newRating > 0) {
        setError(null);
      }
    };

    return (
      <div className="flex flex-col gap-4 rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold">리뷰등록</h3>
        <RatingInput
          label="별점 선택"
          value={rating}
          onChange={handleRatingChange}
          errorMsg={error}
          size="lg"
        />
        <div className="flex items-center gap-4">
          <button
            onClick={handleSubmit}
            className="rounded-md bg-primary px-4 py-2 text-white"
          >
            폼제출 테스트 버튼
          </button>
        </div>
        {rating > 0 && (
          <p className="text-sm text-gray-600">
            선택된 별점: <strong>{rating}점</strong>
          </p>
        )}
      </div>
    );
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story: "폼에서 사용되는 별점 입력 RatingInput입니다.",
      },
    },
  },
};
