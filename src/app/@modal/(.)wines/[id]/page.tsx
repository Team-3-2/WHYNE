"use client";

import ReviewForm, {
  ReviewFormProps,
} from "@/app/wines/[id]/_components/review-form";
import PageModal from "@/components/modal/page-modal";

const Page = ({ ...props }: ReviewFormProps) => {
  return (
    <PageModal title="리뷰 등록">
      <ReviewForm {...props} />
    </PageModal>
  );
};

export default Page;
