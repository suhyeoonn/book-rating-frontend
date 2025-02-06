import AuthProvider from "@/shared/contexts/AuthContext";
import React from "react";
import QueryProvider from "./query-provider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <QueryProvider>{children}</QueryProvider>
    </AuthProvider>
  );
};
