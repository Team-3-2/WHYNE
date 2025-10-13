import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Meta, StoryObj } from "@storybook/nextjs";
import AccountItem from "./account-item";
import { User } from "@/types/user-type";

const meta: Meta<typeof AccountItem> = {
  title: "페이지/마이페이지/AccountItem",
  component: AccountItem,
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

const mockUser: User = {
  createdAt: "2025-10-02T09:07:13.613Z",
  email: "testlogin@email.com",
  id: 1908,
  image:
    "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Wine/user/1908/1759867171311/IMG_6250.JPG",
  nickname: "닉네임변경테스트12",
  teamId: "18-2",
  updatedAt: "2025-10-08T17:02:37.799Z",
};

export const Default: Story = {
  args: {
    user: mockUser,
  },
};
