import postRegisterWine from "@/api/register/post-register-wine";
import { WineFormData } from "@/types/wine";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

interface ImageData {
  url: File;
}

const usePostWine = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate, isSuccess } = useMutation({
    mutationFn: ({ registerData }: { registerData: WineFormData }) =>
      postRegisterWine(registerData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wine-lst"] });
      router.back();
    },
    onError: (error) => {
      console.error(error);
      alert("와인 등록을 실패했습니다.");
    },
  });

  return { mutate, isSuccess };
};

export default usePostWine;
