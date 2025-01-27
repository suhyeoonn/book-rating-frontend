import { noteServiceAxiosClient } from "../config/axios-client";

class NoteApi {
  #client;
  #BASE_URL = "notes";

  constructor() {
    this.#client = noteServiceAxiosClient;
  }

  async delete(id: string) {
    return this.#client.delete(`${this.#BASE_URL}/${id}`);
  }
}

export const noteApi = new NoteApi();
