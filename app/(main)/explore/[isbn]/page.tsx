import { aladinApi } from "@/entities/aladin";
import { ExploreDetailPage } from "@/pages/explore-detail";

interface PageProps {
  params: {
    isbn: string;
  };
}

export async function generateMetadata({ params: { isbn } }: PageProps) {
  return {
    title: "test",
  };
}

export default async function BookDetail({
  params: { isbn },
}: {
  params: { isbn: string };
}) {
  const book = await aladinApi.getItemLookUp(isbn);
  return <ExploreDetailPage book={book} />;
}
