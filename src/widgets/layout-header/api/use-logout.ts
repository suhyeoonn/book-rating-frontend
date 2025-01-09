import axiosClient from "@/shared/axios";
import { useAuth } from "@/shared/contexts/AuthContext";

export const useLogout = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    await axiosClient.post("auth/logout");
    setAuth(null, null);
  };

  return { logout };
};
