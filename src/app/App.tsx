import React from "react";
import { Providers } from "./providers";
import { Toaster } from "@/shared/ui/toaster";

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Providers>{children}</Providers>
      <Toaster />
    </>
  );
};

export default App;
