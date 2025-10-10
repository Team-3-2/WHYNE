import { Meta, StoryObj } from "@storybook/nextjs";
import ProfileTabs from "./profile-tabs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const meta: Meta<typeof ProfileTabs> = {
  title: "My-profile/ProfileTabs",
  component: ProfileTabs,
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

export const Default: Story = {
  args: {
    tab: "review",
    setTab: () => {},
  },
};

export const Registered: Story = {
  args: {
    tab: "registered",
    setTab: () => {},
  },
};
