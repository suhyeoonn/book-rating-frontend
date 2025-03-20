import React from "react";
import Toolbar from "./editor-toolbar";
import { EditorContent } from "@tiptap/react";
import { useEditorConfig } from "../config/editor-config";

const Editor = ({ content }: { content: string }) => {
  const { editor } = useEditorConfig(content);

  if (!editor) {
    return null;
  }

  return (
    <>
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
};

export default Editor;
