import { Suspense } from "react";
import { MyProfile } from "./_components";
import Loader from "@/components/loader/Loader";

const Page = () => {
  return (
    <Suspense fallback={<Loader />}>
      <MyProfile />
    </Suspense>
  );
};

export default Page;
