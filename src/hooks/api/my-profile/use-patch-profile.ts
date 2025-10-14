"use client";

import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import patchProfile from "@/api/my-profile/patch-profile";
import { useToast } from "@/hooks/use-toast";

interface ProfileData {
  imageUrl?: string;
  nickname?: string;
}

interface ErrorResponse {
  message: string;
}

const usePatchProfile = () => {
  const { profileUpdateSuccess, profileUpdateError } = useToast();

  return useMutation<void, AxiosError<ErrorResponse>, ProfileData>({
    mutationFn: ({ imageUrl, nickname }) =>
      patchProfile({ image: imageUrl, nickname }),

    onSuccess: () => {
      profileUpdateSuccess();
    },

    onError: (error) => {
      const message = error.response?.data?.message;

      if (message) {
        profileUpdateError(message);
      } else {
        profileUpdateError("예상치 못한 에러 !");
      }
    },
  });
};

export default usePatchProfile;
