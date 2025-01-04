import React from "react";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogRoot,
  AlertDialogTitle,
} from "@/shared/ui/alert-dialog";
import { Label } from "@/shared/ui/label";
import { Input } from "@/shared/ui/input";
import { useUpdateComment } from "../api/use-comment-update";

interface UpdateModalProps {
  reviewId: number;
  content: string;
  open: boolean;
  setOpen: (state: boolean) => void;
}

export const UpdateModal = ({
  reviewId,
  content,
  open,
  setOpen,
}: UpdateModalProps) => {
  const mutation = useUpdateComment({
    reviewId,
    successCallback: () => setOpen(false),
  });

  const [value, setValue] = React.useState(content);

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(value);
  };

  const handleSave = () => {
    mutation.mutate({ reviewId, comment: value });
  };

  return (
    <AlertDialogRoot open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>한줄평 수정</AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div className="mt-2 space-y-2">
              <Input
                className="text-xs"
                value={value}
                onChange={handleChange}
                autoFocus
              />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setOpen(false)}>
            취소
          </AlertDialogCancel>
          <AlertDialogAction disabled={!value} onClick={handleSave}>
            저장
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogRoot>
  );
};
