import "../styles";
import { Footer } from "@/widgets/layout-footer";

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center">
      {children}
      <Footer />
    </div>
  );
}
