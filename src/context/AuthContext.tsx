import React from "react";

export interface IAuthContext {
  user: string;
}

export const AuthContext = React.createContext<IAuthContext>(
  {} as IAuthContext,
);

export const useAuth = () => React.useContext(AuthContext);

const useProviderAuth = () => {
  const user = "dsbhj";

  return {
    user,
  };
};

interface IProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: IProps) => {
  const auth = useProviderAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
