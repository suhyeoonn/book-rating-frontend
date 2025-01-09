import { Review } from "@/entities/review/types";
import { Button } from "@/shared/ui/button";
import { Edit } from "lucide-react";
import React from "react";
import { UpdateModal } from "./update-modal";

interface UpdateReviewProps {
  review: Review | null | undefined;
}
export const ReviewComment = ({ review }: UpdateReviewProps) => {
  const [open, setOpen] = React.useState(false);

  if (!review) return "-";

  return (
    <>
      {review?.comment}
      <Button size={"icon"} variant={"outline"} onClick={() => setOpen(true)}>
        <Edit className="h-4 w-4" />
      </Button>
      {open && review && (
        <UpdateModal
          reviewId={review?.id}
          content={review?.comment}
          open={open}
          setOpen={setOpen}
        />
      )}
    </>
  );
};
