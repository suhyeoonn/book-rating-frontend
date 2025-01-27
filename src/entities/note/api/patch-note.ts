import { noteServiceAxiosClient } from "../config/axios-client";
import { PatchNoteRequest } from "../model/note.interface";

export const patchNote = async ({ id, title, content }: PatchNoteRequest) => {
  try {
    const res = await noteServiceAxiosClient.patch(`notes/${id}`, {
      title,
      content,
    });
    if (res.status !== 200) {
      throw new Error(res.data);
    }
  } catch (error) {
    console.error(error);
    throw new Error("Network Error");
  }
};
