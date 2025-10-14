"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteWine from "@/api/wines/delete-wine";

const useDeleteWine = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id }: { id: number }) => deleteWine({ id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-wine"] });
    },
  });
};

export default useDeleteWine;
