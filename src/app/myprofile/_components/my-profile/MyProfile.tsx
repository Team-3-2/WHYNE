"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import ProfileSidebar from "../profile-sidebar/ProfileSidebar";
import ProfileTabs from "../profile-tabs.tsx/ProfileTabs";

const MyProfile = () => {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState(searchParams.get("tab") || "review");

  return (
    <div className="mx-auto flex items-start justify-center">
      <ProfileSidebar />
      <div className="w-[849px]">
        <ProfileTabs tab={tab} setTab={setTab} />
        <div></div>
      </div>
    </div>
  );
};

export default MyProfile;
