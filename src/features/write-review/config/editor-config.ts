import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

export const useEditorConfig = (content: string) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: { levels: [1, 2, 3] } }),
      Placeholder.configure({
        placeholder: "내용을 입력해주세요.",
        emptyEditorClass:
          "cursor-text before:content-[attr(data-placeholder)] before:absolute before:left-0.5 before:text-gray-400 before:opacity-50 before-pointer-events-none",
      }),
    ],
    editorProps: {
      attributes: {
        class: "prose prose-sm sm:prose-base m-5 focus:outline-none min-h-36",
      },
    },
    content,
  });
  return { editor };
};
