import { Review } from "@/entities/review/types";
import { Button } from "@/shared/ui/button";
import { Edit } from "lucide-react";
import React from "react";
import { UpdateModal } from "./update-modal";
import { useQuery } from "@tanstack/react-query";
import { reviewApi } from "@/entities/review";

interface UpdateReviewProps {
  id: number | undefined;
}
export const ReviewComment = ({ id }: UpdateReviewProps) => {
  if (!id) return "-";

  const { data } = useQuery(reviewApi.reviewQueries.get(id));

  const [open, setOpen] = React.useState(false);

  return (
    <>
      {data?.content}
      <Button size={"icon"} variant={"outline"} onClick={() => setOpen(true)}>
        <Edit className="h-4 w-4" />
      </Button>
      {open && data && (
        <UpdateModal
          reviewId={id}
          content={data?.content}
          open={open}
          setOpen={setOpen}
        />
      )}
    </>
  );
};
