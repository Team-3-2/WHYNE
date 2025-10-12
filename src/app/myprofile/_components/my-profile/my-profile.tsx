"use client";

import { redirect, useSearchParams } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import AccountItem from "../account-item/account-item";
import ReviewItem from "../review-item/review-item";
import WineList from "../registered/wine-list/wine-list";
import ProfileTabs from "../profile-tabs/profile-tabs";
import useGetUserReview from "@/hooks/api/my-profile/use-get-user-review";
import useGetUserWine from "@/hooks/api/my-profile/use-get-user-wine";
import { ReviewItemType } from "../../_types/review-type";
import { User } from "@/types/user-type";

interface MyProfileProps {
  userInfo: User;
}

const MyProfile = ({ userInfo }: MyProfileProps) => {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState(searchParams.get("tab") || "review");

  const { data: userReview } = useGetUserReview();
  const { data: userWines } = useGetUserWine();

  if (!userInfo) return redirect("/login");

  return (
    <main className="flex-col-center mx-auto w-full pc:flex-row pc:items-start">
      <article className="container w-full">
        <ProfileTabs
          tab={tab}
          setTab={setTab}
          reviewTotal={userReview?.totalCount}
          registeredTotal={userWines?.totalCount}
        />
        <section className="mt-[61px] tablet:mt-[67px] pc:mt-[70px]">
          {tab === "review" &&
            userReview?.list?.map((review: ReviewItemType) => (
              <ReviewItem key={review.id} review={review} />
            ))}
          {tab === "registered" && <WineList />}

          {tab === "account" && <AccountItem user={userInfo} />}
        </section>
      </article>
    </main>
  );
};

export default MyProfile;
