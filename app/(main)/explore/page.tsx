import { SearchPage } from "@/pages/search";
import { menus } from "@/widgets/layout-header";

export const metadata = {
  title: menus[0].label,
};

export default function Home() {
  return <SearchPage />;
}
