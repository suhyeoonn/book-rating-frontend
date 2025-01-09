"use client";

import { EditorContent } from "@tiptap/react";
import { Button } from "@/shared/ui/button";
import { useEditorConfig } from "../config/editor-config";
import Toolbar from "./editor-toolbar";
import { updateReview } from "@/entities/my-book/api";
import { UpdateReviewParams } from "../model/types";
import { toast } from "@/shared/lib/use-toast";

export const TiptapEditor = ({ id, memo }: UpdateReviewParams) => {
  const { editor } = useEditorConfig(memo);

  if (!editor) {
    return null;
  }

  const handleSave = async () => {
    const content = editor.getHTML();
    await updateReview({ id, memo: content });
    toast({ title: "저장되었습니다." });
  };

  return (
    <>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
      <div className="flex justify-end border-t p-6">
        <Button onClick={handleSave} size={"lg"}>
          저장
        </Button>
      </div>
    </>
  );
};
