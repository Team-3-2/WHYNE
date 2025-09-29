import { Suspense } from "react";
import { MyProfile } from "./_components";

const Page = () => {
  return (
    // TODO(지권): 로딩 컴포넌트 추가
    <Suspense fallback={<div>Loading...</div>}>
      <MyProfile />
    </Suspense>
  );
};

export default Page;
