import Logo from "@/shared/ui/logo";
import Link from "next/link";
import { LoginForm } from "./login-form";
import { Button } from "@/shared/ui/button";
import Image from "next/image";
import { SocialLogin } from "./social-login";

export function LoginPage() {
  return (
    <div className="flex w-[400px] flex-col justify-center border-0 p-5">
      <Logo className="text-center" />
      <LoginForm />
      <SocialLogin />
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
