import { MyBook } from "@/entities/my-book/types";
import { reviewApi } from "@/entities/review";
import { MemoEditor } from "@/features/my-books/write-memo";
import { levelList } from "@/shared/model/levels";
import { Label } from "@/shared/ui/label";
import { MultiSelect } from "@/shared/ui/multi-select";
import { useQuery } from "@tanstack/react-query";
import { Lock } from "lucide-react";

interface MyBookReviewSectionProps {
  myBook: MyBook;
  id: number;
}

export const MyBookReviewSection = ({
  myBook,
  id,
}: MyBookReviewSectionProps) => {
  const { data: review } = useQuery(reviewApi.reviewQueries.get(id));

  return (
    <>
      <h3 className="mb-1 text-base font-medium text-slate-800 md:text-lg">
        Review
      </h3>
      {!myBook.review?.id ? (
        <div className="flex items-center justify-center gap-2 rounded-lg bg-slate-50 p-10 text-sm italic">
          <Lock className="size-5" /> <p>후기를 등록하세요.</p>
        </div>
      ) : (
        <>
          <Label className="font-semibold">이 레벨에게 추천했어요</Label>
          <MultiSelect
            options={levelList}
            disabled
            onValueChange={() => {}}
            defaultValue={review?.levels?.map(String) || []}
            placeholder="Select levels"
            variant="inverted"
            maxCount={3}
            modalPopover
          />
          <Label className="font-semibold">한줄평</Label>
          <MemoEditor id={id} />
        </>
      )}
    </>
  );
};
