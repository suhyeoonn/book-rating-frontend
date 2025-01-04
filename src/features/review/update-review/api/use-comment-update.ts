import { reviewApi } from "@/entities/review";
import { updateComment } from "@/entities/review/api";
import { toast } from "@/shared/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface UpdateCommentProps {
  reviewId: number;
  successCallback: () => void;
}

export const useUpdateComment = ({
  reviewId,
  successCallback,
}: UpdateCommentProps) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateComment,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: reviewApi.reviewQueries.all(),
      });
      successCallback();
    },
    onError: (err) => {
      toast({ title: err.message });
    },
  });
};
