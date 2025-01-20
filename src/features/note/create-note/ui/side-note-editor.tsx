import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/shared/ui/sheet";
import { TiptapEditor } from "../../../my-books/write-review";
import { Input } from "@/shared/ui/input";
import { formatDateTime } from "@/shared/utils";
import { Note } from "@/entities/note";

interface SideNoteEditorProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  note: Note;
}

export const SideNoteEditor = ({
  open,
  setOpen,
  note,
}: SideNoteEditorProps) => {
  const { title, createdAt, content } = note;

  return (
    <Sheet open={open} onOpenChange={setOpen} modal={false}>
      <SheetContent className="flex flex-col space-y-4">
        <SheetHeader className="mb-8 space-y-4">
          <SheetTitle asChild>
            <Input
              className="border-0 text-2xl font-bold text-slate-900 shadow-none outline-none placeholder:text-2xl focus:ring-0 lg:text-3xl"
              value={title}
              placeholder="제목을 입력하세요"
              autoFocus
            />
          </SheetTitle>
          <SheetDescription asChild>
            <dl className="grid grid-cols-4 text-sm">
              <dt className="font-semibold">생성일</dt>
              <dd className="col-span-2">{formatDateTime(createdAt)}</dd>
            </dl>
          </SheetDescription>
        </SheetHeader>
        <div className="flex-1">
          <TiptapEditor id={1} memo={content} />
        </div>
      </SheetContent>
    </Sheet>
  );
};
