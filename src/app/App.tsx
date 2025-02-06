import React from "react";
import { Providers } from "./providers";
import { Toaster } from "@/shared/ui/toaster";
import localFont from "next/font/local";
import { cn } from "@/shared/utils";
import { RootLayout } from "./layouts";

const pretendard = localFont({
  src: "./font/pretendard-variable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className={cn("antialiased", pretendard.className)}>
        <RootLayout>
          <Providers>{children}</Providers>
        </RootLayout>
        <Toaster />
      </body>
    </html>
  );
};
