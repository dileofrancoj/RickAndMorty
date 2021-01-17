import React, { createContext, useState, useEffect } from "react";
import {
  setAuthStorage,
  getAuthStorage,
  removeAuthStorage,
} from "./../utils/auth";

export const AuthContext = createContext({
  auth: null,
  authenticate: () => {},
  exit: () => {},
});
const { Provider } = AuthContext;
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  useEffect(() => {
    const authenticatedData = getAuthStorage();
    if (authenticatedData) setAuth(authenticatedData);
  }, []);
  const authenticate = async (user, password) => {
    const response = { name: user, token: "randomAPIToken" };
    setAuth(response);
    setAuthStorage(response);
  };

  const exit = () => {
    setAuth(null);
    removeAuthStorage();
  };
  return <Provider value={{ auth, authenticate, exit }}>{children}</Provider>;
};
