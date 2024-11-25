import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getMyReviewByBookId,
  patchReview,
  postReview,
} from "@/shared/api/review";
import { toast } from "@/shared/hooks/use-toast";
import { AddReview, Review } from "@/shared/types";

const initial = {
  rating: 0,
  content: "",
};

export function useReviewForm(
  bookId: number,
  handleAverageRating: (rating: number | undefined) => void
) {
  const [formReview, setFormReview] = useState<AddReview>(initial);
  const [mode, setMode] = useState("create");

  const handleSave = () => {
    const { rating, content } = formReview;
    if (!rating) {
      return toast({ title: "점수를 선택하세요.", variant: "destructive" });
    } else if (!content) {
      return toast({ title: "내용을 입력하세요.", variant: "destructive" });
    }

    if (mode === "create") {
      onSave(formReview);
    } else {
      if (!myReview) return;
      onEdit({ id: myReview.id, ...formReview });
    }
  };

  const { data: myReview, isSuccess } = useQuery({
    queryKey: ["my-review", bookId],
    queryFn: () => getMyReviewByBookId(bookId),
  });

  useEffect(() => {
    if (isSuccess && myReview) {
      setMode("edit");
      setFormReview(myReview);
    } else if (isSuccess && !myReview) {
      setFormReview(initial);
      setMode("create");
    }
  }, [isSuccess, myReview]);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postReview,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
      queryClient.invalidateQueries({ queryKey: ["my-review"] });
      handleAverageRating(data?.data.averageRating);
      toast({ title: "리뷰가 등록되었습니다." });
    },
    onError: (err) => {
      toast({ title: err.message });
    },
  });

  const mutationPatch = useMutation({
    mutationFn: patchReview,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
      handleAverageRating(data?.data.averageRating);
      toast({ title: "리뷰가 수정되었습니다." });
    },
    onError: (err) => {
      toast({ title: err.message });
    },
  });

  const onEdit = (formReview: Review) => {
    mutationPatch.mutate({
      bookId: bookId,
      review: {
        ...formReview,
      },
    });
  };

  const onSave = (formReview: AddReview) => {
    mutation.mutate({
      bookId: bookId,
      review: {
        ...formReview,
        rating: Number(formReview.rating),
      },
    });
  };

  return {
    formReview,
    mode,
    setFormReview,
    handleSave,
    myReview,
  };
}
