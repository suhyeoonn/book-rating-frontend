import { bookQueries, updateStatus } from "@/entities/my-book/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useUpdateStatus = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: updateStatus,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: bookQueries.list().queryKey });
      router.refresh();
    },
  });
};
