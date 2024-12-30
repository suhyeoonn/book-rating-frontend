import { bookQueries } from "@/entities/my-book/api";
import { updateRating } from "@/entities/review/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useUpdateRating = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: updateRating,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: bookQueries.list().queryKey });
      router.refresh();
    },
  });
};
