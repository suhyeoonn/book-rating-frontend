import { noteServiceAxiosClient } from "../config/axios-client";
import { Note, PatchNoteRequest } from "../model/note.interface";

class NoteApi {
  #client;
  #BASE_URL = "/notes";

  constructor() {
    this.#client = noteServiceAxiosClient;
  }

  async create(myBookId: number) {
    return this.#client.post(this.#BASE_URL, {
      bookId: myBookId,
    });
  }

  async getAll(bookId: number): Promise<Note[]> {
    const { data } = await this.#client.get(
      `${this.#BASE_URL}?bookId=${bookId}`,
    );
    return data;
  }

  async delete(id: string) {
    return this.#client.delete(`${this.#BASE_URL}/${id}`);
  }

  async patch({ id, title, content }: PatchNoteRequest) {
    return this.#client.patch(`${this.#BASE_URL}/${id}`, {
      title,
      content,
    });
  }
}

export const noteApi = new NoteApi();
