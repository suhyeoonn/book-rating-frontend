export interface Note {
  id: number;
  title: string;
  createdAt: string;
  content: string;
}

export interface CreateNoteParams {
  bookId: number;
}
