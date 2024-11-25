import { getCurrentUser } from "@lib/appwrite";
import { isLoaded, isLoading } from "expo-font";
import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext({
  user: null,
  isLoading: false,
  isLoggedIn: false,
});

export const useUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoading(true);
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
