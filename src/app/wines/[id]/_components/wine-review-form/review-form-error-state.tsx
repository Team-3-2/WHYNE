"use client";

import Button from "@/components/button/basic-button";

interface ReviewFormErrorStateProps {
  onRetry?: () => void;
}

const ReviewFormErrorState = ({ onRetry }: ReviewFormErrorStateProps) => (
  <div className="flex-center min-h-[400px] flex-col gap-4">
    <p className="text-body-lg text-gray-500">
      와인 정보를 불러올 수 없습니다.
    </p>
    <Button
      variant="default"
      label="돌아가기"
      className="h-[50px] w-[283px]"
      onClick={onRetry}
    />
  </div>
);

export default ReviewFormErrorState;
