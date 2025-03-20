import React, { useState } from "react";
import Image from "next/image";
import { validateSrc } from "@/shared/utils";
import { Button } from "@/shared/ui/button";
import { RatingSelect, useSetRating } from "@/features/review/set-rating";
import { RatingWithReviewModal } from "@/features/review/add-review";
import { MyBook } from "@/entities/my-book/types";
import { Plus } from "lucide-react";
import BookInfo from "./book-info";

interface MyBookContentProps {
  myBook: MyBook;
}

export const MyBookContent = ({ myBook }: MyBookContentProps) => {
  const { changeRating } = useSetRating({
    review: myBook?.review,
    myBookId: myBook.id,
  });

  const [open, setOpen] = useState(false);

  return (
    <article className="flex justify-center gap-16 text-slate-500">
      <div className="flex flex-col">
        <Image
          src={validateSrc(myBook.book.thumbnail)}
          alt={myBook.book.title}
          width={150}
          height={150}
          className="max-h-52 border border-gray-100 object-contain p-1 shadow-lg"
        />
        <div className="mt-8 flex items-center">
          {!myBook.review?.rating ? (
            <Button className="w-full" onClick={() => setOpen(true)}>
              <Plus className="size-5" />
              후기 등록하기
            </Button>
          ) : (
            <RatingSelect
              rating={myBook.review?.rating || 0}
              changeCallback={changeRating}
            />
          )}
          <RatingWithReviewModal
            open={open}
            setOpen={setOpen}
            myBookId={myBook.id}
          />
        </div>
      </div>

      <BookInfo book={myBook} />
    </article>
  );
};
