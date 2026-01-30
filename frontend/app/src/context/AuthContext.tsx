"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { loginApi, signupApi, logoutApi } from "../api/auth";

/* -------------------- Types -------------------- */

interface LoginPayload {
  email: string;
  password: string;
}

interface SignupPayload {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
  login: (data: LoginPayload) => Promise<void>;
  signup: (data: SignupPayload) => Promise<void>;
  logout: () => Promise<void>;
}

/* -------------------- Context -------------------- */

const AuthContext = createContext<AuthContextType | null>(null);

/* -------------------- Provider -------------------- */

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  // ✅ Client-side check only
  useEffect(() => {
    const token =
      typeof window !== "undefined"
        ? localStorage.getItem("accessToken")
        : null;

    setIsAuthenticated(!!token);
    setLoading(false);
  }, []);

  const login = async (data: LoginPayload) => {
    try {
      const res = await loginApi(data);
      localStorage.setItem("accessToken", res.accessToken);
      setIsAuthenticated(true);
    } catch (error) {
      throw error;
    }
  };

  const signup = async (data: SignupPayload) => {
    try {
      const res = await signupApi(data);
      localStorage.setItem("accessToken", res.accessToken);
      setIsAuthenticated(true);
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await logoutApi();
    } finally {
      localStorage.removeItem("accessToken");
      setIsAuthenticated(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, loading, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

/* -------------------- Hook -------------------- */

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
};
