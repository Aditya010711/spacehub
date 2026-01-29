import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  /* ================= LOAD FROM LOCALSTORAGE ================= */
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedToken = localStorage.getItem("token");

    if (savedUser && savedToken) {
      setUser(JSON.parse(savedUser));
      setToken(savedToken);
    }
  }, []);

  /* ================= LOGIN ================= */
  const login = (tokenData, userData) => {
    localStorage.setItem("token", tokenData);
    localStorage.setItem("user", JSON.stringify(userData));

    setToken(tokenData);
    setUser(userData);
  };

  /* ================= LOGOUT ================= */
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        setUser,   // ✅ THIS FIXES YOUR ERROR
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
