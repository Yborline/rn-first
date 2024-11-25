import { getCurrentUser } from "@lib/appwrite";
import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export const useUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log("ssss");
    getCurrentUser()
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          setUser(res);
        } else {
          setIsLoggedIn(false);
          setUser(null);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return { user, isLoading, isLoggedIn };
};

export const useUserContext = () => useContext(UserContext);
