import postRegisterWine from "@/api/register/post-register-wine";
import { useToast } from "@/hooks/use-toast";
import { WineFormData } from "@/types/wine";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const usePostWine = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { wineCreateSuccess, wineCreateError } = useToast();

  const { mutate, isSuccess } = useMutation({
    mutationFn: ({ registerData }: { registerData: WineFormData }) =>
      postRegisterWine(registerData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wine-list"] });
      queryClient.invalidateQueries({ queryKey: ["user-wine"] });
      router.back();
      wineCreateSuccess();
    },
    onError: (error) => {
      router.back();
      wineCreateError();
    },
  });

  return { mutate, isSuccess };
};

export default usePostWine;
