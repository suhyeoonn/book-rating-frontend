import { JSONContent } from "@tiptap/react";

export interface Note {
  _id: string;
  bookId: number;
  userId: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface PatchNoteRequest {
  id: string;
  title: string;
  content: JSONContent;
}
