import { Manrope, Nanum_Gothic } from "next/font/google";
import { cn } from "@/shared/utils";
import "../styles";
import { Footer } from "@/widgets/layout-footer";

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
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
