import { bookApi } from "@/entities/book";
import { BookDetailPage } from "@/pages/book-detail";

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params: { id } }: PageProps) {
  const movie = await bookApi.fetchBook(+id);
  return {
    title: movie.title,
  };
}

export default async function BookDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return <BookDetailPage id={id} />;
}
