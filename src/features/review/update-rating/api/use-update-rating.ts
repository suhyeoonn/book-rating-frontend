import { myBookApi } from "@/entities/my-book";
import { reviewApi } from "@/entities/review";
import { updateRating } from "@/entities/review/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useUpdateRating = (reviewId: number) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: updateRating,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: reviewApi.reviewQueries.get(reviewId).queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: myBookApi.bookQueries.list().queryKey,
      });
      router.refresh();
    },
  });
};
