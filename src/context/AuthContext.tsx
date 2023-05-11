import { IUser } from "@/interfaces";
import React from "react";

export interface IAuthContext {
  logedIn: boolean;
  setUpStorge: ({
    access_token,
    refresh_token,
    userData,
  }: {
    access_token: string;
    refresh_token: string;
    userData: IUser;
  }) => void;
}

export const AuthContext = React.createContext<IAuthContext>(
  {} as IAuthContext,
);

export const useAuth = () => React.useContext(AuthContext);

const useProviderAuth = () => {
  const [logedIn, setLogedIn] = React.useState(false);

  const setUpStorge = ({
    access_token,
    refresh_token,
    userData,
  }: {
    access_token: string;
    refresh_token: string;
    userData: IUser;
  }) => {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);
    setLogedIn(true);
  };

  return {
    logedIn,
    setUpStorge,
  };
};

interface IProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: IProps) => {
  const auth = useProviderAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
