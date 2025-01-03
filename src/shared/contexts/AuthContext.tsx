"use client";

import { me } from "@/shared/api/auth";
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

interface AuthContextType {
  user: IUser | null;
  setAuth: (user: IUser, token: string) => void;
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

  // TODO: pages 레이어의 api로 이동
  const logout = async () => {
    await axiosClient.post("auth/logout");
    setUser(null);
    setToken(null);
  };

  const setAuth = (user: IUser, token: string) => {
    setUser(user);
    setToken(token);
  };

  return (
    <AuthContext.Provider value={{ user, setAuth, logout }}>
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
