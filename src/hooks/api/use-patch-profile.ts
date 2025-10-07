"use client";

import patchProfile from "@/api/myprofile/patch-profile";
import { useMutation } from "@tanstack/react-query";

interface ProfileData {
  imageUrl?: string;
  nickname?: string;
}

const usePatchProfile = () => {
  return useMutation({
    mutationFn: ({ imageUrl, nickname }: ProfileData) =>
      patchProfile({ image: imageUrl, nickname }),
    onError: (e) => {
      console.error("프로필 수정 실패:", e);
    },
  });
};

export default usePatchProfile;
