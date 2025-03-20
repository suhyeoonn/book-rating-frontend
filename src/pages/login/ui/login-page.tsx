import Link from "next/link";
import { LoginForm } from "./login-form";
import { SocialLogin } from "./social-login";
import { Logo } from "@/shared/ui/logo";

export function LoginPage() {
  return (
    <div className="flex w-[400px] flex-col justify-center border-0 p-5">
      <Link href="/explore">
        <h1 className="flex items-center justify-center gap-2 text-xl font-bold">
          <Logo />
          <span>IT Book Rating</span>
        </h1>
      </Link>
      {/* <LoginForm /> */}
      <SocialLogin />
      {/* <p className="mt-10 text-center text-sm/6 text-gray-500">
        회원이 아니세요?{" "}
        <Link
          href="/register"
          className="font-semibold text-amber-800 hover:text-amber-700"
        >
          지금 가입하기
        </Link>
      </p> */}
    </div>
  );
}
