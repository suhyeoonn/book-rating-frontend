import { ExplorePage } from "@/pages/explore";
import { menus } from "@/widgets/layout-header";

export const metadata = {
  title: menus[0].label,
};

export default function Home() {
  return <ExplorePage />;
}
