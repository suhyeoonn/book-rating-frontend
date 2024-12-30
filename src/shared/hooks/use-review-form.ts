"use client";

import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getMyReviewByBookId,
  patchReview,
  postReview,
} from "@/shared/api/review";
import { toast } from "@/shared/hooks/use-toast";
import { Review } from "@/shared/types";
import { MyBook } from "@/entities/my-book/types";

export function useReviewForm(myBook: MyBook) {
  const [content, setContent] = useState(myBook.review);

  const handleSave = () => {
    if (!content) {
      return toast({ title: "내용을 입력하세요.", variant: "destructive" });
    }

    // onEdit({ id: myReview.id, content });
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postReview,
    onSuccess: (data) => {
      // queryClient.invalidateQueries({ queryKey: ["reviews"] });
      // queryClient.invalidateQueries({ queryKey: ["my-review"] });
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
      toast({ title: "리뷰가 수정되었습니다." });
    },
    onError: (err) => {
      toast({ title: err.message });
    },
  });

  // const onEdit = (formReview: Review) => {
  //   mutationPatch.mutate({
  //     bookId: bookId,
  //     review: {
  //       ...formReview,
  //     },
  //   });
  // };

  // const onSave = (formReview: AddReview) => {
  //   mutation.mutate({
  //     bookId: bookId,
  //     review: {
  //       ...formReview,
  //       rating: Number(formReview.rating),
  //     },
  //   });
  // };

  return {
    content,
    setContent,
    handleSave,
    myReview: myBook,
  };
}
