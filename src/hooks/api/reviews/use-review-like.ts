import { useMutation, useQueryClient } from "@tanstack/react-query";
import postLike from "@/api/reviews/post-like";
import deleteLike from "@/api/reviews/delete-like";
import type { Review } from "@/types/wine";

const useReviewLike = (reviewId: number, wineId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (nextLike: boolean) =>
      nextLike ? postLike(reviewId) : deleteLike(reviewId),
    onMutate: async (nextLike) => {
      await queryClient.cancelQueries({ queryKey: ["reviews", wineId] });
      const previous = queryClient.getQueryData<Review[]>(["reviews", wineId]);

      queryClient.setQueryData(["reviews", wineId], (old?: Review[]) =>
        old?.map((item) =>
          item.id === reviewId ? { ...item, isLiked: nextLike } : item
        )
      );

      queryClient.setQueryData(["wine", wineId], (old: any) => ({
        ...old,
        reviews: old.reviews.map((item: Review) =>
          item.id === reviewId ? { ...item, isLiked: nextLike } : item
        ),
      }));

      return { previous };
    },
    onError: (_err, _nextLike, context) => {
      if (context?.previous) {
        queryClient.setQueryData(["reviews", wineId], context.previous);
      }
    },
  });
};

export default useReviewLike;
