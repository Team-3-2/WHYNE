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
      imgUrl,
      path,
    }: {
      patchData: WineFormData;
      path: number;
      imgUrl: { url: File };
    }) => patchRegisteredWine(patchData, imgUrl, path),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wineList"] });
      router.back();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { mutate, isSuccess, isPending };
};

export default usePatchWine;
