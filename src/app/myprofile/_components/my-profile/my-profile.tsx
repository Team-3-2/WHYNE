"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import AccountItem from "../account-item/account-item";
import ReviewItem from "../review-item/review-item";
import ProfileTabs from "../profile-tabs/profile-tabs";

const MyProfile = () => {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState(searchParams.get("tab") || "review");

  return (
    <main className="mx-auto flex w-full flex-col items-center justify-center pc:flex-row pc:items-start">
      <article className="w-full px-4 tablet:px-8 pc:mx-[300px]">
        <ProfileTabs tab={tab} setTab={setTab} />
        {tab === "review" &&
          Array.from({ length: 8 }).map((_, index) => (
            <ReviewItem key={index} />
          ))}
        {tab === "account" && (
          <div>
            <AccountItem />
          </div>
        )}
      </article>
    </main>
  );
};

export default MyProfile;
