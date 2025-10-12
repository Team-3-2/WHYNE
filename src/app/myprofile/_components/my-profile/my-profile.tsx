"use client";

import { redirect, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import AccountItem from "../account-item/account-item";
import ReviewItem from "../review-item/review-item";
import WineItem from "../wine-item/wine-item";
import ProfileTabs from "../profile-tabs/profile-tabs";
import useGetUserWine from "@/hooks/api/my-profile/use-get-user-wine";
import { ReviewItemType, WineType } from "../../_types/review-type";
import { User } from "@/types/user-type";
import { useInfiniteScroll } from "@/hooks/use-infinite-scroll";
import getUserReview from "@/api/my-profile/get-user-review";

interface MyProfileProps {
  userInfo: User;
}

const MyProfile = ({ userInfo }: MyProfileProps) => {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState(searchParams.get("tab") || "review");

  const queryKey = useMemo(() => ["user-review"], []);

  const { allItems: userReview, observerRef } = useInfiniteScroll({
    queryKey,
    fetchFn: (cursor) =>
      getUserReview({
        limit: 5,
        cursor,
      }),
  });

  const { data: userWines } = useGetUserWine();

  if (!userInfo) return redirect("/login");

  return (
    <main className="flex-col-center mx-auto w-full pc:flex-row pc:items-start">
      <article className="container w-full">
        <ProfileTabs
          tab={tab}
          setTab={setTab}
          reviewTotal={userReview?.length}
          registeredTotal={userWines?.totalCount}
        />
        <section className="mt-[61px] tablet:mt-[67px] pc:mt-[70px]">
          {tab === "review" && (
            <>
              {(userReview as ReviewItemType[])?.map((review) => (
                <ReviewItem key={review.id} review={review} />
              ))}
              <div ref={observerRef} className="mt-[100px] h-1 w-full" />
            </>
          )}

          {tab === "registered" && (
            <div
              className={cn(
                "grid gap-y-[16px] pt-[24px]",
                "pc:grid-cols-3 pc:gap-x-[15px] pc:gap-y-[40px] pc:pt-[40px]",
                "tablet:grid-cols-2 tablet:gap-x-[16px] tablet:gap-y-[32px]"
              )}
            >
              {userWines?.list?.map((wine: WineType) => (
                <WineItem key={wine.id} wine={wine} />
              ))}
            </div>
          )}

          {tab === "account" && <AccountItem user={userInfo} />}
        </section>
      </article>
    </main>
  );
};

export default MyProfile;
