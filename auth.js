import React, { useContext, useState } from "react";

export const Auth0Context = React.createContext();
export const useAuth0 = () => useContext(Auth0Context);

export const Auth0Provider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState();

  return <>{children}</>;
};
