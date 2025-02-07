import Logo from "@/widgets/logo/ui/logo";
import Link from "next/link";
import { RegisterForm } from "./register-form";

export function RegisterPage() {
  return (
    <div className="flex w-[400px] flex-col justify-center border-0 p-5">
      <Logo className="text-center" />
      <RegisterForm />
      <p className="mt-10 text-center text-sm/6 text-gray-500">
        이미 회원이세요?{" "}
        <Link
          href="/login"
          className="font-semibold text-amber-800 hover:text-amber-700"
        >
          로그인하기
        </Link>
      </p>
    </div>
  );
}
