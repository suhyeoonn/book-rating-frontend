import { LoginForm } from "@/pages/login/ui";
import Logo from "@/shared/ui/logo";
import Link from "next/link";

export const metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <div className="w-[400px] justify-center flex flex-col p-5 border-0">
      <Logo className="text-center" />
      <LoginForm />
      <p className="mt-10 text-center text-sm/6 text-gray-500">
        회원이 아니세요?{" "}
        <Link
          href="/register"
          className="font-semibold text-amber-800 hover:text-amber-700"
        >
          지금 가입하기
        </Link>
      </p>
    </div>
  );
}
