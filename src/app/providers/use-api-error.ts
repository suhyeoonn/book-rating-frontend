import { toast } from "@/shared/lib/use-toast";
import { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export interface CustomAxiosError extends AxiosError {
  response?: AxiosResponse<{ message?: string }>;
}
type ErrorHandler = (router: ReturnType<typeof useRouter>) => void;
type DefaultErrorHandler = (error: AxiosError) => void;

const useApiError = () => {
  const router = useRouter();
  const handleError = useCallback((error: CustomAxiosError) => {
    const httpStatus = error.response?.status; // axios 에러 코드

    if (!httpStatus) {
      toast({ title: "네트워크 오류가 발생했습니다.", variant: "destructive" });
      return;
    }

    if (handlers[httpStatus]) {
      (handlers[httpStatus] as ErrorHandler)(router);
      return;
    } else {
      (handlers.default as DefaultErrorHandler)(error);
    }
  }, []);

  return { handleError };
};

const defaultHandler: DefaultErrorHandler = (error) => {
  const errorMessage =
    (error.response?.data as { message?: string })?.message ||
    "오류가 발생했습니다.";

  toast({
    title: errorMessage,
  });
};

const handler403: ErrorHandler = (router) => {
  router.push("/login");
  toast({ title: "로그인이 필요합니다.", variant: "destructive" });
};

const handler500 = () => {
  toast({ title: "서버에서 알 수 없는 문제가 발생하였습니다." });
};

const handlers: Record<number | "default", ErrorHandler | DefaultErrorHandler> =
  {
    default: defaultHandler,
    403: handler403,
    500: handler500,
  };

export default useApiError;
