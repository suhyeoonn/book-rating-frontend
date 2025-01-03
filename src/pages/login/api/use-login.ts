import { useAuth } from "@/shared/contexts/AuthContext";
import { useRouter, useSearchParams } from "next/navigation";
import { login as loginApi, LoginParams } from "@/entities/auth";

export const useLogin = () => {
  const router = useRouter();
  const params = useSearchParams();

  const { setAuth } = useAuth();

  const login = async ({ username, password }: LoginParams) => {
    const data = await loginApi({ username, password });
    if (!data) return;

    setAuth(data.user, data.token);

    router.replace(params?.get("next") || "/");
  };

  return { login };
};
