"use client";

import { Button } from "@/shared/ui/button";
import { toast } from "@/shared/lib/use-toast";
import { Textarea } from "@/shared/ui/textarea";
import { ChangeEvent, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { reviewApi } from "@/entities/review";
import { updateComment } from "@/entities/review/api";

export interface MemoEditorProps {
  id: number;
}

export const MemoEditor = ({ id }: MemoEditorProps) => {
  const { data: review } = useQuery(reviewApi.reviewQueries.get(id));

  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(review?.comment || "");
  }, [review]);

  const onChange = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(target.value);
  };

  const handleSave = async () => {
    if (!review?.id) {
      alert("먼저 별점을 등록해 주세요.");
      return;
    }
    await updateComment({ reviewId: review.id, comment: value });
    toast({ title: "저장되었습니다." });
  };

  return (
    <div>
      <Textarea value={value} onChange={onChange} />
      <div className="flex justify-end border-t p-6">
        <Button onClick={handleSave} size={"lg"}>
          저장
        </Button>
      </div>
    </div>
  );
};
