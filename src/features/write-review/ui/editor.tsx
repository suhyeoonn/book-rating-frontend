"use client";

import { EditorContent } from "@tiptap/react";
import { Button } from "@/shared/ui/button";
import { useEditorConfig } from "../config/editor-config";
import Toolbar from "./editor-toolbar";

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
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
      <div className="flex justify-end p-6">
        <Button onClick={handleSave} size={"lg"}>
          Save
        </Button>
      </div>
    </>
  );
};
