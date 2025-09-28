"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import ProfileSidebar from "../profile-sidebar/ProfileSidebar";
import ProfileTabs from "../profile-tabs/ProfileTabs";

const MyProfile = () => {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState(searchParams.get("tab") || "review");

  return (
    <main className="mx-auto flex flex-col items-center justify-center pc:flex-row pc:items-start">
      <ProfileSidebar />
      <article className="w-full px-4 tablet:px-8 pc:w-[849px]">
        <ProfileTabs tab={tab} setTab={setTab} />
      </article>
    </main>
  );
};

export default MyProfile;
