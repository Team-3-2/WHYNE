"use client";

import postImage from "@/api/image/post-image";
import { useMutation } from "@tanstack/react-query";

interface UploadBody {
  url: File;
}

const usePostImage = () => {
  return useMutation({
    mutationFn: (body: UploadBody) => postImage(body),
    onError: (error: unknown) => {
      console.error("이미지 업로드 실패:", error);
    },
  });
};

export default usePostImage;
