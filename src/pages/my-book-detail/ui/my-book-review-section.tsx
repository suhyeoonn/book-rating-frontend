import { MyBook } from "@/entities/my-book/types";
import { MemoEditor } from "@/features/my-books/write-memo";
import { Lock } from "lucide-react";

interface MyBookReviewSectionProps {
  myBook: MyBook;
  id: number;
}

export const MyBookReviewSection = ({
  myBook,
  id,
}: MyBookReviewSectionProps) => {
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
        <MemoEditor id={id} />
      )}
    </>
  );
};
