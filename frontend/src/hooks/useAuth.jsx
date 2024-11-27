import React, {createContext, useContext, userContext, useState} from 'react';
import { useNavigate as navigate, replace } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
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
    <AuthContext.Provider value={{user, setUser, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export {AuthProvider, useAuth}