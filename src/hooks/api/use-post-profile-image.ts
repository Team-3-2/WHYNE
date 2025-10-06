"use client";

import postProfileImage from "@/api/myprofile/post-profile-image";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface ProfileData {
  image?: string;
  nickname?: string;
}

const usePostProfileImage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ProfileData) => postProfileImage(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-profile"] });
    },
    onError: (error) => {
      console.error("프로필 이미지 업로드 실패:", error);
    },
  });
};

export default usePostProfileImage;
