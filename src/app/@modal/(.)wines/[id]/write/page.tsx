// "use client";

// import ReviewForm from "@/app/wines/[id]/_components/review-form";
// import PageModal from "@/components/modal/page-modal";

// const Page = (props: any) => {
//   return (
//     <PageModal title="리뷰 등록">
//       <ReviewForm {...props} />
//     </PageModal>
//   );
// };

// export default Page;

import PageModal from "@/components/modal/page-modal";
import ReviewFormClient from "@/app/wines/[id]/_components/wine-review-form/review-form-client";

interface WriteModalPageProps {
  params: Promise<{ id: string }>;
}

/**
 * 리뷰 작성 모달 페이지
 * - 클라이언트 네비게이션으로 /wines/[id]/write 접근 시 모달로 표시
 */

async function WriteModalPage({ params }: WriteModalPageProps) {
  const { id } = await params;

  return (
    <PageModal title="리뷰 등록">
      <ReviewFormClient wineId={Number(id)} />
    </PageModal>
  );
}

export default WriteModalPage;
