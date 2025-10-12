import { Suspense } from "react";
import { MyProfile } from "./_components";
import Loader from "@/components/loader/loader";
import getMe from "@/api/user/get-me";

const Page = async () => {
  const userInfo = await getMe();

  return (
    <Suspense fallback={<Loader />}>
      <MyProfile userInfo={userInfo} />
    </Suspense>
  );
};

export default Page;
