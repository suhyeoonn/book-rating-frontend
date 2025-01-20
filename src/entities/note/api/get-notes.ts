import { Note } from "../model/note.interface";
import { noteServiceAxiosClient } from "../config/axios-client";

export const getNotes = async (bookId: number): Promise<Note[]> => {
  try {
    const { data } = await noteServiceAxiosClient.get(`notes?bookId=${bookId}`);

    return data;
  } catch (error) {
    throw error;
  }
};
