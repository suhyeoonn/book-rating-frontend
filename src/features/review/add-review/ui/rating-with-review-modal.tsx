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
import { Label } from "@/shared/ui/label";
import { useAddReview } from "../api/use-add-review";
import { RatingSelect } from "../../set-rating";
import { Textarea } from "@/shared/ui/textarea";
import { levelList } from "@/shared/model/levels";
import { MultiSelect } from "@/shared/ui/multi-select";

const defaultContent: Record<number, string> = {
  0: "",
  1: "별로에요",
  2: "그저그래요",
  3: "보통이에요",
  4: "대체로 만족스러운 책이에요",
  5: "정말 감명 깊게 읽었어요. 최고의 책이에요!",
};

export const AddReviewModal = ({
  open,
  setOpen,
  myBookId,
}: {
  open: boolean;
  setOpen: (state: boolean) => void;
  myBookId: number;
}) => {
  const [rating, setRating] = React.useState(0);
  const [comment, setComment] = React.useState("");
  const [selectedLevels, setSelectedLevels] = React.useState<string[]>([]);

  const { addReview } = useAddReview(myBookId);

  const handleSave = () => {
    addReview(comment, rating, selectedLevels);
    setOpen(false);
  };

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(value);
  };

  const handleRating = (value: string) => {
    if (!rating) {
      setComment(defaultContent[+value]);
    }
    setRating(+value);
  };

  return (
    <AlertDialogRoot open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>어떠셨나요?</AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div className="mt-2 space-y-3">
              <div className="space-y-1">
                <Label className="font-semibold">별점</Label>
                <RatingSelect rating={rating} changeCallback={handleRating} />
              </div>
              <div className="space-y-1">
                <Label className="font-semibold">이 레벨에 추천해요</Label>
                <MultiSelect
                  options={levelList}
                  onValueChange={setSelectedLevels}
                  defaultValue={selectedLevels}
                  placeholder="Select Levels"
                  variant="inverted"
                  maxCount={3}
                  modalPopover
                />
              </div>
              <div className="space-y-1">
                <Label className="font-semibold">한줄평</Label>
                <Textarea
                  className="px-3 py-2 text-xs"
                  placeholder="후기를 입력하세요."
                  onChange={handleChange}
                  value={comment}
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
          <AlertDialogAction
            disabled={rating === 0 || !comment}
            onClick={handleSave}
          >
            저장
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogRoot>
  );
};
