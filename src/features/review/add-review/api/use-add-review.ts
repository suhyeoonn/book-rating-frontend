import { postReview } from "@/shared/api/review";
import { toast } from "@/shared/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddReview = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: postReview,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
      toast({ title: "리뷰가 등록되었습니다." });
    },
    onError: (err) => {
      toast({ title: err.message });
    },
  });

  const addReview = (bookId: number, content: string, rating: number) => {
    mutation.mutate({ bookId, content, rating });
  };

  return { mutation, addReview };
};
