import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/shared/ui/sheet";
import { Input } from "@/shared/ui/input";
import { formatDateTime } from "@/shared/utils";
import { Note, patchNote } from "@/entities/note";
import { useEditorConfig } from "@/entities/editor/config/editor-config";
import Toolbar from "@/entities/editor/ui/editor-toolbar";
import { EditorContent } from "@tiptap/react";
import { Button } from "@/shared/ui/button";
import { useWriteNote } from "../model/use-write-note";
import { toast } from "@/shared/lib/use-toast";

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
  console.log(note);
  const { title, handleChangeTitle, content } = useWriteNote(note);

  const { editor } = useEditorConfig(content);

  if (!editor) {
    return null;
  }

  const handleSave = async () => {
    const content = editor.getJSON();
    try {
      await patchNote({ id: note._id, title, content });
      toast({ title: "저장되었습니다." });
    } catch (err) {
      toast({
        title: "문제가 발생했습니다.",
        description: "잠시 후 다시 시도하세요.",
        variant: "destructive",
      });
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen} modal={false}>
      <SheetContent className="flex flex-col space-y-4 overflow-auto">
        <SheetHeader className="mb-8 space-y-4">
          <SheetTitle asChild>
            <Input
              className="border-0 p-0 pt-4 text-2xl font-bold text-slate-900 shadow-none outline-none placeholder:text-2xl focus:ring-0 sm:text-2xl lg:text-3xl"
              value={title}
              placeholder="제목을 입력하세요"
              autoFocus
              onChange={handleChangeTitle}
            />
          </SheetTitle>
          <SheetDescription asChild>
            <dl className="grid grid-cols-4 text-sm">
              <dt className="font-semibold">생성일</dt>
              <dd className="col-span-2">{formatDateTime(note.createdAt)}</dd>
            </dl>
          </SheetDescription>
        </SheetHeader>
        <div className="flex-1">
          <div>
            <Toolbar editor={editor} />
            <EditorContent editor={editor} />
            <div className="flex justify-end border-t p-6">
              <Button onClick={handleSave} size={"lg"}>
                저장
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
