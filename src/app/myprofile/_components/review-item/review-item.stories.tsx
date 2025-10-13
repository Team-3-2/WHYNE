import { Meta, StoryObj } from "@storybook/nextjs";
import ReviewItem from "./review-item";
import { ReviewItemType } from "../../_types/review-type";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const meta: Meta<typeof ReviewItem> = {
  title: "페이지/마이페이지/ReviewItem",
  component: ReviewItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => {
      const queryClient = new QueryClient({
        defaultOptions: {
          queries: { retry: false, refetchOnWindowFocus: false },
          mutations: { retry: false },
        },
      });
      return (
        <QueryClientProvider client={queryClient}>
          <Story />
        </QueryClientProvider>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockReview: ReviewItemType = {
  id: 3679,
  rating: 4,
  lightBold: 4,
  smoothTannic: 3,
  drySweet: 2,
  softAcidic: 6,
  aroma: ["CHERRY"],
  content: "안녕하세요",
  createdAt: "2025-10-09T06:24:12.278Z",
  updatedAt: "2025-10-09T06:24:12.278Z",
  user: {
    id: 1908,
    nickname: "닉네임변경테스트12",
    image:
      "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Wine/user/1908/1759867171311/IMG_6250.JPG",
  },
  wine: {
    id: 1689,
    name: "Coca Cola",
    region: "United States, Atlanta, Georgia, U.S.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Coca_Cola_Flasche_-_Original_Taste.jpg/500px-Coca_Cola_Flasche_-_Original_Taste.jpg",
    price: 2000,
    avgRating: 2.5,
    type: "SPARKLING",
  },
};

export const Mobile: Story = {
  render: () => <ReviewItem review={mockReview} />,
};

export const Tablet: Story = {
  render: () => (
    <div className="w-[700px]">
      <ReviewItem review={mockReview} />
    </div>
  ),
};

export const Desktop: Story = {
  render: () => (
    <div className="w-[900px]">
      <ReviewItem review={mockReview} />
    </div>
  ),
};
