import App from "@/app/App";
import { RootLayout } from "@/app/layouts";

export const metadata = {
  title: {
    template: "%s | Book Rating",
    default: "Book Rating",
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <RootLayout>
      <App>{children}</App>
    </RootLayout>
  );
};

export default Layout;
