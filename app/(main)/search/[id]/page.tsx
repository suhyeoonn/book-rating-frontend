import { bookApi } from "@/entities/book";
import { SearchDetailPage } from "@/pages/search-detail";

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params: { id } }: PageProps) {
  const { title } = await bookApi.fetchBook(+id);
  return {
    title,
  };
}

export default async function BookDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const book = await bookApi.fetchBook(+id);
  return <SearchDetailPage book={book} />;
}
