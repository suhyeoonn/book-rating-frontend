"use client";

import { useAuth } from "@/shared/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface ProtectedProps {
  children: ReactNode;
}
const Protected = ({ children }: ProtectedProps) => {
  const { user } = useAuth();
  const router = useRouter();

  if (!user) {
    router.replace("/login");
    return;
  }

  return children;
};

export default Protected;
