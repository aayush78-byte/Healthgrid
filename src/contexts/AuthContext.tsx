import React, { createContext, useContext, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

type UserRole = "citizen" | "hospital" | null;

interface AuthContextType {
  isAuthenticated: boolean;
  role: UserRole;
  email: string | null;
  login: (email: string, password: string, role: "citizen" | "hospital") => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<UserRole>(() => localStorage.getItem("hg_role") as UserRole);
  const [email, setEmail] = useState<string | null>(() => localStorage.getItem("hg_email"));

  const login = useCallback((em: string, pw: string, r: "citizen" | "hospital") => {
    const valid = (r === "citizen" && em === "citizen@test.com" && pw === "demo123") ||
                  (r === "hospital" && em === "hospital@test.com" && pw === "demo123");
    if (valid) {
      setRole(r);
      setEmail(em);
      localStorage.setItem("hg_role", r);
      localStorage.setItem("hg_email", em);
    }
    return valid;
  }, []);

  const logout = useCallback(() => {
    setRole(null);
    setEmail(null);
    localStorage.removeItem("hg_role");
    localStorage.removeItem("hg_email");
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!role, role, email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
