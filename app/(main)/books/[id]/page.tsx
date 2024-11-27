import { BookDetailPage } from "@/pages/book-detail";

export default function BookDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return <BookDetailPage id={id} />;
}
