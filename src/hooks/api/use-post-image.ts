"use client";

import postImage from "@/api/image/post-image";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "../use-toast";

interface UploadBody {
  url: File;
}

const usePostImage = () => {
  const { uploadImageError } = useToast();

  return useMutation({
    mutationFn: (body: UploadBody) => postImage(body),
    onError: (error: unknown) => {
      uploadImageError("이미지 업로드 실패");
    },
  });
};

export default usePostImage;
