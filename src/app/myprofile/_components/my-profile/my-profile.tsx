"use client";

import { redirect, useSearchParams } from "next/navigation";
import { useState } from "react";
import AccountItem from "../account-item/account-item";
import ReviewItem from "../review-item/review-item";
import ProfileTabs from "../profile-tabs/profile-tabs";
import useUserStore from "@/store/user-store";
import useGetUserReview from "@/hooks/api/myprofile/use-get-user-review";
import { ReviewItemType } from "../../_types/review-type";

// TODO(지권): 이슈 발생...

const MyProfile = () => {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState(searchParams.get("tab") || "review");
  const { user } = useUserStore((state) => state);

  const { data: userReview } = useGetUserReview();
  console.log(userReview);

  if (!user) return redirect("/login");

  return (
    <main className="flex-col-center mx-auto w-full pc:flex-row pc:items-start">
      <article className="w-full px-4 tablet:px-8 pc:mx-[300px]">
        <ProfileTabs tab={tab} setTab={setTab} />

        {tab === "review" && (
          <section className="mt-20">
            {userReview?.list?.map((review: ReviewItemType) => (
              <ReviewItem key={review.id} review={review} />
            ))}
          </section>
        )}

        {tab === "account" && (
          <section>
            <AccountItem user={user} />
          </section>
        )}
      </article>
    </main>
  );
};

export default MyProfile;
