"use client";

import { me } from "@/shared/api/auth";
import axiosClient from "@/shared/axios";
import { IUser } from "@/shared/types";
import { useRouter } from "next/navigation";
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
  setAuth: (user: IUser | null, token: string | null) => void;
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

  // TODO:
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

  const setAuth = (user: IUser | null, token: string | null) => {
    setUser(user);
    setToken(token);
  };

  return (
    <AuthContext.Provider value={{ user, setAuth }}>
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
