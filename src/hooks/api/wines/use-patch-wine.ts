import patchRegisteredWine from "@/api/register/patch-registered-wine";
import { useToast } from "@/hooks/use-toast";
import { WineFormData } from "@/types/wine";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const usePatchWine = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { wineUpdateSuccess, wineUpdateError } = useToast();

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
      queryClient.invalidateQueries({ queryKey: ["user-wine"] });
      router.back();
      wineUpdateSuccess();
    },
    onError: () => {
      router.back();
      wineUpdateError();
    },
  });

  return { mutate, isSuccess, isPending };
};

export default usePatchWine;
