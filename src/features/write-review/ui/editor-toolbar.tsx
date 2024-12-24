import { Button } from "@/shared/ui/button";
import { Editor } from "@tiptap/react";
import {
  BoldIcon,
  CodeIcon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  ItalicIcon,
  QuoteIcon,
  StrikethroughIcon,
} from "lucide-react";
import React from "react";

const Toolbar = ({ editor }: { editor: Editor }) => {
  return (
    <div className="flex items-center justify-center gap-2 p-6 py-3 border-b sm:gap-8">
      <div className="flex items-center justify-center gap-2">
        <Button
          size="icon"
          variant="ghost"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
        >
          <Heading1Icon />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          <Heading2Icon />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
        >
          <Heading3Icon />
        </Button>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Button
          size="icon"
          variant="ghost"
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <BoldIcon />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <ItalicIcon />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <StrikethroughIcon />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => editor.chain().focus().toggleCode().run()}
        >
          <CodeIcon />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        >
          <QuoteIcon />
        </Button>
      </div>
    </div>
  );
};

export default Toolbar;
