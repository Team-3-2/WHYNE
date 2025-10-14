"use client";

import { useMutation } from "@tanstack/react-query";
import deleteUserReview from "@/api/reviews/delete-user-review";
import { useToast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";

const useDeleteUserReview = () => {
  const { reviewDeleteError, reviewDeleteSuccess } = useToast();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id }: { id: number }) => deleteUserReview({ id }),
    onSuccess: () => {
      reviewDeleteSuccess();
      queryClient.invalidateQueries({
        queryKey: ["user-review"],
      });
    },
    onError: () => {
      reviewDeleteError();
    },
  });
};

export default useDeleteUserReview;
