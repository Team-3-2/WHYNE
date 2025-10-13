// src/providers/toast/toast.stories.tsx
import type { Meta, StoryObj } from "@storybook/nextjs";
import ToastProvider from "./toast-provider";
import { useToast } from "@/hooks/use-toast";

const ToastButtons = () => {
  const {
    reviewCreateSuccess,
    reviewCreateError,
    reviewUpdateSuccess,
    reviewUpdateError,
    reviewDeleteSuccess,
    reviewDeleteError,
    wineCreateSuccess,
    wineCreateError,
    wineUpdateSuccess,
    wineUpdateError,
    wineDeleteSuccess,
    wineDeleteError,
    loginSuccess,
    loginError,
    signupSuccess,
    signupError,
  } = useToast();

  return (
    <div className="flex min-h-[400px] w-full items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-3xl flex-col gap-8 rounded-xl bg-white p-8 shadow">
        <section>
          <h3 className="mb-3 text-lg font-semibold">리뷰 토스트</h3>
          <div className="flex flex-wrap gap-3">
            <button
              className="rounded-md bg-black px-4 py-2 text-white"
              onClick={() => reviewCreateSuccess()}
            >
              남기기 성공
            </button>
            <button
              className="rounded-md bg-black px-4 py-2 text-white"
              onClick={() => reviewCreateError()}
            >
              남기기 실패
            </button>
            <button
              className="rounded-md bg-black px-4 py-2 text-white"
              onClick={() => reviewUpdateSuccess()}
            >
              수정 성공
            </button>
            <button
              className="rounded-md bg-black px-4 py-2 text-white"
              onClick={() => reviewUpdateError()}
            >
              수정 실패
            </button>
            <button
              className="rounded-md bg-black px-4 py-2 text-white"
              onClick={() => reviewDeleteSuccess()}
            >
              삭제 성공
            </button>
            <button
              className="rounded-md bg-black px-4 py-2 text-white"
              onClick={() => reviewDeleteError()}
            >
              삭제 실패
            </button>
          </div>
        </section>

        <section>
          <h3 className="mb-3 text-lg font-semibold">와인 토스트</h3>
          <div className="flex flex-wrap gap-3">
            <button
              className="rounded-md bg-black px-4 py-2 text-white"
              onClick={() => wineCreateSuccess()}
            >
              등록 성공
            </button>
            <button
              className="rounded-md bg-black px-4 py-2 text-white"
              onClick={() => wineCreateError()}
            >
              등록 실패
            </button>
            <button
              className="rounded-md bg-black px-4 py-2 text-white"
              onClick={() => wineUpdateSuccess()}
            >
              수정 성공
            </button>
            <button
              className="rounded-md bg-black px-4 py-2 text-white"
              onClick={() => wineUpdateError()}
            >
              수정 실패
            </button>
            <button
              className="rounded-md bg-black px-4 py-2 text-white"
              onClick={() => wineDeleteSuccess()}
            >
              삭제 성공
            </button>
            <button
              className="rounded-md bg-black px-4 py-2 text-white"
              onClick={() => wineDeleteError()}
            >
              삭제 실패
            </button>
          </div>
        </section>

        <section>
          <h3 className="mb-3 text-lg font-semibold">
            로그인 / 회원가입 토스트
          </h3>
          <div className="flex flex-wrap gap-3">
            <button
              className="rounded-md bg-black px-4 py-2 text-white"
              onClick={() => loginSuccess()}
            >
              로그인 성공
            </button>
            <button
              className="rounded-md bg-black px-4 py-2 text-white"
              onClick={() => loginError()}
            >
              로그인 실패
            </button>
            <button
              className="rounded-md bg-black px-4 py-2 text-white"
              onClick={() => signupSuccess()}
            >
              회원가입 성공
            </button>
            <button
              className="rounded-md bg-black px-4 py-2 text-white"
              onClick={() => signupError()}
            >
              회원가입 실패
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

const meta: Meta<typeof ToastButtons> = {
  title: "토스트/Toast",
  component: ToastButtons,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "페이지 전역에서 사용하는 토스트 UI. `useToast()` 훅을 통해 기능별 메시지를 호출할 수 있습니다.",
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <ToastProvider />
        <Story />
      </>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ToastButtons />,
  parameters: {
    docs: {
      description: {
        story:
          "리뷰 / 와인 / 인증 토스트를 모두 모은 플레이그라운드입니다.\n\n 각 버튼을 눌러 훅이 반환하는 메서드를 직접 확인할 수 있습니다.",
      },
    },
  },
};
