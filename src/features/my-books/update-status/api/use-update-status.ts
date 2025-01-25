import { bookQueries, updateStatus } from "@/entities/my-book/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateStatus,

    onSuccess: (_, updatedItem) => {
      queryClient.invalidateQueries({
        queryKey: bookQueries.detail(updatedItem.id).queryKey,
      });

      // 캐시된 리스트 데이터를 업데이트
      queryClient.setQueryData(bookQueries.list().queryKey, (oldData) => {
        if (!oldData) return;

        // 리스트 데이터 중 수정된 항목을 업데이트
        return oldData
          .map((item) =>
            item.id === updatedItem.id
              ? { ...item, status: updatedItem.status }
              : item,
          )
          .sort((a, b) => a.status - b.status);
      });
    },
  });
};
