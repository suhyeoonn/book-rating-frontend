import { reviewApi } from "@/entities/review";
import { toast } from "@/shared/lib/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddReview = (myBookId: number) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: reviewApi.postReview,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: reviewApi.reviewQueries.get(myBookId).queryKey,
      });
      toast({ title: "리뷰가 등록되었습니다." });
    },
    onError: (err) => {
      toast({ title: err.message });
    },
  });

  const addReview = (content: string, rating: number, levels: string[]) => {
    mutation.mutate({ myBookId, content, rating, levels });
  };

  return { mutation, addReview };
};
