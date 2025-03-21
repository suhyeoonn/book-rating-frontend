import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Heading from "@tiptap/extension-heading";
import Paragraph from "@tiptap/extension-paragraph";
import Blockquote from "@tiptap/extension-blockquote";
import { useEffect } from "react";

export const useEditorConfig = (content: string) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [1, 2, 3] } }),
      Placeholder.configure({
        placeholder: "내용을 입력해주세요.",
        emptyEditorClass:
          "cursor-text before:content-[attr(data-placeholder)] before:absolute before:left-0.5 before:text-gray-400 before:opacity-50 before-pointer-events-none",
      }),
      Heading.configure({
        HTMLAttributes: {
          class: "mt-6 mb-1 ",
        },
      }),
      Paragraph.configure({
        HTMLAttributes: {
          class: "py-[3px] m-0",
        },
      }),
      Blockquote.configure({
        HTMLAttributes: {
          class: "my-1 not-italic",
        },
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "prose text-stone-800 leading-6 m-5 focus:outline-none min-h-36 prose-h2:text-2xl prose-hr:my-2 prose-blockquote:content-none prose-code:text-inherit",
      },
    },
    content,
  });

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  return { editor };
};
