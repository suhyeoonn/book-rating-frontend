"use client";
import { Button } from "../../shared/ui/button";
import { Label } from "../ui/label";
import { Textarea } from "../../shared/ui/textarea";
import { Star } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { ChangeEvent } from "react";
import { useUser } from "@/shared/contexts/UserContext";
import Tooltip from "../../shared/ui/tooltip";
import { MyBook } from "@/entities/my-book/types";
import { useReviewForm } from "@/shared/hooks/use-review-form";

export default function ReviewForm({ myBook }: { myBook: MyBook }) {
  if (!myBook) {
    return null;
  }

  const { content, setContent, handleSave } = useReviewForm(myBook);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <div className="p-4">
      <h4 className="text-sm font-medium mb-4 text-slate-800">Review</h4>
      <div className="space-y-2">
        <Textarea
          value={content}
          name="content"
          onChange={onChange}
          className="bg-white"
        />
        <div className="flex gap-2 justify-end">
          <Button type="button" onClick={handleSave}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
