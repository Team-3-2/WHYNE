import { Suspense } from "react";
import { MyProfile } from "./_components";
import Loader from "@/components/loader/Loader";

const Page = () => {
  return (
    // TODO(지권): 로딩 컴포넌트 추가
    <Suspense fallback={<Loader />}>
      <MyProfile />
    </Suspense>
  );
};

export default Page;
