import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { getStateInstance } from "../api/getStateInstance";
import { UserData } from "../types";

type AuthContextType = {
  userData: UserData;
  isLoggedIn: boolean;
  isLoading: boolean;
  login: (idInstance: string, tokenInstance: string) => void;
  logout: () => void;
};

const initialUserData = {
  apiTokenInstance: "",
  idInstance: "",
};

export const AuthContext = createContext<AuthContextType>({
  userData: initialUserData,
  isLoggedIn: false,
  isLoading: false,
  login: () => undefined,
  logout: () => undefined,
});

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [userData, setUserData] = useState<UserData>(initialUserData);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (idInstance: string, apiTokenInstance: string) => {
    setIsLoading(true);
    const data = await getStateInstance(idInstance, apiTokenInstance);

    if (data?.stateInstance === "authorized") {
      setUserData({
        idInstance,
        apiTokenInstance,
      });
      localStorage.setItem(
        "userData",
        JSON.stringify({ idInstance, apiTokenInstance })
      );
    }
    setIsLoading(false);
  };

  const logout = () => {
    const isUserConfirmLogout = confirm("Are you sure you want to quit?");

    if (isUserConfirmLogout) {
      setUserData(initialUserData);
      localStorage.removeItem("userData");
    }
  };

  useEffect(() => {
    const userDataFromLocalStorage = localStorage.getItem("userData");
    if (userDataFromLocalStorage) {
      setUserData(JSON.parse(userDataFromLocalStorage));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userData,
        isLoggedIn: Boolean(userData.apiTokenInstance && userData.idInstance),
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
