import { noteServiceAxiosClient } from "@/entities/note";
import { CreateNoteParams } from "../model/note.interface";

export const createNote = async ({ bookId }: CreateNoteParams) => {
  const { data } = await noteServiceAxiosClient.post("/notes", {
    bookId,
    userId: 2, // TODO: jwt로 파악
  });
  return data;
};
