"use client";

import { EditorContent } from "@tiptap/react";
import { Button } from "@/shared/ui/button";
import EditorMenu from "./editor-menu";
import { useEditorConfig } from "../config/editor-config";

export const TiptapEditor = () => {
  const { editor } = useEditorConfig();

  if (!editor) {
    return null;
  }

  const handleSave = () => {
    const content = editor.getHTML();
    console.log(content);
  };

  return (
    <>
      <div>
        <Button onClick={handleSave} size={"sm"}>
          Save
        </Button>
      </div>
      <EditorMenu editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
};
