import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [isUserLoggedIn, setItUserLoggedIn] = useState(false);

  return (
    <UserContext.Provider
      value={{
        isUserLoggedIn,
        setItUserLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
