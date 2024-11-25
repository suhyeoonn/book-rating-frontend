import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchReview } from "../api/review";

export const useReview = () => {
  // TODO: 지울까?
  const queryClient = useQueryClient();
  const updateReview = useMutation({
    mutationFn: patchReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
    },
    onError: (err) => {
      alert(err);
    },
  });

  return { updateReview };
};
