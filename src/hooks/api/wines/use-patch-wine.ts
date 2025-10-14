import patchRegisteredWine from "@/api/register/patch-registered-wine";
import { WineFormData } from "@/types/wine";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const usePatchWine = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate, isSuccess, isPending } = useMutation({
    mutationFn: ({
      patchData,
      path,
    }: {
      patchData: WineFormData;
      path: number;
    }) => patchRegisteredWine(patchData, path),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wine-list"] });
      router.back();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { mutate, isSuccess, isPending };
};

export default usePatchWine;
