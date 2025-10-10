"use client";

import { redirect, useSearchParams } from "next/navigation";
import { useState } from "react";
import AccountItem from "../account-item/account-item";
import ReviewItem from "../review-item/review-item";
import WineItem from "../wine-item/wine-item";
import ProfileTabs from "../profile-tabs/profile-tabs";
import useUserStore from "@/store/user-store";
import useGetUserReview from "@/hooks/api/myprofile/use-get-user-review";
import useGetUserWine from "@/hooks/api/myprofile/use-get-user-wine";
import { ReviewItemType, WineType } from "../../_types/review-type";

// TODO(지권): 이슈 발생...

const MyProfile = () => {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState(searchParams.get("tab") || "review");
  const { user } = useUserStore((state) => state);

  const { data: userReview } = useGetUserReview();
  const { data: userWines } = useGetUserWine();

  if (!user) return redirect("/login");

  return (
    <main className="flex-col-center mx-auto w-full pc:flex-row pc:items-start">
      <article className="w-full px-4 tablet:px-8 pc:mx-[300px]">
        <ProfileTabs
          tab={tab}
          setTab={setTab}
          reviewTotal={userReview?.totalCount}
          registeredTotal={userWines?.totalCount}
        />
        <section className="mt-20">
          {tab === "review" &&
            userReview?.list?.map((review: ReviewItemType) => (
              <ReviewItem key={review.id} review={review} />
            ))}
          {tab === "registered" && (
            <div className="grid grid-cols-3 gap-x-4 gap-y-8">
              {userWines?.list?.map((wine: WineType) => (
                <WineItem key={wine.id} wine={wine} />
              ))}
            </div>
          )}

          {tab === "account" && <AccountItem user={user} />}
        </section>
      </article>
    </main>
  );
};

export default MyProfile;
