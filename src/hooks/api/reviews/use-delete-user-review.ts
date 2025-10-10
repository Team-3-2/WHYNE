"use client";

import { useMutation } from "@tanstack/react-query";
import deleteUserReview from "@/api/reviews/delete-user-review";

const useDeleteUserReview = () => {
  return useMutation({
    mutationFn: ({ id }: { id: number }) => deleteUserReview({ id }),
    onSuccess: () => {
      alert("요청 성공");
    },
    onError: () => {
      alert("요청 실패");
    },
  });
};

export default useDeleteUserReview;
