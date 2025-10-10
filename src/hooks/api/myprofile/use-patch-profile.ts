"use client";

import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import patchProfile from "@/api/myprofile/patch-profile";

interface ProfileData {
  imageUrl?: string;
  nickname?: string;
}

interface ErrorResponse {
  message: string;
}

const usePatchProfile = () => {
  return useMutation<void, AxiosError<ErrorResponse>, ProfileData>({
    mutationFn: ({ imageUrl, nickname }) =>
      patchProfile({ image: imageUrl, nickname }),

    onError: (error) => {
      const message = error.response?.data?.message;

      if (message) {
        alert(message);
      } else {
        alert("예상치 못한 에러");
      }
    },
  });
};

export default usePatchProfile;
