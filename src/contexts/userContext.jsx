import { createContext, useEffect, useState } from "react";
import { getUsers } from "../data/API";

export const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  return <UserContext.Provider value={users}>{children}</UserContext.Provider>;
};
