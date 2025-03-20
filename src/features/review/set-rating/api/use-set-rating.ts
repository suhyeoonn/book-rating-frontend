import { myBookApi } from "@/entities/my-book";
import { reviewApi } from "@/entities/review";
import { postReview, updateRating } from "@/entities/review/api";
import { Review } from "@/entities/review/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

interface SetRatingProps {
  review: Review | undefined;
  myBookId: number;
}

export const useSetRating = ({ review, myBookId }: SetRatingProps) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutationUpdate = useMutation({
    mutationFn: updateRating,
    onSuccess: () => successHandler(),
  });

  const mutationCreate = useMutation({
    mutationFn: postReview,
    onSuccess: () => successHandler(),
  });

  const successHandler = () => {
    queryClient.invalidateQueries({
      queryKey: reviewApi.reviewQueries.get(review?.id).queryKey,
    });
    queryClient.invalidateQueries({
      queryKey: myBookApi.bookQueries.list().queryKey,
    });
    router.refresh();
  };

  const changeRating = (value: string) => {
    if (review && review?.id) {
      mutationUpdate.mutate({ reviewId: review.id, rating: +value });
    }
  };

  return { changeRating };
};
