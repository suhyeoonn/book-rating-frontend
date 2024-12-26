"use client";

import { AlertDialog } from "@/shared/ui/alert-dialog";
import { Button } from "@/shared/ui/button";
import { Trash2Icon } from "lucide-react";
import React from "react";
import { useDeleteBook } from "../api/use-remove-book";

export const RemoveButton = ({ id }: { id: number }) => {
  const [open, setOpen] = React.useState(false);
  const mutationDelete = useDeleteBook();
  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        className="h-5 text-destructive text-xs p-0"
        onClick={() => setOpen(true)}
      >
        <Trash2Icon className="h-4" />
        Delete
      </Button>
      <AlertDialog
        open={open}
        handleOpen={(state) => setOpen(state)}
        handleAction={() => mutationDelete.mutate({ id })}
        title="정말 책을 삭제하시겠습니까?"
        description={<>삭제된 데이터는 복구할 수 없습니다.</>}
      />
    </>
  );
};
