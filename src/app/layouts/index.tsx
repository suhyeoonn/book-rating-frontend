// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { Manrope, Nanum_Gothic } from "next/font/google";
import { cn } from "@/shared/utils";
import "../styles";
import QueryProvider from "../providers/query-provider";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import UserProvider from "@/shared/contexts/UserContext";

const fontHeading = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const nanumGothic = Nanum_Gothic({
  subsets: ["latin"], // 사용할 문자 셋
  weight: ["400", "700"], // 폰트 굵기
  variable: "--font-body",
});

export const metadata = {
  title: {
    template: "%s | Book Rating",
    default: "Book Rating",
  },
};

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "antialiased ",
          fontHeading.variable,
          nanumGothic.variable
        )}
      >
        <div className="flex flex-col items-center min-h-screen">
          <UserProvider>
            <QueryProvider>{children}</QueryProvider>
            <Toaster />
            <Footer />
          </UserProvider>
        </div>
      </body>
    </html>
  );
}
