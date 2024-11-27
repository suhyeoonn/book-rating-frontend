import { MyBookEditPage } from "@/pages/my-book-edit/ui";

export default function Page({ params: { id } }: { params: { id: string } }) {
  return <MyBookEditPage id={+id} />;
}
