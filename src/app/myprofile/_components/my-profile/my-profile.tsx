"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import AccountItem from "../account-item/account-item";
import ReviewItem from "../review-item/review-item";
import ProfileTabs from "../profile-tabs/profile-tabs";
import instance from "@/lib/axios";
import { User } from "@/types/user-type";

const MyProfile = () => {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState(searchParams.get("tab") || "review");
  const [user, setUser] = useState<User>();

  const getMe = async () => {
    try {
      const response = await instance.get("/users/me");
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMe();
  }, []);

  return (
    <main className="flex-col-center mx-auto w-full pc:flex-row pc:items-start">
      <article className="w-full px-4 tablet:px-8 pc:mx-[300px]">
        <ProfileTabs tab={tab} setTab={setTab} />

        {tab === "review" &&
          Array.from({ length: 8 }).map((_, index) => (
            <ReviewItem key={index} />
          ))}

        {tab === "account" && <AccountItem user={user} />}
      </article>
    </main>
  );
};

export default MyProfile;
