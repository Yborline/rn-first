import { UserContext, useUser } from "@context/GlobalProvider";
import { FC, ReactNode } from "react";

interface IProvider {
  children: ReactNode;
}

export const Provider: FC<IProvider> = ({ children }) => {
  const user = useUser();

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
