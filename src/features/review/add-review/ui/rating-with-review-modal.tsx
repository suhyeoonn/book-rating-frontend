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
import React, { ChangeEvent } from "react";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { useAddReview } from "../api/use-add-review";
import { RatingSelect } from "../../update-rating";

const defaultContent: Record<number, string> = {
  0: "",
  1: "별로에요",
  2: "그저그래요",
  3: "보통이에요",
  4: "대체로 만족스러운 책이에요",
  5: "정말 감명 깊게 읽었어요. 최고의 책이에요!",
};

export const RatingWithReviewModal = ({
  open,
  setOpen,
  id,
}: {
  open: boolean;
  setOpen: (state: boolean) => void;
  id: number;
}) => {
  const [rating, setRating] = React.useState(0);
  const [comment, setComment] = React.useState("");

  const { addReview } = useAddReview(id);

  const handleSave = () => {
    addReview(comment || defaultContent[rating], rating);
    setOpen(false);
  };

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setComment(value);
  };

  return (
    <AlertDialogRoot open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>별점과 함께 한줄평을 공유하세요.</AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div className="mt-2 space-y-3">
              <div className="space-y-1">
                <Label className="font-semibold">별점</Label>
                <RatingSelect
                  rating={rating}
                  changeCallback={(value: string) => setRating(+value)}
                />
              </div>
              <div className="space-y-1">
                <Label className="font-semibold">한줄평</Label>
                <Input
                  className="px-3 py-2 text-xs"
                  disabled={!rating}
                  placeholder="별점을 먼저 선택하세요."
                  onChange={handleChange}
                  value={comment || defaultContent[rating]}
                />
              </div>
              <div className="flex">
                작성한 한줄평은 공유되어 책 추천과 의견 나눔에 활용됩니다!
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setOpen(false)}>
            취소
          </AlertDialogCancel>
          <AlertDialogAction disabled={rating === 0} onClick={handleSave}>
            저장
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogRoot>
  );
};
