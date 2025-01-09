"use client";

import { useState } from "react";
import Image from "next/image";
import { Book } from "@/entities/book/types";
import StarGroup from "@/shared/ui/star-group";
import { Button } from "@/shared/ui/button";
import { deleteBook, patchBook } from "@/shared/api/book";
import TagGroup from "../../../shared/ui/tag-group";

import BookForm from "./book-form";
import BookEditModal from "./book-edit-modal";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { AlertDialog } from "@/shared/ui/alert-dialog";
import { validateSrc } from "@/shared/utils";
import { toast } from "@/shared/lib/use-toast";

export default function BookCard({ book }: { book: Book }) {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState(book);

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: patchBook,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });

  const mutationDelete = useMutation({
    mutationFn: deleteBook,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });

  const onSubmit = async () => {
    try {
      mutation.mutate(formData);
      setOpen(false);
    } catch (err) {
      if (err instanceof Error) alert(err.message);
    }
  };

  const onDelete = async () => {
    try {
      // TODO: 관리자만 삭제할 수 있도록 개선
      mutationDelete.mutate(book.id, {
        onSuccess: () => {
          toast({ title: "정상적으로 삭제되었습니다." });
        },
        onError: (err: Error) => {
          toast({
            title: err.message,
            variant: "destructive",
          });
        },
      });
    } catch (err) {
      if (err instanceof Error) alert(err.message);
    }
  };

  return (
    <>
      <div
        className="group flex cursor-pointer flex-col overflow-hidden rounded-lg border-gray-200 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
        onClick={() => setSelectedBook(book)}
      >
        <Image
          src={validateSrc(book.thumbnail)}
          alt={book.title}
          width={150}
          height={150}
          className="max-h-52 w-full bg-gradient-to-b from-gray-50 to-gray-100 object-contain p-1 py-2"
        />
        <div className="flex-1 space-y-1 bg-white p-3">
          <h3 className="mb-2 truncate text-sm font-medium text-slate-900">
            {book.title}
          </h3>
          {/* <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
            <TagGroup tags={book.tags} />
          </div> */}
          <div className="flex items-center justify-between">
            <StarGroup rating={book.averageRating} />
            <span className="text-xs text-gray-500">
              {book.reviewCount} reviews
            </span>
            {/* <Button
              size="sm"
              variant="ghost"
              className="text-muted-foreground hover:bg-muted/40 px-2"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(true);
              }}
            >
              <TrashIcon className="w-4 h-4" />
              <span className="sr-only">Delete</span>
            </Button> */}
          </div>
        </div>
      </div>
      {/* <BookEditModal
        onSave={onSubmit}
        open={open}
        onOpenChange={() => setOpen(false)}
      >
        <BookForm formData={formData} setFormData={setFormData} editMode />
      </BookEditModal> */}
      <AlertDialog
        open={open}
        handleOpen={(state) => setOpen(state)}
        handleAction={onDelete}
        title="정말 책을 삭제하시겠습니까?"
        description={
          <>
            <span className="px-1 font-bold italic">{book.title}</span>이(가)
            삭제됩니다.
          </>
        }
      />
    </>
  );
}
