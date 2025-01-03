"use client";

import { login as loginApi, me } from "@/shared/api/auth";
import axiosClient from "@/shared/axios";
import { IUser } from "@/shared/types";
import { useRouter, useSearchParams } from "next/navigation";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

interface LoginInfo {
  username: string;
  password: string;
}

interface AuthContextType {
  user: IUser | null;
  login: (loginInfo: LoginInfo) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    fetchMe();
  }, []);

  useLayoutEffect(() => {
    const authInterceptor = axiosClient.interceptors.request.use((config) => {
      config.headers.Authorization = token && `Bearer ${token}`;
      return config;
    });

    return () => {
      axiosClient.interceptors.request.eject(authInterceptor);
    };
  });

  const fetchMe = async () => {
    try {
      const data = await me();
      if (!data) return;

      setUser(data.user);
      setToken(data.token);
    } catch {
      setToken(null);
    }
  };

  const params = useSearchParams();

  const login = async (values: LoginInfo) => {
    const data = await loginApi(values);
    if (!data) return;

    setUser(data.user);
    setToken(data.token);

    router.replace(params?.get("next") || "/");
  };

  const logout = async () => {
    await axiosClient.post("auth/logout");
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a UserProvider");
  }
  return context;
};

export default AuthProvider;
