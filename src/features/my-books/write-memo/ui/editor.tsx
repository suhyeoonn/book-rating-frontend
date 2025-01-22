"use client";

import { Button } from "@/shared/ui/button";
import { updateReview } from "@/entities/my-book/api";
import { toast } from "@/shared/lib/use-toast";
import { UpdateReviewParams } from "@/entities/my-book/models/my-book.interface";
import { useEditorConfig } from "@/entities/editor/config/editor-config";
import Toolbar from "@/entities/editor/ui/editor-toolbar";
import { EditorContent } from "@tiptap/react";

export const MemoEditor = ({ id, memo }: UpdateReviewParams) => {
  const { editor } = useEditorConfig(memo); // TODO: useRef

  if (!editor) {
    return null;
  }

  const handleSave = async () => {
    const content = editor.getHTML();
    await updateReview({ id, memo: content });
    toast({ title: "저장되었습니다." });
  };

  return (
    <div>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
      <div className="flex justify-end border-t p-6">
        <Button onClick={handleSave} size={"lg"}>
          저장
        </Button>
      </div>
    </div>
  );
};
