// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { Manrope, Nanum_Gothic } from "next/font/google";
import { cn } from "@/shared/utils";
import "../styles";
import QueryProvider from "../providers/query-provider";
import { Toaster } from "@/shared/ui/toaster";
import { Footer } from "@/widgets/layout-footer";
import AuthProvider from "@/shared/contexts/AuthContext";

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
          "antialiased",
          fontHeading.variable,
          nanumGothic.variable,
        )}
      >
        <div className="flex min-h-screen flex-col items-center">
          <AuthProvider>
            <QueryProvider>{children}</QueryProvider>
            <Toaster />
            <Footer />
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
