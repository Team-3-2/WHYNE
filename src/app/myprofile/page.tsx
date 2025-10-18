import { Suspense } from "react";
import { createPageInfoMetadata } from "@/constants/metadata";
import type { Metadata } from "next";
import { MyProfile } from "./_components";
import Loader from "@/components/loader/loader";
import getMe from "@/api/user/get-me";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}): Promise<Metadata> {
  const params = await searchParams;
  const tab = params.tab;

  let tabTitle = "내가 쓴 후기";
  let tabDescription = "내가 남긴 와인 리뷰를 확인해보세요";

  switch (tab) {
    case "registered":
      tabTitle = "내가 등록한 와인";
      tabDescription = "내가 등록한 와인을 확인해보세요";
      break;
    case "account":
      tabTitle = "내 계정";
      tabDescription = "내 계정 관리";
  }

  const metadata = createPageInfoMetadata(tabTitle, tabDescription);

  return {
    ...metadata,
    robots: {
      index: false,
      follow: false,
    },
  };
}

const Page = async () => {
  const userInfo = await getMe();

  return (
    <Suspense fallback={<Loader />}>
      <MyProfile userInfo={userInfo} />
    </Suspense>
  );
};

export default Page;
