import React, {createContext, useContext, userContext, useState} from 'react';
import { useNavigate as navigate, replace } from 'react-router-dom';

const UserContext = createContext();

const UserProvider = ({children}) => {
  const [user, setUser] = useState({});

  const login = (newUser) => {
    setUser(newUser);
    navigate("/dashboard")
  };

  const logout = () => {
    setUser({});
    navigate("/", {replace: true})
  };

  return (
    <UserContext.Provider value={{user, setUser, login, logout}}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  return useContext(UserContext);
};

export {UserProvider, useUser}