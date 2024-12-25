import { bookQueries, updateStatus } from "@/entities/my-book/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateStatus,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: bookQueries.list().queryKey });
    },
  });
};
