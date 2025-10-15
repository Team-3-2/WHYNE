"use client";

import { redirect, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { useMemo, useState, useEffect } from "react";
import AccountItem from "../account-item/account-item";
import ReviewItem from "../review-item/review-item";
import WineItem from "../wine-item/wine-item";
import ProfileTabs from "../profile-tabs/profile-tabs";
import { ReviewItemType, WineType } from "../../_types/review-type";
import { User } from "@/types/user-type";
import { useInfiniteScroll } from "@/hooks/use-infinite-scroll";
import getUserReview from "@/api/my-profile/get-user-review";
import getUserWines from "@/api/user/get-user-wines";
import { EmptyState } from "@/components";
import Loader from "@/components/loader/loader";
import CardSkeleton from "@/components/card/card-skeleton";

interface MyProfileProps {
  userInfo: User;
}

const MyProfile = ({ userInfo }: MyProfileProps) => {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState(searchParams.get("tab") || "review");
  const [wineScrollKey, setWineScrollKey] = useState(0);

  const queryKey = useMemo(() => ["user-review"], []);

  const {
    allItems: userReview,
    observerRef: reviewObserverRef,
    isError: reviewIsError,
    isLoading: reviewIsLoading,
  } = useInfiniteScroll({
    queryKey,
    fetchFn: (cursor) =>
      getUserReview({
        limit: 5,
        cursor,
      }),
  });

  const {
    allItems: userWines,
    totalCount: userWinesTotalCount,
    observerRef: wineObserverRef,
    isError: wineIsError,
    isLoading: wineIsLoading,
    isFetchingNextPage,
  } = useInfiniteScroll<WineType>({
    queryKey: ["user-wine", wineScrollKey],
    fetchFn: (cursor) =>
      getUserWines({
        limit: 6,
        cursor,
      }),
    enabled: tab === "registered",
  });

  if (!userInfo) return redirect("/login");

  return (
    <main className="flex-col-center mx-auto w-full pc:flex-row pc:items-start">
      <article className="container w-full">
        <ProfileTabs tab={tab} setTab={setTab} />
        <section className="mt-[61px] tablet:mt-[67px] pc:mt-[70px]">
          {tab === "review" && (
            <>
              {reviewIsLoading ? (
                <Loader />
              ) : userReview?.length === 0 || reviewIsError ? (
                <EmptyState
                  icon="EmptyStateIcon"
                  title="아직 등록된 리뷰가 없습니다."
                  description="리뷰를 등록해보세요!"
                />
              ) : (
                (userReview as ReviewItemType[])?.map((review) => (
                  <ReviewItem key={review.id} review={review} />
                ))
              )}
              <div ref={reviewObserverRef} className="mt-[100px] h-1 w-full" />
            </>
          )}

          {tab === "registered" && (
            <>
              {wineIsLoading ? (
                <Loader />
              ) : userWinesTotalCount === 0 || wineIsError ? (
                <EmptyState
                  icon="EmptyStateIcon"
                  title="아직 등록한 와인이 없어요!"
                  description="지금 첫 번째 와인을 등록해보세요"
                  actionLabel="와인 등록하기"
                  actionHref="/register/new"
                />
              ) : (
                <>
                  <div
                    className={cn(
                      "grid w-full gap-y-[16px] pt-[24px]",
                      "pc:grid-cols-3 pc:gap-x-[15px] pc:gap-y-[40px] pc:pt-[40px]",
                      "tablet:grid-cols-2 tablet:gap-x-[16px] tablet:gap-y-[32px]"
                    )}
                  >
                    {(userWines as WineType[])?.map((wine) => (
                      <WineItem key={wine.id} wine={wine} />
                    ))}
                  </div>
                  <div
                    ref={wineObserverRef}
                    className="mt-[100px] h-1 w-full"
                  />
                  {wineIsLoading === false && isFetchingNextPage && (
                    <div
                      className={cn(
                        "grid w-full gap-y-[16px] pt-[24px]",
                        "pc:grid-cols-3 pc:gap-x-[15px] pc:gap-y-[40px] pc:pt-[40px]",
                        "tablet:grid-cols-2 tablet:gap-x-[16px] tablet:gap-y-[32px]"
                      )}
                    >
                      {Array.from({ length: 6 }).map((_, i) => (
                        <CardSkeleton key={i} />
                      ))}
                    </div>
                  )}
                </>
              )}
            </>
          )}

          {tab === "account" && <AccountItem user={userInfo} />}
        </section>
      </article>
    </main>
  );
};

export default MyProfile;
