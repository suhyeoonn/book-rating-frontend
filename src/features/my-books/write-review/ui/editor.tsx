"use client";

import { EditorContent } from "@tiptap/react";
import { Button } from "@/shared/ui/button";
import { useEditorConfig } from "../config/editor-config";
import Toolbar from "./editor-toolbar";
import { updateReview } from "@/entities/my-book/api";
import { UpdateReviewParams } from "../model/types";
import { toast } from "@/shared/hooks/use-toast";

export const TiptapEditor = ({ id, review }: UpdateReviewParams) => {
  const { editor } = useEditorConfig(review);

  if (!editor) {
    return null;
  }

  const handleSave = async () => {
    const content = editor.getHTML();
    await updateReview({ id, review: content });
    toast({ title: "저장되었습니다." });
  };

  return (
    <>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
      <div className="flex justify-end p-6 border-t">
        <Button onClick={handleSave} size={"lg"}>
          Save
        </Button>
      </div>
    </>
  );
};
