import { MyBookDetailPage } from "@/pages/my-book-detail/ui";

export default function Page({ params: { id } }: { params: { id: string } }) {
  return <MyBookDetailPage id={+id} />;
}
