"use client";

import { useMutation } from "@tanstack/react-query";
import deleteWine from "@/api/wines/delete-wine";

const useDeleteWine = () => {
  return useMutation({
    mutationFn: ({ id }: { id: number }) => deleteWine({ id }),
    onSuccess: () => {
      alert("삭제되었습니다.");
    },
    onError: () => {
      alert("요청 실패");
    },
  });
};

export default useDeleteWine;
