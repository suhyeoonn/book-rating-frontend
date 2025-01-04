import { Review } from "@/entities/review/types";
import { Button } from "@/shared/ui/button";
import { Edit } from "lucide-react";
import React from "react";
import { UpdateModal } from "./update-modal";

interface UpdateReviewProps {
  review: Review | null;
}
export const ReviewComment = ({ review }: UpdateReviewProps) => {
  if (!review) return "-";

  const [open, setOpen] = React.useState(false);

  return (
    <>
      {review.content}
      <Button size={"icon"} variant={"outline"} onClick={() => setOpen(true)}>
        <Edit className="h-4 w-4" />
      </Button>
      <UpdateModal
        reviewId={review.id}
        content={review.content}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};
