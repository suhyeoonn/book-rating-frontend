"use client";

import { login as loginApi, loginCheck } from "@/shared/api/auth";
import axiosClient from "@/shared/axios";
import { IUser } from "@/shared/types";
import { useToggle } from "@frontend-opensource/use-react-hooks";
import { useRouter } from "next/navigation";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface LoginInfo {
  username: string;
  password: string;
}

interface UserContextType {
  user: IUser | undefined;
  isLoading: boolean;
  login: (loginInfo: LoginInfo) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const [isLoading, setIsLoading] = useToggle(true);

  useEffect(() => {
    console.log("checklogin");
    checkLogin();
  }, []);

  const checkLogin = async () => {
    try {
      const user = await loginCheck();
      if (!user) return;

      setUser(user);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (values: LoginInfo) => {
    const data = await loginApi(values);
    if (!data) return;

    setUser(data?.user);
    router.push("/");
  };

  const logout = async () => {
    await axiosClient.post("auth/logout");
    setUser(undefined);
  };

  return (
    <UserContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export default UserProvider;
