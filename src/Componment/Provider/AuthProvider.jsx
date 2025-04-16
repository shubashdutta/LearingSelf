import React, { createContext, useState } from "react";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLogging") === "loggedIn"
  );

  const login = () => {
    localStorage.setItem("isLogging", "loggedIn");
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("isLogging");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
