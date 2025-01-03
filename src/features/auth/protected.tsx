"use client";

import { useAuth } from "@/shared/contexts/AuthContext";
import { useRouter, usePathname } from "next/navigation";
import { ReactNode } from "react";

interface ProtectedProps {
  children: ReactNode;
}
const Protected = ({ children }: ProtectedProps) => {
  const { user } = useAuth();
  const router = useRouter();

  const pathname = usePathname();

  if (!user) {
    router.replace("/login?next=" + pathname);
    return;
  }

  return children;
};

export default Protected;
