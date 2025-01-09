import { LoginPage } from "@/pages/login";
import { Suspense } from "react";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <LoginPage />
    </Suspense>
  );
}
