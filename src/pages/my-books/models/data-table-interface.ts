export interface Book {
  id: number;
  title: string;
  status: "pending" | "processing" | "finish" | "stop";
  score: number;
  authors: string;
  createdDate: string;
  finishedDate: string;
}
